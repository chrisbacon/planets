var Questions = require('../models/questions');
// var QuizMaster = require('../models/quizmaster')
var Question = require('../models/question');

var QuizUI = function() {
  this.questions = new Questions();
  
  this.renderStartButton();
}

QuizUI.prototype = {

    renderStartButton: function() {
        var startButton = document.createElement('button');
        startButton.innerText = "Start Quiz";
        startButton.id = "quizStart";

        var body = document.querySelector('body');
        body.appendChild(startButton);

        startButton.onclick = this.loadQuiz.bind(this);
    },

    loadQuiz: function() {

        console.log('button clicked')
        //populate quiz master
        this.questions.all(function(result) {
          // this.quizMaster = new QuizMaster(result);
        }.bind(this))

        //create overlaying div, populate welcome screen
    }, 

    loadQuestion: function() {
        //is quiz finished? If so go to end()
        //get question off quizmaster and display it. 
        //set onclicks to checkAnswer()
    },

    checkAnswer: function() {
        //ask quizmaster if answer was correct
        //display yes/no + answer blurb
        //load next question
    },

    end: function() {
        //display final score
    }

}

module.exports = QuizUI;
