import { pokeItems } from "../assets/pokemonStuff/items.js"
import { pokeTypes } from "../assets/pokemonStuff/types.js"
import { pokedex } from "../assets/pokemonStuff/pokedex.js"

const BUTTONPLACE = document.getElementById("buttons")
    // let normBtn = document.createElement("button")
    // normBtn.textContent = "Normal Types"
    // normBtn.appendChild(BUTTONPLACE)

let pokeStuff = pokedex;
let rand = pokeStuff[Math.floor(Math.random() * pokeStuff.length)];

// console.log(pokeStuff)
let randomBtn = document.getElementById("Random")
randomBtn.addEventListener('click', () => {
    // rand = pokeStuff[Math.floor(Math.random() * pokeStuff.length)]
    console.log(pokeStuff[Math.floor(Math.random() * pokeStuff.length)])
})

// for(let i = 0; i < )


console.log(rand)

// function GetPokemon() {
//     this.name = name,
//         this.picture = picture
// }

function multiplier(factor) {
    return function(x) {
        return x * factor
    }
}