const { Contact } = require("../../models");
const { Op } = require("sequelize");
const { HttpError } = require("../../helpers");

const findByName = async (userId, contactName) => {
  try {
    const contacts = await Contact.findAll({
      where: {
        userId,
        name: {
          [Op.substring]: contactName,
        },
      },
      attributes: ["id", "name", "phone"],
    });
    return contacts;
  } catch (err) {
    throw HttpError(404, `Contacts not found: ${err}`);
  }
};

module.exports = findByName;
