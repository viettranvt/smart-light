const log4js = require('log4js');
const logger = log4js.getLogger('Sevices');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JwtConfig = require('../../constants/jwt.constant');
const AuthConstant = require('./auth.constant');

const isValidPasswordHash = ({ passwordHash, password }) => {
  logger.info(`${AuthConstant.LOGGER.SERVICE}::isValidHashPassword::Is called`);
  try {
    logger.info(`${AuthConstant.LOGGER.SERVICE}::isValidHashPassword::success`);
    return bcrypt.compareSync(password, passwordHash);
  } catch (e) {
    logger.error(
      `${AuthConstant.LOGGER.SERVICE}::isValidHashPassword::Error`,
      e
    );
    throw new Error(e);
  }
};

const generateToken = (data) => {
  logger.info(`${AuthConstant.LOGGER.SERVICE}::generateToken::Is called`);
  try {
    logger.info(`${AuthConstant.LOGGER.SERVICE}::generateToken::success`);
    return jwt.sign({ user: data }, JwtConfig.secret, {
      expiresIn: 60 * 60 * AuthConstant.TOKEN_EXPIRED_IN_HOUR,
    });
  } catch (e) {
    logger.error(`${AuthConstant.LOGGER.SERVICE}::generateToken::Error`, e);
    throw new Error(e);
  }
};

module.exports = {
    generateToken,
    isValidPasswordHash
}