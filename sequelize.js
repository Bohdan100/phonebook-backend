const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("phonebook", "root", null, {
  host: "http://localhost",
  dialect: "mariadb",
});

module.exports = sequelize;
