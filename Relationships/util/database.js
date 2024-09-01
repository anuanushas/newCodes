const Sequelize = require('sequelize');

const sequelize = new Sequelize('relationshipyy', 'root', 'Anu@developer123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
