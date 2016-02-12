"use strict";

var Greeter = require("./greeter");

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
