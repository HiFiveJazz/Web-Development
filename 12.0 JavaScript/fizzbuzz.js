var array = [];
var number = 1;
function fizzBuzz(){
  while (number <= 100) {
    var string = ""
  if (number % 3 == 0 && number % 5 == 0) {
    string = string + "FizzBuzz"
  }else if (number % 3 == 0) {
    string = string + "Fizz"
  } else if (number % 5 == 0) {
    string = string + "Buzz"
  } else {
    string = string + number;
  }
  string = string.slice(0,1).toUpperCase() + string.slice(1,);
  array.push(string);
  number++;
  }
  return array
}

console.log(fizzBuzz())
