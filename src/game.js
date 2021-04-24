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
        return false;
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

  // checkWinConditions(){
  //   var checkFarmer = this.determineClassicWinner(this.farmer, this.computer)
  //   var checkComputer = this.determineClassicWinner(this.computer, this.farmer)
  //
  //   if (checkFarmer) {
  //     console.log('Farmer!')
  //     this.farmer.wins++
  //     // renderFarmer(){
  //
  //   }
  //     //
  //       //  innerhtml = '
  //       // '
  //   }
  //   if (checkComputer) {
  //     console.log('Computer!')
  //     //this.computer.wins++
  //     // return computer wins
  //   }
  //   else {
  //     // debugger
  //     console.log('Draw!')
  //     // return
  //   }
  // }


  resetGame(){
    // method that resets the game board???
    // automatic timeout setTimeout()
    // window reload to main page
  }
}
var game1 = new Game('Classic');
// computer gets random index when player 1
// chooses a player

function getRandomIndex(array) {
return Math.floor(Math.random() * array.length)
}

console.log(game1);
