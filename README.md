# EduBridge

<div align="center">

<img src="client/src/assets/logo.png" width="250" alt="EduBridge Logo">

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.x-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14.x-4169E1?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express)](https://expressjs.com/)

**Bridging the educational gap for underprivileged students in grades 6-10**

</div>

## 📚 Overview

EduBridge is a comprehensive educational platform designed specifically for underprivileged students in grades 6 to 10. Our mission is to make quality education accessible to all by providing a unified platform that includes study materials, interactive learning tools, peer collaboration features, and academic support systems.

## ✨ Key Features

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="client/src/assets/book.png" width="50" alt="Study Materials">
        <br>
        <b>Study Materials</b>
      </td>
      <td align="center">
        <img src="client/src/assets/video-call.png" width="50" alt="Video Calling">
        <br>
        <b>Peer Video Calling</b>
      </td>
      <td align="center">
        <img src="client/src/assets/graduation-outline.png" width="50" alt="Quizzes">
        <br>
        <b>Interactive Quizzes</b>
      </td>
      <td align="center">
        <img src="client/src/assets/scholarship.png" width="50" alt="Scholarships">
        <br>
        <b>Scholarship Info</b>
      </td>
    </tr>
  </table>
</div>

- **📖 Study Materials**: Centralized access to NCERT books for classes 6-10, eliminating the need to navigate through the complex NCERT website.

- **🎥 Educational Videos**: Integrated YouTube API for focused educational content search without distracting recommendations.

- **📝 Interactive Quizzes**: Self-assessment tools with personalized dashboards to track progress and identify areas for improvement.

- **🤖 AI-Powered Doubt Engine**: Instant doubt resolution through an intelligent bot that provides accurate answers to academic questions.

- **🏆 Scholarship Information**: Comprehensive database of government scholarships to help students access financial aid for education.

- **📚 Book Donation Platform**: Connects book donors with students in need, promoting resource sharing and sustainability.

- **👥 Peer Learning**: Video calling feature that enables students to collaborate, study together, and resolve doubts through peer discussions.

## 🛠️ Technology Stack

<div align="center">
  <table>
    <tr>
      <td align="center"><b>Frontend</b></td>
      <td align="center"><b>Backend</b></td>
      <td align="center"><b>Database</b></td>
    </tr>
    <tr>
      <td align="center">
        React.js
      </td>
      <td align="center">
        Node.js (Express)
      </td>
      <td align="center">
        PostgreSQL
      </td>
    </tr>
    <tr>
      <td align="center">
        CSS3
      </td>
      <td align="center">
        JavaScript
      </td>
      <td align="center">
        RESTful API
      </td>
    </tr>
  </table>
</div>

## 🚀 Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- pgAdmin4

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/EduBridge.git
cd EduBridge
```

### Step 2: Set Up Frontend

```bash
cd client
npm install
npm start
```
Your frontend will be running at http://localhost:3000/

### Step 3: Set Up Backend

```bash
cd ../server
npm install
nodemon index.js  # or node index.js if nodemon is not installed
```
Your backend will be running at http://localhost:5000/

### Step 4: Import the Database

1. Open pgAdmin4
2. Right-click on Databases and create a new database named "Mercer"
3. Right-click on the "Mercer" database and select "Restore"
4. Select the database file `db.sql`
5. Choose format as "custom" or "tar"
6. Click "Restore"

## 📱 App Screenshots

<div align="center">
  <table>
    <tr>
      <td><img src="client/src/assets/homeimg.png" width="400" alt="Home Page"></td>
      <td><img src="client/src/assets/student.png" width="400" alt="Student Dashboard"></td>
    </tr>
    <tr>
      <td align="center"><b>Home Page</b></td>
      <td align="center"><b>Student Dashboard</b></td>
    </tr>
  </table>
</div>

## 🤝 Contributing

Contributions are always welcome! Follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---
