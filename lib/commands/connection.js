
/*!
 * Nedis - commands - string
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var utils = require('../utils');

/**
 * PING
 */

exports.ping = function(client){
  client.write('PONG');
};

/**
 * ECHO <val>
 */

exports.echo = function(client, val){
  client.write(val);
};

/**
 * QUIT
 */

exports.quit = function(client){
  client.stream.close();
};