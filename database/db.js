const mongoose = require('mongoose');
const log4js = require('log4js');
const logger = log4js.getLogger('App');

module.exports = (callback) => {
  mongoose.connect(
    process.env.DB_HOST || process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err) => {
      if (err) {
        logger.error("APP::Connection DB::Can't connection DB");
        throw new Error(err);
      } else {
        callback();
      }
    }
  );
};
