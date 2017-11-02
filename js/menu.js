var Menu = {
  preload: function(){

    game1.stage.backgroundColor = "#fff";
    game1.load.image("button", "static/button-start.png");

  },

  create: function (){

    var button = this.add.button(game1.width / 2, game1.height / 2+70, "button",this.startGame,this);
    button.anchor.setTo(0.5, 0.5);

    var txtStart = game1.add.text(game1.width/2,game1.height/2 -60, "Ready to play?",{font:"bold 35px sans-serif", fill:"black", align:"center"});
    txtStart.anchor.setTo(0.5, 0.5);

    var txtTitle = game1.add.text(game1.width/2,game1.height/2 -140, "Title",{font:"bold 50px sans-serif", fill:"black", align:"center"});
    txtTitle.anchor.setTo(0.5, 0.5);
  },

  startGame: function(){
       this.state.start("Game");
  }

};
