// QUERY SELECTORS
var classicBtn = document.getElementById('classic')
var gameConsole = document.getElementById('gameConsole')

// EVENT LISTENERS
classicBtn.addEventListener('click', displayClassicChoices)

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
