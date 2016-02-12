/*

Asynchroniczność

- asynchroniczny - jednocześnie działa więcej niż jeden proces
- synchroniczny - jeden proces działa w danym czasie
- node działa asynchronicznie, node nie tylko uruchamia kod w V8, ale robi też inne rzeczy
- podobnie, przeglądarka działa asynchronicznie
- silnik V8 działa synchronicznie

*/

/*

Callback - funkcja przekazana do innej funkcji; kiedy funkcja wykona swój kod, daje sygnał przekazanej funkcji (calls back) i wykonuje ją

*/

// libuv jest biblioteką C, która obsługuje system events, zdarzenia pochodzące od systemu operacyjnego
// libuv wysyła zapytanie (request) do OS, np. otwórz plik albo ściągnij plik z Internetu
// libuv ma wewnątrz kolejkę zdarzeń, które zostały zakończone
// libuv działa asynchronicznie do V8 (środowisko node jest asynchroniczne)
// najważniejszym elementem libuv jest pętla zdarzeń (loop event), w której libuv sprawdza kolejkę zdarzeń czy coś się wydarzyło
// OS zwraca zdarzenie do kolejki
// aside: w JS event loop działa synchronicznie, kolejka jest sprawdzana, jeśli wszystkie EC zostały zamknięte; w przeglądarce mogą się dziać inne rzeczy - jest asynchroniczna
// jeśli libuv zobaczy zdarzenie w kolejce, uruchamia callback, który jest przewidziany dla danego zdarzenia, ten kod uruchamia się w V8, jeśli żaden inny kod nie jest wykonywany
// cały ten proces w node jest asynchroniczny
// event driven non-blocking I/O
// I/O dzieje sie na poziomie systemu operacyjnego (komputera lub serwera)
// jeśli V8 jest wolny, to wówczas JS wkracza ze swoimi pseudozdarzeniami i emiterami i pozwala nam wykonać jakiś kod
// serwer - przyjmowanie wielu zapytań bez blokady, kod może się wykonywać w V8 i stopniowo odpowiadać na zapytania (zdarzenia)
// event loop to rzeczywiście pętla while w kodzie C biblioteki libuv (libuv.org)
