for (i=0; i<=6; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick) 
}

function handleClick() {
  alert("I got clicked!");
}
