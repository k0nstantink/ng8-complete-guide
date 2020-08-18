import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  recipes: Recipe[] = [
    new Recipe(
    'Pasta Summer', 
    'Here is an easy meal to make for thos hot summer days. It is great for lunch or dinner and if you don\'t like one ingredient take it out and add your own favorites. We use it with our home grown tomatoes but its is tastely year round.',
    'assets/img/download.jpg'),
    new Recipe(
      'Spanish Paella', 
      'A joke from my Spanish friend During the corona crisis the essential measures are keeping ones distance and washing ones hands. In this, the royal house is showing a shining example.',
      'assets/img/download.jpg'),
      new Recipe(
        'Pancakes', 
        'After so many U turns you would think that Johnson would have ended up his nether regions some time ago.',
        'assets/img/download.jpg'),
  ];


}
