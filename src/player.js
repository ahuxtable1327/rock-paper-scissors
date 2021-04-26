class Player {
  constructor(thePlayer) {
    this.name = thePlayer.name;
    this.token = thePlayer.token;
    this.wins = 0;
    this.weapon = null;
  }
  saveWinsToStorage(){
    var playerName = this.name
    var playerWins = this.wins
    localStorage.setItem(playerName, playerWins);
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
  };
}
