const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";


 startGame();

 function startGame () {
    initializeCards(game.createCardsFromTechs());
 }

 function initializeCards (cards){
    let gameBoard = document.getElementById("gameBoard");

        game.cards.forEach (card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id; // add id
        cardElement.classList.add(CARD); // add class
        cardElement.dataset.icon = card.icon // add icon

        createCardContent (card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

    })

 }


 function createCardContent (card, cardElement) {

        createCardFace(FRONT, card, cardElement);
        createCardFace(BACK, card, cardElement)

 }

function createCardFace (face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT) {

        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement);

    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}


function createCardsFromTechs (techs) {

    let cards = [];

    techs.forEach((tech) =>  {
        cards.push(createPairFromTech(tech));
    })
   this.card = cards.flatMap(pair => pair);
   this.shuffleCards();
}

function createPairFromTech (tech) {

    return [{   
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,

    },  {         
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    
    }]


}

function createIdWithTech (tech) {
    return tech + parseInt(Math.random() * 1000);
}

function flipCard () {

    this.classList.add('flip')
}





