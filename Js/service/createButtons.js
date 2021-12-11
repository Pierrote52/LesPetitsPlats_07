
export function createButtons(liste){

    let colone = document.getElementById('coloneElements');
    colone.innerHTML ="";
    //Faire une boucle pour creer et appenchild a la colone les elements ingredients de la liste des ingredients. 
    for(let element of liste){
        let button = document.createElement("BUTTON");
        button.innerHTML = element;
        button.className= "col-3";
        colone.appendChild(button)
    }
}