'use strict';

const express = require('express');

const router = express.Router();
const { student, teacher } = require('../models');



router.get('/student', async (req, res, next) => {
  try {
    let students = await student.read();
    res.status(200).send(students);
  }
  catch(e) {
    res.status(500).send('Error Getting Student');
  }

});

router.get('/studentWithTeacher', async (req, res, next) => {
  console.log('studentWithTeacher');
  try {
    let students = await student.findAll({include: {model: teacher}});
    console.log('students', students);
    res.status(200).send(students);
  }
  catch(e) {
    res.status(500).send('Error Getting Student');
  }

});


router.get('/studentWithSingleTeacher/:id', async (req, res, next) => {
  try {
    let students = await student.findAll({
      include: {model: teacher},
      where: {id: req.params.id},
    });
    res.status(200).send(students);
  }
  catch(e) {
    res.status(500).send('Error Getting Student');
  }
});



router.get('/student/:id', async (req, res, next) => {
  // can also use findByPK()
  try {
    let singleStudent = await student.read(req.params.id);
    res.status(200).send(singleStudent);
  }
  catch(e) {
    res.status(500).send('Error Getting Student');
  }

});


router.post('/student', async (req, res, next) => {
  try {
    let newStudent = await student.create(req.body);
    res.status(200).send(newStudent);
  }
  catch(e) {
    res.status(500).send('Error Creating Student');
  }
});

router.put('/student/:id', async (req, res, next) => {
  try {
    let updatedStudent = await student.update(req.params.id, req.body );
    res.status(200).send(updatedStudent);
  }
  catch(e) {
    res.status(500).send('Error Updating Student');
  }

});

router.delete('/student/:id', async (req, res, next) => {
  try {
    let deletedStudent = await student.delete(req.params.id);
    console.log('Student deleted' , deletedStudent);
    res.status(200).send('Student deleted');
  }
  catch(e) {
    res.status(500).send('Error Deleting Student');
  }

});


module.exports = router;
