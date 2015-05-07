"use strict";
 
var utils = require('loader-utils');
 
module.exports = function (content) {
    var opt = utils.parseQuery(this.query);
    return opt.data ? opt.data + content : content;
};
