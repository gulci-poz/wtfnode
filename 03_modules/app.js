// require zwróci module.exports, można pominąć rozszerzenie js
// jeśli chcemy załadować plik innego typu, musimy podać rozszerzenie
// możemy ładować pliki .js, .json i .node

// kod modułu nie jest po prostu przekazywany do V8, jest on opakowany, żeby można było zastosować do niego cały mechanizm modułu node; ten kod jest opakowany w function expression - mamy enkapsulację

// require ładuje zawartość pliku, wrapuje w FE, uruchamia i zwraca module.exports
// funkcja require wewnątrz node (inna niż ta, zdefiniowana na obiekcie Module) i module (obiekt "typu" Module) są argumentami dla FE, które się wykonuje
var greet = require('./greet');

greet();
