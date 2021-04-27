class Game {
  constructor(gameType){
    this.farmer = new Player({name:'Farmer Jann', token:'👩‍🌾'});
    this.tractor = new Player({name: 'Tractor', token:'🚜'});
    this.gameType = gameType;
    this.isFarmersTurn = true;
    this.isTractorTurn = false;
    this.fighters = [];
    this.classicFighters = ['strawberry', 'blueberries', 'peach'];
    this.difficultFighters = ['corn', 'carrot', 'turnip', 'tomato', 'potato'];
    this.winner = undefined;
  } ;
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
    if (player1.weapon === 'blueberries' && player2.weapon === 'strawberry' ||
        player1.weapon === 'peach' && player2.weapon === 'blueberries' ||
        player1.weapon === 'strawberry' && player2.weapon === 'peach') {
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
  };
  checkWinConditions(){
   var checkFarmer = this.determineClassicWinner(this.farmer, this.tractor);
   var checkTractor = this.determineClassicWinner(this.tractor, this.farmer);
   var checkDifficultFarmer = this.determineDifficultWinner(this.farmer, this.tractor);
   var checkDifficultTractor = this.determineDifficultWinner(this.tractor, this.farmer);

   if (checkFarmer || checkDifficultFarmer) {
     this.farmer.wins++;
     this.winner = this.farmer;
   }
   if (checkTractor || checkDifficultTractor) {
     this.tractor.wins++;
     this.winner = this.tractor;
   }
   if (!checkFarmer && !checkTractor && !checkDifficultFarmer && !checkDifficultTractor ) {
     this.winner = undefined;
   }
 };
}
