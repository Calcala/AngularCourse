import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Tortitas de platano", "Nuestra receta mas famosa", "https://www.inspiredtaste.net/wp-content/uploads/2012/10/Spice-Buttermilk-Banana-Pancakes-Recipe-1200.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
