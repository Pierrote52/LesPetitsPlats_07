import { section } from "../main";


export function displayVignettes(liste){
    section.innerHTML="";
    for(let i=0;i<liste.length;i++){
        section.appendChild(liste[i].htmlContent());
    }
}