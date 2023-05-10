const MIDDLEWARE = `MIDDLEWARE`;
const SERVICE = `SERVICES`;
const UTIL = `UTILS`;

module.exports = {
  DUMP_DATA: {
    USER_DUMP_DATA: 'USER_DUMP_DATA',
  },
  MIDDLEWARE: {
    CHECK_ACCESS_TOKEN: `${MIDDLEWARE}::checkAccessToken`,
    VALIDATE: `${MIDDLEWARE}::validate`,
    VALIDATE_FILE_TYPES: `${MIDDLEWARE}::validateFileTypes`,
  },
  UTILS: {
    JOI_VALIDATION_RESPONSE: `${UTIL}::joiValidationResponse`
  },
  SERVICES: {
    ROUNDING: `${SERVICE}::rounding`,
    ONLY_UNIQUE: `${SERVICE}::onlyUnique`,
    RETURN_RESPONSE: `${SERVICE}::returnResponse`,
  }
};
