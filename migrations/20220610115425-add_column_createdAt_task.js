'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('task', 'createdAt', { type: Sequelize.DATE });
    return await queryInterface.addColumn('task', 'updatedAt', { type: Sequelize.DATE });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('task', 'createdAt');
    return await queryInterface.addColumn('task', 'updatedAt', { type: Sequelize.DATE });
  }
};
