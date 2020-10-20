import { NgModule } from "@angular/core";

// Shopping List Feature
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const shoppingLinstRoutes: Routes = [
    {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({ 
    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild(shoppingLinstRoutes)
       ],
    declarations: [ 
        ShoppingListComponent,
        ShoppingEditComponent],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ]
})
export class ShoppingListModule {

}