const log4js = require("log4js");
const logger = log4js.getLogger("Utils");

let io = null;

function initWebSocketIO(inputIO) {
  logger.info("WebSocketUtils::initWebSocketIO::is called");
  try {
    io = inputIO;
    onConnection();

    logger.info("WebSocketUtils::initWebSocketIO::success");
    return;
  } catch (e) {
    logger.info("WebSocketUtils::initWebSocketIO::error", e);
    throw new Error(e);
  }
}

function onConnection() {
  logger.info("WebSocketUtils::onConnection::is called");
  try {
    // io.of("/" + NAMESPACES.WEB_HOMEPAGE).on("connection", (socket) => {
    //   logger.info(
    //     "SocketServices::onConnection::New connection",
    //     socket.nsp.name
    //   );
    // });

    io.on("connection", (socket) => {
      logger.info(
        "WebSocketUtils::onConnection::New connection",
        socket.nsp.name
      );
    });
    logger.info("WebSocketUtils::onConnection::success");
  } catch (e) {
    logger.info("WebSocketUtils::onConnection::error", e);
    throw new Error(e);
  }
}

function sendMessage(message, data) {
  logger.info("WebSocketUtils::sendMessage::is called");
  try {
    if (!io) {
      loggerApp.error("WebSocketUtils::sendMessage::web socket is null");
      return;
    }

    io.emit(message, data);

    logger.info("WebSocketUtils::sendMessage::success", message);
  } catch (e) {
    logger.info("WebSocketUtils::sendMessage::error", e);
    throw new Error(e);
  }
}

module.exports = {
  initWebSocketIO,
  sendMessage,
};
