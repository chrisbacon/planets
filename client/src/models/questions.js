var Question = require('./question');

var questions = function() {

};

questions.prototype = {

    makeRequest: function (url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = callback;
      request.send();
    },

    all: function(callback) {

        var self = this;

        this.makeRequest('http://localhost:3000/questions', function() {
            if (this.status !== 200) {
                return;
            }
            var jsonString = this.responseText;
            var results = JSON.parse(jsonString);

            // console.log(results);
            var questions = self.populatePlanets(results.data);
            console.log(questions);
            callback(questions);
        });
    },

    populatePlanets: function(results) {
        var questions = [];
        for (var result of results) {
            var questions = new Question(result);
            questions.push(question);
        }
        return questions;
    }   
}
