var imgUI = require('./imgui');
var navUI = require('./navui');
var quizUI = require('./quizui');

var UI = function() {
    new imgUI();
    new navUI();
    new quizUI();

    this.render();
}

UI.prototype = {

    render: function() {
        var body = document.querySelector('body');
        body.className = "quizOpen";
        
        var overlay = document.createElement('div');
        overlay.id = "overlay";

        var cover = document.createElement('div');
        cover.id = "cover";

        body.appendChild(cover);

        var span = document.createElement('span');
        span.className = 'close';
        span.innerHTML = '&times'

        span.onclick = function() {
            body.removeChild(overlay);
            body.removeChild(cover);
            body.className = "";
        }

        var content = document.createElement('div');
        content.id = "content";

        overlay.appendChild(span);
        overlay.appendChild(content);

        var body = document.querySelector('body');
        body.appendChild(overlay);

        var header = document.createElement('h1');
        header.innerText = "NASA Model Solar System"

        var p = document.createElement('p');
        p.innerText = "Hello! Welcome to NASA (Not Another Space App). Learn about the planets of the Solar System in our scale model! Navigate by scrolling sideways or by clicking on a planet in the nav bar below. To find out about a planet, click on it! If you feel confident about your space knowledge, try our quiz by clicking the button in the top right corner."

        content.append(header);
        content.append(p);
    }

}

module.exports = UI;