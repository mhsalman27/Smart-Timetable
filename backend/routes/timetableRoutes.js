// backend/routes/timetableRoutes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Timetable routes working!');
});

module.exports = router;
