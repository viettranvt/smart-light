const HttpStatus = require('http-status-codes');
const log4js = require("log4js");
const logger = log4js.getLogger("Utils");

const LoggerConstants = require('../constants/logger.constant');

const joiValidationResponse = (err, res, next) => {
  logger.info(`${LoggerConstants.UTILS.JOI_VALIDATION_RESPONSE}::is called`)

  try{
    const messages = err.details.map(detail => {
      return detail.message;
    });

    logger.info(`${LoggerConstants.UTILS.JOI_VALIDATION_RESPONSE}::success`)
    return res.status(HttpStatus.BAD_REQUEST).json({
      messages: messages,
      status: HttpStatus.BAD_REQUEST,
      data: {}
    });
  }catch(err){
    const msg = err.message ? err.message : JSON.stringify(err);

    logger.info(`${LoggerConstants.UTILS.JOI_VALIDATION_RESPONSE}::error`, err)
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      messages: [msg],
      data: {}
    });
  }
};

module.exports = {
  joiValidationResponse
};
