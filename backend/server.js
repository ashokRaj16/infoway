require('dotenv').config({ path: './config/.env'});
const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
require('./config/connect');
const app = require('./app');
const server = express();

let PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(urlencoded({extended: true}))

server.use('/user', app);

server.listen(PORT, () => {
    console.log('server running on ',PORT);
})

//caught uncaught exception

//caught unhandled exception