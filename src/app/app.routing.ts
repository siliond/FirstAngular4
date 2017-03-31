import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationsComponent } from './animations/animations.component';
import { AboutComponent } from './about/about.component';
import { InputComponent } from './input/input.component';
import { ResponsiveLayoutDirectionsComponent } from './responsive-layout-directions/responsive-layout-directions.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  redirectTo: '' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'animations',  component: AnimationsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'input',  component: InputComponent },
  { path: 'responsive-layout-directions',  component: ResponsiveLayoutDirectionsComponent },
  { path: 'tabs',  component: TabsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule {}
