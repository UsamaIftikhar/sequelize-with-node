var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
 const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
    },
    title: Sequelize.STRING,
    subTitle: Sequelize.STRING,
    description: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: 'project'
 }
  );
  Project.associate = models => {
    console.log("Models are ",models);
    Project.hasMany(models.task, {
       onDelete: "Cascade",
    });
  }
return Project;
  
};