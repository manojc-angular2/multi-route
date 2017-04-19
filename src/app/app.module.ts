import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import {Routes, RouterModule } from "@angular/router";

//Routing
import { AppRoutingModule } from './app.route1';
import { ThirdchildComponent } from './thirdchild/thirdchild.component';
import { FourthchildComponent } from './fourthchild/fourthchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    FirstchildComponent,
    SecondchildComponent,
    ThirdchildComponent,
    FourthchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
