const myChifoumi = ["Pierre", "Feuille", "Ciseaux"];
const myAleaChifoumi = document.getElementById("myAleaChifoumi");
const indexChifoumi = document.getElementById("indexChifoumi");
let scorePlayer = 0;
let scoreComputer = 0;
let nbGame = 1;
let returnMsg = "";
let clickContact = 0;

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function recupChoix(choixPlayer) {
    if (clickContact == 0) {
        clickContact++;
        //console.log(clickContact);
        let choiceAleaThing = myChifoumi[aleaNb(0, myChifoumi.length)];
        //console.log(choiceAleaThing);
        if (choixPlayer == "Pierre" && choiceAleaThing == "Pierre") {
            walert(sendMessage(choixPlayer, choiceAleaThing, 'nul'));
        } else {
            if (choixPlayer == "Pierre" && choiceAleaThing == "Ciseaux") {
                alert(sendMessage(choixPlayer, choiceAleaThing, 'gagné'));
                scorePlayer++;
            } else {
                if (choixPlayer == "Pierre" && choiceAleaThing == "Feuille") {
                    alert(sendMessage(choixPlayer, choiceAleaThing, 'perdu'));
                    scoreComputer++;
                } else {
                    if (choixPlayer == "Feuille" && choiceAleaThing == "Ciseaux") {
                        alert(sendMessage(choixPlayer, choiceAleaThing, 'perdu'));
                        scoreComputer++;
                    } else {
                        if (choixPlayer == "Feuille" && choiceAleaThing == "Pierre") {
                            alert(sendMessage(choixPlayer, choiceAleaThing, 'gagné'));
                            scorePlayer++;
                        } else {
                            if (choixPlayer == "Feuille" && choiceAleaThing == "Feuille") {
                                alert(sendMessage(choixPlayer, choiceAleaThing, 'nul'));
                            } else {
                                if (choixPlayer == "Ciseaux" && choiceAleaThing == "Feuille") {
                                    alert(sendMessage(choixPlayer, choiceAleaThing, 'gagné'));
                                } else {
                                    if (choixPlayer == "Ciseaux" && choiceAleaThing == "Pierre") {
                                        alert(sendMessage(choixPlayer, choiceAleaThing, 'perdu'));
                                    } else {
                                        if (choixPlayer == "Ciseaux" && choiceAleaThing == "Ciseaux") {
                                            alert(sendMessage(choixPlayer, choiceAleaThing, 'nul'));
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
    } else {
        alert("vous n'avez pas cliqué sur Rejouer");
    }};

    function sendMessage(choixPlayer, choiceAleaThing, msg) {
        return [choixPlayer + " contre " + choiceAleaThing + " = match " + msg];
    };

    function combat() {
        clickContact--;
        if (nbGame == 5) {
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
            //console.log(nbGame);
        }
    };
