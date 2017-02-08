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

        var enterName = document.createElement('div');
        enterName.id = 'enterName';

        var userInput = document.querySelector('#userName');

        overlay.appendChild(span);
        overlay.appendChild(content);
        overlay.appendChild(enterName);

        var body = document.querySelector('body');
        body.appendChild(overlay);

        var header = document.createElement('h1');
        header.id = ('welcomeHeader');
        header.innerText = "NASA Model Solar System";

        var p = document.createElement('p');
        p.id = ('welcomeText');
        

        content.appendChild(header);
        content.appendChild(p);

        this.enterName();
        // console.log(this.enterName());
    },

    enterName: function() {
        var enterNameDiv = document.querySelector('#enterName');
        var input = document.createElement('input');
        var enterText = document.createElement('p');
        var enterButton = document.createElement('button');

    input.type = "text";
    input.id = "userName";

    enterButton.type = 'submit';
    enterButton.id = ('enterButton');
    enterButton.innerText = "Let's Go!";

    enterText.innerText = "Enter Your Name:";
    enterText.id = ('enterText');

        enterNameDiv.appendChild(enterText);
        enterNameDiv.appendChild(input);
        enterNameDiv.appendChild(enterButton);

    enterButton.onclick = function() {
        var welcomeText = document.querySelector('#welcomeText');
        var output = input.value;
    localStorage.setItem('output', input.value);
        welcomeText.innerText = "Hello " + output + "!" + " Welcome to NASA (Not Another Space App). Learn about the planets of the Solar System in our scale model! Navigate by scrolling sideways or by clicking on a planet in the nav bar below. To find out about a planet, click on it! If you feel confident about your space knowledge, try our quiz by clicking the button in the top right corner."
    
        enterText.style.visibility = 'hidden'
        input.style.visibility = 'hidden';
        enterButton.style.visibility = 'hidden';
    }
}

}

module.exports = UI;