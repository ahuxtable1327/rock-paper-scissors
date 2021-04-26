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
    // stringify???
  };
  retrieveWinsFromStorage() {
    var playerName = this.name
    this.wins = localStorage.getItem(playerName)
    // for (var i = 0; i < localStorage.length; i++) {
    //   if (localStorage[i] === 'Farmer Jann') {
    //     var farm = localStorage.getItem(localStorage[i])
    //     console.log(localStorage[i])
    //     this.wins = farm
    //   } else {
    //     console.log(localStorage[i])
    //     var comp = localStorage.getItem(localStorage[i])
    //     this.wins = comp
    //   }
    //   return this.wins
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
