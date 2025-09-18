const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    periodsPerWeek: {
        type: Number,
        required: true,
    },
    assignedTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    }
});

module.exports = mongoose.model("Subject", subjectSchema);