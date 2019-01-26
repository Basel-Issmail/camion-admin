import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrucksComponent } from '../trucks/trucks.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: TrucksComponent },
      { path: 'trucks', component: TrucksComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
