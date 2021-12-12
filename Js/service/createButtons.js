import { currentAppareils,currrentUstensiles, currentIngredients} from "../main.js";
import { elementsName } from "../models/elementsName.js";



export function createButtons(liste, cathElement){

    let colone = document.getElementById('coloneElements');
    colone.innerHTML ="";
    //Faire une boucle pour creer et appenchild a la colone les elements ingredients de la liste des ingredients. 
    for(let element of liste){
        let button = document.createElement("BUTTON");
        button.innerHTML = element;
        button.className= "col-3";
        button.addEventListener('click', function(){
            console.log(element + " " + cathElement);
            addToHisList(element, cathElement);
        })
        colone.appendChild(button);
    }
}

function addToHisList(_element, cathElement){
    var elementName = new elementsName();
    switch(cathElement){
        case elementName.ustensiles:
            currrentUstensiles.push(_element);
            break;
        case elementName.appareils:
            currentAppareils.push(_element);
            break;
        case elementName.ingredient:
            currentIngredients.push(_element);
            break;    
    }

}