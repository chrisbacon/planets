// var QuizUi = require('../views/');

var QuizMaster = function() {
  this.questions = [];
  this.score = 0;
};

QuizMaster.prototype = {
  getQuestionAndChoices: function() {
    var i = this.questions.length, rndNum = 0,  temp = null;
    
    if (0!== i) {
      rndNum = Math.floor(Math.random() * i);
      i -= 1;
      temp = this.questions[i]
      this.questions[i] = this.questions[rndNum];
      this.questions[rndNum] = temp; 
      
      this.questions.splice(rndNum, 1);
      return temp.question + "\n" + "a)" + temp.choices[0] + "\n" + "b)" + temp.choices[1] + "\n" + "c)" + temp.choices[2] + "\n" + "d)" + temp.choices[3];
    } else{
      return this.endOfQuiz();
    }
    
  },

  endOfQuiz: function() {
    if(this.questions.length === 0) {
      return "End of Quiz" + "\n" + "You Scored " + this.score + " out of 25, Well done!"
    }
  },

  answerResponse: function(questionArray, userAnswer) {
    if (userAnswer === questionArray.correctAnswer) {
      this.score ++;
      return "Correct. " + questionArray.answerBlurb;
    } else {
     return "Incorrect. " + questionArray.answerBlurb;
   }
 }
}

module.exports = QuizMaster;