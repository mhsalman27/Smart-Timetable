// const Classroom = require('../models/Classroom.js');
const Classroom = require('../models/Classrooms'); // correct


exports.getAllClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.json(classrooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getClassroomById = async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        if (!classroom) return res.status(404).json({ error: "Classroom not found" });
        res.json(classroom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createClassroom = async (req, res) => {
    try {
        const classroom = new Classroom(req.body);
        await classroom.save();
        res.status(201).json(classroom);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!classroom) return res.status(404).json({ error: "Classroom not found" });
        res.json(classroom);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndDelete(req.params.id);
        if (!classroom) return res.status(404).json({ error: "Classroom not found" });
        res.json({ message: "Classroom deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
