'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Jobs', [{
            title: "Frontend React Developer ",
            company: "24estore",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: "Senior Frontend React Developer ",
            company: "24estore",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: "Angular Developer ",
            company: "schibsted",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Jobs', null, {});
    }
};
