import { Component }        from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService }      from '../stores/authStore';

@Component({
  selector: 'todoLogin',
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
  `,
})

export class LoginComponent {
    message: string;
    constructor(private authService: AuthService, private router: Router) {
        this.setMessage();
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/todos';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate([redirect], navigationExtras);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }
}