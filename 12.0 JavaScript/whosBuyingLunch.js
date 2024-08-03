function whosPaying(names) {
var n = Math.floor((Math.random() * names.length));
return names[n] + " is going to buy lunch today!"
}
console.log(whosPaying(["Angela","Ben"]))
