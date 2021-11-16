const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const indexLetter = document.getElementById("indexLetter");
const farmList = [
    "Poule",
    "Lapin",
    "Dindon",
    "Coq",
    "Vache"
];
let cptChar = 0;
let nbLife = 10;

alphabet.forEach(Element => {
    let myLetter = Element;
    myLetter = myLetter.toUpperCase();
    let myKey = `<button class ="m-2 btn btn-outline-primary col-2 id="myKey${myLetter}">${myLetter}</button>`;
    myKeyboard.innerHTML += (myKey);
});

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


let nomAnimal = farmList[aleaNb(0, farmList.length)];
let tabChar = nomAnimal.split('');
tabChar.forEach(Element => {
    let myLetterDisplay = Element;
    let displayChar = `<div class="row myLet justify-content-center border border-dark rounded text-center col-2" id="indexLetter${myLetterDisplay}">_</div>`;
    indexLetter.innerHTML += (displayChar);
});

function Action_Jouer() {
    location.reload();
};

myKeyboard.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        let myScore = cptChar;
        e.target.className = "m-2 btn btn-primary col-2";
        e.target.disabled = true;
        tabChar.forEach((Element, index) => {
            console.log(e.target);
            if (e.target.innertext.toLowerCase() == Element) {
                document.getElementById(`indexLetter${index}`).innerText = Element;
            cptChar++;
            }
        })
    }
});

if (cptChar == tabChar.length) {
    window.confirm("Gagné, voulez-vous rejouer?")
};

switch (nbLife) {
    case 0:
        confirm("C'est perdu, voulez-vous rejouer?")
        break;

    default:
        break;
};


