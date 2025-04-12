import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './wal/wal.component';  // Import AboutComponent
import { AppRoutingModule } from './app-routing.module';  // Import Routing Module

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,  // Declare AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Include Routing Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
