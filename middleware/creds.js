const allowedOrigins = require('../config/allowedOrigins');

const creds = (req, res, next) => {
    const origin = req.headers.origin || req.headers.referer;
    console.log(`Origin ${origin} has sent a request`)
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
        console.log(`Origin ${origin} has been approved`)
    }

    next();
}

module.exports = creds;