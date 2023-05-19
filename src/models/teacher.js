'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('teachers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    classroom: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

  });
};
