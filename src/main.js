// QUERY SELECTORS
var gameConsole = document.getElementById('gameConsole')
var subtitle = document.getElementById('subtitle')

//GLOBAL VARIABLES

var player;
var game;

// EVENT LISTENERS
gameConsole.addEventListener('click', function(event) {
  displayChoices(event)
  displayFarmerChoice(event)
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

// // function evaluatePlayerMoves(event) {
//   displayFarmerChoice(event)
//
//   // player.takeTurn()
//
// }


function displayFarmerChoice(event) {
  var farmerChoice = event.target.id
  if (farmerChoice === 'classicRock') {
    game.farmer.weapon = farmerChoice
    gameConsole.innerHTML = `
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'> `
    displayComputerChoice();
  }
  if (farmerChoice === 'classicPaper') {
    game.farmer.weapon = farmerChoice
    gameConsole.innerHTML = `
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'> `
    displayComputerChoice();
  }
  if (farmerChoice === 'classicScissors') {
    game.farmer.weapon = farmerChoice
    gameConsole.innerHTML = `
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'> `
    displayComputerChoice();
  }
}


function displayComputerChoice() {
    game.computer.takeTurn()
  if (game.computer.weapon === 'classicRock') {
    gameConsole.innerHTML += `
    <h3 id='subtitle'></h3>
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'>`
  }
  if (game.computer.weapon === 'classicPaper') {
    gameConsole.innerHTML += `
      <h3 id='subtitle'></h3>
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'>`
  }
  if (game.computer.weapon === 'classicScissors') {
    gameConsole.innerHTML += `
      <h3 id='subtitle'></h3>
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'>`
  }
  evaluateWinner();
  // game.changeTurn()
}

function evaluateWinner() {
  checkWinConditions();
}

function checkWinConditions(){
  var checkFarmer = game.determineClassicWinner(game.farmer, game.computer)
  var checkComputer = game.determineClassicWinner(game.computer, game.farmer)

  if (checkFarmer) {
    // game.farmer.wins++
    gameConsole.innerHTML += `<h3>Farmer Wins!</h3>`
  }
  if (checkComputer) {
    console.log('Computer!')
    // game.computer.wins++
    gameConsole.innerHTML += `<h3>Computer Wins!</h3>`
  }
  else {
    // debugger
    console.log('Draw!')
    gameConsole.innerHTML += `<h3>It's a draw!</h3>`
    // return
  }
}
// renderWinner
