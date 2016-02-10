// index.js - zbieramy wszystkie pliki .js z folderu greet

var english = require("./english");
var spanish = require("./spanish");

// możemy wyeksponować obiekt, pod value podstawiamy zmienną z modułu
module.exports = {
    english: english,
    spanish: spanish
};
