var score1 = 0;
var scoreText1;
var scoreText2;
var score2 = 0;
var backgroundGame;

//backgound animation function
function back() {
  backgroundGame.tilePosition.x -= 1;
}


//board
function board(){
backgroundGame = game1.add.tileSprite(0,0, 1300, 550, "background");
player1 = game1.add.sprite(80, game1.height / 2, "player1");
player1.anchor.setTo(0.5);
player1.scale.setTo(1.5, 1.5);
player2 = game1.add.sprite(1200, game1.height / 2, "player2");
player2.anchor.setTo(0.5);
player2.scale.setTo(1.5, 1.5);
scoreText1 = game1.add.text(50, 20, 'score: 0', { fontSize: '32px', fill: '#000' });
scoreText2 = game1.add.text(1100, 20, 'score: 0', { fontSize: '32px', fill: '#000' });
}

//Limits background
function limits(){
game1.physics.startSystem(Phaser.Physics.ARCADE);
game1.physics.arcade.enable(player1);
player1.body.collideWorldBounds = true;
game1.physics.arcade.enable(player2);
player2.body.collideWorldBounds = true;
}

//Collisions
function collision1(weapon1,player2) {
  player2.kill();
  score1 += 1;
    scoreText1.text = 'Score: ' + score1;

    if (score1>10)
    {
      this.state.start("WinPlayer1");
    }

}
function collision2(weapon2,player1) {
  player1.kill();
  score2 += 1;
    scoreText2.text = 'Score: ' + score2;
}
