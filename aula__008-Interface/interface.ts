interface Pessoa{
    idade: number;
    altura? : number;
}

function imprimirIdade(idade: Pessoa){
    console.log(idade.idade);
}

let soto = {nome: 'Arsenio', idade: 22};

imprimirIdade(soto);