import { currentAppareilsFilters,currrentUstensilesFilters, currentIngredientsFilters} from "../main.js";
import { displayVignettes } from "./displayVignettes.js";
import { filtreRecette } from "./FiltreRecette.js";


export function  displayVignettesFilters(){
    let sectionFiltre = document.getElementById("sectionFiltres");
    sectionFiltre.innerHTML="";
    for(let element of currentIngredientsFilters){
        let div= document.createElement("div");
        div.className = "col-2 ingredient";
        div.innerHTML = `<p>${element}</p><button><img src=\"assets/Icons/close.svg\" alt=\"bouttonclose\" aria_label=\"button pour fermer\"></button>`;
        var button =div.getElementsByTagName('button')[0];
        button.addEventListener('click', function(){
            var index = currentIngredientsFilters.indexOf(element);
            currentIngredientsFilters.splice(index,1);
            displayVignettes(filtreRecette());
            displayVignettesFilters();
        })

        div.style.width = div.getElementsByTagName("p").offsetWidth + "px";
        sectionFiltre.appendChild(div);

    }
    for(let element of currentAppareilsFilters){
        let div= document.createElement("div");
        div.className = "col-2 appareils";
        div.innerHTML = `<p>${element}</p><button><img src=\"assets/Icons/close.svg\" alt=\"bouttonclose\" aria_label=\"button pour fermer\"></button>`;
        var button =div.getElementsByTagName('button')[0];
        button.addEventListener('click', function(){
            var index = currentAppareilsFilters.indexOf(element);
            currentAppareilsFilters.splice(index,1);
            displayVignettes(filtreRecette());
            displayVignettesFilters();
        })
        sectionFiltre.appendChild(div);

    }
    for(let element of currrentUstensilesFilters){
        let div= document.createElement("div");
        div.className = "col-2 ustensils";
        div.innerHTML = `<p>${element}</p><button><img src=\"assets/Icons/close.svg\" alt=\"bouttonclose\" aria_label=\"button pour fermer\"></button>`;
        var button =div.getElementsByTagName('button')[0];
        button.addEventListener('click', function(){
            var index = currrentUstensilesFilters.indexOf(element);
            currrentUstensilesFilters.splice(index,1);
            displayVignettes(filtreRecette());
            displayVignettesFilters();
        })
        
        sectionFiltre.appendChild(div);

    }


}