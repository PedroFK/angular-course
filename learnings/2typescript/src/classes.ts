/*
    Modificadores de acesso:
    Public = acesso padrão
    Private = só consegue ser acessado por dentro da classe, no método construtor
        nao posso dar boneco1.name = ...
    Protected = só pode pode ser acessado por classes e subclasses
*/

class Charapter {
  name: string;
  strength: number;
  skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }
  attack(): void {
    console.log(`atacou com ${this.strength} de força`);
  }
}

// Mago é a class filho
class Arqueiro extends Charapter {
  accuracy: number;
  constructor(name: string, strength: number, skill: number, accuracy: number) {
    super(name, strength, skill)
    this.accuracy = accuracy
  }
}

const boneco1 = new Charapter("Omi Di Ferro", 10, 20);
const boneco2 = new Arqueiro("Gavião Arqueiro", 10, 20, 5);

boneco1.attack();
console.log(boneco2.accuracy)