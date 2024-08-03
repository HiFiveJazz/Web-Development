function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (Math.pow(height,2)));
  var string =  "Your BMI is " + bmi + ", so you "
  if (bmi > 24.9) {
    string =  string + "are overweight."
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    string = string + "have a normal weight."
  }
  else if (bmi <= 18.5) {
    string = string + "are underweight.";
  }
  return string; 
}

var help = bmiCalculator(10,1.8);
console.log(help)
