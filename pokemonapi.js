import { pokemonList } from './assets/pokemonStuff/pokemon.js'
import { pokeItems } from "./assets/pokemonStuff/items.js"
import { pokeTypes } from "./assets/pokemonStuff/types.js"
import { pokedex } from "./assets/pokemonStuff/pokedex.js"
//--------------create cards----------------
const container = document.querySelector('#cards')
const newDeck = document.getElementById('myDeck')
let cardCountCont = document.querySelector('#cardCount')
let cardCount = 0
cardCountCont.textContent = "Cards "
let count = 1
let cardCollection = []

//put cards in here
//-----randomize-----
const testSection = document.getElementById('test')

function pokeCard(name, hp, attack, defence, speed, id) {
    this.name = name,
        this.hp = hp,
        this.attack = attack,
        this.defence = defence,
        this.speed = speed,
        this.id = id
}
//-----------------filter types of pokemon--------------
const GrassTypeFilter = pokeTypes["cname"]
    // console.log(pokeTypes)
console.log(GrassTypeFilter)

let NormalType = pokedex.filter(NormalPokemon => NormalPokemon["type"] == "\u4e00\u822c")
let FightingType = pokedex.filter(FightingPokemon => FightingPokemon["type"] == "\u683c\u6597")
let FlyingType = pokedex.filter(FlyingPokemon => FlyingPokemon["type"] == "\u98de\u884c")
let PoisonType = pokedex.filter(PoisonPokemon => PoisonPokemon["type"] == "\u6bd2")
let GroundType = pokedex.filter(GroundPokemon => GroundPokemon["type"] == "\u5730\u4e0a")
let RockType = pokedex.filter(RockPokemon => RockPokemon["type"] == "\u5ca9\u77f3")
let BugType = pokedex.filter(BugPokemon => BugPokemon["type"] == "\u866b")
let GhostType = pokedex.filter(GhostPokemon => GhostPokemon["type"] == "\u5e7d\u7075")
let SteelType = pokedex.filter(SteelPokemon => SteelPokemon["type"] == "\u94a2")
let FireType = pokedex.filter(FirePokemon => FirePokemon["type"] == "\u708e")
let GrassType = pokedex.filter(GrassPokemon => GrassPokemon["type"] == "\u8349")
let WaterType = pokedex.filter(WaterPokemon => WaterPokemon["type"] == "\u6c34")
let ElectricType = pokedex.filter(ElectricPokemon => ElectricPokemon["type"] == "\u7535")
let PsychicType = pokedex.filter(PhsychicPokemon => PhsychicPokemon["type"] == "\u8d85\u80fd")
let IceType = pokedex.filter(IcePokemon => IcePokemon["type"] == "\u51b0")
let DragonType = pokedex.filter(DragonPokemon => DragonPokemon["type"] == "\u9f99")
let DarkType = pokedex.filter(DarkPokemon => DarkPokemon["type"] == "\u6076")
let FairyType = pokedex.filter(FairyPokemon => FairyPokemon["type"] == "\u5996\u7cbe")


//Bormal button
let NormalBtn = document.getElementById("normalBtn").addEventListener('click', () => {
    MakeCards(NormalType)
})

//random Button
let randBtn = document.getElementById("randomize").addEventListener('click', () => {
    MakeCards(pokedex)
})


function MakeCards(CardObj) {
    // set up a new, empty array every time user clicks to randomize

    // this loop will empty out all of the cards that have been
    // added to the testSection element in the DOM
    while (testSection.firstChild) {
        testSection.removeChild(testSection.firstChild);
    }
    // we always want a set of 20 randomly selected cards available
    for (let i = 0; i < 20; i++) {
        // Print each iteration to the console
        let randCard = CardObj[Math.floor(Math.random() * CardObj.length)]
        let newRandCard = new pokeCard(randCard.ename, randCard.base.HP, randCard.base.Attack, randCard.base.Defense, randCard.base.Speed, randCard.id)

        cardCollection.push(newRandCard)
            // console.log(cardCollection)
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
        copyBtn.addEventListener('click', (event) => {

            cardCount += 1
            cardCountCont.textContent = "Cards " + cardCount
            let cloneCard = event.target.parentNode.parentNode
            let newCard = cloneCard.cloneNode(true)
            newCard.classList.toggle('flip')
            let getButton = newCard.querySelector('button')
            getButton.textContent = "Remove from Deck"
            getButton.addEventListener('click', (event) => {

                    cardCount -= 1
                    cardCountCont.textContent = "Cards " + cardCount
                    let getCardRemove = event.target.parentNode.parentNode
                    getCardRemove.parentNode.removeChild(getCardRemove)

                })
                // console.log(getButton)
            newCard.addEventListener('click', () => { newCard.classList.toggle('flip') })
            newDeck.appendChild(newCard)
        })
    }
}