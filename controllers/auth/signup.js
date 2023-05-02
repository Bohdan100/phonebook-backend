const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { HttpError } = require("../../helpers");
const { SECRET_TOKEN_KEY } = process.env;

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  await User.sync();
  // await User.sync({ alter: true });
  console.log("11111111111111111111");

  const user = await User.findOne({ where: { email: email } });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  console.log("Created");
  await User.create({
    name,
    email,
    password: hashPassword,
  });

  const newUser = await User.findOne({ where: { email: email } });

  const payload = {
    id: newUser.id,
  };

  const token = jwt.sign(payload, SECRET_TOKEN_KEY, { expiresIn: "24h" });
  newUser.token = token;
  console.log("after token", newUser);
  await newUser.save();

  return res.status(201).json({
    status: "success",
    code: 201,
    data: {
      token,
      user: {
        name,
        email,
        userId: newUser.id,
      },
    },
  });
};

module.exports = signup;
