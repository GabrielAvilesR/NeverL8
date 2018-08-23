import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import apiView from './src/Router'

const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/css')
}));

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(apiView)

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});