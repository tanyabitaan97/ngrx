import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter.component').then((a) => a.CounterComponent),
  },
  
];
