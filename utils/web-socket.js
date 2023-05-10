const log4js = require("log4js");
const logger = log4js.getLogger("Utils");
const WebSocketServer = require("ws").Server;

let wss = null;
let ws = null;

function initWebSocket(server) {
  logger.info("WebSocketUtils::initWebSocket::is called");
  try {
    wss = new WebSocketServer({ server });
    wss.on("connection", (webSocket) => {
      ws = webSocket;
      logger.info("WebSocketUtils::initWebSocket::connection success");
    });

    logger.info("WebSocketUtils::initWebSocket::success");
    return;
  } catch (e) {
    logger.info("WebSocketUtils::initWebSocket::error", e);
    throw new Error(e);
  }
}

function sendMessage(message) {
  logger.info("WebSocketUtils::sendMessage::is called");
  try {
    // while (!ws) {
    //   logger.error("WebSocketUtils::sendMessage::try connect socket....");
    //   wss.on("connection", (webSocket) => {
    //     ws = webSocket;
    //     logger.info("WebSocketUtils::initWebSocket::connection success");
    //   });
    // }

    ws.send(message);
    logger.info("WebSocketUtils::initWebSocket::success", message);
  } catch (e) {
    logger.info("WebSocketUtils::sendMessage::error", e);
    throw new Error(e);
  }
}

module.exports = {
  initWebSocket,
  sendMessage,
};
