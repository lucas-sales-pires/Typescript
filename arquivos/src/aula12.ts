//VOID sem retorno 
function logar (user:string,password:string):void{ 
    console.log(`User :${user}`)
    console.log(`Senha :${password}`)
}

logar("Lucas","123")
logar("Bruno","00")

//Com retorno

function soma1(n1:number,n2:number):number {
   return  n1 + n2
}

let res:number = soma1(10,5)

console.log(res)

let n_res:number = soma(10,15)
let s_res:string = soma(2,8).toString()

console.log(n_res)
console.log(s_res)
