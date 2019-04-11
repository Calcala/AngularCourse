import { Component, OnInit } from '@angular/core';
import { Ingrdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrdient[] = [
    new Ingrdient("Bread",5),
    new Ingrdient("Ham",1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
