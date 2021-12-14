import { currentAppareilsFilters,currrentUstensilesFilters, currentIngredientsFilters, currentListe} from "../main.js";
import { elementsName } from "../models/elementsName.js";
import { displayVignettesFilters } from "./displayVignettesFilters.js";
import { filtreListeWithFilter } from "./filtreListeWithFilter.js";
import { displayVignettes } from "./displayVignettes.js";



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
            var _newListe = filtreListeWithFilter(currentListe,currentIngredientsFilters)
            displayVignettesFilters(_newListe);
          
            displayVignettes(_newListe);
        });
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