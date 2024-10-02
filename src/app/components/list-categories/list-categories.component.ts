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
  categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager",
    "image":"assets/icon.png", "description":"cat1",
    
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/icon.png", "description":"cat2",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/icon.png", "description":"cat3",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/icon.png",
    "description":"cat4", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/icon.png", "description":"cat6",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/icon.png",
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

}
