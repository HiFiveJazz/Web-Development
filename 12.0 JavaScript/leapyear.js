function leapyear(year){
  if (year % 4 != 0) {
    var string = "Not leap year.";
  } else if (year % 100 != 0){
    var string = "Leap year.";
  } else if (year % 400 == 0) {
    var string = "Leap year.";
  } else {
    var string = "Not leap year.";
  }
  return string;

}

