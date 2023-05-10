const log4js = require("log4js");
const logger = log4js.getLogger("Controllers");
const HttpStatus = require("http-status-codes");

const LebConstant = require("./leb.constant");
const ResponseServices = require("../../services/response");
const WebSocketIOUtil = require("../../utils/web-socket-io");
const WebSocketUtil = require("../../utils/web-socket");
const lebConstant = require("./leb.constant");

const setColor = async (req, res, next) => {
  logger.info(`${LebConstant.LOGGER.CONTROLLER}::setColor::is called`);
  try {
    let { red, green, blue } = req.body;
    red = +red
    green = +green
    blue = +blue

    const message = {
      message: lebConstant.SOCKET_MESSAGE.SET_COLOR,
      red,
      green,
      blue,
    };

    WebSocketUtil.sendMessage(JSON.stringify(message));

    logger.info(`${LebConstant.LOGGER.CONTROLLER}::setColor::success`);
    return ResponseServices.returnResponse(
      res,
      next,
      HttpStatus.OK,
      "Successfully set color",
      {
        red,
        blue,
        green,
      }
    );
  } catch (e) {
    logger.error(`${LebConstant.LOGGER.CONTROLLER}::setColor::error`, e);
    return next(e);
  }
};

const setBrightness = async (req, res, next) => {
  logger.info(`${LebConstant.LOGGER.CONTROLLER}::setBrightness::is called`);
  try {
    let brightness = +req.body.brightness;
    brightness = Math.round((brightness*255*1.0)/(100 *1.0))

    const message = {
      message: lebConstant.SOCKET_MESSAGE.SET_BRIGHTNESS,
      brightness,
    };

    WebSocketUtil.sendMessage(JSON.stringify(message));

    logger.info(`${LebConstant.LOGGER.CONTROLLER}::setBrightness::success`);
    return ResponseServices.returnResponse(
      res,
      next,
      HttpStatus.OK,
      "Successfully set brightness",
      {
        brightness,
      }
    );
  } catch (e) {
    logger.error(`${LebConstant.LOGGER.CONTROLLER}::setBrightness::error`, e);
    return next(e);
  }
};

module.exports = {
  setColor,
  setBrightness,
};
