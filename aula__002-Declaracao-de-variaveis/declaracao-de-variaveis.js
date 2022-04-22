//Var, let const
//Var
function iniciarTime(iniciarJogo) {
    var nome = "Arsenio e amigos";
    if (iniciarJogo) {
        var cidade = "Maputo";
    }
    console.log("".concat(nome, " vao jogar em ").concat(cidade));
}
iniciarTime(true);
//let
function iniciarBola(iniciarJogador) {
    var jogador = "Junior e amigos";
    var local;
    if (iniciarJogador) {
        local = "Maputo";
    }
    console.log("".concat(jogador, " vao jogar em ").concat(local));
}
iniciarBola(true);
//const
function iniciarPartida(iniciarjg) {
    var nome = "Soto e amigos";
    var local;
    if (iniciarjg) {
        local = "Maputo";
    }
    console.log("".concat(nome, " vao jogar em ").concat(local));
}
iniciarPartida(true);
