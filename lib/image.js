'use strict';

var random = require('../index');

var image = module.exports = {};

//defaults
//TODO
image.defaults = {
    size: [
        "90x30","90x60","90x120","90x180",
        "120x30","120x60","120x120","120x180",
        "150x30","150x60","150x120","150x180",
        "180x30","180x60","180x120","180x180",
    ]
};

//moke
image.moke = function (opts) {
    var url = 'http://dummyimage.com/';

    //TODO: now we just handle three param
    //no format and foreground
    var defaultOpts = {
        size: random.pick(image.defaults.size),
        background: random.color.mock(),
        text: 'yc random'
    };
    
    opts = random.util._.defaults(opts, defaultOpts);

    return url + opts.size + '/' + opts.background + '&text=' + opts.text;
};

//dataImage
image.dataImage = function (size, text) {
    //TODO: check or not?
    //Note: node environment has no document
    if (typeof document !== "undefined") {
        var canvas = document.creatElement('canvas');
        var ctx = canvas.getContext('2d');

        size = size || random.pick(imgae.defaults.size);
        text = text || 'yc random';

        //parseInt
        size = size.split('x');

        var width = '100';
        var height = '100';

        if (size.length == 2) {
            width = parseInt(size[0], 10);
            height = parseInt(size[1], 10);
        }

        var background = random.color.mock();

        canvas.width = width;
        canvas.height = height;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);

        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(text, width/2, height/2, width);

        //core
        return canvas.toDataURL('image/png');

    }
};
