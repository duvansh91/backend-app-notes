'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    name: DataTypes.TEXT,
    category: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {});
  
  Note.associate = function(models){
    Note.belongsToMany(models.Category,{
      through: 'noteCategories',
      as: 'category'
    })
  }

  return Note;
};