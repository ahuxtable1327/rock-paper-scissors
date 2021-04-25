class Player {
  constructor(thePlayer) {
    this.name = thePlayer.name;
    this.token = thePlayer.token;
    this.wins = 0;
    this.weapon = null;
  }
  saveWinsToStorage(){
    localStorage.setItem();
  };
  retrieveWinsFromStorage() {
    localStorage.getItem();
  };
  takeTurn() {
  if (!currentGame.isComputerTurn) {
    currentGame.isComputerTurn = true;
    currentGame.isFarmersTurn = false;
    // this.weapon = 'classicRock'
    this.weapon = currentGame.fighters[getRandomIndex(currentGame.fighters)];
 } else {
   currentGame.isFarmersTurn;
   !currentGame.isComputerTurn;
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
