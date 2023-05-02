const { DataTypes } = require("sequelize");
const db = require("../sequelize");

// const { MongooseError } = require("../helpers");
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const User = db.define(
  "Phonebook",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      required: [true, "Email is required"],
      unique: true,
      validate: { is: emailRegexp, isEmail: true, min: 4, max: 35 },
      allowNull: false,
      defaultValue: "unknown",
    },
    password: {
      type: DataTypes.STRING,
      required: [true, "Password is required"],
      validate: { min: 4, max: 20 },
      allowNull: false,
      defaultValue: "unknown",
    },
    name: {
      type: DataTypes.STRING,
      required: [true, "Name is required"],
      validate: { min: 2, max: 15, notEmpty: true },
      defaultValue: "unknown",
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "Users", timestamps: false }
);

// console.log(User === db.models.Phonebook);

module.exports = User;
