class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "Mago") {
      ataque = "Magia";
    } else if (this.tipo === "Guerreiro") {
      ataque = "Espada";
    } else if (this.tipo === "Monge") {
      ataque = "Artes Marciais";
    } else if (this.tipo === "Ninja") {
      ataque = "Shoriuken";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

let herois = [
  new Heroi("Gandalf", 1000, "Mago"),
  new Heroi("Aragorn", 87, "Guerreiro"),
  new Heroi("Liu Kang", 30, "Monge"),
  new Heroi("Naruto", 20, "Ninja"),
];
for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
