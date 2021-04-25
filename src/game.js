// var Player = require('./player.js');

class Game {
  constructor(gameType){
    this.farmer = new Player({name:'Farmer Jann', token:'👩‍🌾'});
    this.computer = new Player({name: 'Computer', token:'💻'});
    this.gameType = gameType;
    this.isFarmersTurn = true;
    this.isComputerTurn = false;
    this.fighters = [];
    // this.classicFighters = ['classicRock', 'classicPaper', 'classicScissors'];
    // this.difficultFighters = []

  }

  determineFighters() {
    if (this.gameType === 'classic') {
      this.fighters.push('classicRock', 'classicPaper', 'classicScissors')
    }
    if (this.gameType === 'difficult') {
      this.fighters.push('corn', 'carrot', 'turnip', 'tomato', 'potato')
    }
  }

  determineClassicWinner(player1, player2) {
    if (player1.weapon === 'classicPaper' && player2.weapon === 'classicRock' ||
        player1.weapon === 'classicScissors' && player2.weapon === 'classicPaper' ||
        player1.weapon === 'classicRock' && player2.weapon === 'classicScissors') {
        return true
      } else {
        return false
      }
    }

  determineDifficultWinner(player1, player2) {
    if (player1.weapon === 'tomato' && player2.weapon === 'turnip' ||
        player1.weapon === 'tomato' && player2.weapon === 'potato' ||
        player1.weapon === 'turnip' && player2.weapon === 'potato' ||
        player1.weapon === 'turnip' && player2.weapon === 'carrot' ||
        player1.weapon === 'corn' && player2.weapon === 'turnip' ||
        player1.weapon === 'corn' && player2.weapon === 'tomato' ||
        player1.weapon === 'carrot' && player2.weapon === 'corn' ||
        player1.weapon === 'carrot' && player2.weapon === 'tomato' ||
        player1.weapon === 'potato' && player2.weapon === 'corn' ||
        player1.weapon === 'potato' && player2.weapon === 'carrot') {
        return true
      } else {
        return false
  }
    // player.wins++
    // method that checks the existing data on the game board
    // and checks the rules for the game being played
    // and returns the winner.
    // increments the wins by 1
    // assigns wins to player in player class
    //  method invoked in main JS and winner is displayed
    // saveToStorage
  }

   checkClassicWinConditions(){
    var checkFarmer = this.determineClassicWinner(this.farmer, this.computer)
    var checkComputer = this.determineClassicWinner(this.computer, this.farmer)

    if (checkFarmer) {
      this.farmer.wins++;
      farmerWin();
      setTimeout(this.resetGame.bind(this), 2000);
    }
    if (checkComputer) {
      this.computer.wins++;
      computerWin();
      setTimeout(this.resetGame.bind(this), 2000);
    }
    if (!checkFarmer && !checkComputer)  {
      gameDraw();
      setTimeout(this.resetGame.bind(this), 2000)
    }
  }

   checkDifficultWinConditions(){
    var checkFarmer = this.determineDifficultWinner(this.farmer, this.computer)
    var checkComputer = this.determineDifficultWinner(this.computer, this.farmer)

    if (checkFarmer) {
      this.farmer.wins++;
      farmerWin();
      setTimeout(this.resetGame.bind(this), 2000);
    }
    if (checkComputer) {
      this.computer.wins++;
      computerWin();
      setTimeout(this.resetGame.bind(this), 2000);
    }
    if (!checkFarmer && !checkComputer)  {
      gameDraw();
      setTimeout(this.resetGame.bind(this), 2000)
    }
  }

  resetGame(){
    console.log('reset')
    if (this.gameType === 'classic') {
    displayClassicChoices();
    displayChangeGameBtn();
  }
    if (this.gameType === 'difficult') {
    displayDifficultChoices();
    displayChangeGameBtn();
  }

  }
}
var game1 = new Game('Classic');
// computer gets random index when player 1
// chooses a player

function getRandomIndex(array) {
return Math.floor(Math.random() * array.length)
}

console.log(game1);
