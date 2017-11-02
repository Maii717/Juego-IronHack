var weapon1;
var weapon2;
var weaponTime1 = 0;
var weaponTime2 = 0;

//ShootP1
function fireP1() {
  weapon1 = game1.add.group();
  weapon1.enableBody = true;
  weapon1.physicsBodyType = Phaser.Physics.ARCADE;
  weapon1.createMultiple(1, "arrowr");
  weapon1.setAll("anchor.x", 0.5);
  weapon1.setAll("anchor.y", 1);
  weapon1.setAll("outOfBoundsKill", true);
  weapon1.setAll("checkWorldBounds", true);
}

function shootP1() {
  var arrowr = weapon1.getFirstExists(false);
  var buttonWeaponP1 = game1.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  if (buttonWeaponP1.isDown) {
    if (arrowr) {
      arrowr.reset(player1.x + 55, player1.y);
      arrowr.body.velocity.x = +700;
    }
  }
}
//ShootP2

function fireP2() {
  weapon2 = game1.add.group();
  weapon2.enableBody = true;
  weapon2.physicsBodyType = Phaser.Physics.ARCADE;
  weapon2.createMultiple(1, "arrowl");
  weapon2.setAll("anchor.x", 0.5);
  weapon2.setAll("anchor.y", 1);
  weapon2.setAll("outOfBoundsKill", true);
  weapon2.setAll("checkWorldBounds", true);
}

function shootP2() {
  var arrowl = weapon2.getFirstExists(false);
  var buttonWeaponP2 = game1.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  if (buttonWeaponP2.isDown) {
    if (arrowl) {
      arrowl.reset(player2.x - 55, player2.y);
      arrowl.body.velocity.x = -700;

    }
  }
}
