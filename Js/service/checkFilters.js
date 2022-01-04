
import { createButtons } from "./createButtons.js";
import { reciseCurrentListeElement } from "./recizeCurrentList.js";


//Cette fonction va chercher si un ingredient,correspond dans la liste demandée. 
export function filtreIngredients(value, liste){
    let _currentList = [];
    for(let elemnt of liste){
        elemnt = elemnt.toLowerCase();
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

export function createFiltreForDisplay(v, currentListe,elementsName){
    
    let value = v.target.value.toLowerCase();
    let _currentList = filtreIngredients(value, currentListe);
    createButtons(_currentList, elementsName);
}

