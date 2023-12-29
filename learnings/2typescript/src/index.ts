class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public introduceYourself(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Criando uma instância da classe Person
  const john = new Person('John', 25);
  
  // Chamando o método introduceYourself
  console.log(john.introduceYourself());