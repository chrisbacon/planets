//since we don't have a database we'll use our front end models at the moment
// var planets = require('../db/planets.js')();
var MongoRunner = require('../db/mongo_runner.js');
var mongoRunner = new MongoRunner();

var express = require('express');

var planetRouter = express.Router();

planetRouter.get('/', function(req, res) {
    // console.log(planets);
  mongoRunner.all(function(data){
    res.json({data: data });
  });
});

planetRouter.get('/:id', function(req, res){
  res.json({data:planets[req.params.id]});
});

module.exports = planetRouter;