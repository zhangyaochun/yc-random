'use strict';

var random = require('../random');

var web = module.exports = {};

//url
web.url = function () {
    //todo if support https?
    return 'http://' + web.domain + '/' + random.word.word();
};

//domain
web.domain = function () {
	return random.word.word() + '.' + web.tld();
};

//ip
web.ip = function () {
    var natural = random.natural;
    return natural(0, 255) + "." + natural(0, 255) + "." + natural(0, 255) + "." + natural(0, 255);
};

//tld - top-level domain
//http://zh.wikipedia.org/wiki/%E9%A1%B6%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8#.E9.80.9A.E7.94.A8.E9.A1.B6.E7.BA.A7.E5.9F.9F.E5.90.8D
web.tlds = ['com', 'net', 'org', 'gov', 'edu', 'biz', 'info', 'name', 'pro', 'tel', 'travel', 'mobi', 'museum'];

//tld
web.tld = function () {
    return random.pick(web.tlds);
}