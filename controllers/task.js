module.exports = async () => {
    const Models = require('../models')
    const Task = Models.task;

    //create
    const createdTask = await Task.create({ title: "My Task", description: "Hello this is my task", deadline: '2022-01-17'}).catch(console.log)
    console.log("This Task is created", createdTask);
}