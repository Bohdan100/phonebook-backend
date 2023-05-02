const { ctrlWrapper } = require("../../helpers");

const getAllContacts = require("./getAllContacts");
const findByName = require("./findByName");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");
const removeContact = require("./removeContact");

module.exports = {
  getAll: ctrlWrapper(getAllContacts),
  findByName: ctrlWrapper(findByName),
  add: ctrlWrapper(addContact),
  update: ctrlWrapper(updateContact),
  updateStatus: ctrlWrapper(updateStatusContact),
  remove: ctrlWrapper(removeContact),
};
