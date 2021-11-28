$("body").keypress(function()
{level=0;
  gamePattern=[];
  var aud=new Audio("sounds/start.wav");
  aud.play();
  setTimeout(nextSequence,3000);

});



var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern=[];
var level=0;
var click=0;


  var userClickedPattern=[];
  $(".btn").click(function(event){
    if(level==0)
    {
      alert("Start the game first");
      location.reload();
    }

    var userChosenColour=event.target.id;
    animator(userChosenColour);
    userClickedPattern.push(userChosenColour);
    if(userChosenColour!=gamePattern[click])
    {
  gover();
  }
    else
    {
      if(click+1===level)
      setTimeout(nextSequence, 1000);
    }
        click++;

  });
  function nextSequence()
  {level++;
    userClickedPattern=[];
    click=0;
    $("h1").text("Level : "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animator(randomChosenColour);
  }

  function animator(cinp)
  {$("#"+cinp).addClass("pressed");
  setTimeout(function () {
    $("#" + cinp).removeClass("pressed");
  }, 100);
  $("#"+cinp).fadeOut(100).fadeIn(100);
    var aud=new Audio("sounds/"+cinp+".mp3");
    aud.play();

  }
function gover()
{var aud=new Audio("sounds/wrong.mp3");
aud.play();setTimeout(function () {
  location.reload();},1000);
}
