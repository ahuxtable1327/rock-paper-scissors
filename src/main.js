// QUERY SELECTORS
var classicBtn = document.getElementById('classic')
var difficultBtn = document.getElementById('difficult')
var gameConsole = document.getElementById('gameConsole')


// EVENT LISTENERS
classicBtn.addEventListener('click', displayClassicChoices)
difficultBtn.addEventListener('click', displayDifficultChoices)

// EVENT HANDLERS

function displayClassicChoices() {
  gameConsole.innerHTML = `
  <h3>Choose your fighter!</h3>
  <section class='classic-choices'>
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'>
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'>
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'>
  </section>
  `
}

function displayDifficultChoices() {
  gameConsole.innerHTML = `
  <h3>Choose your fighter!</h3>
  <section class='difficult-choices'>
    <img class='difficult-fighter' id='difficultCorn' src='./assets/corn.png' alt='Corn icon'>
    <img class='difficult-fighter' id='difficultCarrot' src='./assets/carrot.png' alt='Carrot icon'>
    <img class='difficult-fighter' id='difficultTurnip' src='./assets/turnip.png' alt='Turnip icon'>
    <img class='difficult-fighter' id='difficultTomato' src='./assets/tomato.png' alt='Tomato icon'>
    <img class='difficult-fighter' id='difficultPotato' src='./assets/potato.png' alt='Potato icon'>
  </section>
  `

}
