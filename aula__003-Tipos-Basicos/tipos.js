//boolean = verdade / falso
var estadoPagamento = true;
var casado = false;
//number
var idade = 20;
var altura = 1.70;
//string
var nome = "Arsenio";
var apelido = 'Soto';
//template string
var sobreNome = "Jose";
//concatenacao normal
var concatenacao = "ola, meu nome e " + nome + " e tenho " + idade + " anos ";
console.log(concatenacao);
//template string
console.log("Ola, meu nome e ".concat(nome, " e tenho ").concat(idade, " anos"));
//arrays
var notas = [7, 8, 5, 10];
//tuple
var alunos = ['Arsenio', 10, true];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Varde"] = 0] = "Varde";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Rosa"] = 2] = "Rosa";
    Cor[Cor["preto"] = 3] = "preto";
    Cor[Cor["Branco"] = 4] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Vermelho;
//Any
var qulaquerValor = 5;
qulaquerValor = "Arsenio";
qulaquerValor = true;
//void
function alert() {
    alert("Operacao bem sucedidd");
}
//null e undefined
var undf = undefined;
var nulls = null;
