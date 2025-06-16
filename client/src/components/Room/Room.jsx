import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";
import "./Room.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const RoomPage = () => {
  const socket = useSocket();
  const navigate = useNavigate();
  const { roomId } = useParams();
  
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [myEmail, setMyEmail] = useState("");
  const [remoteEmail, setRemoteEmail] = useState("");
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isRemoteVideoEnabled, setIsRemoteVideoEnabled] = useState(true);
  const [isRemoteAudioEnabled, setIsRemoteAudioEnabled] = useState(true);
  const [callStatus, setCallStatus] = useState("waiting");
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [permissionError, setPermissionError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState(5);
  const [participants, setParticipants] = useState([]);
  const [streamsSent, setStreamsSent] = useState(false); // Add state to track if streams have been sent

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
    setRemoteEmail(email);
    setCallStatus("ready");
    
    // Update participants list
    setParticipants(prev => {
      const newParticipants = [...prev];
      if (!newParticipants.includes(email)) {
        newParticipants.push(email);
      }
      return newParticipants;
    });
    
    showToast(`${email} joined the room`);
  }, []);

  const showToast = useCallback((message) => {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    });

    // Create and show new toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      if (document.body.contains(toast)) {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        }, 300);
      }
    }, 3000);
  }, []);

  const requestPermissions = useCallback(async () => {
    try {
      setIsLoading(true);
      setPermissionError("");
      
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30 }
        },
      });
      
      setMyStream(stream);
      setShowPermissionModal(false);
      setIsLoading(false);
      return stream;
    } catch (error) {
      console.error("Permission error:", error);
      setIsLoading(false);
      
      let errorMessage = "";
      if (error.name === "NotAllowedError") {
        errorMessage = "Camera and microphone access denied. Please allow permissions and try again.";
      } else if (error.name === "NotFoundError") {
        errorMessage = "No camera or microphone found. Please check your devices.";
      } else if (error.name === "NotReadableError") {
        errorMessage = "Camera or microphone is already in use by another application.";
      } else {
        errorMessage = "Unable to access camera or microphone. Please check your browser settings.";
      }
      
      setPermissionError(errorMessage);
      setShowPermissionModal(true);
      return null;
    }
  }, []);

  const handleCallUser = useCallback(async () => {
    try {
      setCallStatus("calling");
      setIsLoading(true);
      
      let stream = myStream;
      if (!stream) {
        stream = await requestPermissions();
        if (!stream) {
          setCallStatus("ready");
          setIsLoading(false);
          return;
        }
      }
      
      const offer = await peer.getOffer();
      socket.emit("user:call", { to: remoteSocketId, offer, email: myEmail }); // Include caller's email
      setIsCallActive(true);
      setIsLoading(false);
      showToast("📞 Calling...");
    } catch (error) {
      console.error("Error starting call:", error);
      setCallStatus("ready");
      setIsLoading(false);
      showToast("❌ Failed to start call");
    }
  }, [remoteSocketId, socket, myStream, requestPermissions, showToast, myEmail]); // Add myEmail to dependencies

  const handleIncommingCall = useCallback(
    async ({ from, offer, email }) => { // Add email to parameters
      try {
        setRemoteSocketId(from);
        setRemoteEmail(email); // Set remote email from incoming call data
        setCallStatus("incoming");
        
        let stream = myStream;
        if (!stream) {
          stream = await requestPermissions();
          if (!stream) {
            return;
          }
        }
        
        console.log(`Incoming Call from ${email}`, from, offer);
        const ans = await peer.getAnswer(offer);
        socket.emit("call:accepted", { to: from, ans, email: myEmail }); // Include answerer's email
        setIsCallActive(true);
        setCallStatus("connected");
        showToast("📞 Call connected!");
      } catch (error) {
        console.error("Error handling incoming call:", error);
        showToast("❌ Failed to connect call");
      }
    },
    [socket, myStream, requestPermissions, showToast, myEmail] // Add myEmail to dependencies
  );

  const sendStreams = useCallback(() => {
    if (myStream && !streamsSent) {
      try {
        for (const track of myStream.getTracks()) {
          peer.peer.addTrack(track, myStream);
        }
        setStreamsSent(true); // Set flag to indicate streams have been sent
        showToast("📡 Stream sent successfully");
      } catch (error) {
        console.error("Error sending stream:", error);
        showToast("❌ Failed to send stream");
      }
    }
  }, [myStream, showToast, streamsSent]);
  
  const handleCallAccepted = useCallback(
    ({ from, ans, email }) => { // Add email to parameters
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      setRemoteEmail(email); // Ensure remote email is set when call is accepted
      sendStreams();
      setCallStatus("connected");
      showToast("✅ Call accepted!");
    },
    [sendStreams, showToast]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  // Video control functions
  const toggleVideo = useCallback(() => {
    if (myStream) {
      const videoTrack = myStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoEnabled(videoTrack.enabled);
        socket.emit("video:toggle", { to: remoteSocketId, enabled: videoTrack.enabled });
        showToast(videoTrack.enabled ? "📹 Video enabled" : "📹 Video disabled");
      }
    }
  }, [myStream, socket, remoteSocketId, showToast]);

  const toggleAudio = useCallback(() => {
    if (myStream) {
      const audioTrack = myStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioEnabled(audioTrack.enabled);
        socket.emit("audio:toggle", { to: remoteSocketId, enabled: audioTrack.enabled });
        showToast(audioTrack.enabled ? "🎤 Audio enabled" : "🔇 Audio muted");
      }
    }
  }, [myStream, socket, remoteSocketId, showToast]);

  const endCall = useCallback(() => {
    if (myStream) {
      myStream.getTracks().forEach(track => track.stop());
    }
    
    peer.resetConnection();
    
    setMyStream(null);
    setRemoteStream(null);
    setIsCallActive(false);
    setCallStatus("ended");
    setIsVideoEnabled(true);
    setIsAudioEnabled(true);
    setStreamsSent(false);
    
    // Send the end call event with the roomId so the server can handle it for both users
    socket.emit("call:ended", { to: remoteSocketId, room: roomId });
    showToast("📞 Call ended");
    
    // Navigate to lobby
    setTimeout(() => {
      navigate("/lobby");
    }, 1500);
  }, [myStream, socket, remoteSocketId, roomId, navigate, showToast]);

  const handleCallEnded = useCallback(() => {
    if (myStream) {
      myStream.getTracks().forEach(track => track.stop());
    }
    
    peer.resetConnection();
    
    setMyStream(null);
    setRemoteStream(null);
    setIsCallActive(false);
    setCallStatus("ended");
    setStreamsSent(false);
    showToast("📞 Call ended by remote user");
    
    // Ensure navigation happens
    setTimeout(() => {
      navigate("/lobby");
    }, 1500);
  }, [myStream, navigate, showToast]);

  const handleRemoteVideoToggle = useCallback(({ enabled }) => {
    setIsRemoteVideoEnabled(enabled);
  }, []);

  const handleRemoteAudioToggle = useCallback(({ enabled }) => {
    setIsRemoteAudioEnabled(enabled);
  }, []);

  const closePermissionModal = useCallback(() => {
    setShowPermissionModal(false);
    setPermissionError("");
  }, []);

  // Update the room:join event handling for better participant syncing
  const handleRoomJoinConfirmation = useCallback(({ participants: roomParticipants }) => {
    console.log("Room participants:", roomParticipants);
    
    // Make sure we have a complete list of participants
    const uniqueParticipants = [...new Set(roomParticipants || [])];
    
    // Ensure our own email is in the list
    if (myEmail && !uniqueParticipants.includes(myEmail)) {
      uniqueParticipants.push(myEmail);
    }
    
    setParticipants(uniqueParticipants);
    
    // Emit a participant update to ensure all users have the latest list
    if (myEmail && roomId) {
      socket.emit("participant:sync", { email: myEmail, room: roomId });
    }
  }, [myEmail, roomId, socket]);

  // Improved participant update handling
  const handleParticipantsUpdated = useCallback(({ participants: updatedParticipants }) => {
    console.log("Participants updated:", updatedParticipants);
    
    // Make sure we have a complete list with no duplicates
    const uniqueParticipants = [...new Set(updatedParticipants || [])];
    
    // Always ensure our own email is in the list
    if (myEmail && !uniqueParticipants.includes(myEmail)) {
      uniqueParticipants.push(myEmail);
    }
    
    setParticipants(uniqueParticipants);
  }, [myEmail]);

  // Get user email from localStorage or socket context
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail") || "user@example.com";
    setMyEmail(userEmail);
    
    // Once we have our email, emit a sync to ensure participants are up to date
    if (userEmail && roomId) {
      socket.emit("participant:sync", { email: userEmail, room: roomId });
    }
    
    // Add current user to participants if not already there
    setParticipants(prev => {
      if (!prev.includes(userEmail)) {
        return [userEmail, ...prev];
      }
      return prev;
    });
  }, [roomId, socket]);

  // Make sure to join the room with our email
  useEffect(() => {
    if (myEmail && roomId) {
      // Re-join the room to ensure our email is properly registered
      socket.emit("room:join", { email: myEmail, room: roomId });
    }
  }, [myEmail, roomId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("room:join", handleRoomJoinConfirmation);
    socket.on("participants:updated", handleParticipantsUpdated);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    socket.on("call:ended", handleCallEnded);
    socket.on("video:toggle", handleRemoteVideoToggle);
    socket.on("audio:toggle", handleRemoteAudioToggle);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("room:join", handleRoomJoinConfirmation);
      socket.off("participants:updated", handleParticipantsUpdated);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
      socket.off("call:ended", handleCallEnded);
      socket.off("video:toggle", handleRemoteVideoToggle);
      socket.off("audio:toggle", handleRemoteAudioToggle);
    };
  }, [
    socket,
    handleUserJoined,
    handleRoomJoinConfirmation,
    handleParticipantsUpdated,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    handleCallEnded,
    handleRemoteVideoToggle,
    handleRemoteAudioToggle,
  ]);

  const getStatusMessage = () => {
    switch (callStatus) {
      case "waiting":
        return "Waiting for someone to join...";
      case "ready":
        return `Ready to start call`;
      case "calling":
        return "Calling...";
      case "incoming":
        return "Incoming call...";
      case "connected":
        return "Call in progress";
      case "ended":
        return "Call ended";
      default:
        return "";
    }
  };

  const getStatusClass = () => {
    return `status-${callStatus}`;
  };

  return (
    <>
      <div className="room-container">
        <div className="room-header">
          <div className="room-info">
            <h1 className="room-title">Video Conference</h1>
            <p className="room-id">Room #{roomId}</p>
          </div>
          
          <div className="participants-section">
            <div className="status-message">
              <span className={`status-indicator ${getStatusClass()}`}></span>
              {getStatusMessage()}
            </div>
            
            {participants.length > 0 && (
              <div className="participants-list">
                {participants.map((email, index) => (
                  <div 
                    key={index} 
                    className={`participant-item ${email === myEmail ? 'you' : ''}`}
                  >
                    {email === myEmail ? `You (${email})` : email}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {permissionError && (
          <div className="error-message">
            {permissionError}
          </div>
        )}

        <div className="call-controls">
          {!isCallActive && remoteSocketId && callStatus === "ready" && (
            <button 
              onClick={handleCallUser} 
              className="call-btn start-call"
              disabled={isLoading}
            >
              {isLoading ? <span className="loading-spinner"></span> : "📞"}
              Start Call
            </button>
          )}
          
          {isCallActive && (
            <>
              <button 
                onClick={sendStreams} 
                className="call-btn send-stream"
                disabled={streamsSent || !myStream} // Disable button if streams sent or no stream
              >
                {streamsSent ? '✅ Stream Sent' : '📡 Send Stream'}
              </button>
              <button 
                onClick={toggleVideo} 
                className={`call-btn ${isVideoEnabled ? 'room-video-on' : 'room-video-off'}`}
              >
                {isVideoEnabled ? '📹' : '📹'} {isVideoEnabled ? 'Stop Video' : 'Start Video'}
              </button>
              <button 
                onClick={toggleAudio} 
                className={`call-btn ${isAudioEnabled ? 'audio-on' : 'audio-off'}`}
              >
                {isAudioEnabled ? '🎤' : '🎤'} {isAudioEnabled ? 'Mute' : 'Unmute'}
              </button>
              <button onClick={endCall} className="call-btn end-call">
                📞 End Call
              </button>
            </>
          )}
        </div>

        <div className="room-video-grid">
          {myStream && (
            <div className="room-video-wrapper local-video">
              <div className="connection-quality">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`quality-bar ${i < connectionQuality ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div className="room-video-container">
                {isVideoEnabled ? (
                  <ReactPlayer
                    playing
                    muted
                    url={myStream}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '20px 20px 0 0' }}
                  />
                ) : (
                  <div className="room-video-placeholder">
                    <div className="avatar">👤</div>
                    <p>Video Off</p>
                  </div>
                )}
              </div>
              <div className="room-video-info">
                <span className="user-name">You ({myEmail})</span>
                <div className="room-video-status">
                  {!isVideoEnabled && <span className="status-icon">Video Off</span>}
                  {!isAudioEnabled && <span className="status-icon">Muted</span>}
                </div>
              </div>
            </div>
          )}

          {remoteStream && (
            <div className="room-video-wrapper remote-video">
              <div className="connection-quality">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`quality-bar ${i < connectionQuality ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div className="room-video-container">
                {isRemoteVideoEnabled ? (
                  <ReactPlayer
                    playing
                    url={remoteStream}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '20px 20px 0 0' }}
                  />
                ) : (
                  <div className="room-video-placeholder">
                    <div className="avatar">👤</div>
                    <p>Video Off</p>
                  </div>
                )}
              </div>
              <div className="room-video-info">
                <span className="user-name">{remoteEmail}</span>
                <div className="room-video-status">
                  {!isRemoteVideoEnabled && <span className="status-icon">Video Off</span>}
                  {!isRemoteAudioEnabled && <span className="status-icon">Muted</span>}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="room-footer">
          <Link to="/lobby" className="back-btn">
            ← Back to Lobby
          </Link>
        </div>
      </div>

      {showPermissionModal && (
        <div className="permission-modal">
          <div className="permission-content">
            <h3>Camera & Microphone Access</h3>
            <p>
              To start a video call, we need access to your camera and microphone. 
              Please click "Allow" when prompted by your browser.
            </p>
            {permissionError && (
              <div className="error-message" style={{ marginBottom: '15px' }}>
                {permissionError}
              </div>
            )}
            <div className="permission-buttons">
              <button className="permission-btn" onClick={closePermissionModal}>
                Cancel
              </button>
              <button 
                className="permission-btn primary" 
                onClick={requestPermissions}
                disabled={isLoading}
              >
                {isLoading ? <span className="loading-spinner"></span> : 'Try Again'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomPage;
