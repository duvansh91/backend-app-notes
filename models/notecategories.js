'use strict';
module.exports = (sequelize, DataTypes) => {
  const noteCategories = sequelize.define('noteCategories', {
    idNote: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  noteCategories.associate = function(models) {
    // associations can be defined here
  };
  return noteCategories;
};