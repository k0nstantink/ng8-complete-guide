import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe; 

  constructor() { }

  ngOnInit(): void {
    // this.recipeD = {
    //   name: 'Pasta Summer', 
    //   description: 'Here is an easy meal to make for thos hot summer days. It is great for lunch or dinner and if you don\'t like one ingredient take it out and add your own favorites. We use it with our home grown tomatoes but its is tastely year round.',
    //   imagePath: 'assets/img/download.jpg'};
  }

 

}
