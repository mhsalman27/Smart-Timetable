const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    }],
    availability: [{ day: String, period: Number }] // Example: {day: 'Monday', period: 1}
});

module.exports = mongoose.model("Teacher", teacherSchema);