import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { TrucksComponent } from '../trucks/trucks.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, TrucksComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
