const express = require('express');
const router = express.Router({});

const UserController = require('./user.controller');

//here will declare the child routes of the module
router.get('/', UserController.myController);

module.exports = router;
