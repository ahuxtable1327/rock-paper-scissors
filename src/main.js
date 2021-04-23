// QUERY SELECTORS
var gameConsole = document.getElementById('gameConsole')


// EVENT LISTENERS
gameConsole.addEventListener('click', function(event) {
  displayChoices(event)
});

// EVENT HANDLERS

function displayChoices(event) {
  if (event.target.id === 'classic') {
    displayClassicChoices();
  }
  if (event.target.id === 'difficult') {
    displayDifficultChoices();
  }
}

function displayClassicChoices() {
  gameConsole.innerHTML = `
  <h3>Choose your fighter!</h3>
  <section class='classic-choices'>
    <label class='classics'>
      <input type="radio" name="classics" id='rock'>
      <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'>
    </label>
    <label class='classics'>
      <input type="radio" name="classics" id='paper'>
      <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'>
    </label>
    <label class='classics'>
      <input type="radio" name="classics" id='scissors'>
      <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'>
    </label>
  </section>
  `
}

function displayDifficultChoices() {
  gameConsole.innerHTML = `
  <h3>Choose your fighter!</h3>
  <section class='difficult-choices'>
    <label class='hard'>
      <input type="radio" name="hard" id='corn'>
      <img class='difficult-fighter' id='difficultCorn' src='./assets/corn.png' alt='Corn icon'>
    </label>
    <label class='hard'>
      <input type="radio" name="hard" id='carrot'>
      <img class='difficult-fighter' id='difficultCarrot' src='./assets/carrot.png' alt='Carrot icon'>
    </label>
    <label class='hard'>
      <input type="radio" name="hard" id='turnip'>
      <img class='difficult-fighter' id='difficultTurnip' src='./assets/turnip.png' alt='Turnip icon'>
    </label>
    <label class='hard'>
      <input type="radio" name="hard" id='tomato'>
      <img class='difficult-fighter' id='difficultTomato' src='./assets/tomato.png' alt='Tomato icon'>
    </label>
    <label class='hard'>
      <input type="radio" name="hard" id='potato'>
      <img class='difficult-fighter' id='difficultPotato' src='./assets/potato.png' alt='Potato icon'>
    </label>
  </section>
  `
}
