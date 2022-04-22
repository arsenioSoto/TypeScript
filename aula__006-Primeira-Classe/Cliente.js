var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, sexo, casado) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.casado = casado;
    }
    Cliente.prototype.apresentar = function () {
        return "Ola, eu sou ".concat(this.nome, " e tenho ").concat(this.idade, " anos, do sexo ").concat(this.sexo, " , e sou casado? ").concat(this.casado);
    };
    return Cliente;
}());
var exemplo = new Cliente('Arsenio', 23, 'Masculino', false);
var apresentacao = exemplo.apresentar();
console.log(apresentacao);
var exemplo1 = new Cliente('Soto', 20, 'Masculino', true);
var apresentacao1 = exemplo1.apresentar();
console.log(apresentacao1);
