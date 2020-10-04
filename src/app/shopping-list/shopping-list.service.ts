import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Carrots', 4), new Ingredient('Tomatoes', 1)
      ];
    ingredientsChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    getIngredients() {
       return this.ingredients;
    }
    getIngredient(i: number) {
        return this.ingredients[i];
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
     
}