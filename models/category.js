'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    Note.belongsToMany(models.Note,{
      through: 'noteCategories',
      as: 'note'
    })
  };
  return Category;
};