
import { section } from "../main.js";


//Cette fonction va permettre de diplay un message si auccune recette n'est trouvée. 
export function ifNotFound(){
    if(section.innerHTML==""){
    let message = document.createElement("p");
    message.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson»";
    section.appendChild(message);

}}
