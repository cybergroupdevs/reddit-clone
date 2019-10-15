const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const moment = require('moment');
moment().format();

const auth = require("../auth/authenticator");

const apiRouter = require('../router/apiRouter');

const { PORT, HOST } = require("./config");

const connMongoDb = require("../mongoose").db;

const server = express();

server.use(bodyParser({
    extended: false
}));
server.use(bodyParser.json())
server.use(cors())
server.options("*", cors())
    //server.use(auth);
server.use(apiRouter());

server.listen(PORT, HOST, err => {
    if (err) throw err;
    console.log(`Runnnig on: http://${HOST}:${PORT}`);
})