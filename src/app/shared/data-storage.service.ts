import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';


@Injectable({
    providedIn: 'root'
})
export class DataStorageService {


constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
) {}

storeRecipes() {
   const recipes: Recipe[] = this.recipeService.getRecipes();
   
   this.http.put('https://ng-course-recipe-book-feaa6.firebaseio.com/recipes.json', recipes).subscribe(
       response => console.log(response)
       ) }

fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-feaa6.firebaseio.com/recipes.json')
        .pipe(
            map((recipes: Recipe[])=>{
            return recipes.map((recipe: Recipe) => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []  }
                })
            }),
            tap((recipes) => 
              this.recipeService.setRecipes(recipes)
        ) );  
    }
}