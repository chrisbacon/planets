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

        var content = document.createElement('div');
        content.id = "content";

        overlay.appendChild(content);

        var body = document.querySelector('body');
        body.appendChild(overlay);

        this.populateWelcome();
    }, 

    createSubmitButton: function() {
        var submit = document.createElement('button');
        submit.innerText = "Submit";
        submit.id = "submit";

        return submit;
    },

    populateWelcome: function() {
        content.innerText = "HELLO...welcome to the overlay!!"

        var submit = this.createSubmitButton();
        submit.onclick = this.loadNextQuestion.bind(this)

        content.appendChild(submit);
    },

    loadNextQuestion: function() {
        //is quiz finished? If so go to end()
        //get question off quizmaster and display it. 
        //set onclicks to checkAnswer()
        console.log('question Loaded!')
        var quizRunning = true;

        if (quizRunning) {
            this.populateWithQuestion({question: "What planet are we on", choices: ["Mars", "Earth", "Venus"], correct: "Earth"});
        } else {
            this.end();
        }
    },

    createRadioInput: function(choice) {
        var input = document.createElement('input');
        input.value = choice;
        input.name = "choice";
        input.type = "radio";

        return input;
    },

    createLabel: function(choice) {
        var label = document.createElement('label');
        label.for = choice;
        label.innerText = choice;

        return label;
    },

    populateWithQuestion: function(question) {
        var content = document.querySelector('#content');
        content.innerHTML = "";

        var text = document.createElement('p');
        text.innerText = question.question;
        content.appendChild(text);

        var form = document.createElement('form');
        content.appendChild(form);



        for (var choice of question.choices) {
            var input = this.createRadioInput(choice);
            var label = this.createLabel(choice);
            form.appendChild(input);
            form.appendChild(label);
        }

        var submit = this.createSubmitButton();
        form.appendChild(submit)

        form.onsubmit = function(event) {
            event.preventDefault();
            var answer = event.target.elements['choice'].value;
            this.checkAnswer(answer);
        }.bind(this);

    },

    checkAnswer: function(answer) {
        //ask quizmaster if answer was correct
        //display yes/no + answer blurb
        //load next question
        //quizmaster.checkAnswer(answer)
        if (answer === "Earth") {
            this.populateWithResult("Blurb Blurb Blurb You got it right it was the Earth!!");
        } else {
            this.populateWithResult("Blurb blurb blurb you got it wrong it was the Earth!!");
        }
    },

    populateWithResult: function(result) {
        var text = document.createElement('p');
        var content = document.querySelector('#content');
        content.innerHTML = ""

        text.innerText = result;
        content.appendChild(text);

        var submit = this.createSubmitButton();
        submit.onclick = this.loadNextQuestion.bind(this)

        content.appendChild(submit);
    },

    end: function() {
        //display final score
        var content = document.querySelector('#content');
        var body = document.querySelector('body');

        content.innerText = "Quiz Ended!!";

    }

}

module.exports = QuizUI;
