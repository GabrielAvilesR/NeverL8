import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
mongoose.Promise = require('bluebird');

import apiView from './src/Router'
import apiDB from './api'

const server = express();
server.use(bodyParser.json());
server.set('view engine', 'ejs');

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.use(express.static('public'));

mongoose.connect(config.mongoUri, {useNewUrlParser:true});
server.use('/', apiView)
server.use('/api', apiDB)

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});