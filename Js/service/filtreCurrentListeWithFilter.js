import{currentListe, currentIngredientsFilters}from "../main.js"



export function filtreCurrentListeWithFilter(){
    var _newList = [];
    for(var element of currentListe){
        for(var m of element.ingredients){
            for(var l of currentIngredientsFilters){
                if(m.ingredient==l){
                    console.log('It is a match');
                    _newList.push(element);
                }
            }

        }

    }

}