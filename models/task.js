var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
      const Task = sequelize.define('task', {
        id: {
            type: Sequelize.INTEGER(100),
            allowNull: false,
            autoIncrement:true,
            primaryKey:true,
        },
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        deadline: Sequelize.DATE,
        projectId: {type: Sequelize.INTEGER(100), 
          references: {
            model: 'project',
            key: 'id'
          }
         },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        newColumn: Sequelize.STRING,
      },
      {
        tableName: 'task'
     }
      );
       Task.associate = models => {
         Task.belongsTo(models.project, {
           foreignKey : 'projectId'   
         });
       }
      return Task;
    }