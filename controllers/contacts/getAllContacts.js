const { contacts: sqlDB } = require("../../services");

const getAllContacts = async (req, res) => {
  const { id: userId } = req.user;

  let { page = 1, limit = 4 } = req.query;
  if (parseInt(limit) > 10 || parseInt(limit) <= 0) {
    limit = 10;
  }
  const offset = (page - 1) * limit;

  const contactList = await sqlDB.getAllContacts(userId, limit, offset);

  return res.status(200).json({
    contactList,
    message: "Success get contacts list",
  });
};

module.exports = getAllContacts;
