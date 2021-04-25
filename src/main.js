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
  displayFarmerClassic(event)
  displayFarmerDifficult(event)
});
changeGame.addEventListener('click', function(event) {
  displayMainPage(event)
});

// EVENT HANDLERS

function displayChoices(event) {
  var gameChoice = event.target.id
  if (gameChoice === 'classic') {
    currentGame.gameType = gameChoice;
    displayClassicChoices();
  }
  if (gameChoice === 'difficult') {
    currentGame.gameType = gameChoice;
    displayDifficultChoices();
  }
  currentGame.determineFighters();
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
    <img class='difficult-fighter' id='corn' src='./assets/corn.png' alt='Corn icon'>
    <img class='difficult-fighter' id='carrot' src='./assets/carrot.png' alt='Carrot icon'>
    <img class='difficult-fighter' id='turnip' src='./assets/turnip.png' alt='Turnip icon'>
    <img class='difficult-fighter' id='tomato' src='./assets/tomato.png' alt='Tomato icon'>
    <img class='difficult-fighter' id='potato' src='./assets/potato.png' alt='Potato icon'>
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
function displayFarmerClassic(event) {
  var farmerChoice = event.target.id
  if (farmerChoice === 'classicRock') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='classic-fighter' id='classicRock' src='./assets/happy-rocks.png' alt='happy rocks'> `
    displayComputerClassic();
  }
  if (farmerChoice === 'classicPaper') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='classic-fighter' id='classicPaper' src='./assets/happy-paper.png' alt='happy paper'> `
    displayComputerClassic();
  }
  if (farmerChoice === 'classicScissors') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='classic-fighter' id='classicScissors' src='./assets/happy-scissors.png' alt='happy scissors'> `
    displayComputerClassic();
  }
}

function displayComputerClassic() {
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

function displayFarmerDifficult(event) {
  var farmerChoice = event.target.id
  if (farmerChoice === 'corn') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='difficult-fighter' id='corn' src='./assets/corn.png' alt='Corn icon'> `
    displayComputerDifficult();
  }
  if (farmerChoice === 'carrot') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='difficult-fighter' id='carrot' src='./assets/carrot.png' alt='Carrot icon'> `
    displayComputerDifficult();
  }
  if (farmerChoice === 'turnip') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='difficult-fighter' id='turnip' src='./assets/turnip.png' alt='Turnip icon'> `
    displayComputerDifficult();
  }
  if (farmerChoice === 'tomato') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='difficult-fighter' id='tomato' src='./assets/tomato.png' alt='Tomato icon'> `
    displayComputerDifficult();
  }
  if (farmerChoice === 'potato') {
    currentGame.farmer.weapon = farmerChoice
    buttonFighter.innerHTML = `
    <img class='difficult-fighter' id='potato' src='./assets/potato.png' alt='Potato icon'> `
    displayComputerDifficult();
  }
}

function displayComputerDifficult() {
    currentGame.computer.takeTurn()
  if (currentGame.computer.weapon === 'corn') {
    buttonFighter.innerHTML += `
    <img class='difficult-fighter' id='corn' src='./assets/corn.png' alt='Corn icon'> `
  }
  if (currentGame.computer.weapon === 'carrot') {
    buttonFighter.innerHTML += `
    <img class='difficult-fighter' id='carrot' src='./assets/carrot.png' alt='Carrot icon'> `
  }
  if (currentGame.computer.weapon === 'turnip') {
    buttonFighter.innerHTML += `
    <img class='difficult-fighter' id='turnip' src='./assets/turnip.png' alt='Turnip icon'> `
  }
  if (currentGame.computer.weapon === 'tomato') {
    buttonFighter.innerHTML += `
    <img class='difficult-fighter' id='tomato' src='./assets/tomato.png' alt='Tomato icon'> `
  }
  if (currentGame.computer.weapon === 'potato') {
    buttonFighter.innerHTML += `
    <img class='difficult-fighter' id='potato' src='./assets/potato.png' alt='Potato icon'> `
  }
  // evaluateWinner();
}

//WIN CONDITION FUNCTIONS

function evaluateWinner() {
  // if currentGame.type = classic {
    currentGame.checkClassicWinConditions();
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
