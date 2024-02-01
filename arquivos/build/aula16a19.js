"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
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
    upRam(qtde) {
        qtde >= 0 && qtde <= 234 ? this.ram = qtde : console.log("Quantidade de ram inválido");
    }
}
const computador1 = new Computador("Rapidão", 16, 8.8);
const computador2 = new Computador("Carão", 8, 7.5);
const computador3 = new Computador("Gamer", 64, 12);
computador1.upRam(-1);
computador1.info();
computador2.info();
computador3.info();
