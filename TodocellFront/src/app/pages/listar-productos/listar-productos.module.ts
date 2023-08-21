import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    ListarProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ListarProductosComponent}]),
    NzTableModule,
    NzDividerModule
  ]
})
export class ListarProductosModule { }
