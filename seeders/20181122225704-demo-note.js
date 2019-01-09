'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Notes', [{
        name: 'tarea 1',
        category: 'principal',
        content: 'esta es una nueva nota',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('People', null, {});
   
  }
};
