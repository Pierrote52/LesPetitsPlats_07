import { section } from "../main.js";
import { ifNotFound } from "./notFound.js";

// Cette fonction va vider la partie section de la page HTML,
// et la remplir avec des vignettes basées sur le liste de recipe recu en paramètre. 
export function displayVignettes(liste){
    section.innerHTML="";
    if(liste.length > 0){for(let i=0;i<liste.length;i++){
        section.appendChild(liste[i].htmlContent());
    }}else{
        ifNotFound()
    }
    
}