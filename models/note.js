'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    name: DataTypes.TEXT,
    category: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {});
  
  return Note;
};