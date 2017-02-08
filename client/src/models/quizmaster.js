
var QuizMaster = function(questions) {
  this.questions = questions
  this.score = 0;
  this.quizRunning=true;
};

QuizMaster.prototype = {
  getQuestion: function() {
    var questions = this.questions;
    var i = questions.length, rndNum = 0,  temp = null;
    
    if (0!== i) {
      rndNum = Math.floor(Math.random() * i);
      i -= 1;
      temp = questions[i]
      questions[i] = questions[rndNum];
      questions[rndNum] = temp; 
      
      questions.splice(rndNum, 1);
      return temp

    } else{

      this.quizRunning = false;
    }
    
  },

  endOfQuiz: function(questions) {
    if(questions.length === 0) {
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