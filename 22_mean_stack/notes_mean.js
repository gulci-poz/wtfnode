// stos (stack) - kombinacja wszystkich technologii wykorzystanych przy budowaniu aplikacji; w przypadku web: baza danych, front-end, back-end  i wszystkie inne technologie (też np. design i UX)
// stos - jedna technologia korzysta z wyników danych przez inną technologię, wszystkie pracują na wynik działania aplikacji; to nie jest stos w rozumieniu struktury danych - raczej zestaw technologii, które niekoniecznie w każdym punkcie układają się w stos, ale w danej chwili jedna zależy od wyników drugiej

// Angular - wysyłanie żądań, przyjmowanie odpowiedzi, kontakt z backendem
// MAN - Express jest tak naprawde frameworkiem Node
// Angular to tak naprawdę HTML + CSS + JS
// JS - wspólny mianownik
// poprawniej by było MNEA - wtedy przypomina to stos

// przeglądarka daje silnikowi JS dostęp do funkcji, które nie są częścią standardu JS
// DOM - moduły (obiekty) kodu C++; struktura, którą wykorzystuje przeglądarka, żeby przechowywać i zarządzać stronami www
// przeglądarka daje silnikowi JS możliwość manipulowania DOM
// przeglądarka używa DOM do renderowania stron
// z JS można manipulować DOM, DOM uwzględnia te zmiany i ponownie renderuje stronę; kod JS jest końcówką dla kodu C++
// silnik JS ma dostęp do BOM, np. obiekt window; sam dokument DOM też jest ostatecznie częścią BOM

// BOM - obiekt window jest na górze hierarchii; zestaw obiektów eksponowanych przez przeglądarkę; nie ma standardu do implementacji; przeglądarka parsuje obiekty (węzły) DOM i na tej podstawie tworzy jeden ze swoich obiektów - Document
// obiekty DOM modelują strukturę dokumentów HTML, XHTML oraz XHTML

// response to tak naprawdę string, przeglądarka decyduje, co z nim zrobić
// string jest przetwarzany, przeglądarka buduje strukturę drzewa DOM
// różnice w implementacji przeglądarek i silników JS - konieczny jest plumbing code

// obiekt XMLHttpRequest (XHR) JavaScript - możemy przesyłać żądania www za pomocą protokołu HTTP; żądania są przetwarzane w tle, asynchronicznie do kodu JS w przeglądarce; odbieranie odpowiedzi nie powoduje konieczności przeładowania całej strony

// AngularJS
// dyrektywa - atrybut lub wartość atrybutu HTML
// ng-app - nazwa aplikacji, oznaczenie fragmentu kodu HTML, przeważnie tag html
// ng-controller - kontrola nad kodem w danym segmencie, np. tag body
// node dostarcza zawartość statycznych plików z public, ale ich nie przetwarza, będzie to robiła przeglądarka (klient); żądanie idzie od klienta
// w head możemy ładować skrypty odpowiedzialne za renderowanie strony, będą załadowane przed elementami z body
// ng-model - podstawienie danych z modelu, podobnie jak z {{}} mamy update DOM; każde wpisanie znaku pociąga wystąpienie zdarzenia - do tego binding śledzi modyfikacje zmiennej
// takiej dynamiki i szybkości nie dało by się osiągnąć wysyłając zapytania do serwera (node), tutaj wszystko dzieje się po stronie klienta
// można coś za jednym zapytaniem ściągnąć, np. UI w postaci JSON i potem dynamicznie nim sterować za pomocą angular, nie robiąc ani jednego zbędnego zapytania
// w tle angular może też wysyłać żądania i odbierać dane z serwera
// ng-repeat - iterowanie po obiekcie JS, np. tablicy
// używając szablonu, w response z node przesyłamy całą stronę; jeśli chcielibyśmy przesyłać tylko kawałek danych (np. JSON), to można użyć AJAX, angular lub web API
