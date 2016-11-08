import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }      from './stores/authGuardStore';
import { AuthService }    from './stores/authStore';
import { HighlightDirective} from './directives/highlight.directive';
import { ExponentialStrengthPipe } from './pipes/strength.pipe';
import { SecurityComponent }  from './security/security';
import { loginRoutes, authProviders }  from './login/login.routing';

const securityRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
const appRoutes: Routes = [
  ...loginRoutes,
  ...securityRoutes
];
export const appRoutingProviders: any[] = [
  authProviders,
  AuthGuard,
  AuthService,
  HighlightDirective,
  ExponentialStrengthPipe
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);