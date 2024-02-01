"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, numero, titular) {
        super(numero, titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, numero, titular) {
        super(numero, titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new ContaPF(17032184778, 12345678, "Lucas");
const conta2 = new ContaPJ(114454151451, 12345645, "Bruno");
console.log(conta1.titular);
console.log(conta2.titular);
