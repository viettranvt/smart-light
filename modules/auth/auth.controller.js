const log4js = require('log4js');
const logger = log4js.getLogger('Controllers');
const HttpStatus = require('http-status-codes');
const uuid = require('uuid');

const AuthConstant = require('./auth.constant');
const AuthService = require('./auth.service');
const UserServices = require('../user/user.service');
const ResponseServices = require('../../services/response');

//Here will be the place to handle requests from client
const login = async (req, res, next) => {
  logger.info(`${AuthConstant.LOGGER.CONTROLLER}::Login::is called`);
  try {
    const { username, password } = req.body;
    let user = await UserServices.findUserByUsernameOrEmail(username);

    //user not found
    if (!user) {
      logger.info(`${AuthConstant.LOGGER.CONTROLLER}::Login::user not found`);
      return ResponseServices.returnResponse(
        res,
        next,
        HttpStatus.BAD_REQUEST,
        AuthConstant.MESSAGES.LOGIN.MAIL_NOT_FOUND_OR_PASSWORD_NOT_MATCH,
        {}
      );
    }

    //password not match
    if (
      !AuthService.isValidPasswordHash({
        passwordHash: user.passwordHash,
        password,
      })
    ) {
      logger.info(
        `${AuthConstant.LOGGER.CONTROLLER}::Login::password not match`
      );
      return ResponseServices.returnResponse(
        res,
        next,
        HttpStatus.BAD_REQUEST,
        AuthConstant.MESSAGES.LOGIN.MAIL_NOT_FOUND_OR_PASSWORD_NOT_MATCH,
        {}
      );
    }

    user.refreshToken = uuid.v4();
    await user.save();

    //success
    data = {
      user: UserServices.mapUserInfo(user),
      meta: {
        refreshToken: user.refreshToken,
        accessToken: AuthService.generateToken(user),
      },
    };

    logger.info(`${AuthConstant.LOGGER.CONTROLLER}::Login::success`);
    return ResponseServices.returnResponse(
      res,
      next,
      HttpStatus.OK,
      AuthConstant.MESSAGES.LOGIN.LOGIN_SUCCESSFULLY,
      data
    );
  } catch (e) {
    logger.error(`${AuthConstant.LOGGER.CONTROLLER}::Login::error`, e);
    return next(e);
  }
};

module.exports = {
  login,
};
