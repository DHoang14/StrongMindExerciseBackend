const allowedOrigins = require('../config/allowedOrigins');

const creds = (req, res, next) => {
    const origin = req.headers.origin || req.headers.referer;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }

    next();
}

module.exports = creds;