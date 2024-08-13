// alert("Hello")
$("h1").css("color","red")
$("body").keypress(function(event){
  var key = event.key
  $("h1").text(key)
  console.log(key);
});
