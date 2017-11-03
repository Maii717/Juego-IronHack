var player1;
var player2;
var cursors;

//cursors
function cursorsDefine(){

//cursors PLayer1
cursors = game1.input.keyboard.createCursorKeys();

//cursors PLayer2
upButton = game1.input.keyboard.addKey(Phaser.Keyboard.W);
downButton = game1.input.keyboard.addKey(Phaser.Keyboard.S);
leftButton = game1.input.keyboard.addKey(Phaser.Keyboard.A);
rightButton = game1.input.keyboard.addKey(Phaser.Keyboard.D);
}

//Movement player1
function moveP1() {
  if (upButton.isDown) {
      player1.position.y -= 5;
    } else {
      player1.position.y += 5;
    }
   if (downButton.isDown) {
      player1.position.y += 5;
    } else {
      player1.position.y -= 5;
  }

  if (leftButton.isDown) {
    player1.position.x -= 4;
  } else if (rightButton.isDown) {
    var limit1 = game1.width/2 -200;
    player1.position.x += 4;
    if(player1.x > limit1) player1.x -= 4;
  }
}

//Movement player2
function moveP2() {
  if (cursors.up.isDown) {
      player2.position.y -= 5;
    }else {
      player2.position.y += 5;
  }  if (cursors.down.isDown) {
      player2.position.y += 5;
    } else {
      player2.position.y -= 5;
  }
  if (cursors.left.isDown) {
    var limit2 = game1.width/2+200;
    player2.position.x -= 4;
    if(player2.x < limit2) player2.x = limit2;
  } else if (cursors.right.isDown) {
    player2.position.x += 4;

  }
}
