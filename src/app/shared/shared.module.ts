import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialComponentsModule } from './modules/ng-material-components.module';
import { TableRowActionsComponent } from './components/table/table-row-actions/table-row-actions.component';
import { TableContentComponent } from './components/table/table-content/table-content.component';

@NgModule({
  declarations: [
    TableRowActionsComponent,
    TableContentComponent,
  ],
  imports: [
    CommonModule,
    NgMaterialComponentsModule
  ],
  exports: [
    NgMaterialComponentsModule,
    TableRowActionsComponent,
    TableContentComponent,
  ]
})
export class SharedModule { }
