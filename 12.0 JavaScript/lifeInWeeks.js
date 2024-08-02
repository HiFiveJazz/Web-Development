
lifeInWeeks(56);

function lifeInWeeks(age){
  var timeLeft = 90 - age;
  months = 12 * timeLeft;
  weeks = 52 * timeLeft;
  days = 365 * timeLeft;
  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}
