const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const teacherRoutes = require("./routes/teacherRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const timetableRoutes = require("./routes/timetableRoutes");

const { port, mongoURI } = require("./config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/teachers", teacherRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/timetable", timetableRoutes);

// Connect DB
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Health check
app.get("/", (req, res) => {
  res.send("Smart Timetable API is running...");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
