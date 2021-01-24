//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern=[];
//3.At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence
var buttonColours =["red", "blue", "green", "yellow"];
//5.At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern=[];

//1.Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);

  //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

var started=false;
//2. Create a new variable called level and start at level 0.
var level=0;
//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function(){
  if(!started){
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("level"+level);
    nextSequence();
    started=true;
    animatePress(userChosenColour);
  }
});

//1.Inside game.js create a new function.
function nextSequence(){
  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;
  //5. Inside nextSequence(), update the h1 with this change in the value of level.
      $("#level-title").text("level"+level);
  //2.Inside the new function generate a new random number between 0 and 3, and store it in a variable.
  var randomNumber = Math.floor(Math.random() * 4);
  //4.Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array./
  var randomChosenColour = buttonColours[randomNumber];
  //6.Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //1.Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#"+randomChosenColour).fadeIn(300).fadeOut(300).fadeIn(300);


}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name){
  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/"+ name +".mp3")
  audio.play();
}


//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour){
  //2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
  $("#"+currentColour).addClass("pressed");
  //4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout (function(){
      $("#"+currentColour).removeClass("pressed");
  },100);

}
