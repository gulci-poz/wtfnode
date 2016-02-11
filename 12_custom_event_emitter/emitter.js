// potwierdzenie wystąpienia zdarzenia i odpowiedź na nie
// cały czas imitujemy (modelujemy) zdarzenia w JS

function Emitter() {
    this.events = {};
}

// rejestracja zdarzeń i listenerów w tablicy
// type: typ zdarzenia
// listener: nasłuchiwacz zdarzenia - kod (funkcja), który odpowiada na zdarzenie
// jednego zdarzenia może nasłuchiwać wiele funkcji, w różnych miejscach programu, stąd w tablicy może być kilka funkcji dla jednego zdarzenia
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

// emisja zdarzenia; powiedz, że coś się wydarzyło
// emitujemy zdarzenie dla wszystkich funkcji z tablicy, które nasłuchują
// dokładniej: wywołujemy funkcje, które obsługują wystąpienie danego zdarzenia (type)
Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
};

// referujemy do konstruktora, sami będziemy tworzyć emitery
module.exports = Emitter;

// mechanizm event emitera w node.js bazuje na takim samym pomyśle
// jednak ten w node.js jest wydajniejszy i uwzględnia wiele dodatkowych okoliczności i błędów
