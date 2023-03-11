import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
=======
import { TheFirstComponentComponent } from './theFirstComponent/theFirstComponent.component';

@NgModule({
  declarations: [	
    AppComponent,
      TheFirstComponentComponent
   ],
>>>>>>> origin/Mohammed
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
