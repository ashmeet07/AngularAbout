import { Routes } from '@angular/router';
import { AboutComponent } from './wal/wal.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./wal/wal.component').then(m => m.AboutComponent) // optional
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
