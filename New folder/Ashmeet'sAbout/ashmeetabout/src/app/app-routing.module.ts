import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './wal/wal.component';  // Import AboutComponent

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }, // Set up the 'about' route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use the 'forRoot' method for setting up routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
