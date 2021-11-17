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

function recupChoix() {
    console.log();
    let choixPlayer = [1];
    console.log(choixPlayer);
};

function choixaleaNb() {
    let choiceAleaThing = myChifoumi[aleaNb(0, myChifoumi.length)];
    console.log(choiceAleaThing);
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
        choixaleaNb();
        recupChoix();
        resultat();
        nbGame++;
        console.log(nbGame);
    }
};

function resultat(choixPlayer) {
    if (choixPlayer == "Pierre" && choiceAleaThing == "Pierre") {
        sendMessage(nul);
    } else {
        if (choixPlayer == "Pierre" && choiceAleaThing == "Ciseaux") {
            sendMessage(gagné);
            scorePlayer++;
        } else {
            if (choixPlayer == "Pierre" && choiceAleaThing == "Feuille") {
                sendMessage(perdu);
                scoreComputer++;
            } else {
                if (choixPlayer == "Feuille" && choiceAleaThing == "Ciseaux") {
                    sendMessage(perdu);
                    scoreComputer++;
                } else {
                    if (choixPlayer == "Feuille" && choiceAleaThing == "Pierre") {
                        sendMessage(gagné);
                        scorePlayer++;
                    } else {
                        if (choixPlayer == "Feuille" && choiceAleaThing == "Feuille") {
                            sendMessage(nul);
                        } else {
                            if (choixPlayer == "Ciseaux" && choiceAleaThing == "Feuille") {
                                sendMessage(gagné);
                            } else {
                                if (choixPlayer == "Ciseaux" && choiceAleaThing == "Pierre") {
                                    sendMessage(perdu);
                                } else {
                                    if (choixPlayer == "Ciseaux" && choiceAleaThing == "Ciseaux") {
                                        sendMessage(nul);
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


