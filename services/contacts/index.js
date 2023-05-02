const getAllContacts = require("./getAllContacts");
const findByName = require("./findByName");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
// const updateStatusContact = require("./updateStatusContact");
const removeContact = require("./removeContact");

module.exports = {
  getAllContacts,
  findByName,
  addContact,
  updateContact,
  // updateStatusContact,
  removeContact,
};
