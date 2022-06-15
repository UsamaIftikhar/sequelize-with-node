'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('project', 'subTitle', { type: Sequelize.STRING, defaultValue: null });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('project', 'subTitle');
  }
};
