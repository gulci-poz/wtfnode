// konstruktor
var Emitter = require("./emitter");

var emitter = new Emitter();

// zdarzenie to tak naprawdę nazwa właściwości w obiekcie emitera
emitter.on("greet", function () {
    console.log("greet event ocurred");
});

// definiujemy dodatkową funkcję do obsługi zdarzenia
emitter.on("greet", function () {
    console.log("greet event ocurred, another handler");
});

console.log("Hello");
emitter.emit("greet");
