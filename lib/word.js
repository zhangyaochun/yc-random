'use strict';

var random = require('../index');

var word = module.exports = {};

word.pools = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()[]',
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
//change param as object
word.string = function(obj) {

    var result = '';

    var pool = obj.pool || 'lower';
    var min = obj.min ? parseInt(obj.min, 10) : 2;
    var max = obj.max ? parseInt(obj.max, 10) : 20;

    var length = random.natural(min, max);

    //use word.character for length
    for (var i = 0; i<length; i++) {
        result += word.character(pool);
    }

    return result;

};

//integer
word.integer = function(min, max) {
    if (arguments.length === 0) {
        min = -9007199254740992;
        max = 9007199254740992;
    } else if (arguments.length === 1) {
        min = parseInt(min, 10);
        max = 9007199254740992;
    } else if (arguments.length === 2) {
        min = parseInt(min, 10);
        max = parseInt(max, 10);
    }

    //return min + Math.floor(Math.random() * (max - min) + 1);
    return Math.round(Math.random() * (max - min)) + min;
};


//word
word.word = function(min, max) {
    //use lower pool
    var result = '';
    var length = 2;
    if (arguments.length === 0) {
        //todo: why 2-10?
        length = random.natural(2,10);
    } else if (arguments.length === 1) {
        length = parseInt(min, 10);
    } else if (arguments.length === 2) {
        min = parseInt(min, 10);
        max = parseInt(max, 10);
        length = random.natural(min, max);
    }

    for (var i=0; i<length; i++) {
        result += word.character('lower');
    }
    return result;
};


//capitalize
word.capitalize = function (source) {
    return source.charAt(0).toUpperCase() + source.substring(1).toLowerCase();
};
