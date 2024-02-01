abstract class Conta {
    //Public: Acessado de qualquer lugar
    //Private: Acessado apenas na sua própria classe
    //Protected: Acessado somente na sua classe e nas classes filho
    private readonly numero: number;
    protected titular: string;
    private saldoconta: number;

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000) + 1;
    }
    protected info() {
        console.log(`Titular: ${this.titular}`)
        console.log(`Número: ${this.numero}`)
    }
    public get saldo(): number { //Getter
        return this.saldoconta;
    }
    private set saldo(saldoconta: number) { //Setter
        this.saldoconta = saldoconta
    }

    protected deposito(valor: number) {
        this.saldo += valor
    }
    protected saque(valor: number) {
        if (valor <= this.saldoconta) {
            this.saldo -= valor
        }
        else {
            console.log(`Saldo Insuficiente`)

        }

    }
}
// const conta1 = new Conta(12345678,"Lucas")
interface Tributos{
    taxaCalculo:number;
    CalcularTrib(taxa:number):number;

}

class ContaPF extends Conta implements Tributos{
    cpf: number;
    taxaCalculo = 10;
    CalcularTrib(taxa: number): number {
        return taxa * this.taxaCalculo;
    }
    constructor(cpf: number, titular: string) {
        super(titular)
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${this.titular}`)
    }
    public info() {
        super.info()
        console.log(`CPF ${this.cpf}`)
        console.log(`-------------------------`)

    }
    public deposito(valor: number) {
        if (valor < 0) {
            console.log(`Valor inválido`)
            return
        }
        if (valor > 0 && valor <= 1000) {
            super.deposito(valor)
        }
    }
    public saque(valor: number) {
        if (valor < 0) {
            console.log(`Valor inválido`)
            return
        }
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`)
        }
        else {
            super.saque(valor)
        }
    }


}
class ContaPJ extends Conta {
    cnpj: number;
    constructor(cnpj: number, titular: string) {
        super(titular)
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${this.titular}`)
        console.log(`-------------------------`)

    }
    info() {
        super.info();
        console.log(`CNPJ ${this.cnpj}`);
    }
    public deposito(valor: number) {
        if (valor <= 1000 && valor > 0) {
            super.deposito(valor);
        }
    }


}

let conta1 = new ContaPF(17032184778, "Lucas")
let conta2 = new ContaPJ(114454151451, "Bruno")


conta1.deposito(500)
conta1.deposito(500)
console.log(conta1.info())

// console.log(conta1.titular)
// console.log(conta2.numero)
