$(document).ready(function() {
  //var to hold characters, attack power, hp, and counter attack power
  var charAttr = {
    name: ["Luke", "Vader", "Rey", "Ren"],
    attack: [8, 10, 5, 4],
    health: [120, 100, 150, 180],
    counter: [10, 15, 8, 22]
  };
  var playerChosen = false;
  var enemyChosen = false;
  var gameOver = false;
  var chosenChar;
  var chosenEnemy;

  //iterates through each .character image and applies the corresponding charAttr key and value
  $('.character').each(function(i) {
    $(this).data({"name" : charAttr.name[i], "attack" : charAttr.attack[i], "health" : charAttr.health[i], "counter" : charAttr.counter[i]});
    });

  $('.character').each(function() {
    $(this).append("<div>" + $(this).data("health") + "</div>");
    console.log($(this).data("health"));
  });

    // console.log($('#char1').data("name"));
    // console.log($('#char1').data("attack"));
    // console.log($('#char1').data("health"));
    // console.log($('#char1').data("counter"));

    $('#char1Div').append($('#char1').data("name"));

  $('.character').on("click", function() {
    //$("#playerArea").html(this);
    playerChosen = true;
  });






});
