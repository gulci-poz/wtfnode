// callbacks
// dobry do przekazywania danyc, np. wyciągniętych z bazy danych

function greet(callback) {
    console.log("Hello");

    var data = {
        name: "John Doe"
    };

    callback(data);
}

greet(function (data) {
    // przy konkatenacji obiekt nie zostanie rozwiązany, będzie tylko informacja o typie
    console.log("Callback invocation" + " " + data);
    console.log(data);
});

greet(function (data) {
    console.log("Callback invocation 2" + " " + data.name);
});
