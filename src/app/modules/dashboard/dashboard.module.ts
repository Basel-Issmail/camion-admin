import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { TrucksComponent } from '../trucks/trucks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompaniesComponent } from '../companies/companies.component';
import { FormsModule } from '@angular/forms';
import { RouterTabModule } from '@zerohouse/router-tab';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, TrucksComponent, CompaniesComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    RouterTabModule
  ]
})
export class DashboardModule { }
