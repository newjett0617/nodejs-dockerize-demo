'use strict';

const os = require("os");
const express = require('express');

// Constants
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

// Application
const app = express();
app.get('/', (req, res) => {
    res.send(`Hello World<br>date: ${new Date().getTime()}, ${new Date()}<br>hostname: ${os.hostname()}<br>`);
});

// Logging
setInterval(function () {
    console.log(new Date(), os.hostname());
}, 5000);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
