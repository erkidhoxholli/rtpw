'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Recipes', [{
      userId: 1,
      title: "Sample recipe",
      ingredients: "Salt, Pepper",
      direction: "Add salt, Add pepper",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Recipes', null, {});
  }
};
