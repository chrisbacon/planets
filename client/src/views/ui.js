var imgUI = require('./imgui');
var navUI = require('./navui');
var quizUI = require('./quizui');

var UI = function() {
    new imgUI();
    new navUI();
    new quizUI();
}

module.exports = UI;