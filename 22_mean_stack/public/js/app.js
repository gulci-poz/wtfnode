// kod JS dla przeglądarki (klienta)
// kod angular będzie nazdorował html aplikacji (UI)

// nowy moduł - aplikacja, ta sama nazwa co w ng-app
// w tablicy - lista zależności
// wewnątrz mamy odseparowany kod
angular.module("TestApp", []);

// dodajemy kontroler do aplikacji i uruchamiamy funkcję ctrlFunc
angular.module("TestApp").controller("MainController", ctrlFunc);

// this będzie wskazywała na kontroler - view-model (alias vm); w kontrolerze, w html będziemy mieli dostęp do pola message
// angular skorzysta z możliwości modyfikowania DOM i podstawi stringa wewnątrz {{}} - po stronie klienta
function ctrlFunc () {
    this.message = "Hello";

    this.people = [
        {
            name: "John Doe"
        },
        {
            name: "Jane Doe"
        },
        {
            name: "Jim Doe"
        }
    ];
}
