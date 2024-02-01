"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        console.log(`Saldo Insuficiente`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${this.titular}`);
    }
    info() {
        super.info();
        console.log(`CPF ${this.cpf}`);
        console.log(`-------------------------`);
    }
    deposito(valor) {
        if (valor <= 1000 && valor > 0) {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${this.titular}`);
        console.log(`-------------------------`);
    }
    info() {
        super.info();
        console.log(`CNPJ ${this.cnpj}`);
    }
    deposito(valor) {
        if (valor <= 1000 && valor > 0) {
            super.deposito(valor);
        }
    }
}
const conta1 = new ContaPF(17032184778, "Lucas");
const conta2 = new ContaPJ(114454151451, "Bruno");
