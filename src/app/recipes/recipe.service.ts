import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class RecipeService {

recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
    private recipes: Recipe[] = 
    [
        new Recipe(
        'Pasta Summer', 
        'Here is an easy meal to make for thos hot summer days. It is great for lunch or dinner and if you don\'t like one ingredient take it out and add your own favorites. We use it with our home grown tomatoes but its is tastely year round.',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg', [
            new Ingredient('Pasta', 2), new Ingredient('Cabbage', 3)
        ]),
        new Recipe(
        'Spanish Paella', 
        'A joke from my Spanish friend During the corona crisis the essential measures are keeping ones distance and washing ones hands. In this, the royal house is showing a shining example.',
        'assets/img/download.jpg', [
            new Ingredient('Rice', 1), new Ingredient('Mussels', 10), new Ingredient('Prawns', 3)
        ]),
        new Recipe(
        'Pancakes', 
        'After so many U turns you would think that Johnson would have ended up his nether regions some time ago.',
        'assets/img/download.jpg', [
            new Ingredient('Flour', 1), new Ingredient('Milk', 1), new Ingredient('Eggs', 2)
        ]),
        new Recipe(
        'Carrot Cake',
        'Make a classic carrot cake with this easy recipe, perfect for everyday baking and occasions.',
        'assets/img/download.jpg', [
            new Ingredient('Carrots', 1), new Ingredient('Hazlenuts', 1), new Ingredient('Eggs', 2)
        ]),
    ];

    constructor(private slService: ShoppingListService) {
    }
    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }
    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
   

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}
