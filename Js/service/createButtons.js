import { currentAppareilsFilters,currrentUstensilesFilters, currentIngredientsFilters, currentListe, listeRecipes} from "../main.js";
import { elementsName } from "../models/elementsName.js";
import { displayVignettes } from "./displayVignettes.js";
import { displayVignettesFilters } from "./displayVignettesFilters.js";
import { filtreRecette } from "./FiltreRecette.js";



export function createButtons(liste, cathElement){
    let colone = document.getElementById('coloneElements');
    colone.innerHTML ="";
    //Faire une boucle pour creer et appenchild a la colone les elements ingredients de la liste des ingredients. 
    for(let element of liste){
        let button = document.createElement("BUTTON");
        button.innerHTML = element.toLowerCase();
        button.className= "col-3";
        button.addEventListener('click', function(){
            addToHisList(element, cathElement);
            displayVignettesFilters();
            var n = filtreRecette();
            displayVignettes(n)
            }
        );
        colone.appendChild(button);
    }
}

function addToHisList(_element, cathElement){
    var elementName = new elementsName();
    switch(cathElement){
        case elementName.ustensiles:
            currrentUstensilesFilters.push(_element);
            break;
        case elementName.appareils:
            currentAppareilsFilters.push(_element);
            break;
        case elementName.ingredient:
            currentIngredientsFilters.push(_element);
            break;    
    }

}