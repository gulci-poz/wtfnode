// API - zestaw narzędzi do budowania aplikacji
// w webie narzędzia te są przeważnie udostępniane za pomocą urli, które przyjmują i wysyłają dane za pomocą HTTP i TCP/IP (zazwyczaj są to tylko dane); zwracane są również dane, a nie aplikacja web (albo strona)
// tworzymy HTTP request i pod wskazany url wysyłamy jakieś dane, które potem API przetwarza i zwraca nam inne dane
// dane mogą być przyjmowane lub zwracane za pomocą JSON
// pojedynczy url w web API nazywamy endpoint
// endpoint może robić różne rzeczy, w zależności od nagłówka zapytania HTTP
// oprócz danych z zapytania możemy w nagłówku zapytania podać pary name/value, które mogą mieć konkretne znaczenie dla API

// serializacja - translacja obiektu do formatu, który można przechować lub wysłać, np. JSON, CSV, XML
// deserializacja - konwersja do obiektu

// robimy serializację danych w silniku JS w node
// dane dostajemy przez API endpoint
// w przeglądarce silnik JS robi deserializację danych
// dane możemy dalej manipulować lub wyświetlać

// można też w drugą stronę
// np. dane wprowadzone przez użytkownika są serializowane do json
// wysyłane do serwera za pomocą endpoint API
// w node jest robiona deserializacja i można nad tymi danymi pracować

// enpoint API to url, nie musi być skonsumowany przez przeglądarkę
// url może być wykorzystany przez inną instancję node, przez PHP, Ruby on Rails lub ASP.NET

// routing - mapowanie żądania HTTP do zawartości (content); nie muszą to być rzeczywiste pliki na serwerze
// wysyłając żądanie nie kontaktujemy się bezpośrednio z zasobami, ale z serwerem, który może wykonać różne czynności, żeby pozyskać zasoby
// np. budowanie html w locie, wyciąganie danych z bazy lub po prostu dostarczenie fizycznego pliku z serwera
