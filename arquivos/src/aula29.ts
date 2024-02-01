function f_teste<T,S>(v:T,r:S):S{
    return r
}
// console.log(f_teste<number,string>(10,"lucas"))
// console.log(f_teste<string,boolean>("Lucas",true))
// console.log(f_teste<boolean,string>(true,"Lucas"))


class C_teste<T> {
    public valor:T;
    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<number>(20)

console.log(ct1.valor)
