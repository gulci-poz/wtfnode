"use strict";

// class w ES6 to syntactic sugar, pod maską wszystko dzieje się tak jak dotychczas
// w nowym podejściu nie widać koncepcji prototypu; class sprawia wrażenie, że rzeczywiście istnieją jakieś klasy

// możliwość definiowania konstruktora oraz metod na prototypie
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log("Hello, " + this.firstname + " " + this.lastname);
    }
}

// nie definiujemy osobno funkcji konstruktora i metod na prototypie
// w dalszym ciągu używamy new
var john = new Person("John", "Doe");
john.greet();

var jane = new Person("Jane", "Doe");
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
