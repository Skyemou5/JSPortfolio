import { pokemonList } from './assets/pokemonStuff/pokemon.js'
import { pokeItems } from "./assets/pokemonStuff/items.js"
import { pokeTypes } from "./assets/pokemonStuff/types.js"
import { pokedex } from "./assets/pokemonStuff/pokedex.js"
//--------------create cards----------------
const container = document.querySelector('#cards')
const newDeck = document.getElementById('myDeck')
let cardCountCont = document.querySelector('#cardCount')
let cardNameList = document.querySelector('#cardNames')
let cardCount = 0
cardCountCont.textContent = "Cards "
let count = 1
    //-----filter-----
    // let pokeAll = pokedex
    // let isGrass = function(pokeAll) {
    //     return pokeAll.type === \u8349
    // }

// let grassType = pokedex.filter(isGrass)
// console.log(grassType)
// console.log(pokedex.filter(() => {
//     return pokedex.type["\u8349"]
// }))


// let someArray = [1, 2, 4, 6, 2, 6, 7, 3, 9, 7, 10, 11, 1, 44, 66,
//     {
//         "base": {
//             "Attack": 49,
//             "Defense": 49,
//             "HP": 45,
//             "Sp.Atk": 65,
//             "Sp.Def": 65,
//             "Speed": 45
//         },
//         "type": [
//             "\u8349",
//             "\u6bd2"
//         ]

//     }
// ]

// let result = someArray.filter(function(val) {
//     return type == "\u8349"
// })
// console.log(result)

//-----randomize-----
const testSection = document.getElementById('test')

function pokeCard(name, hp, attack, defence, speed, id, type) {
    this.name = name,
        this.hp = hp,
        this.attack = attack,
        this.defence = defence,
        this.speed = speed,
        this.id = id,
        this.type = type
}
let cardCollection = []
let cardAmount = 2
cardCollection[cardAmount] = cardAmount

let allPokemon = pokedex
let randCard = []

let hiHp = Math.max.apply(null, allPokemon)
console.log(hiHp)


let randBtn = document.getElementById("randomize").addEventListener('click', () => {
    // if (document.contains(getElementsByClassName("card"))) {
    //     document.getElementsByClassName("card").remove()
    // } else {

    for (let i = 0; i < cardCollection.length; i++) {
        // Print each iteration to the console

        randCard = allPokemon[Math.floor(Math.random() * allPokemon.length)]
        let newRandCard = new pokeCard(randCard.ename, randCard.base.HP, randCard.base.Attack, randCard.base.Defense, randCard.base.Speed, randCard.id, randCard.type)

        // cardCollection.fill(newRandCard, 0, 21)
        console.log(newRandCard)
            //--- make cards ----
        let card = document.createElement('div')
        card.className = "card"
        card.addEventListener('click', () => { card.classList.toggle('flip') })
        testSection.appendChild(card)
        let front = document.createElement('div')
        front.className = "front"
        card.appendChild(front)
        let back = document.createElement('div')
        back.className = "back"
        card.appendChild(back)
            //-----------inside of front of cards----------------
        let imgName = (`${newRandCard.id}${newRandCard.name}.png`)
            //name
        let pokeName = document.createElement('h1')
        pokeName.className = "pokeName"
        pokeName.textContent = newRandCard.name
        front.appendChild(pokeName)
            //image
        let frontImg = document.createElement('img')
        frontImg.src = `pokemonPics/${imgName}`
        front.appendChild(frontImg)
            //stats
        let statBox = document.createElement('div')
        statBox.className = "statBox"
        front.appendChild(statBox)
            // ---------HP-----------
        let hpParent = document.createElement('div')
        hpParent.className = "statParent"
        statBox.appendChild(hpParent)

        let hpBar = document.createElement('div')
        hpBar.className = "statBar"
        hpParent.appendChild(hpBar)
        hpBar.style.width = newRandCard.hp + "%"

        let hp = document.createElement('p')
        hp.textContent = "HP " + newRandCard.hp
        hpBar.appendChild(hp)
            //-----------attack------------
        let atkParent = document.createElement('div')
        atkParent.className = "statParent"
        statBox.appendChild(atkParent)

        let atkBar = document.createElement('div')
        atkBar.className = "statBar"
        atkParent.appendChild(atkBar)
        atkBar.style.width = newRandCard.attack + "%"

        let atk = document.createElement('p')
        atk.textContent = "Atk " + newRandCard.attack
        atkBar.appendChild(atk)
            //-------------Def--------------
        let defParent = document.createElement('div')
        defParent.className = "statParent"
        statBox.appendChild(defParent)

        let defBar = document.createElement('div')
        defBar.className = "statBar"
        defParent.appendChild(defBar)
        defBar.style.width = newRandCard.defence + "%"

        let def = document.createElement('p')
        def.textContent = "Def " + newRandCard.defence
        defBar.appendChild(def)
            //-------------speed-----------
        let spdParent = document.createElement('div')
        spdParent.className = "statParent"
        statBox.appendChild(spdParent)

        let spdBar = document.createElement('div')
        spdBar.className = "statBar"
        spdParent.appendChild(spdBar)
        spdBar.style.width = newRandCard.speed + "%"

        let spd = document.createElement('p')
        spd.textContent = "Spd " + newRandCard.speed
        spdBar.appendChild(spd)
            //----------back of card content-----------------
        let backImg = document.createElement('img')
        backImg.src = './assets/pokemonStuff/back.png'
        back.appendChild(backImg)
        let copyBtn = document.createElement('button')
        copyBtn.textContent = "Add to Deck"
        back.appendChild(copyBtn)
            //----------add cards to deck-----------
        copyBtn.addEventListener('click', (event) => {

                cardCount += 1
                cardCountCont.textContent = "Cards " + cardCount
                let cloneCard = event.target.parentNode.parentNode
                let newCard = cloneCard.cloneNode(true)
                    //--------card name stuff
                    // let cardName = newCard.querySelector('h1').textContent
                    // console.log(cardName)
                    // let cardNameItem = document.createElement('li')
                    // cardNameItem.textContent = cardName
                    // cardNameItem.id = cardName
                    // cardCountCont.appendChild(cardNameList)
                    // cardNameList.appendChild(cardNameItem)
                    // console.log(cardNameList)

                // ----- new card ----
                newCard.classList.toggle('flip')
                let getButton = newCard.querySelector('button')
                getButton.textContent = "Remove from Deck"
                getButton.addEventListener('click', (event) => {
                    //-----------remove cards from deck---------------
                    cardCount -= 1
                    cardCountCont.textContent = "Cards " + cardCount
                        //---- get card node ----
                    let getCardRemove = event.target.parentNode.parentNode

                    //---------name stuff ---------
                    // console.log(getCardRemove)
                    // let cardRemoveName = getCardRemove.querySelector('h1').textContent
                    // console.log(cardRemoveName)
                    // let listId = document.getElementById(cardRemoveName)
                    // console.log(listId)
                    // cardNameList.removeChild(listId)

                    //-----remove card-----
                    getCardRemove.parentNode.removeChild(getCardRemove)



                })
                newCard.addEventListener('click', () => { newCard.classList.toggle('flip') })
                newDeck.appendChild(newCard)
                newCard.className = "newCard"
            })
            //}
    }
})