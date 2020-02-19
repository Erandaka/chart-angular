import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DPlanComponent } from './components/d-plan/d-plan.component';
import { TimingCardComponent } from './components/timing-card/timing-card.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CusDetailsComponent } from './components/cus-details/cus-details.component';
import { HomeComponent } from './components/home/home.component';
import { AlertDetailsComponent } from './components/alert-details/alert-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dplan', component: DPlanComponent },
  { path: 'timingcard', component: TimingCardComponent },
  { path: 'customerdetails', component: CusDetailsComponent },
  { path: 'orderdetails', component: OrderDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alertdetails', component: AlertDetailsComponent }
];
//use component names for routing
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }