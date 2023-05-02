const { contacts: sqlDB } = require("../../services");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { id: userId } = req.user;

  const result = await sqlDB.removeContact(userId, contactId);
  if (result === 0) {
    throw HttpError(404, "Not found contact to delete");
  }

  res.status(200).json({
    message: `Contact with ${contactId} deleted`,
  });
};

module.exports = removeContact;
