'use strict';

var http = require('http');
var express = require('express');
var request = require('supertest');
var placehold = require('..');

// Rewriting the _assertBody method, the conversion of binary SVG string.
var _assertBody = request.Test.prototype._assertBody;
request.Test.prototype._assertBody = function(body, res) {
  res.text = res.body.toString();
  res.body = {};

  _assertBody.call(request, body, res);
};


describe('express placehold test:', function () {
  it('should the path be /placehold', function (done) {
    var app = express();
    app.use(placehold());

    request(app)
      .get('/placehold/200')
      .expect('Content-Type', /svg/)
      .expect(200, /200x200/, done);
  });

  it('should the path be /my-path', function (done) {
    var app = express();
    app.use(placehold('/my-path'));

    request(app)
      .get('/my-path/200')
      .expect('Content-Type', /svg/)
      .expect(200, /200x200/, done);
  });

  it('should the path be /use-path', function (done) {
    var app = express();
    app.use('/use-path', placehold());

    request(app)
      .get('/use-path/200')
      .expect('Content-Type', /svg/)
      .expect(200, /200x200/, done);
  });

  it('should the path be /use-path and content be \n      {size: 200x100, bgcolor: eee, color: fff, text: hello world!}', function (done) {
    var app = express();
    app.use('/use-path', placehold());

    request(app)
      .get('/use-path/200x100/eee/fff?text=hello world!')
      .expect(200, /width="200" height="100" fill="#eee[^#]+#fff[^>]+>hello world!/, done)
  });

  it('should call next', function (done) {
    var app = express();
    app.use(placehold());
    app.use('/', function (req, res) {
      res.end('hello');
    });

    request(app)
      .get('/placehold/200')
      .expect('Content-Type', /svg/)
      .expect(200, /200x200/);

    request(app)
      .get('/test/200')
      .expect(200, /hello/, done);
  });

  it('should default 100x100px', function (done) {
    var app = express();
    app.use(placehold());

    request(app)
      .get('/placehold/')
      .expect('Content-Type', /svg/)
      .expect(200, /100x100/, done);
  });
});
