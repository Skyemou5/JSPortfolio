import { pokemonList } from './assets/pokemonStuff/pokemon.js'

console.log(pokemonList)

//--------------create cards----------------
const container = document.querySelector('#cards')
let count = 1;
pokemonList.forEach(element => {
    let card = document.createElement('div')
    card.className = "card"
    card.addEventListener('click', ()=>{card.classList.toggle('flip')})  
    container.appendChild(card)    
    let front = document.createElement('div')
    front.className = "front"
    card.appendChild(front)
    let back = document.createElement('div')
    back.className = "back"
    card.appendChild(back)

    //-----------inside of front of cards
    let numPrefix = count < 10 ? '00' : '0';
    let imgName = (`${numPrefix}${count++}${element.ename}.png`)
    //figure
    let fig = document.createElement('figure')
    //figcaption
    let cap = document.createElement('figcaption')
    //image
    let img = document.createElement('img')
    img.src = `pokemonPics/${imgName}`
    //set pokemon name
    cap.textContent = element.ename
    front.appendChild(fig)
    fig.appendChild(img)
    fig.appendChild(cap)

    //----------back of card content
    let backImg = document.createElement('img')
    backImg.src = './assets/pokemonStuff/back.png'
    back.appendChild(backImg)
}) 


// let numPrefix = count < 10 ? '00' : '0';
// let imgName = (`${numPrefix}${count++}${element.ename}.png`);
// //figure
// let fig = document.createElement('figure');
// //figcaption
// let cap = document.createElement('figcaption');
// //image
// let img = document.createElement('img');
// img.src = `pokemonPics/${imgName}`;
// //set pokemon name
// cap.textContent = element.ename;
// front.appendChild(fig)
// fig.appendChild(img)
// fig.appendChild(cap)
