
var QuizMaster = function(questions) {
  this.questions = questions[1]
  this.score = 0;
  this.quizRunning=true;
  this.currentQuestion = null;
};

QuizMaster.prototype = {
  getQuestion: function() {
    var i = this.questions.length, rndNum = 0,  temp = null;
    
    if (0!== i) {
      rndNum = Math.floor(Math.random() * i);
      i -= 1;
      temp = this.questions[i]
      this.questions[i] = this.questions[rndNum];
      this.questions[rndNum] = temp; 
      
      this.questions.splice(rndNum, 1);
      this.currentQuestion = temp;
      return temp

    } else{

      this.quizRunning = false;
      this.currentQuestion = null;
    }
    
  },

  endOfQuiz: function() {
    if(this.questions.length === 0) {
      return "End of Quiz" + "\n" + "You Scored " + this.score + " out of 25, Well done!"
    }
  },

  answerResponse: function(userAnswer) {
    if (userAnswer === this.currentQuestion.correctAnswer) {
      this.score ++;
      return "Correct. " + this.currentQuestion.answerBlurb;
    } else {
     return "Incorrect. " + this.currentQuestion.answerBlurb;
   }
 }
}

module.exports = QuizMaster;