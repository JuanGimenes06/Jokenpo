let jogadorEscolha = 0;
let jogadorPontos = 0;
let computadorEscolha = 0;
let computadorPontos = 0;

let ganhador = -1;

function jogar(escolha){
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    // jogador 1
    if(jogadorEscolha == 1 && computadorEscolha == 1){
        ganhador = 0
    }

    else if(jogadorEscolha == 1 && computadorEscolha == 2){
        ganhador = 2
    }

    else if(jogadorEscolha == 1 && computadorEscolha == 3){
        ganhador = 1
    }

    // jogador 2
    if(jogadorEscolha == 2 && computadorEscolha == 1){
        ganhador = 1
    }

    else if(jogadorEscolha == 2 && computadorEscolha == 2){
        ganhador = 0
    }

    else if(jogadorEscolha == 2 && computadorEscolha == 3){
        ganhador = 2
    }

    // jogador 3
    if(jogadorEscolha == 3 && computadorEscolha == 1){
        ganhador = 2
    }

    else if(jogadorEscolha == 3 && computadorEscolha == 2){
        ganhador = 1
    }

    else if(jogadorEscolha == 3 && computadorEscolha == 3){
        ganhador = 0
    }

    // fim jogador

    let mensagem = document.getElementById('mensagem')

    if (ganhador == 0){
        mensagem.innerText = 'empate'
        console.log(computadorEscolha)
    }
    else if(ganhador == 1){
        mensagem.innerText = 'vitoria jogador'
        console.log(computadorEscolha)
    }
    else if(ganhador == 2){
        mensagem.innerText = 'vitoria computador'
        console.log(computadorEscolha)
    }



}