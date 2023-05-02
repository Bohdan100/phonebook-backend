const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_TOKEN_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = bcrypt.compareSync(password, user?.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user.id,
  };
  const token = jwt.sign(payload, SECRET_TOKEN_KEY, { expiresIn: "24h" });

  await User.update({ token }, { where: { id: user.id } });

  return res.json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        name: user.name,
        email: user.email,
        userId: user.id,
      },
    },
  });
};

module.exports = login;
