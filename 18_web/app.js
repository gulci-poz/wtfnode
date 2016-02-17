// protokół - zbiór reguł uzgodnionych pomiędzy dwiema stronami w celu komunikowania się, np. klient i serwer
// klient żąda od serwera usługi
// request/response - standardowy format
// socket - kanał komunikacyjny
// TCP - protokół komunikacyjny, w jaki sposób informacja jest wysyłana
// IP - protokół identyfikacji, wzajemna identyfikacja, np. przeglądarki i serwera web
// informacja może być zdefiniowana za pomocą protokołu
// HTTP, FTP, SMTP - protokoły informacji (struktura informacji)
// informacja jest dzielona na pakiety i wysyłana za pomocą TCP i socketu jako kanału komunikacyjnego
// OS może korzystać z TCP/IP do wysyłania/odbierania danych
// node zapewnia dostęp do tych funkcji OS, możemy utworzyć socket w celu nawiązania połączenia sieciowego i przesyłania informacji
// node przeważnie sprawuje rolę serwera web, ale można też zbudować serwer plików lub serwer email
// TCP przypomina strumień
// mamy pipeline pomiedzy klientem i serwerem, gdzie dane wędruja w postaci strumieni
// gniazda są często zamykane, dla nowych żądań otwierane są kolejne gniazda
// WebSocket - gniazda są cały czas otwarte
// port - numer (też socket address); decyduje do którego programu trafią pakiety, program nasłuchuje na danym porcie; node też możemy przypisać port do nasłuchiwania
// HTTP - zasady i formatowanie dla przesyłania danych przez Web, dane są wysyłania przez TCP/IP (istnieje wiele innych protokołów korzystających z TCP/IP)
// transfer nie tylko HyperText, ale m. in. JS, JSON, CSS, obrazów

// w req i res definiujemy pary name/value

/* przykład HTTP request:
CONNECT www.google.com:443 HTTP/1.1
Host: www.google.com
Connection: keep-alive
*/

/* przykład HTTP response:
HTTP/1.1 200 OK
Content-Length: 44
Content-Type: text/html

<html><head>...</head></html>
*/

// MIME type - standard dla określenia typu przesyłanych danych
// Multipurpose Internet Mail Extensions, początkowo zaprojektowany do określania sposobu wysyłania (i rodzaju danych) załączników przez email, przykłady: application/json, text/html, image/jpeg; zaadoptowany przez HTTP do określenia typu przesyłanych danych
// przeglądarka i web serwer muszą rozumieć HTTP i MIME types
// wysyłając dane z node możemy podać MIME type
// w node mamy program http_parser - komponowanie zapytań (z danych tekstowych i binarnych) i dekodowanie odpowiedzi HTTP; oprócz tego program jest też eksponowany w node w postaci JS
// mamy moduły http i https
// moduł _http_server korzysta (wrapuje) z modułu http_parser (kod C i C++), z kolei http korzysta z modułu _http_server
// w node możemy wysłać i przyjąć request oraz wysłać response
