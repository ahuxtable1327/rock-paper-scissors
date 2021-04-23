// QUERY SELECTORS
var gameConsole = document.getElementById('gameConsole')

//GLOBAL VARIABLES

var player;
var game;

// EVENT LISTENERS
gameConsole.addEventListener('click', function(event) {
  displayChoices(event)
  displayPlayerMoves(event)
});

// EVENT HANDLERS

function displayChoices(event) {
  var gameChoice = event.target.id
  game = new Game(gameChoice)
  if (gameChoice === 'classic') {
    displayClassicChoices();
    // displayFarmerChoice(event);
    // displayComputerChoice();
    console.log(game)
  }
  if (gameChoice === 'difficult') {
    displayDifficultChoices();
    console.log(game)
  }
}

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

function displayPlayerMoves(event) {
  displayFarmerChoice(event)
  //
  // player.takeTurn()

}


function displayFarmerChoice(event) {
  var farmerChoice = event.target.id
  if (farmerChoice === 'classicRock') {
    gameConsole.innerHTML = `
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'> `
    game.changeTurn();
    displayComputerChoice();
  }
  if (farmerChoice === 'classicPaper') {
    gameConsole.innerHTML = `
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'> `
    game.changeTurn();
    displayComputerChoice();
  }
  if (farmerChoice === 'classicScissors') {
    gameConsole.innerHTML = `
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'> `
    game.changeTurn();
    displayComputerChoice();
  }
}


function displayComputerChoice() {
    var computer1 = new Player(game.computer)
    computer1.takeTurn()
    // var computerChoice = game.classicFighters[getRandomIndex(game.classicFighters)]
    // console.log(computerChoice)
  if (computer1.move === 'classicRock') {
    gameConsole.innerHTML += `
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'>`
  }
  if (computer1.move === 'classicPaper') {
    gameConsole.innerHTML += `
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'>`
  }
  if (computer1.move === 'classicScissors') {
    gameConsole.innerHTML += `
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'>`
  }
  // game.changeTurn()
}
