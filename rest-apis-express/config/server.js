const express = require("express");
const bodyParser = require("body-parser"); <<
<< << < HEAD
const cors = require('cors');

const moment = require('moment');
moment().format();

===
=== =
const cors = require("cors") >>>
    >>> > 2058e978 bb308c78b5eadb5823a17b82b9d276d4
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