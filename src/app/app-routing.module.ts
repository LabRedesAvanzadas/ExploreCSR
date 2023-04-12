import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import {DemosComponent} from './pages/demos/demos.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'demos', component: DemosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
