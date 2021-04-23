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
    <img class='difficult-fighter' id='difficultRock' src='./assets/happy-rocks.png' alt='happy rocks icon'>
    <img class='difficult-fighter' id='difficultAlien' src='./assets/flat-alien.png' alt='alien icon'>
    <img class='difficult-fighter' id='difficultLizard' src='./assets/lizard.png' alt='lizard icon'>
    <img class='difficult-fighter' id='difficultCave' src='./assets/cave.png' alt='cave icon'>
    <img class='difficult-fighter' id='difficultUFO' src='./assets/ufo.png' alt='ufo icon'>
  </section>
  `

}
