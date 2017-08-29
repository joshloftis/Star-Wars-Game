$(document).ready(function() {
  // var to hold characters, attack power, hp, and counter attack power
  var charAttr = {
    name: ["Luke", "Rey", "Vader", "Ren"],
    attack: [8, 10, 5, 4],
    health: [120, 100, 150, 180],
    counter: [10, 15, 8, 22]
  };
  var playerChosen = false;
  var enemyChosen = false;
  var gameOver = false;
  var chosenChar;
  var chosenEnemy;

  $('.character').on("click", function() {
    $("#playerArea").html(this);
    playerChosen = true;
  });
});
