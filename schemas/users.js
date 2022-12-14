const Joi = require("joi");

const registerJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const subJoiSchema = Joi.object({
  subscription: Joi.string().required(),
});

const emailJoiSchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = {
  registerJoiSchema,
  loginJoiSchema,
  subJoiSchema,
  emailJoiSchema,
};
