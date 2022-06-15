'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('task', 'id', { type: Sequelize.INTEGER(100),
      allowNull: false,
      autoIncrement:true,
      primaryKey:true,
  });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('task', 'id');
  }
};
