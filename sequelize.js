const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("phonebook", "root", null, {
  dialect: "mariadb",
  host: "localhost",
});

module.exports = sequelize;
