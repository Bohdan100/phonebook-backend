const { DataTypes } = require("sequelize");
const db = require("../sequelize");
const User = require("./user");

const Contact = db.define(
  "Phonebook",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      required: [true, "Name is required"],
      validate: { min: 1, max: 30, notEmpty: true },
      defaultValue: "unknown",
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      required: [true, "Phone is required"],
      validate: { notEmpty: true },
      allowNull: false,
      defaultValue: "(000)-000-000",
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      required: [true, "UserId is required"],
    },
  },
  { tableName: "Contacts", timestamps: false }
);

User.hasMany(Contact);
Contact.belongsTo(User);

// console.log(Contact === db.models.Phonebook);

module.exports = Contact;
