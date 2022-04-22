class Cliente {
    nome: string;
    idade: number;
    sexo: string;
    casado: boolean;

    constructor(nome: string, idade: number, sexo: string, casado: boolean){
            this.nome = nome;
            this.idade = idade;
            this.sexo = sexo;
            this.casado = casado;
    }

    apresentar(){
        return `Ola, eu sou ${this.nome} e tenho ${this.idade} anos, do sexo ${this.sexo} , e sou casado? ${this.casado}`
    }

}

let exemplo: Cliente = new Cliente('Arsenio', 23, 'Masculino', false);
let apresentacao: string = exemplo.apresentar();

console.log(apresentacao);


let exemplo1: Cliente = new Cliente('Soto', 20, 'Masculino', true);
let apresentacao1: string = exemplo1.apresentar();

console.log(apresentacao1);