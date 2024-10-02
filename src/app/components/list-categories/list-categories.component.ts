import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  title="";
  search="";
  prix=0;
  categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager",
    "image":"assets/icon.png", "description":"cat1","prix":900,"nb_Likes":0,
    
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/icon.png", "description":"cat2","prix":1000,"nb_Likes":0,
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/icon.png", "description":"cat3","prix":1000,"nb_Likes":0,
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/icon.png","prix":1000,"nb_Likes":0,
    "description":"cat4", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/icon.png", "description":"cat6","prix":1000,"nb_Likes":0,
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/icon.png","prix":1000,"nb_Likes":0,
    "description":"cat6","available":false},
    ]
    searchcategories : Categorie[]=this.categories;

    showAlert(msg:String){
      alert(msg)
    }
    searchTitle(){
      console.log('tet')
      this.searchcategories=this.categories
      for(let cat of this.searchcategories){
        if(cat.title  !==this.search){
          this.searchcategories.splice(this.searchcategories.indexOf(cat))
        }
        cat.title.toString().includes("") 
      }
    }

    addLike(cat : Categorie){
      const index=this.categories.indexOf(cat);
      if(this.categories[index].nb_Likes<10){
        this.categories[index].nb_Likes+=1;
      }
      
    }

}
