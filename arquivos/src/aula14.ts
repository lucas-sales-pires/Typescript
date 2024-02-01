
const teste = (txt?:string):void => {
    console.log(txt);
}

const teste2 = (txt:string = "Lucas"):void => {
    console.log(txt);
}

const fsoma = (n:number[]):number => {
    let s:number = 0;
    n.forEach((numero)=>{
        s += numero
    })
    return s;
}

console.log(fsoma([1,2,3]))
