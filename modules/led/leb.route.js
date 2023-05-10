const express = require("express");
const routes = express.Router({});

const LedController = require("./leb.controller");
const ParametersConstant = require("../../constants/parameters.constant");
const ValidateMiddleware = require("../../middleware/validate.middleware");

const { SetLebValidationSchema } = require("./validations/set_led.schema");
const {
  SetBrightnessValidationSchema,
} = require("./validations/set_brightness.schema");

routes.put(
  "/color",
  ValidateMiddleware(SetLebValidationSchema, [ParametersConstant.BODY]),
  LedController.setColor
);

routes.put(
  "/brightness",
  ValidateMiddleware(SetBrightnessValidationSchema, [ParametersConstant.BODY]),
  LedController.setBrightness
);

module.exports = routes;
