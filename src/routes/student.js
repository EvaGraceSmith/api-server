'use strict';

const express = require('express');

const router = express.Router();
const { student, teacher } = require('../models');

//TODO change studentModel to student

router.get('/student', async (req, res, next) => {
  let students = await student.read();

  res.status(200).send(students);
});

router.get('/studentWithTeacher', async (req, res, next) => {
  let students = await student.findAll({include: {model:teacher}});

  res.status(200).send(students);
});

router.get('/studentWithSingleTeacher/:id', async (req, res, next) => {
  let students = await student.findAll({
    include: {model:teacher},
    where: {id: req.params.id},
  });

  res.status(200).send(students);
});



router.get('/student/:id', async (req, res, next) => {
  // where clause useful for update.  can also use findByPK()
  let singleStudent = await student.read(req.params.id);

  res.status(200).send(singleStudent);
});


router.post('/student', async (req, res, next) => {
  let newStudent = await student.create(req.body);

  res.status(200).send(newStudent);
});

router.put('/student/:id', async (req, res, next) => {
  let updatedStudent = await student.update(req.body, {where: {id: req.params.id}});
  let singleStudent = await student.findAll({where: {id: req.params.id}});
  res.status(200).send(singleStudent);
  res.status(200).send(updatedStudent);
});

router.delete('/student/:id', async (req, res, next) => {
  let deletedStudent = await student.delete({where: {id: req.params.id}});
  console.log('Student deleted' , deletedStudent);
  res.status(200).send('Student deleted');
});


module.exports = router;
