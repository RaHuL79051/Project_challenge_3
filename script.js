function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    menu.style.width = "40%";
    
  }
}

function closeMenu(){
  var cm = document.getElementById("menu");
  if(cm.style.display = "block"){
    menu.style.display = "none";
  }
}