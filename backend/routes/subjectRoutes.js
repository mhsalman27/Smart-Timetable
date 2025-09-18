const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// Get all subjects
router.get('/', subjectController.getAllSubjects);

// Get single subject by ID
router.get('/:id', subjectController.getSubjectById);

// Create new subject
router.post('/', subjectController.createSubject);

// Update subject
router.put('/:id', subjectController.updateSubject);

// Delete subject
router.delete('/:id', subjectController.deleteSubject);

module.exports = router;

