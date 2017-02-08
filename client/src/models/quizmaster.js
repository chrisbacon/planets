
var QuizMaster = function(questions) {
  this.questions = questions
  this.score = 0;
  this.quizRunning=true;
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
      return temp

    } else{

      this.quizRunning = false;
    }
    
  },

  endOfQuiz: function() {
    if(this.questions.length === 0) {
      return "End of Quiz" + "\n" + "You Scored " + this.score + " out of 25, Well done!"
    }
  },

  answerResponse: function(questionArray) {
    if (userAnswer === this.questions.correctAnswer) {
      this.score ++;
      return "Correct. " + this.questions.answerBlurb;
    } else {
     return "Incorrect. " + this.questions.answerBlurb;
   }
 }
}

module.exports = QuizMaster;