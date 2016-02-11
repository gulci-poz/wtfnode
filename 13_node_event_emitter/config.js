// uniwersalna reprezentacja zdarzeń, dla uniknięcia literówek
// nazwy wielkimi literami zapisane jako właściwości obiektu, ich wartościami są rzeczywiste nazwy zdarzeń
// dzięki zamknięciu w obiekcie możemy dostać podpowiedzi w kodzie (np. VS Code)

module.exports = {
    events: {
        GREET: "greet"
    }
};
