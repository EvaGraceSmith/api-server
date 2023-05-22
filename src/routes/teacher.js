'use strict';

const express = require('express');

const router = express.Router();
const { teacher } = require('../models');


router.get('/teacher', async (req, res, next) => {
  let teachers = await teacher.read();

  res.status(200).send(teachers);
});

router.get('/teacher/:id', async (req, res, next) => {

  let singleTeacher = await teacher.read(req.params.id);

  res.status(200).send(singleTeacher);
});

router.post('/teacher', async (req, res, next) => {
  console.log('req.body', req.body);
  let newTeacher = await teacher.create(req.body);
  console.log('newTeacher', newTeacher);
  res.status(200).send(newTeacher);
});

router.put('/teacher/:id', async (req, res, next) => {
 let updatedTeacher = await teacher.update(req.params.id);
  res.status(200).send(updatedTeacher);
});

router.delete('/teacher/:id', async (req, res, next) => {

    let deletedTeacher = await teacher.delete(req.params.id);
    res.status(200).send('Teacher deleted');

//   console.log('Teacher deleted' , deletedTeacher);
});

module.exports = router;
