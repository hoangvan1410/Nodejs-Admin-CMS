require('dotenv').config()
require('make-promises-safe')
const express = require('express')
var app = express()
const container = require('./infrastructure/config/container')()
const server = require('./infrastructure/webserver/fastify')(container.cradle)
const PORT = process.env.PORT || 5057
const HOST = process.env.HOST || '0.0.0.0'
const bodyParser = require('body-parser')
const each = require('lodash/fp/each')
const fastify = require('fastify')
const fastifyStatic = require('fastify-static')
const {routes}=require('./ports/routes')
const path = require('path')
// const middleware = function(req, res, next) {
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//     jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
//       if (err) req.user = undefined;
//       req.user = decode;
//       next();
//     });
//   } else {
//     req.user = undefined;
//     next();
//   }
// };
// server.register(middleware)
// server.listen(PORT, HOST, (err, address) => {
//   if (err) {
//     server.log.error(err)
//     process.exit(1)
//   }
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
each(path => {
  server.route(path)
})(routes)

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(PORT);

console.log('todo list RESTful API server started on: ' + PORT);

module.exports = app;