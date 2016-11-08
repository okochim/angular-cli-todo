import { Routes } from '@angular/router';
import { AuthGuard }      from '../stores/authGuardStore';
import { AuthService }    from '../stores/authStore';
import { LoginComponent } from '../login/login';

export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

export const authProviders = [
  AuthGuard,
  AuthService
];
