// var Player = require('./player.js');

class Game {
  constructor(gameType){
    this.farmer = new Player({name:'Farmer Jann', token:'👩‍🌾'});
    this.computer = new Player({name: 'Computer', token:'💻'});
    this.gameType = gameType;
    this.isFarmersTurn = true;
    this.isComputerTurn = false;
    this.fighters = [];
    this.classicFighters = ['classicRock', 'classicPaper', 'classicScissors'];
    this.difficultFighters = ['corn', 'carrot', 'turnip', 'tomato', 'potato'];
  }
  determineGameType(gameType) {
    this.gameType = gameType;
    this.determineFighters();
  }
  determineFighters() {
    if (this.gameType === 'classic') {
    this.fighters = this.classicFighters;
    }
    if (this.gameType === 'difficult') {
      this.fighters = this.difficultFighters;
    }
  };
  determineClassicWinner(player1, player2) {
    if (player1.weapon === 'classicPaper' && player2.weapon === 'classicRock' ||
        player1.weapon === 'classicScissors' && player2.weapon === 'classicPaper' ||
        player1.weapon === 'classicRock' && player2.weapon === 'classicScissors') {
        return true;
      } else {
        return false;
      }
    };
  determineDifficultWinner(player1, player2) {
    if (player1.weapon === 'tomato' && player2.weapon === 'turnip' ||
        player1.weapon === 'tomato' && player2.weapon === 'potato' ||
        player1.weapon === 'turnip' && player2.weapon === 'potato' ||
        player1.weapon === 'turnip' && player2.weapon === 'carrot' ||
        player1.weapon === 'corn' && player2.weapon === 'turnip' ||
        player1.weapon === 'corn' && player2.weapon === 'tomato' ||
        player1.weapon === 'carrot' && player2.weapon === 'corn' ||
        player1.weapon === 'carrot' && player2.weapon === 'tomato' ||
        player1.weapon === 'potato' && player2.weapon === 'corn' ||
        player1.weapon === 'potato' && player2.weapon === 'carrot') {
        return true;
      } else {
        return false;
  }
    // saveToStorage
  };
   checkClassicWinConditions(){
    var checkFarmer = this.determineClassicWinner(this.farmer, this.computer)
    var checkComputer = this.determineClassicWinner(this.computer, this.farmer)

    if (checkFarmer) {
      this.farmer.wins++;
      farmerWin();
    }
    if (checkComputer) {
      this.computer.wins++;
      computerWin();
    }
    if (!checkFarmer && !checkComputer) {
      gameDraw();
    }
  };
   checkDifficultWinConditions(){
    var checkFarmer = this.determineDifficultWinner(this.farmer, this.computer)
    var checkComputer = this.determineDifficultWinner(this.computer, this.farmer)

    if (checkFarmer) {
      this.farmer.wins++;
      farmerWin();
    }
    if (checkComputer) {
      this.computer.wins++;
      computerWin();
    }
    if (!checkFarmer && !checkComputer)  {
      gameDraw();
    }
  };
}
// reset game in main js. set timeout? definitely call computerWin, gameDraw and farmerWin in main JS
