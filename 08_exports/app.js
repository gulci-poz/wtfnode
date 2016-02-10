// kod modułu jest opakowany w funkcję, jest do niej przekazywana zmienna module.exports, wewnątrz można referować do niej jako exports (tak jest w nagłówku funkcji), zmienne i tak wskazują na ten sam obiekt

var greet = require("./greet");

// dostaniemy błąd, funkcje przypisaliśmy pod exports, a require zwraca module.exports, mamy tam cały czas pusty obiekt, wykonanie funkcji nie powiedzie się, ponieważ nie mamy funkcji
// greet();

var greet2 = require("./greet2");
greet2.greet();
