const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({ path: './config/.env'});
require('./config/connect');

const app = require('./app');
const server = express();

let PORT = process.env.PORT || 5000;
server.use(cors({
    origin: "*"
}))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}))

server.use('/', app);

server.listen(PORT, () => {
    console.log('server running on ',PORT);
})

//caught uncaught exception
process.on('uncaughtException', (err) =>{
    console.error(err);
    process.exit(1);
})

//caught unhandled exception
process.on('unhandledRejection', (err) => {
    console.error(err);
})
