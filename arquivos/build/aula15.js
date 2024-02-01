"use strict";
function gsoma(...n) {
    let valor = 0;
    for (let numeros of n) {
        valor += numeros;
    }
    return valor;
}
console.log(gsoma(10, 20));
