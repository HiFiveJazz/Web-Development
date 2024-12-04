buttonColors = ["red", "blue","green", "yellow"]
gamePattern=[];
function nextSequence(){
  var randomNumber = Math.floor((Math.random()*4));
  return (randomNumber);
};

randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
console.log(gamePattern)
