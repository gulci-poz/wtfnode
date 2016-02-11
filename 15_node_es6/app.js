// https://github.com/ericdouglas/ES6-Learning
// http://shop.oreilly.com/product/9781785884443.do

// tylko dla VS Code: plik jsconfig.js

// template strings (template literals) - sposób na konkatenację stringów w ES6
// działa poprawnie w najnowszym node.js

var name = "Sebastian Gulczynski";
var greet = `Hello ${ name }`;

console.log(greet);

// JS aside: call() i apply()

var obj = {
    name: "John Doe",
    greet: function () {
        console.log(`Hello ${ this.name }`);
    }
};

obj.greet();

// function borrowing dla wskazanego obiektu
obj.greet.call({ name: "Jane Doe" });

// parametry w tablicy
obj.greet.apply({ name: "Jane Doe" });
