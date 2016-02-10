// z pliku JSON dostaniemy obiekt JS (require zwraca obiekt)
var greetings = require("./greetings.json");

var greet = function () {
    console.log(greetings.en);
};

module.exports = greet;
