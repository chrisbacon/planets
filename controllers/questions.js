var MongoRunner = require('../db/questions_runner.js');
var mongoRunner = new MongoRunner();

var express = require('express');

var quizRouter = express.Router();

quizRouter.get('/', function(req, res) {
    // console.log(planets);
  mongoRunner.all(function(data){
    console.log(data)
    res.json({data: data });
  });
});


module.exports = quizRouter;