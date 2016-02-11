// events and the event emitter
// na tych pomysłach zbudowane są podstawowe moduły node.js
// zdarzenie - coś co wydarzyło się w aplikacji, a na co jesteśmy w stanie odpowiedzieć (nasłuchujemy)
// w node.js mamy dwa rodzaje zdarzeń
// system events, pochodzą od C++ core (lower level); dzięki bibliotece libuv node obsługuje zdarzenia pochądzące z systemu (np. związane z obsługą plików lub otrzymaniem danych z Internetu) - tego JS nie ma
// custom events, pochodzą od JS core; nie jest to kod C++, jest to Event Emitter w JS core (plik, który zawiera ten kod)
// często są mylone ponieważ JS pełni funkcję wrapera dla kodu C++; zdarzenie w libuv generuje custom event w JS
// JS udaje zdarzenia, to nie są prawdziwe zdarzenia; w JS nie ma obiektu (w ogóle konceptu) zdarzenia; można tworzyć biblioteki z kodem, który imituje wystąpienie jakiegoś zdarzenia i daje możliwość odpowiedzi (reakcji)

// małe przypomnienie z tablic

var arr = [];

arr.push(function () {
    console.log("Hello world 1");
});
arr.push(function () {
    console.log("Hello world 2");
});
arr.push(function () {
    console.log("Hello world 3");
});

// pojedyncze wywołanie
arr[0]();

// wywołanie po kolei wszystkich funkcji
arr.forEach(function(item) {
    item();
});
