const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { HttpError } = require("../helpers");

const { SECRET_TOKEN_KEY } = process.env;

const auth = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || token === "") {
    next(HttpError(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_TOKEN_KEY);
    const user = await User.findByPk(id);

    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }

    req.user = user;
    next();
  } catch (err) {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = auth;
