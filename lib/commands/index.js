/*!
 * Nedis - commands
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */
(function merge(type){
	var cmds = require('./' + type),
		cmd;
	for(cmd in cmds){
		exports[cmd] = cmds[cmd];
	}
	return merge;
})('keys')('string')('hash')('connection')('server');