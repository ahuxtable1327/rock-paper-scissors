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

  // computerWins(){
  //   'Computer wins!'
  // }
  // farmerWins(){
  //   'farmer wins'
  // }
  // if farmer is winner this.wins++

  determineClassicWinner(player1, player2) {
    // what are my win conditions

    if (player1.weapon === 'classicRock' && player2.weapon === 'classicPaper' ||
        player1.weapon === 'classicPaper' && player2.weapon === 'classicScissors' ||
        player1.weapon === 'classicScissors' && player2.weapon === 'classicRock')
        return true
      } else {
        return false;
      }
    // if (player || computer === rock && player || computer === scissors rock Wins
    // if rock and paper paper wins
    // if paper and scissors scissors wins


    // player.wins++
    // method that checks the existing data on the game board
    // and checks the rules for the game being played
    // and returns the winner.
    // increments the wins by 1
    // assigns wins to player in player class
    // logic for difficult
    // logic for easy
    //  method invoked in main JS and winner is displayed
    // saveToStorage
  }

  checkWinConditions(){
    var checkFarmer = this.determineWinner(farmer, computer)
    var checkComputer = this.determineWinner(computer, farmer)

    if (checkFarmer) {
      // this.farmer.wins++
      // retrun farmer wins
    }
    if (checkComputer) {
      //this.computer.wins++
      // return computer wins
    }
    else
    return false
  }

  isGameDraw() {
    if !determineWinner()
      // return 'It\'s a draw!'
    }
  // isGameDraw() method that checks to see if
  // one player one and evaluates to true if not
  // in main JS condition that says if isGameDraw === true
  // then replace subtitle innertext with 'draw'

  }
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
