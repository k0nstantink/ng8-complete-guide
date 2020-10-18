import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styles: [ `input.ng-invalid.ng-touched { border: 1px solid red;}` ]
    } )

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
    if (!form.valid) {
        return;
    }

    let authObs: Observable<AuthResponseData>;

    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if (this.isLoginMode) { 
        authObs = this.authService.login(email, password);
     } else {
        authObs = this.authService.signup(email, password);
     }
    
    authObs.subscribe(resData => {
        console.log(resData); 
        this.isLoading = false;
        this.router.navigate(['/recipes']);
    },
    (errorMessage) => {
        console.log('ERROR', errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
    });

    form.reset();
    }

    onHandleError() {
      this.error = null;  
    }
}