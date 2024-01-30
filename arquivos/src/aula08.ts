//No object já fica implicito o tipo da variavel
// let dados: object = {
//     nome: "Lucas",
//     idade: 25,
//     status: "A",
//     ola(){
//         console.log("Olá")
//     }
// }

let dados = {
    nome: "Lucas",
    idade: 25,
    ola() {
        console.log("Olá")
    },
    info:(p:string)=>{
        console.log(p)
    }
}
console.log(dados);
console.log(typeof(dados))

dados.info("Diego")
