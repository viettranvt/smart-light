const log4js = require('log4js');
const logger = log4js.getLogger('Controllers');
const HttpStatus = require('http-status-codes');

const UserConstant = require('./user.constant');
const UserServices = require('./user.service');
const ResponseServices = require('../../services/response');

//Here will be the place to handle requests from client
const myController = (req, res, next) => {
  logger.info(`${UserConstant.LOGGER.CONTROLLER}::myController::is called`)
  try{
    data = {
      name: 'Vịt',
    }

    logger.info(`${UserConstant.LOGGER.CONTROLLER}::myController::success`)
    return ResponseServices.returnResponse(
      res,
      next,
      HttpStatus.OK,
      "Hello. This is my controller",
      data
    );
  }catch(e){
    return next(e);
  }
};

module.exports = {
  myController
}