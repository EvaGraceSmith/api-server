'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const student = require('./student');
const teacher = require('./teacher');
const Collection = require('./collection');

// will make dynamic for testing environment
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// database singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create our working and connected student database model
const studentModel = student(sequelizeDatabase, DataTypes);
const teacherModel = teacher(sequelizeDatabase, DataTypes);

//create our associations
studentModel.hasMany(teacherModel,{foreignKey: 'studentIds', sourceKey: 'id'});
teacherModel.belongsTo(studentModel, {foreignKey: 'studentIds', targetKey: 'id'});

module.exports = {
  sequelizeDatabase,
  student: new Collection(studentModel),
  teacher: new Collection(teacherModel),
  // teacherModel,
};
