const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getAllContacts = async (userId, limit, offset) => {
  try {
    const contacts = await Contact.findAll({
      where: {
        userId,
      },
      attributes: ["id", "name", "phone"],
      limit,
      offset,
    });
    return contacts;
  } catch (err) {
    throw HttpError(404, `Contact not created: ${err}`);
  }
};

module.exports = getAllContacts;
