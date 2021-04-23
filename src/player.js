class Player {
  constructor(thePlayer) {
    this.name = thePlayer.name;
    this.token = thePlayer.token;
    this.wins = thePlayer.wins;
  }
  saveWinsToStorage(){
    localStorage.setItem()
  };
  retrieveWinsFromStorage() {
    localStorage.getItem()
  };
  takeTurn() {

  };
}


// on page load, create two instances of player
//

// take turn method tells computer to getRandomIndex
// once computer does that and the game determines a winner
// the take turn method refreshes the page to make it the human
// players turn.
//
module.exports = Player;
