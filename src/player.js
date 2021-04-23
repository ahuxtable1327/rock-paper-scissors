class Player {
  constructor(thePlayer) {
    this.name = thePlayer.name;
    this.token = thePlayer.token;
    this.wins = 0;
    this.move = null
  }
  saveWinsToStorage(){
    localStorage.setItem()
  };
  retrieveWinsFromStorage() {
    localStorage.getItem()
  };
  takeTurn() {
  if (game.isComputerTurn ) {
    // game.isComputerTurn = 'second'
   this.move = game.classicFighters[getRandomIndex(game.classicFighters)]
}

    // when a user clicks on a
    // then game.changeTurn()
    // computer takes turn (random index)
    // then game.determineWinner()
    // if (getrandomindex(classicchoices).id)
  
  };
}






// on page load, create two instances of player
//

// take turn method tells computer to getRandomIndex
// once computer does that and the game determines a winner
// the take turn method refreshes the page to make it the human
// players turn.
//
// module.exports = Player;
