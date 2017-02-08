
var QuizMaster = function(questions) {
  this.questions = questions;
  this.noOfQ = this.questions.length;
  this.score = 0;
  this.quizRunning=true;
  this.currentQuestion = null;
};

QuizMaster.prototype = {
  getQuestion: function() {
    var i = this.questions.length, rndNum = 0,  temp = null;
    console.log(i);
    
    if (12!== i) {
      rndNum = Math.floor(Math.random() * i);
      i -= 1;
      temp = this.questions[i];
      this.questions[i] = this.questions[rndNum];
      this.questions[rndNum] = temp; 
      
      this.questions.splice(rndNum, 1);
      this.currentQuestion = temp;
      return temp;

    } else{

      this.quizRunning = false;
      this.currentQuestion = null;
    }
    
  },

  endOfQuiz: function() {
    var wellDone = "";
    if(this.score < 5) {
      wellDone = "Keep practicing!";
    } else if (4 < this.score < 7) {
      wellDone = "Well done!";
    } else if (6 < this.score < 10) {
      wellDone = "Very impressive!" ;
    } else if (this.score === 10) {
      wellDone = "Congratulations, you are a space expert!"
    }

    if(this.questions.length === 12) {
      return "End of Quiz" + "\n" + "You Scored " + this.score + " out of 10. " + wellDone
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