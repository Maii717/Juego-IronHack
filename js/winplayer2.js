var winplayer2 = {
  preload: function() {
    game1.stage.backgroundColor = "#fff";
    game1.load.image("button", "static/button-start.png");

  },

  create: function() {

  var button = this.add.button(game1.width / 2, game1.height / 2+70, "button",this.restart,this);
  button.anchor.setTo(0.5, 0.5);
  var txtWinner2 = game1.add.text(game1.width/2,game1.height/2 -140, "PLayer 2 Win",{font:"bold 50px sans-serif", fill:"black", align:"center"});
  txtWinner2.anchor.setTo(0.5, 0.5);

  },

  update: function() {

    //Background animation
    // back();
    // //Movement PLayers
    // moveP1();
    //
    // //ShootPlayers
    // shootP1();

  },
  restart: function(){
       this.state.start("Menu");
  }

};
