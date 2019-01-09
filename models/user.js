'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.TEXT,
    name: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {});


  return User;
};