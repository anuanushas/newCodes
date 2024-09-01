const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Anu@developer123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
