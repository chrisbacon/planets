
var Question = function(options){
  this.question = options.question;
  this.choices = options.choices;
  this.correctAnswer = options.correctAnswer;
}

Question.prototype = {

  checkAnswer: function(input) {
    return input == this.correctAnswer;
  }
}

module.exports = Question;