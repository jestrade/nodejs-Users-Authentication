"use strict";

const config = {
    hostname: "127.0.0.1",
    port: 27017,
    db: {
        url: "mongodb://localhost/MyApp"
    },
    secret: process.env.SECRET_KEY,
};

module.exports = config;