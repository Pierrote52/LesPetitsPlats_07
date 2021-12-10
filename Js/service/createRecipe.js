import { Recipe } from "../models/recipe.js";


export function createRecipe(recipe){
    var id =recipe.id;
    var nom = recipe.name;
    var servings= recipe.servings;
    var ingredients= recipe.ingredients;
    var time = recipe.time;
    var description= recipe.description;
    var appliance= recipe.appliance;
    var ustensils= recipe.ustensils;

    var recipeObject = new Recipe(id,nom,servings,ingredients,time,description,appliance,ustensils);
    return recipeObject;
}

