import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityComponent }  from '../security/security';

const securityRoutes: Routes = [
  {
    path: 'security',
    component: SecurityComponent,
  },
];
export const securityRouting: ModuleWithProviders = RouterModule.forChild(securityRoutes);
