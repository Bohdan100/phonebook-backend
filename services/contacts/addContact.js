const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const addContact = async (contact) => {
  try {
    const newContact = await Contact.create(contact);
    return newContact.dataValues;
  } catch (err) {
    throw HttpError(404, `Contact not created: ${err}`);
  }
};

module.exports = addContact;
