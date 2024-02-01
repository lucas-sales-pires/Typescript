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
    info() {
        console.log("NOME : " + this.nome);
        console.log("RAM : " + this.ram + " GB");
        console.log("CPU : " + this.cpu + " GHZ");
        console.log(`LIGADO : ${this.ligado ? "SIM" : "NÃO"}`);
        console.log("-----------------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const computador1 = new Computador("Rapidão", 16, 8.8, true);
const computador2 = new Computador("Carão", 8, 7.5, false);
const computador3 = new Computador("Gamer", 64, 12, true);
computador2.ligado = true;
computador1.info();
computador2.info();
computador3.info();
