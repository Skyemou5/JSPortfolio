import { pokemonList } from './assets/pokemonStuff/pokemon.js'

// console.log(pokemonList)

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

    //-----------inside of front of cards----------------
    let numPrefix = count < 10 ? '00' : '0';
    let imgName = (`${numPrefix}${count++}${element.ename}.png`)
    //name
    let pokeName = document.createElement('h1')
    pokeName.textContent =element.ename
    front.appendChild(pokeName)
    //image
    let frontImg = document.createElement('img')
    frontImg.src = `pokemonPics/${imgName}`
    front.appendChild(frontImg)
    //stats
    let statBox = document.createElement('div')
    statBox.className = "statBox"
    front.appendChild(statBox)

    let hp = document.createElement('p')
    hp.textContent = "HP " + element.base.HP
    statBox.appendChild(hp)

    let atk = document.createElement('p')
    atk.textContent = "Atk " + element.base["Attack"]
    statBox.appendChild(atk)

    let def = document.createElement('p')
    def.textContent = "HP " + element.base["Sp.Def"]
    statBox.appendChild(def)

    let spd = document.createElement('p')
    spd.textContent = "Spd " + element.base.Speed
    statBox.appendChild(spd)

    //----------back of card content-----------------
    let backImg = document.createElement('img')
    backImg.src = './assets/pokemonStuff/back.png'
    back.appendChild(backImg)
    let copyBtn = document.createElement('button')
    copyBtn.textContent = "Add to Deck"
    back.appendChild(copyBtn)
    //copyBtn.addEventListener('click', cloneCard())
    
})
function cloneCard(){
    let getCard = document.getElementsByClassName("card")
    let clone = getCard.firstElementChild.cloneNode(true)
    container.appendChild(clone)
}