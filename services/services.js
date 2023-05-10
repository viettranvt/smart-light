const log4js = require("log4js");
const logger = log4js.getLogger("Services");

const LoggerConstant= require(`../constants/logger.constant`);

const rounding = (number) => {
  logger.info(`${LoggerConstant.SERVICES.ROUNDING}::is called`);
  try {
    logger.info(`${LoggerConstant.SERVICES.ROUNDING}::Success`);

    return Math.round(number * 100) / 100;
  } catch (e) {
    logger.error(`${LoggerConstant.SERVICES.ROUNDING}::Error`, e);
    throw new Error(e);
  }
};

const onlyUnique = (value, index, self) => {
  logger.info(`${LoggerConstant.SERVICES.ONLY_UNIQUE}::is called`);
  try {
    logger.info(`${LoggerConstant.SERVICES.ONLY_UNIQUE}::success`);
    return self.indexOf(value) === index;
  } catch (e) {
    logger.error(`${LoggerConstant.SERVICES.ONLY_UNIQUE}::Error`, e);
    throw new Error(e);
  }
};

module.exports = {
  rounding,
  onlyUnique,
};
