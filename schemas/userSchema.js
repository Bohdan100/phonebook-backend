const Joi = require("joi");
const { validateBody } = require("../middlewares");

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const signUpSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ "any.required": "missing field email" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "missing field password" }),
  name: Joi.string()
    .min(2)
    .max(20)
    .required()
    .messages({ "any.required": "missing field name" }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ "any.required": "missing field email" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "missing field password" }),
});

const updateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(20)
    .required()
    .messages({ "any.required": "missing field name" }),
});

module.exports = {
  signUp: validateBody(signUpSchema),
  login: validateBody(loginSchema),
  update: validateBody(updateSchema),
};
