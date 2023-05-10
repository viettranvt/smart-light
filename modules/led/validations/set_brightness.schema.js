const Joi = require("@hapi/joi");

const SetBrightnessValidationSchema = Joi.object().keys({
  brightness: Joi.number().required().min(0).max(100),
});

module.exports = {
  SetBrightnessValidationSchema,
};
