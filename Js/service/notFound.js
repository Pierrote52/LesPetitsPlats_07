
import { section } from "../main.js";


//Cette fonction va permettre de diplay un message si auccune recette n'est trouvée. 
export function ifNotFound(){
    if(section.innerHTML==""){
    let message = document.createElement("p");
    message.innerHTML = "Auccune recette trouvée... ";
    section.appendChild(message);

}}
