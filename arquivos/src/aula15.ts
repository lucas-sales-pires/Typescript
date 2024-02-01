function gsoma(...n:number[]) {       
     let valor:number = 0;
    for(let numeros of n) {
        valor += numeros
    }

    // n.forEach((j)=>{
    //     valor += j;
    // })
    return valor;
}

console.log(gsoma(10,20))
