// backend/config.js
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8080,
  mongoURI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/smart-timetable"
};
