import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './home/home.component';
import {SecondComponent} from './second/second.component';
import {FirstchildComponent} from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ThirdchildComponent } from "app/thirdchild/thirdchild.component";
import { FourthchildComponent } from "app/fourthchild/fourthchild.component";

//Either configure routes in this Routing Module or within the module itself but not in both.
@NgModule({
  imports: [
    RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'second', component: SecondComponent, children: [
        {path: 'firstchildcomp', component: FirstchildComponent, outlet:'firstchild'},
        {path: 'secondchildcomp', component: SecondchildComponent, outlet:'secondchild'},
        {path: 'thirdchildcomp', component: ThirdchildComponent, outlet:'firstchild'},
        {path: 'fourthchildcomp', component: FourthchildComponent, outlet:'secondchild'}
    ]},
    {path: 'second', component: SecondComponent, children: [
        {path: 'firstchildcomp', component: FirstchildComponent, outlet:'firstchild'},
        {path: 'thirdchildcomp', component: ThirdchildComponent, outlet:'secondchild'},
        {path: 'secondchildcomp', component: SecondchildComponent, outlet:'firstchild'},
        {path: 'fourthchildcomp', component: FourthchildComponent, outlet:'secondchild'}
    ]},
])
   ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }