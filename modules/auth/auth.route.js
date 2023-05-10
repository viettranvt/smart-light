const express = require('express');
const router = express.Router({});

const AuthController = require('./auth.controller');

const ParametersConstant = require('../../constants/parameters.constant');
const ValidateMiddleware = require('../../middleware/validate.middleware');

//data descriptions to check
const {LoginValidationSchema} = require('./validations/login.schema');

//here will declare the child routes of the module
router.post('/login', ValidateMiddleware(LoginValidationSchema, [ParametersConstant.BODY]), AuthController.login);

module.exports = router;
