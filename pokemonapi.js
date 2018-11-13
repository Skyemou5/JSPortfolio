import { pokemonList } from './assets/pokemonStuff/pokemon.js'

console.log(pokemonList)

//create object for the DOM-------------
let cardDOM = document.createElement('div')
cardDOM.className = "cardDiv"
cardDOM.innerText = "This is a new div"
//target where to put the DOM object
document.getElementById('practice').appendChild( cardDOM )

//card flip----------------

// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//     // console.log("click")
//     card.classList.toggle('is-flipped');
// });


//practice----------------

//pokemon set up
const pokeContainer = document.querySelector('#cards')

//create cards-----------------
let count = 1
pokemonList.forEach(element => {
    //create name for calling the picture files
    let numPrefix = count < 10 ? '00' : '0'
    let imgName = (`${numPrefix}${count++}${element.ename}.png`)
    //card container
    let cardContainer = document.createElement('div')
    cardContainer.className = "cardContainer"
    //div for the full card
    let frontCard = document.createElement('div')
    frontCard.className = "front"
    //figure
    let fig = document.createElement('figure')
    //figcaption
    let cap = document.createElement('figcaption')
    //image
    let img = document.createElement('img')
    img.src = `pokemonPics/${imgName}`
    //set pokemon name
    cap.textContent = element.ename

    //print on screen?
    pokeContainer.appendChild(frontCard)
    frontCard.appendChild(fig)

    fig.appendChild(img)
    fig.appendChild(cap)
  
    //back of card-------------
    let backOfCard = document.createElement('div')
    backOfCard.className = "back"

})




// for (i = 0; i < 5; i++) {
//     let newDiv = document.createElement('div')
//     newDiv.className = "cardDiv"
// }