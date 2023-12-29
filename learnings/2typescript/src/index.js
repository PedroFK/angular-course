var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduceYourself = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
// Criando uma instância da classe Person
var person = new Person('John', 25);
// Chamando o método introduceYourself
console.log(person.introduceYourself());
