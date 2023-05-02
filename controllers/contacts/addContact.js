const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");
const { contacts: sqlDB } = require("../../services");

const addContact = async (req, res, next) => {
  const { name, phone } = req.body;
  const { id: userId } = req.user;

  if (!name || !phone) {
    next(HttpError(400, "Missing required fields"));
  }

  await Contact.sync();
  const contact = await Contact.findOne({ where: { name: name } });

  if (contact) {
    throw HttpError(409, "Contact with that name already in your phonebook");
  }

  const newContact = await sqlDB.addContact({ ...req.body, userId });
  const { id, favorite } = newContact;

  res.status(201).json({
    status: "success",
    code: 201,
    contact: { id, name, phone, favorite, userId },
  });
};

module.exports = addContact;
