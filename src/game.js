var Player = require('./player.js');

class Game {
  constructor(gameType){
    this.playerOne = new Player({name:'Farmer Jann', token:'👩‍🌾'})
    this.playerTwo = new Player({name: 'Computer', token:'💻'})
    this.gameType = gameType;
    // this.oneTurn = true;
    // this.twoTurn = false;



  }
  changeTurn() {
    // if this.playerOne.player.takesTurn() {
    // this.playerTwo.player.takesTurn()
  }
  }
  determineWinner() {
    // method that checks the existing data on the game board
    // and checks the rules for the game being played
    // and returns the winner.
    // increments the wins by 1
    // assigns wins to player in player class
    // logic for difficult
    // logic for easy
    //  method invoked in main JS and winner is displayed
  }

  isGameDraw() {
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

// getRandomIndex(array) {
// return math.floor(math.random() * array.length)
//}

console.log(game1);
