
var screen = document.getElementById("sreen");
export var changecreenMode = document.getElementById("changeMode")

changecreenMode.addEventListener('click', function(){
    screen.style.backgroundColor=="" ? screen.style.backgroundColor="black": screen.style.backgroundColor="";
});

