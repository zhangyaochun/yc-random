'use strict';

var random = require('../random');

var word = module.exports = {};

word.pools = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    all: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
};

//character
word.character = function(pool) {
    //default
    pool = pool || 'lower';

    if (Object.keys(word.pools).indexOf(pool) > -1) {
       var data = word.pools[pool];
       var length = data.length;
       
       //use string charAt
       return data.charAt(random.natural(0, length-1));
    }
   
};

//string
word.string = function(pool, min, max) {
    var result = '';
    var length = 1;

    pool = pool || 'lower';
    //todo: if make param to obj?
    if (arguments.length === 0) {
        //todo: why 2-10?
        length = random.natural(2,10);
    } else if (arguments.length === 1) {
        //check type is string or number
        if (random.util._.isNumber(arguments[0]) && arguments[0] > 0) {
            length = arguments[0];
        }
    } else if (arguments.length === 2) {
        if (random.util._.isString(arguments[0]) && random.util._.isNumber(arguments[1])) {
            length = min;
        }
    } else if (arguments.length === 3) {
        length = random.natural(min,max);
    }

    //use word.character for length
    for (var i=0; i<length; i++) {
        result += random.character(pool);
    }
    return result;

};

//integer
word.integer = function(min,max) {
    if (arguments.length == 0) {
        min = -9007199254740992;
        max = 9007199254740992;
    } else if (arguments.length == 1) {
        min = parseInt(min, 10);
        max = 9007199254740992;
    }

    return min + Math.floor(Math.random() * (max - min) + 1);
};


//word
word.word = function(min, max) {
    //use lower pool
    var result = '';
    var length = 2;
    if (arguments === 0) {
        //todo: why 2-10?
        length = random.natural(2,10);
    }else if (arguments === 1) {
        length = parseInt(min, 10);
    }else if (arguments === 2) {
        min = parseInt(min, 10);
        max = parseInt(max, 10);
        length = random.natural(min, max);
    }

    for (var i=0; i<length; i++) {
        result += random.character('lower');
    }
    return result;
}