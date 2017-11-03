var Game = {
  preload: function() {
    game1.load.image("background", "static/vs.jpg");
    game1.load.image("player1", "static/player1.png");
    game1.load.image("player2", "static/player2.png");
    game1.load.image("arrowr", "static/arrowr.png");
    game1.load.image("arrowl", "static/arrowl.png");
    game1.load.image("cloud", "static/black-cloud.png");
  },

  create: function() {

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
};

var lifep1 = 10;
var lifetext1;
var lifetext2;
var lifep2 = 10;
//Collisions config
function collision1(weapon1,player2) {
  player2.kill();
  audio = new Audio("static/shootsound.mp3");
  audio.play();
  lifep2 -= 1;
    lifetext1.text = 'P2 Life: ' + lifep2;
    if (lifep2==0)
    {
      lifep2=10;
      this.state.start("winplayer1");
    }

}
function collision2(weapon2,player1) {
  player1.kill();
  lifep1 -= 1;
  audio1 = new Audio("static/shootsound.mp3");
  audio1.play();
    lifetext2.text = 'P1 Life: ' + lifep1;
    if (lifep1==0)

    {
      lifep1=10;
      this.state.start("winplayer2");

    }

}

collision1();
collision2();
