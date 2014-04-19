'use strict';

var random = require('../index');

var color = module.exports = {};

color.pools = {
	//from http://brandcolors.net/
	brand: {
		'4ormat' : '#fb0a2a',
		'500px' : '#00aeef',
		'aboutme' : '#00405d',
		'aboutme2' : '#062f3c',
		'aboutme3' : '#2b82ad',
		'aboutme4' : '#cc7a00',
		'aboutme5' : '#ffcc33',
		'addvocate' : '#ff3322',
		'adobe' : '#ff0000',
		'adobe2' : '#fbb034',
		'adobe3' : '#ffdd00',
		'adobe4' : '#c1d82f',
		'adobe5' : '#00a4e4',
		'adobe6' : '#8a7967',
		'adobe7' : '#6a737b',
		'aim' : '#ffd900',
		'amazon' : '#ff9900',
		'amazon2' : '#146eb4',
		'android' : '#a4c639',
		'angieslist' : '#7fbb00',
		'aol' : '#ff0b00',
		'aol2' : '#00c4ff',
		'asana' : '#1f8dd6',
		'asana2' : '#34ad00',
		'atlassian' : '#003366',
		'behance' : '#1769ff',
		'bigcartel' : '#a0ac48',
		'bigcartel2' : '#70b29c',
		'bitly' : '#ee6123',
		'bitly2' : '#61b3de',
		'blogger' : '#f57d00',
		'boeing' : '#0039a6',
		'bookingcom' : '#003580',
		'carbonmade' : '#613854',
		'cheddar' : '#ff7243',
		'cocacola' : '#ed1c16',
		'codeschool' : '#616f67',
		'codeschool2' : '#c68143',
		'creativemarket' : '#8ba753',
		'delicious' : '#3399ff',
		'delicious2' : '#222222',
		'delicious3' : '#eeeeee',
		'dell' : '#0085c3',
		'dell2' : '#7ab800',
		'dell3' : '#f2af00',
		'dell4' : '#dc5034',
		'dell5' : '#ce1126',
		'dell6' : '#b7295a',
		'dell7' : '#6e2585',
		'dell8' : '#71c6c1',
		'dell9' : '#5482ab',
		'dell10' : '#009bbb',
		'dell11' : '#444444',
		'dell112' : '#eeeeee',
		'designmoo' : '#e64b50',
		'designmoo2' : '#dbc65d',
		'deviantart' : '#4e6252',
		'designernews' : '#2d72d9',
		'devour' : '#ff0000',
		'dewalt' : '#febd17',
		'disqus' : '#2e9fff',
		'dribbble' : '#444444',
		'dribbble2' : '#ea4c89',
		'dribbble3' : '#8aba56',
		'dribbble4' : '#ff8833',
		'dribbble5' : '#00b6e3',
		'dribbble6' : '#9ba5a8',
		'dropbox' : '#007ee5',
		'dropbox2' : '#7b8994',
		'dropbox3' : '#47525d',
		'dropbox4' : '#3d464d'
 	}
}

//get all brand pool values
color.brands = function () {
	var result = [];
	var brand = color.pools.brand;
	for (var key in brand) {
		result.push(brand[key]);
	}

	return result;
};

color.mock = function () {
	//var color = Math.floor(Math.random() * (16*16*16*16*16*16 -1)).toString(16);
	//todo: change to use brand pool
	return random.pick(color.brands());
};
