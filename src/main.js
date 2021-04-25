// QUERY SELECTORS
var buttonFighter = document.getElementById('buttonFighter')
var subtitle = document.getElementById('subtitle')
var compWins = document.getElementById('compWins')
var farmWins = document.getElementById('farmWins')
var changeGame = document.getElementById('changeGame')

//GLOBAL VARIABLES

var player;
var currentGame = new Game();

// EVENT LISTENERS
buttonFighter.addEventListener('click', function(event) {
  displayChoices(event)
  displayFarmerChoice(event)
});
changeGame.addEventListener('click', function(event) {
  displayMainPage(event)
});

// EVENT HANDLERS

function displayChoices(event) {
  var gameChoice = event.target.id
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
  subtitle.innerText = `Choose your fighter!`
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

function displayChangeGameBtn() {
  changeGame.innerHTML = `
  <button id='changeGameBtn'>Change Game</button>`
}

function displayMainPage(event) {
  if (event.target.id === 'changeGameBtn')
  location.reload();
}

// PLAYER CHOICE FUNCTIONS
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
