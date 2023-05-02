const { contacts: sqlDB } = require("../../services");
const { HttpError } = require("../../helpers");

const findByName = async (req, res, next) => {
  const { name: contactName } = req.body;
  const { id: userId } = req.user;

  const contactList = await sqlDB.findByName(userId, contactName);

  if (contactList.length === 0) {
    next(HttpError(404, `Contact '${contactName}' not found`));
  }

  return res.status(200).json({
    contactList,
    message: "Success find contact",
  });
};

module.exports = findByName;
