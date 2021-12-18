
import{currentListe} from "../main.js";
import { displayVignettes } from "./displayVignettes.js";
import { createButtons } from "./createButtons.js";
import { reciseCurrentListeElement } from "./recizeCurrentList.js";


export function checkIngredientsValue(value, liste){
    

}
export function checkAppareilValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre Appareil. 

}
export function checkUstensilesValue(value, liste){
    //Cette fonction contrôle la liste avec le parametre Ustensiles. 

}

//Cette fonction va chercher si un ingredient,correspond dans la liste demandée. 
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

