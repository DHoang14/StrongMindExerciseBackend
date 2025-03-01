const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        console.log(allowedOrigins.indexOf(origin))
        if (allowedOrigins.indexOf(origin) !== -1) {
            console.log("Cors has been approved")
            callback(null, true);
        } else {
            console.log("Cors has failed")
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;