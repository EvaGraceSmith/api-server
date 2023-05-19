'use strict';

const express = require('express');

const router = express.Router();
const { studentModel } = require('../models');

router.get('/student', async (req, res, next) => {
  let students = await studentModel.findAll();

  res.status(200).send(students);
});
router.get('/student/:id', async (req, res, next) => {
  // where clause useful for update.  can also use findByPK()
  let singleStudent = await studentModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleStudent);
});


router.post('/student', async (req, res, next) => {
  let newStudent = await studentModel.create(req.body);

  res.status(200).send(newStudent);
});

router.put('/student/:id', async (req, res, next) => {
  let updatedStudent = await studentModel.update(req.body, {where: {id: req.params.id}});
  let singleStudent = await studentModel.findAll({where: {id: req.params.id}});
  res.status(200).send(singleStudent);
  res.status(200).send(updatedStudent);
});

router.delete('/student/:id', async (req, res, next) => {
  let deletedStudent = await studentModel.destroy({where: {id: req.params.id}});
  console.log('Student deleted' , deletedStudent);
  res.status(200).send('Student deleted');
});


module.exports = router;
