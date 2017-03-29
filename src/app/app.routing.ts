import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationsComponent } from './animations/animations.component';
import { AboutComponent } from './about/about.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  redirectTo: '' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'animations',  component: AnimationsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'input',  component: InputComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
