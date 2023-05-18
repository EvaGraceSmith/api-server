'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const student = require('./student');

// will make dynamic for testing environment
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// database singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create our working and connected student database model
const studentModel = student(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  studentModel,
};
