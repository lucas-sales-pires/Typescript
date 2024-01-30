"use strict";
let dados = {
    nome: "Lucas",
    idade: 25,
    ola() {
        console.log("Olá");
    },
    info: (p) => {
        console.log(p);
    }
};
console.log(dados);
console.log(typeof (dados));
dados.info("Diego");
