//Var, let const


//Var

function iniciarTime(iniciarJogo: boolean){
    var nome = "Arsenio e amigos";
    
    if(iniciarJogo){
        var cidade = "Maputo";
    }

    console.log(`${nome} vao jogar em ${cidade}`);
}


iniciarTime(true);

//let

function iniciarBola(iniciarJogador: boolean){
    let jogador: string ="Junior e amigos";
    let local: string;


    if(iniciarJogador){
        local = "Maputo";
    }

    console.log(`${jogador} vao jogar em ${local}`);
}

iniciarBola(true);


//const

function iniciarPartida(iniciarjg: boolean){
    const nome: string ="Soto e amigos";
    let local: string;

    if(iniciarjg){
        local = "Maputo";
    }

    console.log(`${nome} vao jogar em ${local}`);
}

iniciarPartida(true);