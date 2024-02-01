"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}
const computador1 = new Computador("Rapidão", 16, 8.8, true);
const computador2 = new Computador("Carão", 8, 7.5, false);
const computador3 = new Computador("Gamer", 64, 12, true);
console.log(computador1, computador2, computador3);
