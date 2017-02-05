var imgUI = require('./imgui');
var navUI = require('./navui');

var UI = function() {
    new imgUI();
    new navUI();
}

module.exports = UI;