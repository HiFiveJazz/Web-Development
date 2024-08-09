function Bellboy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
} 

var bellboy1 = new Bellboy("Tim", 19, "True", ["English", "German"]);

console.log(bellboy1.name)
