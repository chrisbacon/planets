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

        //populate quiz master
        this.questions.all(function(questions) {
          // this.quizMaster = new QuizMaster(questions);
        }.bind(this))

        //create overlaying div, populate welcome screen
        
        var overlay = document.createElement('div');
        overlay.id = "overlay";

        var body = document.querySelector('body');
        body.appendChild(overlay);

        this.populateOverlay(overlay);
    }, 

    populateOverlay: function(overlay) {
        overlay.innerText = "HELLO...welcome to the overlay!!"

        var submit = document.createElement('button');
        submit.innerText = "Submit";
        submit.id = "submit";

        submit.onclick = this.loadQuestion.bind(this);

        overlay.appendChild(submit);
    },

    loadQuestion: function() {
        //is quiz finished? If so go to end()
        //get question off quizmaster and display it. 
        //set onclicks to checkAnswer()
        console.log('question Loaded!')
        if (false) {

        } else {
            this.end();
        }
    },

    checkAnswer: function() {
        //ask quizmaster if answer was correct
        //display yes/no + answer blurb
        //load next question
    },

    end: function() {
        //display final score
        var overlay = document.querySelector('#overlay');
        var body = document.querySelector('body');

        overlay.innerText = "";

        body.removeChild(overlay);
    }

}

module.exports = QuizUI;
