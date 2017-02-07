// var QuizUi = require('../views/');

var QuizMaster = function() {
  this.questions = [];
  this.score = 0;
};

QuizMaster.prototype = {
  getQuestion: function() {
    var rndNum = 0;
    var temp = null;

    for (var ques of this.questions){
      this.questions.push(ques.question);
    }
    
    for (var i = 0; i < this.questions.length; i-= 1) {
      rndNum = Math.floor(Math.random() * (i + 1))
      temp = this.questions[i]
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
    this.questions.pop();
    return temp;
  },

  correctAnswer: function(questionArray, userAnswer) {
    if (userAnswer === questionArray.correctAnswer) {
      this.score ++;
       return "Correct. " + questionArray.answerBlurb;
    } else {
       return "Incorrect. " + questionArray.answerBlurb;
    }
  }
}

module.exports = QuizMaster;