// const Subject = require('../models/Subjects.js');
const Subject = require('../models/Subjects'); // correct

exports.getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('assignedTeacher');
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id).populate('assignedTeacher');
        if (!subject) return res.status(404).json({ error: "Subject not found" });
        res.json(subject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json(subject);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subject) return res.status(404).json({ error: "Subject not found" });
        res.json(subject);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndDelete(req.params.id);
        if (!subject) return res.status(404).json({ error: "Subject not found" });
        res.json({ message: "Subject deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
