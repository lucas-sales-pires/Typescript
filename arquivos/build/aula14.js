"use strict";
const teste = (txt) => {
    console.log(txt);
};
const teste2 = (txt = "Lucas") => {
    console.log(txt);
};
const fsoma = (n) => {
    let s = 0;
    n.forEach((numero) => {
        s += numero;
    });
    return s;
};
console.log(fsoma([1, 2, 3]));
