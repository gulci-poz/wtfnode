"use strict";

// dziedziczenie w node.js za pomocą ES6 class

var EventEmitter = require("events");
// nie potrzebujemy modułu util

// extends daje nam dzidziczenie prototypu
// class expression

module.exports = class Greeter extends EventEmitter {
    constructor() {
        // żeby superkonstruktor zadziałał, trzeba dodać extends w nagłówku
        super();
        this.greeting = "Hello World!";
    }

    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit("greet", data);
    }
};
