'use strict';

const express = require('express');

const router = express.Router();
const { student, teacher } = require('../models');


router.get('/student', async (req, res, next) => {
  let students = await student.read();

  res.status(200).send(students);
});

router.get('/studentWithTeacher', async (req, res, next) => {
  console.log('studentWithTeacher');
  let students = await student.findAll({include: {model: teacher}});
  console.log('students', students);
  res.status(200).send(students);
});


router.get('/studentWithSingleTeacher/:id', async (req, res, next) => {
  let students = await student.findAll({
    include: {model: teacher},
    where: {id: req.params.id},
  });

  res.status(200).send(students);
});



router.get('/student/:id', async (req, res, next) => {
  // can also use findByPK()
  let singleStudent = await student.read(req.params.id);

  res.status(200).send(singleStudent);
});


router.post('/student', async (req, res, next) => {
  let newStudent = await student.create(req.body);

  res.status(200).send(newStudent);
});

router.put('/student/:id', async (req, res, next) => {
  let updatedStudent = await student.update(req.params.id, req.body );
  res.status(200).send('Student updated', updatedStudent);
});

router.delete('/student/:id', async (req, res, next) => {
  let deletedStudent = await student.delete(req.params.id);
  console.log('Student deleted' , deletedStudent);
  res.status(200).send('Student deleted' , deletedStudent);
});


module.exports = router;
