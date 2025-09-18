const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// Get all classrooms
router.get('/', classroomController.getAllClassrooms);

// Get single classroom by ID
router.get('/:id', classroomController.getClassroomById);

// Create new classroom
router.post('/', classroomController.createClassroom);

// Update classroom
router.put('/:id', classroomController.updateClassroom);

// Delete classroom
router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;
