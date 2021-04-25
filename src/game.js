// var Player = require('./player.js');

class Game {
  constructor(gameType){
    this.farmer = new Player({name:'Farmer Jann', token:'👩‍🌾'});
    this.computer = new Player({name: 'Computer', token:'💻'});
    this.gameType = gameType;
    this.isFarmersTurn = true;
    this.isComputerTurn = false;
    this.classicFighters = ['classicRock', 'classicPaper', 'classicScissors'];
    // this.difficultFighters = []

  }

  determineClassicWinner(player1, player2) {
    if (player1.weapon === 'classicPaper' && player2.weapon === 'classicRock' ||
        player1.weapon === 'classicScissors' && player2.weapon === 'classicPaper' ||
        player1.weapon === 'classicRock' && player2.weapon === 'classicScissors') {
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

   checkWinConditions(){
    var checkFarmer = this.determineClassicWinner(this.farmer, this.computer)
    var checkComputer = this.determineClassicWinner(this.computer, this.farmer)

    if (checkFarmer) {
      this.farmer.wins++;
      farmerWin();
      console.log(this.farmer.wins);
      setTimeout(this.resetGame.bind(this), 2000);

      console.log(this.farmer.wins)
    }
    if (checkComputer) {
      this.computer.wins++;
      computerWin();
      setTimeout(this.resetGame.bind(this), 2000);
      console.log(this.computer.wins)
    }
    if (!checkFarmer && !checkComputer)  {
      gameDraw();
      setTimeout(this.resetGame.bind(this), 2000)
    }
  }
  resetGame(){
    console.log('reset')
    // if (currentGame === 'Classic') {
    console.log(this.farmer)
    console.log(this.computer)
    displayClassicChoices();
    // }
    // method that resets the game board???
    // automatic timeout setTimeout()
    // window reload to game  page
  }
}
var game1 = new Game('Classic');
// computer gets random index when player 1
// chooses a player

function getRandomIndex(array) {
return Math.floor(Math.random() * array.length)
}

console.log(game1);
