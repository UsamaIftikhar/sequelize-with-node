'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("project", {
      id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

    });
    return queryInterface.createTable("task", {
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      deadline: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("project");
    return queryInterface.dropTable("task");
  }
};
