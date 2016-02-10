exports = function () {
    console.log("Hello");
};

// exports można zmienić (mutate), np. dodająć właściwość lub metodę do obiektu
// -> greet2.js

// funkcja
console.log(exports);

// pusty obiekt
console.log(module.exports);

console.log(exports === module.exports);

// zmieniliśmy zawartość exports, ale module.exports nie zmieniło się
// operator przypisania = w JS zrywa referencję, przypisaliśmy do exports nową lokację w pamięci

// require zwraca module.exports a nie exports
// -> app.js

// nie musimy się martwić o rozmiar pliku (dłuższa nazwa pliku), ten kod wykonuje się na serwerze, nie będzie ściągany przez przeglądarkę

// dla pewności i jasności kodu używamy module.exports
