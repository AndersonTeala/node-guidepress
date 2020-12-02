const Sequelize = require("sequelize");

const connection = new Sequelize('guidepress', 'root', 'password', {
  host: '192.168.0.106',
  dialect: 'mysql'
});

module.exports = connection;