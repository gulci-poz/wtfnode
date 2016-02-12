// bufory w node.js
// jest moduł buffer, jest to moduł C++ eksponowany przez JS
// przechowywanie i manipulowanie danymi binarnymi
// np. przechowywanie strngów w buforze jako dane binarne, z odpowiednim kodowaniem
// bufor przechowuje dane binarne

// bufor to bardzo ważny aspekt w node, nie potrzeba używać require, żeby z niego korzystać; jest to globalna funkcjonalność eksponowana przez node w JS

// nie potrzeba podawać rozmiaru, można od razu określić zawartość
// bez podania kodowania, domyślnie będzie utf-8
// żądamy przechowania stringa w postaci binarnej kodując utf-8

var buf = new Buffer("Hello", "utf8");

// mamy obiekt bufora, który wypisuje znaki w postaci liczb hex, ale przechowuje dane w postaci binarnej
console.log(buf);
console.log(buf.toString());

// tutaj dostaniemy liczby ze zbioru Unicode (dziesiętne)
// dostaniemy obiekt, a nie string JSON
console.log(buf.toJSON());
//console.log(JSON.parse(JSON.stringify(buf.toJSON())));

// bufor zachowuje sie jak tablica, dostaniemy liczbę Unicode
console.log(buf[2]);

// manipulowanie buforem
buf.write("wo");
console.log(buf.toString());

// bufor to kompletny element, o konkretnym rozmiarze (tutaj wyliczonym na bazie zapisanego łańcucha znaków)
// nie można go powiększać ani zmniejszać
// dlatego nadpisanie kilku znaków zmienia kolejne znaki
// napływające porcje danych o zdefiniowanym rozmiarze mają zastępować poprzednią zawartość bufora
// modelowo: kiedy bufor jest pełny, jego zawartość idzie do przetworzena, bufor się opróżnia i wpływają nowe dane

// jeśli podamy więcej znaków niż wynosi rozmiar bufora, to zapisze się tylko tyle znaków na ile pozwala rozmiar
buf.write("sebastian");
console.log(buf.toString());

// normalnie nie działamy bezpośrednio na buforach, raczej dostajemy bufor od narzędzia lub obiektu związanego z node
