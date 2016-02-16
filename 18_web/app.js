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
