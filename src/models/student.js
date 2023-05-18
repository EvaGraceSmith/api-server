'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  // note that students WILL BE the name of the table created, pluralized
  // each property: name, age, pronouns correspond to a column in the database
  return sequelizeDatabase.define('students', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    subject: {
      type: DataTypes.ENUM,
      values: ['Math', 'English', 'Art', 'Biology'],
      allowNull: true,
    },
  });
};
