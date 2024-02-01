namespace Veiculos {
    enum Cores{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}
    abstract class Carro {
        private nome: string;
        private motor: Motores.Motor;
        private cor: string;
        constructor(nome: string, motor:Motores.Motor, cor:Cores) {
            this.cor = Cores[cor];
            this.nome = nome;
            this.motor = motor;
        }
        public ligar() {
            this.motor.liga = true;
        }
        public desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return this.motor.liga ? "Sim": "Não"
        }
        get minhaPotencia() {
            return this.motor.pot;
        }
    }
    export class CarroEsportivo extends Carro {
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(6, 300),2)
        }
    }

    export class CarroPopular extends Carro {
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(6, 300),1)
        }
    }
}
namespace Motores {
    class Turbo{
        private potencia:number;
        constructor(potencia:number){
            this.potencia = potencia
        }
        get pot() {
            return this.potencia;
        }
    }

    export class Motor {
        private ligado: boolean;
        private cilindros: number;
        private potencia: number;
        constructor(potencia: number,cilindros:number,turbo?:Turbo) {
            this.cilindros = cilindros;
            this.ligado = false;
            this.potencia = potencia + (turbo? turbo.pot : 0);
        }
        set liga(ligado: boolean){
            this.ligado = ligado
        }
        get liga(){
            return this.ligado
        }
        get pot() {
            return this.potencia
        }
    }

}


const CarroEsportivo = new Veiculos.CarroEsportivo("Rapid",2)
const CarroPopular = new Veiculos.CarroPopular("Normal",1)

console.log(CarroEsportivo)
console.log(CarroPopular)
