'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('task', 'projectId', { type: Sequelize.INTEGER(100)});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('task', 'projectId');
  }
};
