var WinPlayer1 = {
  preload: function() {
    game1.load.image("background", "vs.jpg");
    game1.load.image("player1", "player1.png");

  },

  create: function() {

    //music
    // var audio = new Audio("music.mp3");
    // audio.play();
    //Board
    board();
    //cursors
    cursorsDefine();
    //limits
    limits();
    //fire
    // fireP1();
    // fireP2();

  },

  update: function() {

    //Background animation
    back();
    //Movement PLayers
    moveP1();

    //ShootPlayers
    shootP1();



  },

  endGame: function(){
    if (score1>10)
    {
      this.state.start("WinPlayer1");
    }
  }

};
