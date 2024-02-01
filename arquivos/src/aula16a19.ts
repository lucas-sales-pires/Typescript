class Computador {
    public nome: string;
    private ram: number;
    private cpu: number;
    private ligado: boolean;

    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }

    info(): void {
        console.log("NOME : " + this.nome)
        console.log("RAM : " + this.ram + " GB")
        console.log("CPU : " + this.cpu + " GHZ")
        console.log(`LIGADO : ${this.ligado ? "SIM" : "NÃO"}`)
        console.log("-----------------------------------")

    }
    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    upRam(qtde: number): void {
        qtde >= 0 && qtde <= 234 ? this.ram = qtde : console.log("Quantidade de ram inválido")
  
     
    }
}
//Instanciar
const computador1 = new Computador("Rapidão", 16, 8.8);
const computador2 = new Computador("Carão", 8, 7.5);
const computador3 = new Computador("Gamer", 64, 12);
computador1.upRam(-1)

computador1.info()
computador2.info()
computador3.info()
// computador1.nome = "Rapidão"
// computador2.nome = "Carão"
// computador3.nome = "Gamer"

// console.log(computador1.nome)
// console.log(computador2.nome)
// console.log(computador3.nome)
