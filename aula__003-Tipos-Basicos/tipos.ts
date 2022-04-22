//boolean = verdade / falso

let estadoPagamento: boolean = true;

let casado : boolean = false;


//number
let idade: number = 20;
let altura: number = 1.70;

//string
let nome: string = "Arsenio";
let apelido: string = 'Soto';

//template string
let sobreNome: string = "Jose";

//concatenacao normal
let concatenacao = "ola, meu nome e "+ nome+ " e tenho " + idade+ " anos ";
console.log(concatenacao);

//template string
console.log(`Ola, meu nome e ${nome} e tenho ${idade} anos`);

//arrays
let notas: number[] = [7, 8, 5, 10];

//tuple
let alunos: [string, number, boolean] = ['Arsenio', 10 ,true];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Enum
enum Cor {Varde, Vermelho, Rosa, preto, Branco};

let corFundo: Cor = Cor.Vermelho;

//Any
let qulaquerValor: any = 5;
qulaquerValor = "Arsenio";
qulaquerValor = true;

//void

function alert(): void{
    alert("Operacao bem sucedida");
}

//null e undefined

let undf: undefined = undefined;
let nulls: null = null;
