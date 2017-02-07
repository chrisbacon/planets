var MongoClient = require('mongodb').MongoClient;

var MongoRunner = function(){
  this.url = 'mongodb://localhost:27017/projectPlanet';
};

MongoRunner.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('questions');
        collection.find().toArray(function(err, docs) {
        callback(docs);
      });
        console.log("connected!");
      }
    });
  }
};

module.exports = MongoRunner;