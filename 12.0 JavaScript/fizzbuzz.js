var array = [];
function fizzBuzz(number){
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
  array.push(string);
  return(string)
}

  
function increment(){
  array.push(array.length+1);
  return array;
}
console.log(increment())
