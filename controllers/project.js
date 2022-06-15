module.exports = async () => {
    const Models = require('../models')
    const Project = Models.project;
     const sequelize = require('sequelize')
    // create
    const createdProject = await Project.create({ title: "My Project", description: "Hello this is my project", subTitle: "My first project" }).catch(console.log)
    console.log("This Project is created", createdProject);

    // update
    await Project.update({
        title: 'New Title',
    },{
        where : {
            id: 4
        }
    })

    // Retreive
    const allProjects = await Project.findAll({order:[['id','DESC']]});
    const project = await Project.findAll({
        where:{id:5},
        include:[{ model:Models.task  }]
    });
    console.log("Here are my projects",JSON.stringify(allProjects,null,2));

    // Delete
    const deleted = await Project.destroy({where : { id: 4}})
    console.log("This project is deleted",deleted);
}
