'use strict';

var random = require('../random');

var date = module.exports = {};

//mokeDate
date.mokeDate = function (min, max) {
	min = min || new Date(0);
	max = max || new Date();
	return new Date(Math.random() * (max.getTime() - min.getTime()));
};

//format
date.format = function (source, pattern) {
	function replacer(patternPart, result) {
		pattern = pattern.replace(patternPart, result);
	}

	var pad = random.util.pad;

	var year = source.getFullYear();
	var month = source.getMonth() + 1;
	var date = source.getDate();
	var hours = source.getHours();
	var minutes = source.getMinutes();
	var seconds = source.getSeconds();

	replacer(/yyyy/g, pad(year, 4));
	replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
	replacer(/MM/g, pad(month, 2));
	replacer(/M/g, month);
	replacer(/dd/g, pad(date, 2));
	replacer(/d/g, date);

	replacer(/HH/g, pad(hours, 2));
	replacer(/H/g, hours);
	replacer(/hh/g, pad(hours % 12, 2));
	replacer(/h/g, hours % 12);
	replacer(/mm/g, pad(minutes, 2));
	replacer(/m/g, minutes);
	replacer(/ss/g, pad(seconds, 2));
	replacer(/s/g, seconds);

	return pattern;
};

//moke
date.moke = function () {
	return date.format(date.mokeDate());
}