const { User } = require("../../models");

const logout = async (req, res) => {
  const { id } = req.user;
  await User.update({ token: null }, { where: { id } });

  return res.status(204).json();
};

module.exports = logout;
