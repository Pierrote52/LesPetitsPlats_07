
import{currentListe} from "../main.js";
import { displayVignettes } from "./displayVignettes.js";
import { createButtons } from "./createButtons.js";
import { reciseCurrentListeElement } from "./recizeCurrentList.js";


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
    

}
export function checkAppareilValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre Appareil. 

}
export function checkUstensilesValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre Ustensiles. 

}

//Cette fonction va chercher si un ingredient,correspond à la liste demandée. 
export function filtreIngredients(value, liste){
    let _currentList = [];
    for(let elemnt of liste){
        let nombredelettres = value.length;
        let error=false;
        for(let i=0; i<nombredelettres;i++){
            
            if(value[i]==elemnt[i]&& !_currentList.includes(elemnt)&&error==false){
       
            }else{
                error=true;
            }

        }
    if(error==false){
        _currentList.push(elemnt)
    }

    }
    return _currentList;
}

export function createFiltreForDisplay(v, _listeDesIngredients,elementsName){
    createButtons([]);
    let value = v.target.value;
    let _currentList = filtreIngredients(value, _listeDesIngredients);
    createButtons(_currentList, elementsName);
    reciseCurrentListeElement();

}