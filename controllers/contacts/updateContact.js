const { contacts: sqlDB } = require("../../services");
const { HttpError } = require("../../helpers");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, phone } = req.body;
  const { id: userId } = req.user;

  if (!name && !phone) {
    throw HttpError(400, "Missing required fields");
  }

  const result = await sqlDB.updateContact(userId, contactId, name, phone);

  if (result[0] === 0) {
    throw HttpError(
      404,
      "Сontact has the following fields or contact can't found"
    );
  }

  res.status(200).json({
    message: "Success update contact",
  });
};

module.exports = updateContact;
