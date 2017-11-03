var winplayer2 = {
  preload: function() {
    game1.stage.backgroundColor = "#fff";
    game1.load.image("button", "static/button-restart.png");

  },

  create: function() {

  var button = this.add.button(game1.width / 2, game1.height / 2+70, "button",this.restart,this);
  button.anchor.setTo(0.5, 0.5);
  var txtWinner2 = game1.add.text(game1.width/2,game1.height/2 -140, "Player 2 Win",{font:"bold 50px sans-serif", fill:"black", align:"center"});
  txtWinner2.anchor.setTo(0.5, 0.5);
  var txtRestart = game1.add.text(game1.width/2,game1.height/2 -60, "Try Again?",{font:"bold 35px sans-serif", fill:"black", align:"center"});
  txtRestart.anchor.setTo(0.5, 0.5);
  audio.pause();
  audio.currentTime = 0;
  },

  update: function() {


  },
  restart: function(){
       this.state.start("Menu");
  }

};
