// let card = document.querySelector('.card')
// card.addEventListener( 'click', () => {
//   console.log('Click')
//   card.classList.toggle('flip')
// })


//create divs
let container = document.querySelector('#myCards')
for (let i = 0; i < 5; i++) { 
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

}