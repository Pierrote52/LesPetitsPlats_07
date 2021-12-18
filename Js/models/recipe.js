

export class Recipe{
    constructor(id,nom,servings,ingredients,time,description,appliance,ustensils){
        this.id=id;
        this.nom =nom;
        this.servings=servings;
        this.ingredients=ingredients;
        this.time=time;
        this.description=description;
        this.appliance=appliance;
        this.ustensils=ustensils;
    }
        //Cette methode renvoie l'objet vignette HTML.  
      htmlContent(){
        var ingredientsUl = document.createElement("ul");
        for(let i =0;i< this.ingredients.length; i++){
            var ingredient = document.createElement('li');
            var titre= document.createElement('span');
            titre.innerHTML = this.ingredients[i].ingredient;
            ingredient.appendChild(titre);
            this.ingredients[i].quantity !=null ? ingredient.innerHTML += ": " + this.ingredients[i].quantity:""
            if(this.ingredients[i].unit!=null) {ingredient.innerHTML += " " + this.ingredients[i].unit};
            ingredientsUl.appendChild(ingredient);  
        };
          var content= `
          <article class="vignette">
              <div class="image"></div>
              <div class="titreEtTemps"><p>${this.nom}</p><p>${this.time} min</p></div>
              <div class="row">
                  <div class="col-6">` + 

                  "<ul>" + ingredientsUl.innerHTML + "</ul>" +

                     
                  `</div>
                  <div class="col-6">
                      <p>${this.description}</p>
                  </div>

              </div>
          </article>
      `;

            var article = document.createElement("div");
            article.className= ('col-4');
            article.innerHTML = content;
     
      return article;

      }
    
}