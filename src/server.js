'use strict';

const express = require('express');
const cors = require('cors');
const studentRouter = require('./routes/student');

const app = express();
app.use(cors());
app.use(express.json());

// DONE: get studentRouter working
app.use(studentRouter);
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});


const start = (port) => {
  app.listen(port, () => console.log('server running on', port));
};

module.exports = {
  app,
  start,
};
