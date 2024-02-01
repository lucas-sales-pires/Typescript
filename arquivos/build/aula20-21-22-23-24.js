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
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo Insuficiente`);
        }
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
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor > 0 && valor <= 1000) {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
    saldo() {
        return super.saldo();
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
    saldo() {
        return this.saldo();
    }
}
const conta1 = new ContaPF(17032184778, "Lucas");
const conta2 = new ContaPJ(114454151451, "Bruno");
conta1.deposito(500);
conta1.deposito(500);
conta1.deposito(500);
conta1.deposito(500);
console.log(conta1.saldo());
