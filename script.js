const myChifoumi = ["Pierre", "Feuille", "Ciseaux"];
const myAleaChifoumi = document.getElementById("myAleaChifoumi");
const indexChifoumi = document.getElementById("indexChifoumi");

let nbLife = 10;

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

let choiceAleaThing = myChifoumi[aleaNb(0, myChifoumi.length)];
console.log(choiceAleaThing);

function RecupChoix(choixPlayer) {
   console.log(choixPlayer); 
}

    switch (nbLife) {
    case 0:
        confirm("C'est perdu, voulez-vous rejouer?")
        break;

    default:
        break;
};


