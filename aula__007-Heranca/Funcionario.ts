class Funcionario{

    nome: string;
    salario: number;


    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number = 5.50){
        let calculaSalario = this.salario * taxa / 100;
        console.log(`Pagando ${calculaSalario} de imposto`);
    }
}


class Secretario extends Funcionario{

}

class Executivo extends Funcionario{
    pagarImposto(taxa: number = 6){
        console.log("Executivo deve pagar mais!");
        super.pagarImposto(taxa);
    }
}

let soto = new Secretario("Soto", 200)
soto.pagarImposto();


let arsenio = new Executivo("Arsenio", 200);
arsenio.pagarImposto();