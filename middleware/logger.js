const moment = require('moment');

// This isn't actually hooked up to anything, tutorial used postman to test, I will use insomnia or heroku
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}


module.exports = logger;
