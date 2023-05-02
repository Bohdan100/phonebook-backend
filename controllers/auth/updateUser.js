const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateUser = async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findByPk(id);
  if (!user) {
    next(HttpError(401, "Not authorized"));
  }

  user.name = req.body.name;
  user.save();

  return res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        name: req.body.name,
      },
    },
  });
};

module.exports = updateUser;
