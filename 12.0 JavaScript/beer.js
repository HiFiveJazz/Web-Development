function ninety_nine_bottles_of_beer(){
  var bottlesLeft = 100; 
  while (bottlesLeft > 0) { 
  bottlesLeft = bottlesLeft - 1;
  var string = bottlesLeft + " bottles of beer on the wall, " + bottlesLeft + " bottles of beer, Take one down, pass it around, " + (bottlesLeft-1) + " bottles of beer on the wall.";
  switch (bottlesLeft) {
      case 2: 
        string = bottlesLeft + " bottles of beer on the wall, " + bottlesLeft + " bottles of beer, Take one down, pass it around, " + (bottlesLeft-1) + " bottle of beer on the wall.";
        break;
      case 1: 
        string = bottlesLeft + " bottle of beer on the wall, " + bottlesLeft + " bottle of beer, Take one down, pass it around, no more bottles of beer on the wall.";
        break;
      case 0: 
        string = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
        break;
    }
  console.log(string);
  }
}

ninety_nine_bottles_of_beer();
