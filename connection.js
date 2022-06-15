const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'root', 'password', {
  host: 'localhost',
  dialect: "mysql",
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});
module.exports = sequelize;
// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');