"use strict";
function f_teste(v, r) {
    return r;
}
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(20);
console.log(ct1.valor);
