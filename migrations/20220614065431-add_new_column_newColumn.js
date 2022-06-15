'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('task', 'newColumn', { type: Sequelize.STRING });
  },

  async down (queryInterface, Sequelize) {
    throw new Error("safety check");
  }
};
