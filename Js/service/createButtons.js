import { currentAppareilsFilters,currrentUstensilesFilters, currentIngredientsFilters, currentListe, listeRecipes} from "../main.js";
import { elementsName } from "../models/elementsName.js";
import { displayVignettes } from "./displayVignettes.js";
import { displayVignettesFilters } from "./displayVignettesFilters.js";
import { filtreRecette } from "./FiltreRecette.js";



export function createButtons(liste, cathElement){
    var colone;
    var elementName = new elementsName();
    switch(cathElement){
        case elementName.ingredient:
            colone = document.getElementById('coloneIngredients');
            break;
        case elementName.appareils:
            colone = document.getElementById('coloneAppareil');
            break;
        case elementName.ustensiles:
            colone = document.getElementById('coloneUstensiles');

    }
    
    colone.innerHTML ="";
    //Faire une boucle pour creer et appenchild a la colone les elements ingredients de la liste des ingredients. 
    for(let element of liste){
        let button = document.createElement("BUTTON");
        button.innerHTML = element.toLowerCase();
        button.className= "col-3";
        button.addEventListener('click', function(){
            console.log('boutton cliqué');
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