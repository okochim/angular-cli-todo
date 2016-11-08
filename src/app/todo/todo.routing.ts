import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent }  from '../todo/todos/todos';
import { TodoDetailComponent }  from '../todo/todoDetail/todoDetail';
import { LoginComponent }  from '../login/login';
import { AuthGuard } from '../stores/authGuardStore';

const todosRoutes: Routes = [
  {
    path: 'todos',
    component: TodoComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'sample todos'
    }
  },
  {
    path: 'detail/:id',
    component: TodoDetailComponent
  }
];
export const todoRouting: ModuleWithProviders = RouterModule.forChild(todosRoutes);
