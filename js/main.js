var game1 = new Phaser.Game(1280, 500, Phaser.CANVAS, "bloq-game");


//Start Game add - first screen
game1.state.add("Menu",Menu);

//PLay Game add - second screen
game1.state.add("Game",Game);

//Win Player1
game1.state.add("winpLayer1",winplayer1);


//Start game
game1.state.start("Menu");
