// Global Variables
//-----------------------------------------------------------------------------
  //object to hold characters, attack power, hp, and counter attack power
  var charAttr = {
    image: ['src="assets/images/Luke_Skywalker.png"', 'src="assets/images/Darthvader3.png"', 'src="assets/images/rey.png"', 'src="assets/images/kyloren.png"' ],
    name: ["Luke Skywalker", "Darth Vader", "Rey Skywalker", "Kylo Ren"],
    attack: [8, 10, 5, 4],
    health: [120, 100, 150, 180],
    counter: [10, 15, 8, 22],
    baseAttack: [8, 10, 5, 4]
  };
  var playerChosen = false;
  var enemyChosen = false;
  var gameOver = false;
  var enemyDefeated = true;
  var chosenPlayer;
  var playerHP;
  var playerAttack;
  var playerBaseAttack;
  var chosenEnemy;
  var enemyCounter;
  var enemyHP;





// Functions
//-----------------------------------------------------------------------------

  $('.charDiv').each(function(i) {
    $(this).data({"name" : charAttr.name[i], "attack" : charAttr.attack[i], "health" : charAttr.health[i], "counter" : charAttr.counter[i], "baseAttack" : charAttr.baseAttack[i]})
    .append('<div class="name">' + charAttr.name[i] + "</div>")
    .append('<img class="img-responsive center-block charImg" ' + charAttr.image[i] + '>')
    .append('<div class="health">' + charAttr.health[i] + "</div>");
  });

  console.log($('#char1').data());


// Game Logic
//-----------------------------------------------------------------------------
$(document).ready(function() {

  $('.charDiv').on('click', function () {
    if (playerChosen == false) {
      chosenPlayer = $(this);
      playerHP = $(chosenPlayer).data("health");
      playerAttack = $(chosenPlayer).data("attack");
      playerBaseAttack = $(chosenPlayer).data("baseAttack");
      console.log(playerHP);
      console.log(playerAttack);
      $('#playerArea').append(this);
      $(this).off('click');
      $('.charDiv').not(this).appendTo('#holdingBin');
      playerChosen = true;
    } else if (enemyChosen == true){
    } else {
      $('#defenderArea').html(this);
      $(this).off('click');
      enemyChosen = true;
      chosenEnemy = $(this);
      enemyHP = $(chosenEnemy).data("health");
      enemyCounter = $(chosenEnemy).data("counter");
      enemyDefeated = false;
    }
    });
    $('#attackBtn').on('click', function() {
      if (enemyDefeated == false) {
        playerHP -= enemyCounter;
        console.log("Player HP is " + playerHP);
        enemyHP -= playerAttack;
        console.log("Enemy HP is " + enemyHP);
        playerAttack += playerBaseAttack;
        console.log("Player attack is " + playerAttack);
         if (enemyHP <= 0) {
          enemyDefeated = true;
          enemyChosen = false;
          $('#defenderArea').empty();
        }
      } else if (enemyDefeated == true) {
        if (enemyChosen == false) {
          $('#defenderArea').html("An enemy you most choose.");
        }
      } else {
      }
    });


});
