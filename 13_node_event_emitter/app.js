// require zwraca funkcję (konstruktor) EventEmitter

var Emitter = require("events");
var eventConfig = require("./config").events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function () {
    console.log("greet event ocurred");
});

emitter.on(eventConfig.GREET, function () {
    console.log("greet event ocurred, another handler");
});

console.log("Hello");
emitter.emit(eventConfig.GREET);

// zdarzenia node.js są uwzględnione w poszczególnych modułach
// część modułów jest zbudowanych na bazie zdarzeń
// pusty obiekt emitter nie zawiera żadnych zdarzeń (w konstruktorze też ich nie ma)
//console.log(Emitter.prototype);

// magic strings - string, który ma specjalne znaczenie w naszym kodzie
// np. nazwy zdarzeń
// literówka może spowodować wystąpienie buga, trudno go znaleźć, jeśli chcielibyśmy szukać w stringach, a nie w zmiennych
