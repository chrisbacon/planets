//since we don't have a database we'll use our front end models at the moment
var planets = require('../client/src/models/planets')();

var express = require('express');

var planetRouter = express.Router();

planetRouter.get('/', function(req, res) {
  res.json({data:planets});
});

planetRouter.get('/:id', function(req, res){
  res.json({data:planets[req.params.id]});
});