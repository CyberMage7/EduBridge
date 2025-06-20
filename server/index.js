import { Server } from 'socket.io';
import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const io = new Server(8000, {
  cors: true,
});

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Mercer",
    password: "vishwas",
    port: 5432,
});

db.connect();

const app = express();
const PORT = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));
app.use(bodyParser.json());
app.use(cors());

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();
const roomParticipants = new Map(); // Track participants in each room

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    
    // Track room participants
    if (!roomParticipants.has(room)) {
      roomParticipants.set(room, new Set());
    }
    roomParticipants.get(room).add(email);
    
    // Emit to existing users in room about new user
    io.to(room).emit("user:joined", { email, id: socket.id });
    
    socket.join(room);
    
    // Send current participants list to the joining user
    const participants = Array.from(roomParticipants.get(room));
    io.to(socket.id).emit("room:join", { ...data, participants });
    
    // Update participants list for all users in room
    io.to(room).emit("participants:updated", { participants });
  });

  // Add a new event for syncing participants
  socket.on("participant:sync", ({ email, room }) => {
    if (!roomParticipants.has(room)) {
      roomParticipants.set(room, new Set());
    }
    
    // Add this user to the participants if not already there
    if (email && !roomParticipants.get(room).has(email)) {
      roomParticipants.get(room).add(email);
      
      // Update all users with the new participants list
      const participants = Array.from(roomParticipants.get(room));
      io.to(room).emit("participants:updated", { participants });
    }
  });

  socket.on("user:call", ({ to, offer, email }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer, email });
  });

  socket.on("call:accepted", ({ to, ans, email }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans, email });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });

  // New socket events for enhanced video calling
  socket.on("video:toggle", ({ to, enabled }) => {
    console.log("video:toggle", { to, enabled });
    io.to(to).emit("video:toggle", { enabled });
  });

  socket.on("audio:toggle", ({ to, enabled }) => {
    console.log("audio:toggle", { to, enabled });
    io.to(to).emit("audio:toggle", { enabled });
  });

  // Update the call:ended handler to properly end the call for both users
  socket.on("call:ended", ({ to, room }) => {
    console.log("call:ended", { to, room });
    
    // Notify the specific recipient
    if (to) {
      io.to(to).emit("call:ended");
    }
    
    // If a room is provided, notify all users in the room except the sender
    if (room) {
      socket.to(room).emit("call:ended");
    }
  });

  socket.on("disconnect", () => {
    const email = socketidToEmailMap.get(socket.id);
    if (email) {
      emailToSocketIdMap.delete(email);
      socketidToEmailMap.delete(socket.id);
      
      // Remove from room participants
      for (const [room, participants] of roomParticipants.entries()) {
        if (participants.has(email)) {
          participants.delete(email);
          if (participants.size === 0) {
            roomParticipants.delete(room);
          } else {
            // Update participants list for remaining users
            const remainingParticipants = Array.from(participants);
            io.to(room).emit("participants:updated", { participants: remainingParticipants });
          }
          break;
        }
      }
    }
    console.log(`Socket Disconnected`, socket.id);
  });
});


app.post("/signup", async (req, res) => {
  const { fname, lname, password, email } = req.body;

  try {
    console.log("Received form data:", { fname, lname, password, email });    const check = await db.query("SELECT * FROM signup WHERE email = $1", [email]);
    if (check.rows.length > 0) {
      return res.send({ success: true });
      
    } else {
      const result = await db.query(
        "INSERT INTO signup(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [fname, lname, email, password]
      );
      console.log("Signup Successful:", result.rows);
      return res.send({ 
        success: true,
        user: {
          first_name: fname,
          last_name: lname,
          email: email
        }
      });
    }
  } catch (err) {
    console.error("Error during signup:", err);
    return res.send({ success: false });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {    const result = await db.query(
      "SELECT * FROM signup WHERE email = $1",
      [email]
    );
    if (result.rows.length > 0) {
      const getPassword = result.rows[0].password;
      if (getPassword === password) {
        console.log("User Exist Login successful");
        // Send user data along with success response
        const userData = {
          first_name: result.rows[0].first_name,
          last_name: result.rows[0].last_name,
          email: result.rows[0].email
        };
        return res.send({ success: true, user: userData });
      } else {
        console.log("Incorrect Password");
        return res.send({ success: false, error: "Incorrect Password" });
      }
    } else {
      console.log("User not found");
      return res.send({ success: false, error: "User not found" });
    }
  } catch (err) {
    console.log("Error during login:", err);
    return res.status(500).send("An error occurred during login");
  }
});

app.post("/donate", async (req, res) => {
  const { Fname, email, phone, title, bookAuthor, quantity, category, description } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO donate (full_name, email, phone, title, author, quantity, genre, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [Fname, email, phone, title, bookAuthor, quantity, category, description]
    );
    console.log(result);
    return res.status(200).json({success: true, message: "Data saved successfully"});
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({success: false, message: "Error occurred while saving data"});
  }
});

app.listen(PORT, () => {
  console.log('Server is running on PORT');
});