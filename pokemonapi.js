import { pokemonList } from './assets/pokemonStuff/pokemon.js'

console.log(pokemonList)

//create object for the DOM-------------
let cardDOM = document.createElement('div')
cardDOM.className = "cardDiv"
cardDOM.innerText = "This is a new div"
//target where to put the DOM object
document.getElementById('practice').appendChild( cardDOM )




//pokemon set up
const pokeContainer = document.querySelector('#cards')

//create cards-----------------
let count = 1
pokemonList.forEach(element => {
    //create name for calling the picture files
    let cardContainer = makeCardFront(element);

    //back of card
    //makeCardBack(cardContainer);
  
})

function makeCardFront(element) {
    let numPrefix = count < 10 ? '00' : '0';
    let imgName = (`${numPrefix}${count++}${element.ename}.png`);
    //card container
    let cardContainer = document.createElement('div');
    cardContainer.className = "cardContainer cardContainer--card";
    //div for the full card
    let frontCard = document.createElement('div');
    frontCard.className = "front";
    //figure
    let fig = document.createElement('figure');
    //figcaption
    let cap = document.createElement('figcaption');
    //image
    let img = document.createElement('img');
    img.src = `pokemonPics/${imgName}`;
    //set pokemon name
    cap.textContent = element.ename;
    //print on screen?
    pokeContainer.appendChild(cardContainer);
    cardContainer.appendChild(frontCard);
    frontCard.appendChild(fig);
    fig.appendChild(img);
    fig.appendChild(cap);
    return cardContainer;
}

makeCardBack(cardContainer => {
    let backOfCard = document.createElement('div');
    backOfCard.className = "back";
    let backImg = document.createElement('img');
    backImg.className = "backImg";
    backImg.src = '../assets/pokemonStuff/back.png';
    backOfCard.appendChild(cardContainer);
    backImg.appendChild(backOfCard);
})
//card flip----------------
//set up
// let card = document.getElementsByClassName('cardContainer')
// //click to flip
// card.addEventListener( 'click', () => {
//     // console.log("click")
//     card.classList.toggle('is-flipped');
// });


// for (i = 0; i < 5; i++) {
//     let newDiv = document.createElement('div')
//     newDiv.className = "cardDiv"
// }