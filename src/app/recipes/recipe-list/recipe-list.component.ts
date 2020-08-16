import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recipes: Recipe[] = [
    new Recipe(
    'Pasta Summer', 
    'Here is an easy meal to make for thos hot summer days. It is great for lunch or dinner and if you don\'t like one ingredient take it out and add your own favorites. We use it with our home grown tomatoes but its is tastely year round.',
    'assets/img/download.jpg'),
    new Recipe(
      'Pasta Summer', 
      'Here is an easy meal to make for thos hot summer days. It is great for lunch or dinner and if you don\'t like one ingredient take it out and add your own favorites. We use it with our home grown tomatoes but its is tastely year round.',
      'assets/img/download.jpg'),
      new Recipe(
        'Pasta Summer', 
        'Here is an easy meal to make for thos hot summer days. It is great for lunch or dinner and if you don\'t like one ingredient take it out and add your own favorites. We use it with our home grown tomatoes but its is tastely year round.',
        'assets/img/download.jpg'),
        
      

  ];


}
