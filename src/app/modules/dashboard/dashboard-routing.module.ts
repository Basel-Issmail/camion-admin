import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrucksComponent } from '../trucks/trucks.component';
import { DashboardComponent } from './dashboard.component';
import { CompaniesComponent } from '../companies/companies.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: TrucksComponent },
      { path: 'trucks', component: TrucksComponent },
      { path: 'companies', component: CompaniesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
