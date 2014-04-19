'use strict';

var random = module.exports = {};

//natural
random.natural = function (min, max) {

    if (arguments.length == 0) {
        return 0;
    }

    if (max == null) {
        max = min;
        min = 0;
    }

    return min + Math.floor(Math.random() * (max - min) + 1);
};

//pick for array source
random.pick = function (arr) {
    //todo add isArray check
    if (arguments.length > 0) {
        return arr[random.natural(0,arr.length - 1)];
    }
};


function rRequire(name) {
    random[name] = require('./lib/' + name);
};

rRequire('util');
rRequire('address');
rRequire('date');
rRequire('color');

//image relay color
rRequire('image');

rRequire('word');

//web relay word
var web = rRequire('web');

//version from package.json
random.version = require('./package.json').version;


function rExpose(obj) {
   for (var key in obj) {
      random[key] = obj[key].bind(obj);
   }
}

//TODO
//how to expose all obj's function?
//or not to?
rExpose(web);
