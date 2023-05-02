const Joi = require("joi");
const { validateBody } = require("../middlewares");

const addSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(40)
    .required()
    .messages({ "any.required": "missing field name" }),
  phone: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ "any.required": "missing field phone" }),
  favorite: Joi.boolean().optional(),
});

const updateSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(40)
    .optional()
    .messages({ "any.required": "missing field name" }),
  phone: Joi.string()
    .min(3)
    .max(30)
    .optional()
    .messages({ "any.required": "missing field phone" }),
  favorite: Joi.boolean().optional(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  add: validateBody(addSchema),
  update: validateBody(updateSchema),
  updateStatus: validateBody(updateStatusSchema),
};
