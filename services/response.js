const log4js = require("log4js");
const logger = log4js.getLogger("Services");

const LoggerConstants = require('../constants/logger.constant');

//This function helps me to simplify the return result
const returnResponse = (res, next, status, message, data) => {
  logger.info(`${LoggerConstants.SERVICES.RETURN_RESPONSE}::is called`);
  let response = {};
  try{
    response = {
      status,
      messages: [message],
      data
    };

     logger.info(`${LoggerConstants.SERVICES.RETURN_RESPONSE}::success`);
    return res.status(status).json(response);
  }catch(e){
    logger.info(`${LoggerConstants.SERVICES.RETURN_RESPONSE}::error`, e);
    return next(e);
  }
}

module.exports = {
    returnResponse
}