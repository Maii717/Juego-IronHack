var backgroundGame;

//background animation function
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
lifetext1 = game1.add.text(1030, 20, 'P2 Life: 10', { fontSize: '32px', fill: '#000' });
lifetext2 = game1.add.text(50, 20,'P1 Life: 10', { fontSize: '32px', fill: '#000' });



//Sound
audio = new Audio("static/music-harp.mp3");
audio.play();
}

//Limits background
function limits(){
game1.physics.startSystem(Phaser.Physics.ARCADE);
game1.physics.arcade.enable(player1);
player1.body.collideWorldBounds = true;
game1.physics.arcade.enable(player2);
player2.body.collideWorldBounds = true;
}
