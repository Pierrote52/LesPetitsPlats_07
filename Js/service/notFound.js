
import { section } from "../main.js";

export function ifNotFound(){
    if(section.innerHTML==""){
    let message = document.createElement("p");
    message.innerHTML = "Auccune recette trouvée... ";
    section.appendChild(message);

}}
