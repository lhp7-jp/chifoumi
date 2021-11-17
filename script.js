const myChifoumi = ["Pierre", "Feuille", "Ciseaux"];
const myAleaChifoumi = document.getElementById("myAleaChifoumi");
const indexChifoumi = document.getElementById("indexChifoumi");
let scorePlayer = 0;
let scoreComputer = 0;
let nbGame = 0;

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function recupChoix(choixPlayer) {
    let workchoixPlayer = choixPlayer;
    console.log(choixPlayer);
    let choiceAleaThing = myChifoumi[aleaNb(0, myChifoumi.length)];
    console.log(choiceAleaThing);
    if (workchoixPlayer == "Pierre" && choiceAleaThing == "Pierre") {
        sendMessage(nul);
    } else {
        if (workchoixPlayer == "Pierre" && choiceAleaThing == "Ciseaux") {
            sendMessage(`gagné`);
            scorePlayer++;
        } else {
            if (workchoixPlayer == "Pierre" && choiceAleaThing == "Feuille") {
                sendMessage(`perdu`);
                scoreComputer++;
            } else {
                if (workchoixPlayer == "Feuille" && choiceAleaThing == "Ciseaux") {
                    sendMessage(`perdu`);
                    scoreComputer++;
                } else {
                    if (workchoixPlayer == "Feuille" && choiceAleaThing == "Pierre") {
                        sendMessage(`gagné`);
                        scorePlayer++;
                    } else {
                        if (workchoixPlayer == "Feuille" && choiceAleaThing == "Feuille") {
                            sendMessage(`nul`);
                        } else {
                            if (workchoixPlayer == "Ciseaux" && choiceAleaThing == "Feuille") {
                                sendMessage(`gagné`);
                            } else {
                                if (workchoixPlayer == "Ciseaux" && choiceAleaThing == "Pierre") {
                                    sendMessage(`perdu`);
                                } else {
                                    if (workchoixPlayer == "Ciseaux" && choiceAleaThing == "Ciseaux") {
                                        sendMessage(`nul`);
                                    } else {
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function sendMessage(msg) {
    window.confirm(choixPlayer + " contre " + choiceAleaThing + " = match " + msg);
    console.log(sendMessage(nul));
};

function combat() {
    if (nbGame == 10) {
        if (scorePlayer > scoreComputer) {
            window.confirm(" Vainqueur le joueur - Score du joueur = " + scorePlayer + " Score de l ordinateur = " + scoreComputer);
            location.reload();
        } else if (scorePlayer = scoreComputer) {
            window.confirm(" Match nul - Score du joueur = " + scorePlayer + " Score de l ordinateur = " + scoreComputer);
            location.reload();
        } else {
            window.confirm(" Vainqueur l ordinateur - Score du joueur = " + scorePlayer + " Score de l ordinateur = " + scoreComputer);
            location.reload();
        }
    } else {
        nbGame++;
        console.log(nbGame);
    }
};
