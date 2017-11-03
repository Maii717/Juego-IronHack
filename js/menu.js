var Menu = {
  preload: function() {

    game1.stage.backgroundColor = "#fff";
    game1.load.image("button", "static/button-start.png");
    game1.load.image("menupicture", "static/menupicture.jpg");

  },

  create: function() {


    var menupicture = game1.add.tileSprite(550,35, 500, 550, "menupicture");
    var button = this.add.button(game1.width / 2+25, game1.height / 2 + 70,"button", this.startGame, this);
    button.anchor.setTo(0.5, 0.5);

    var txtStart = game1.add.text(game1.width / 2+25, game1.height / 2 - 40, "Ready to play?", {
      font: "bold 25px sans-serif",
      fill: "white",
      align: "center"
    });
    txtStart.anchor.setTo(0.5, 0.5);

    var txtTitle = game1.add.text(game1.width / 2-300, game1.height / 2, "Paraíso en crisis", {
      fontfamily: 'Gloria Hallelujah, cursive',
      fill: "#CD1B97",
      align: "center"
    });
    txtTitle.anchor.setTo(0.5, 0.5);
  },

  startGame: function() {
    this.state.start("Game");
  },


};
