// kod JS dla przeglądarki (klienta)

// nowy moduł - aplikacja, ta sama nazwa co w ng-app
// w tablicy - lista zależności
// wewnątrz mamy odseparowany kod
angular.module("TestApp", []);

// dodajemy kontroler do aplikacji i uruchamiamy funkcję ctrlFunc
angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc () {
    this.message = "Hello";
    // ~7min
}
