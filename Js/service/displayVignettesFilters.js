import { currentAppareils,currrentUstensiles, currentIngredients} from "../main.js";


export function  displayVignettesFilters(){
    let sectionFiltre = document.getElementById("sectionFiltres");
    sectionFiltre.innerHTML="";
    for(let element of currentIngredients){
        let div= document.createElement("div");
        div.className = "col-2 ingredient";
        div.innerHTML = `<p>${element}</p><button><img src=\"assets/Icons/close.svg\" alt=\"bouttonclose\" aria_label=\"button pour fermer\"></button>`;

        div.style.width = div.getElementsByTagName("p").offsetWidth + "px";
        sectionFiltre.appendChild(div);

    }
    for(let element of currentAppareils){
        let div= document.createElement("div");
        div.className = "col-2 appareils";
        div.innerHTML = `<p>${element}</p><button><img src=\"assets/Icons/close.svg\" alt=\"bouttonclose\" aria_label=\"button pour fermer\"></button>`;
        sectionFiltre.appendChild(div);

    }
    for(let element of currrentUstensiles){
        let div= document.createElement("div");
        div.className = "col-2 ustensils";
        div.innerHTML = `<p>${element}</p><button><img src=\"assets/Icons/close.svg\" alt=\"bouttonclose\" aria_label=\"button pour fermer\"></button>`;
        sectionFiltre.appendChild(div);

    }


}