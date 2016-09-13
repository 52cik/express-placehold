'use strict';

var placehold = require('node-placehold');

module.exports = function(prefix) {
  var prefix = prefix || '/placehold';

  return function(req, res, next) {
    var url = req.url;

    if (url.indexOf(prefix) !== 0) {
      next();
    } else {
      placehold({url: url.replace(prefix, '')}, res);
    }
  };

};
