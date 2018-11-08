/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv =  require('minimist')(process.argv.slice(2));
const port = parseInt(argv.port || process.env.PORT || '3000', 10);
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config.js');

const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const options = {
  contentBase: './build',
  hot: true,
  host: 'localhost',
  inline: true,
  https: true,
  disableHostCheck: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);
// Start your app.
server.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);

});
