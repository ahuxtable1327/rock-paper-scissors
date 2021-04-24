// QUERY SELECTORS
var buttonFighter = document.getElementById('buttonFighter')
var subtitle = document.getElementById('subtitle')
var compWins = document.getElementById('compWins')
var farmWins = document.getElementById('farmWins')

//GLOBAL VARIABLES

var player;
var currentGame;

// EVENT LISTENERS
buttonFighter.addEventListener('click', function(event) {
  displayChoices(event)
  displayFarmerChoice(event)
});

// EVENT HANDLERS

function displayChoices(event) {
  var gameChoice = event.target.id
  currentGame = new Game(gameChoice)
  if (gameChoice === 'classic') {
    displayClassicChoices();
  }
  if (gameChoice === 'difficult') {
    displayDifficultChoices();
  }
}

function displayClassicChoices() {
  subtitle.innerText = `Choose your fighter!`
  buttonFighter.innerHTML = `
    <section class='classic-choices'>
      <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'>
      <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'>
      <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'>
    </section>
  `
}

function displayDifficultChoices() {
  subtitle.innerText = ` <h3>Choose your fighter!</h3>`
  buttonFighter.innerHTML = `
  <section class='difficult-choices'>
    <img class='difficult-fighter' id='difficultCorn' src='./assets/corn.png' alt='Corn icon'>
    <img class='difficult-fighter' id='difficultCarrot' src='./assets/carrot.png' alt='Carrot icon'>
    <img class='difficult-fighter' id='difficultTurnip' src='./assets/turnip.png' alt='Turnip icon'>
    <img class='difficult-fighter' id='difficultTomato' src='./assets/tomato.png' alt='Tomato icon'>
    <img class='difficult-fighter' id='difficultPotato' src='./assets/potato.png' alt='Potato icon'>
  </section>
  `
}

function displayFarmerChoice(event) {
  var farmerChoice = event.target.id
  if (farmerChoice === 'classicRock') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'> `
    displayComputerChoice();
  }
  if (farmerChoice === 'classicPaper') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'> `
    displayComputerChoice();
  }
  if (farmerChoice === 'classicScissors') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'> `
    displayComputerChoice();
  }
}

function displayComputerChoice() {
    currentGame.computer.takeTurn()
  if (currentGame.computer.weapon === 'classicRock') {
    buttonFighter.innerHTML += `
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'>`
  }
  if (currentGame.computer.weapon === 'classicPaper') {
    buttonFighter.innerHTML += `
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'>`
  }
  if (currentGame.computer.weapon === 'classicScissors') {
    buttonFighter.innerHTML += `
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'>`
  }
  evaluateWinner();  // currentGame.changeTurn()
}

function evaluateWinner() {
  // if currentGame.type = classic {
    currentGame.checkWinConditions();
  // }
  // else {
  //   game. check difficult conditions
  // }
}

function farmerWin(){
  subtitle.innerText = `‍${currentGame.farmer.token}Farmer Jann Wins!‍${currentGame.farmer.token}`
  farmWins.innerHTML = `${currentGame.farmer.wins}`
}

function computerWin(){
  subtitle.innerText = `‍${currentGame.computer.token}Computer Wins!${currentGame.computer.token}`
  compWins.innerHTML = `${currentGame.computer.wins}`
}

function gameDraw() {
  subtitle.innerText = `Oh no! It's a draw!`
}


// renderWinner
