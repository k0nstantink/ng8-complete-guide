import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Carrots', 4), new Ingredient('Tomatoes', 1)
      ];
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
       return this.ingredients;
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        
        this.ingredients.push(...ingredients);
        
        this.ingredientsChanged.emit(this.ingredients.slice());

    }
     
}