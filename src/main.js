// QUERY SELECTORS
var buttonFighter = document.getElementById('buttonFighter')
var subtitle = document.getElementById('subtitle')
var tractorWins = document.getElementById('tractorWins')
var farmWins = document.getElementById('farmWins')
var changeGame = document.getElementById('changeGame')
var classicBtn = document.getElementById('classic')
var difficultBtn = document.getElementById('difficult')

//GLOBAL VARIABLES
var currentGame = new Game();

// // EVENT LISTENERS
classicBtn.addEventListener('click', displayClassicChoices)
difficultBtn.addEventListener('click', displayDifficultChoices)
buttonFighter.addEventListener('click', displayFarmerChoice);
changeGame.addEventListener('click', function(event) {
  displayMainPage(event)
});
window.addEventListener('load', renderWins)

// EVENT HANDLERS
function displayClassicChoices() {
  currentGame.determineGameType('classic');
  subtitle.innerText = `Choose your fighter!`
  buttonFighter.innerHTML = `
    <section class='classic-choices'>
      <img class='fighter' id='classicRock' src='./assets/classicRock.png' alt='classicRock icon'>
      <img class='fighter' id='classicPaper' src='./assets/classicPaper.png' alt='classicPaper icon'>
      <img class='fighter' id='classicScissors' src='./assets/classicScissors.png' alt='classicScissors icon'>
    </section>
  `
}

function displayDifficultChoices() {
  currentGame.determineGameType('difficult');
  subtitle.innerText = `Choose your fighter!`
  buttonFighter.innerHTML = `
  <section class='difficult-choices'>
    <img class='fighter' id='corn' src='./assets/corn.png' alt='Corn icon'>
    <img class='fighter' id='carrot' src='./assets/carrot.png' alt='Carrot icon'>
    <img class='fighter' id='turnip' src='./assets/turnip.png' alt='Turnip icon'>
    <img class='fighter' id='potato' src='./assets/potato.png' alt='Potato icon'>
    <img class='fighter' id='tomato' src='./assets/tomato.png' alt='Tomato icon'>
  </section>
  `
}

function displayChangeGameBtn() {
  changeGame.innerHTML = `
  <button class='change-game-btn' id='changeGameBtn'>Change Game</button>`
}

function displayMainPage(event) {
  if (event.target.id === 'changeGameBtn') {
    location.reload();
  }
}

// PLAYER CHOICE FUNCTIONS
function displayFarmerChoice(event) {
  var farmerChoice = event.target.closest('img').id;
  if (farmerChoice === farmerChoice) {
    currentGame.farmer.weapon = farmerChoice;
    buttonFighter.innerHTML = `
    <img class='fighter' id='${farmerChoice}' src='./assets/${farmerChoice}.png' alt='${farmerChoice} icon'> `
    displayTractorChoice();
  }
}

function displayTractorChoice() {
  currentGame.tractor.takeTurn();
  var tractorChoice = currentGame.tractor.weapon;
  if (tractorChoice === tractorChoice) {
    buttonFighter.innerHTML += `
    <img class='fighter' id='${tractorChoice}' src='./assets/${tractorChoice}.png' alt='${tractorChoice}'>`
  }
  playGame();
}

//WIN CONDITION FUNCTIONS

function playGame() {
  currentGame.checkWinConditions();
  displayWinner();
}

function displayWinner() {
  if (currentGame.winner !== undefined) {
    subtitle.innerText = `${currentGame.winner.token} ${currentGame.winner.name} wins! ${currentGame.winner.token}`
    farmWins.innerHTML = `${currentGame.farmer.wins}`
    tractorWins.innerHTML = `${currentGame.tractor.wins}`
    currentGame.farmer.saveWinsToStorage();
    currentGame.tractor.saveWinsToStorage();
  } else {
      subtitle.innerText = `Oh no! It's a draw!`
  }
  disableClickEvent();
  setTimeout(resetGame, 1500);
}

function disableClickEvent() {
  buttonFighter.removeEventListener('click', displayFarmerChoice);
}

function resetGame(){
  buttonFighter.addEventListener('click', displayFarmerChoice);
  if (currentGame.gameType === 'classic') {
    displayClassicChoices();
    displayChangeGameBtn();
  }
  if (currentGame.gameType === 'difficult') {
    displayDifficultChoices();
    displayChangeGameBtn();
  }
};

function renderWins() {
  if (localStorage.length > 0) {
    currentGame.farmer.retrieveWinsFromStorage();
    currentGame.tractor.retrieveWinsFromStorage();
    farmWins.innerHTML = `${currentGame.farmer.wins}`
    tractorWins.innerHTML = `${currentGame.tractor.wins}`
  }
}
