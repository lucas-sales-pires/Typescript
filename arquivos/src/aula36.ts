let array = [10,20,30,40]

let [aa,bb,cc,dd] = array

const obj = {
    cor1: "Verde",
    cor2: "Azul",
    cor3: "Amarelo",
    cor4: "Branco"
}

let cor1,cor2,cor3,cor4 = obj
let [nu1=0, nu2=0 ,...nu3] = [10,20,30,40,50,60]

const fcores= ()=>{
    return ["Verde","Amarelo","Azul","Branco"]
}

let [co1,co2,co3,c4] = fcores()

let texto = "Curso de Typescript"

let [...t] = texto.split(" ")

console.log(t)
