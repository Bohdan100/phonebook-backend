const { User } = require("../../models");

const getCurrentUser = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ where: { email } });

  return res.json({
    status: "success",
    code: 200,
    data: {
      name: user.name,
      email: user.email,
      userId: user.id,
    },
  });
};

module.exports = getCurrentUser;
