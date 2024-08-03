function checkGuest(name) {
  var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
  if (guestList.includes(name) == true) {
  var string = "You are invited!"
  } else {
  var string = "You aren't invited!"
  }
  return string;
}

console.log(checkGuest("Jazz"));
