const Joi = require("@hapi/joi");

const SetLebValidationSchema = Joi.object().keys({
  red: Joi.number().required().min(0).max(255),
  green: Joi.number().required().min(0).max(255),
  blue: Joi.number().required().min(0).max(255),
});

module.exports = {
  SetLebValidationSchema,
};
