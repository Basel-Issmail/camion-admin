import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialComponentsModule } from './modules/ng-material-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMaterialComponentsModule
  ],
  exports: [
    NgMaterialComponentsModule
  ]
})
export class SharedModule { }
