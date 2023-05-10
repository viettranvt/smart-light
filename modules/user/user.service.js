const log4js = require('log4js');
const logger = log4js.getLogger('Sevices');

const UserModel = require('./user.model');
const UserConstant = require('./user.constant');

const findUserByUsernameOrEmail = async (usernameOrEmail) => {
  logger.info(
    `${UserConstant.LOGGER.SERVICE}::findUserByUsernameOrEmail::is called`
  );
  try {
    const query = {
      $or: [
        {
          username: usernameOrEmail,
        },
        {
          email: usernameOrEmail,
        },
      ],
    };

    logger.info(
      `${UserConstant.LOGGER.SERVICE}::findUserByUsernameOrEmail::success`
    );
    return await UserModel.findOne(query);
  } catch (e) {
    logger.error(
      `${UserConstant.LOGGER.SERVICE}::findUserByUsernameOrEmail::Error`,
      e
    );
    throw new Error(e);
  }
};

const mapUserInfo = (userInfo) => {
  logger.info(`${UserConstant.LOGGER.SERVICE}::mapUserInfo::is called`);
  try {
    let userJsonParse = JSON.parse(JSON.stringify(userInfo));

    delete userJsonParse.passwordHash;
    delete userJsonParse.passwordSalt;
    delete userJsonParse.updatedAt;
    delete userJsonParse._id;
    delete userJsonParse.refreshToken;

    logger.info(`${UserConstant.LOGGER.SERVICE}::mapUserInfo::success`);
    return userJsonParse;
  } catch (e) {
    logger.error(`${UserConstant.LOGGER.SERVICE}::mapUserInfo::Error`, e);
    throw new Error(e);
  }
};

module.exports = {
  findUserByUsernameOrEmail,
  mapUserInfo,
};
