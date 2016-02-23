angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc () {

    // referujemy do zmiennej zdefiniowanej wcześniej po stronie klienta (zawiera ona dane z serwera)
    this.people = clientPeople;
}
