import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import {  HttpClientModule } from '@angular/common/http';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    PipesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
