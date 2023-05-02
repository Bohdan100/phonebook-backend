const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateContact = async (userId, contactId, name, phone) => {
  try {
    const result = await Contact.update(
      { name, phone },
      {
        where: {
          userId,
          id: contactId,
        },
      }
    );
    return result;
  } catch (err) {
    throw HttpError(404, `Can't update contact: ${err}`);
  }
};

module.exports = updateContact;
