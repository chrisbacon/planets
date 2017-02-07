var Quizmaster = require('../quizmaster');
var Question = require('../question');
var assert = require('assert');

describe('Quizmaster', function() {

    var quizmaster;
    var question;

    beforeEach(function() {
        quizmaster = new Quizmaster();
        question = new Question({question: "Assuming Pluto is not a planet, how many known planets are there in our solar system?", choices: ["6", "7", "8", "9"], correctAnswer: "8", answerBlurb: "There are 8 known planets in our solar system."});
        question2 = new Question({question: "How far is our moon from the Earth?",
        choices: ["282,400 km","384,400 km","157,600 km","502,600 km"],correctAnswer: "384,400 km",answerBlurb: "The moon is 384,400 km from the Earth."});
        question3 = new Question({question: "How far is the Earth from the Sun?", choices: ["56-59 million km", "87-91 million km", "120-124 million km", "147-152 million km"], correctAnswer: "147-152 million km", answerBlurb: "The Earth's orbit is elliptical, meaning it can be anywhere between 147 million and 152 million km away from the Sun at any given time."})
      });

    it('should be able to identify if question answered correctly', function() {
          assert.equal(quizmaster.answerResponse(question, "8"), "Correct. There are 8 known planets in our solar system.");
          assert.equal(quizmaster.score, 1);
    });

    it('question answered incorrectly', function() {
        assert.equal(quizmaster.answerResponse(question, "6"), "Incorrect. There are 8 known planets in our solar system.")
        assert.equal(quizmaster.score, 0);
    });
    it('get random question', function() {
      var questions = []
      questions.push(question);
      questions.push(question2);
      questions.push(question3);
      quizmaster.getQuestionAndChoices(questions);
      assert.equal(questions.length, 2);
    });

    it('end of quiz message', function() {
      var questions = []
      questions.push(question);
      questions.push(question2);
      questions.push(question3);
      quizmaster.getQuestionAndChoices(questions);
      quizmaster.getQuestionAndChoices(questions);
      quizmaster.getQuestionAndChoices(questions);
      assert.equal(quizmaster.getQuestionAndChoices(questions), "End of Quiz" + "\n" + "You Scored 0 out of 25, Well done!");
    });

})