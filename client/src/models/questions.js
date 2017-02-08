var Question = require('./question');

var Questions = function() {

};

Questions.prototype = {

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
            var questions = self.populateQuestions(results.data);
            console.log(questions);
            callback(questions);
        });
    },

    populateQuestions: function(results) {
        var questions = [];
        for (var result of results) {
            var question = new Question(result);
            questions.push(question);
        }
        return questions;
    }   
}

module.exports = Questions;
