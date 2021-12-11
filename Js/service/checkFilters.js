
import{currentListe} from "../main.js";
import { displayVignettes } from "./displayVignettes.js";


export function checkAllFiltersValue(value, liste){

    for(let i=0; i<liste.length;i++ ){
        if(liste[i].description.includes(value)||liste[i].ustensils.includes(value)){
            currentListe.push(liste[i]);
        }else{
            for(let j=0;j<liste[i].ingredients.length;j++){
                if(liste[i].ingredients[j].ingredient.includes(value)){
                    currentListe.push(liste[i]);
                };

            }
        }
    }
    displayVignettes(currentListe);
}

export function checkIngredientsValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre ingredient. 

}
export function checkAppareilValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre Appareil. 

}
export function checkUstensilesValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre Ustensiles. 

}
