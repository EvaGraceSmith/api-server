'use strict';

const express = require('express');

const router = express.Router();
const { teacherModel } = require('../models');


router.get('/teacher', async (req, res, next) => {
  let teachers = await teacherModel.findAll();

  res.status(200).send(teachers);
});

router.get('/teacher/:id', async (req, res, next) => {

  let singleTeacher = await teacherModel.findByPk(req.params.id);

  res.status(200).send(singleTeacher);
});

router.post('/teacher', async (req, res, next) => {
  let newTeacher = await teacherModel.create(req.body);

  res.status(200).send(newTeacher);
});

router.put('/teacher/:id', async (req, res, next) => {
  await teacherModel.update(req.body, {where: {id: req.params.id}});

  let updatedTeacher = await teacherModel.findByPk(req.params.id);
  res.status(200).send(updatedTeacher);
});

router.delete('/teacher/:id', async (req, res, next) => {
  try{
    let deletedTeacher = await teacherModel.findByPk(req.params.id);
    await teacherModel.destroy({where: {id: req.params.id}});
    res.status(200).send(deletedTeacher);
  }catch(e){
    next(e);
  }
//   console.log('Teacher deleted' , deletedTeacher);
});

module.exports = router;
