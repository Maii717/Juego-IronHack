var Game = {
  preload: function() {
    game1.load.image("background", "static/vs.jpg");
    game1.load.image("player1", "static/player1.png");
    game1.load.image("player2", "static/player2.png");
    game1.load.image("arrowr", "static/arrowr.png");
    game1.load.image("arrowl", "static/arrowl.png");
  },

  create: function() {

    //music
    var audio = new Audio("static/music.mp3");
    audio.play();
    //Board
    board();
    //cursors
    cursorsDefine();
    //limits
    limits();
    //fire
    fireP1();
    fireP2();

  },

  update: function() {

    //Background animation
    back();
    //Movement PLayers
    moveP1();
    moveP2();
    //ShootPlayers
    shootP1();
    shootP2();
    //Collissions
    game1.physics.arcade.overlap(weapon1, player2, collision1, null, this);
    game1.physics.arcade.overlap(weapon2, player1, collision2, null, this);


  },
  endGame: function(){
    if (score1===10)
    {
      game1.state.start("WinPlayer1");
    }
  }

};

var score1 = 0;
var scoreText1;
var scoreText2;
var score2 = 0;
//Collisions config
function collision1(weapon1,player2) {
  player2.kill();
  score1 += 1;
    scoreText1.text = 'Score: ' + score1;
}
function collision2(weapon2,player1) {
  player1.kill();
  score2 += 1;
    scoreText2.text = 'Score: ' + score2;
}

collision1();
collision2();
