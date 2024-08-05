function fibonacciGenerator(num){
  var array = [];
  for (var i = 0; i < num; i++){
  if (i==0) {
    array.push(0)
  } else if (i==1) {
    array.push(1)
  } else {
    var temp = array[(array.length - 1)] + array[(array.length-2)];
    array.push(temp);
    }
  }
  return array;
}

console.log(fibonacciGenerator(2));
