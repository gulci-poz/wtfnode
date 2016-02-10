var greet1 = require("./greet1");
greet1();

var greet2 = require("./greet2");
// mamy obiekt, musimy wywołać funkcję
greet2.greet();

// lub bezpośrednio przypisując metodę do zmiennej
//var greet2 = require("./greet2").greet;

var greet3 = require("./greet3");
greet3.greet();
// zmieniamy właściwość na obiekcie greet3
greet3.greeting = "Changed hello world";

// zapamiętujemy referencję do cachowanego obiektu, dlatego tutaj dostajemy ten sam obiekt, który wcześniej zmieniliśmy
// nie ma znaczenia tworzenie nowego obiektu z new w module, przypisanie do module.exports jest tylko jeden raz, potem obiekt jest cachowany
// możemy wiele razy przypisywać do samo require, zawsze dostaniemy referencję do tego samego obiektu
var greet3b = require("./greet3");
greet3b.greet();

// jeśli nie chcemy tego samego obiektu
// przekazujemy konstruktor, nie tworzymy nowego obiektu
var Greet4 = require("./greet4");

// Greet4 jest teraz konstruktorem
var grtr = new Greet4();
grtr.greet();

var greet5 = require("./greet5");
// lub tak i będziemy mieli od razu funkcję
//var greet5 = require("./greet5").greet;

greet5.greet();
