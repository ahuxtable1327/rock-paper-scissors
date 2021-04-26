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
    var playerName = this.name
    this.wins = localStorage.getItem(playerName)
  };
  takeTurn() {
    currentGame.isComputerTurn = true;
    currentGame.isFarmersTurn = false;
  if (currentGame.isComputerTurn) {
    this.weapon = currentGame.fighters[getRandomIndex(currentGame.fighters)];
 } else {
   currentGame.isFarmersTurn;
   !currentGame.isComputerTurn;
 }
  };
}

function getRandomIndex(array) {
return Math.floor(Math.random() * array.length)
}
