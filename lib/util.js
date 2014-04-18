'use strict';

var util = module.exports = {};

var nodeUtil = require('util');

//todo:rm lodash for too big?
util._ = require('lodash');

//repeat
util.repeat = function(n, str) {
	//check arg
	if (arguments.length == 2) {
	   return new Array(n + 1).join(str || ' ');
    } else if (arguments.length == 1) {
       //direct return what you pass me 
       return n;	
    }
};
