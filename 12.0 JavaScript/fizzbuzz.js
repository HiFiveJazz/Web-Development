function fizzbuzz (number){
    var string = ""
  if (number % 3 == 0) {
    string = string + "fizz"
  } 
  if (number % 5 == 0) {
    string = string + "buzz"
  } 
  else {
    string = string + number;
  }
  string = string.slice(0,1).toUpperCase() + string.slice(1,);
  return(string)
}

console.log(fizzbuzz(1))
