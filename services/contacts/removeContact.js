const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeContact = async (userId, contactId) => {
  try {
    const result = await Contact.destroy({
      where: {
        userId,
        id: contactId,
      },
    });
    return result;
  } catch (err) {
    throw HttpError(404, `Contact not deleted: ${err}`);
  }
};

module.exports = removeContact;
