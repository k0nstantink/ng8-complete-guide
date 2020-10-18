import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

    private userSub = new Subscription;
    isAuthenticated = false;

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService) {
    }
    
    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user: User) => {
            // this.isAuthenticated = !user ? false : true;
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
            
            
        });
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchRecipes() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    

}