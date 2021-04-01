var playerName;
var pointsPlayer = 0;
var choicePlayer = 0;

var choicePC = 0;
var pointsPC = 0;

//Sorteia entre dois números aleatóriamente e escolhe a jogada do PC
function raffle(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

//Traduz os números em palavras: 1 - Pedra; 2 - Papel; 3 - Tesoura
function translateChoice(number) {
    if(number == 1) {
        return 'Pedra';
    }
    else if(numero == 2) {
        return 'Papel';
    }
    else if(numero == 3) {
        return 'Tesoura';
    }
}

//Exibe as mensagens do console
function message(text){
    document.getElementById("message").innerHTML = text;
}

//Define o nome do jogador na tela
function defineNamePlayer(name){
    document.getElementById("player-name").innerHTML = name;
}

//Calcula quem ganhou: 0 - Empate; 1 - Joagador; 2 - PC;
function choiceWinner(player, PC){
    if (player==1 && PC==1){
        return 0;
    }
    else if (player==1 && PC==2){
        return 2;
    }
    else if (player==1 && PC==3){
        return 1;
    }
    else if (player==2 && PC==1){
        return 1;
    }
    else if (player==2 && PC==2){
        return 0;
    }
    else if (player==2 && PC==3){
        return 2;
    }
    else if (player==3 && PC==1){
        return 2;
    }
    else if (player==3 && PC==2){
        return 1;
    }
    else if (player==3 && PC==3){
        return 0;
    }
}

//Calcula o placar do jogador
function scoreboardPlayer(){
    pointsPlayer++;
    document.getElementById("player-points").innerHTML = pointsPlayer;
}

//Calcula o placar do PC
function scoreboardPC(){
    pointsPC++;
    document.getElementById("PC-points").innerHTML = pointsPC;
}

// Adiciona a classe selecionado.
function selection(type, choice) {
    document.getElementById(type + '-choice' + choice).classList.add('selected');
  }

  // Remove a classe selecionado.
  function removeSelection(type, choice) {
    document.getElementById(type + '-choice' + choice).classList.remove('selected');
  }

//Função de jogar
function play(choice){
    choicePlayer = choice;
    selection("player", choicePlayer);
       
    choicePC = raffle(1,3);
    selection("PC", choicePC);
            
    var winner = choiceWinner(choicePlayer, choicePC);
    if (winner==0){
        message("Empate");
    }
    else if (winner==1){
        message("Ponto para " + playerName);
        scoreboardPlayer();
    }
    else if (winner==2){
        message("Ponto para PC");
        scoreboardPC();
    }
    setTimeout(function() {
        removeSelection('player', choicePlayer);
        removeSelection('PC', choicePC);
        mensagem(playerName + ' escolha uma opção...');
    }, 3500);
}

document.getElementById("player-choice1").onclick = function() { play(1); };
document.getElementById("player-choice2").onclick = function() { play(2); };
document.getElementById("player-choice3").onclick = function() { play(3); };

playerName = prompt("Qual é o seu nome?")
defineNamePlayer(playerName);

message("Olá " + playerName+ " vamos jogar? Escolha uma opção acima!");
