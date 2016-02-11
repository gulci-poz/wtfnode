var EventEmitter = require("events");
var util = require("util");

// konstruktor, za pomocą którego będziemy tworzyć obiekty dziedziczące z EventEmitter
function Greeter() {
    this.greeting = "Hello World!";
}

// konstruktor Greeter dziedziczy z konstruktora EventEmitter
// uruchamiamy tę funkcję przed dodaniem jakiejkolwiek właściwości do prototypu Greeter, ponieważ wewnątrz util.inherits jest przypisanie nowego obiektu (Object.create)
// prototyp Greeter będzie referował do prototypu EventEmitter, w prototype chain będziemy mieli EventEmitter zaraz po metodach z Greeter
util.inherits(Greeter, EventEmitter);

// Greeter może teraz emitować zdarzenia
Greeter.prototype.greet = function (data) {
    console.log(this.greeting + " : " + data);
    // zmienna data zostanie przekazana do funkcji obsługującej zdarzenie
    this.emit("greet", data);
};

var greeter1 = new Greeter();

// rejestrujemy zdarzenie (listener)
greeter1.on("greet", function (data) {
    // tu mamy dostęp do zmiennej data (trzeba ją wcześniej uwzględnić jako argument)
    console.log("Someone greeted!" + " : " + data);

    // pod this będziemy mieli obiekt Greeter
    //console.log(this);
    //console.log(this._events);

    // w JS pod this jest obiekt, który wyzwolił zdarzenie
});

// tutaj zajdzie zdarzenie greet
greeter1.greet("some data");

// sporo wbudowanych w node.js obiektów jest typu EventEmitter (jeden z filarów node.js - event driven)
