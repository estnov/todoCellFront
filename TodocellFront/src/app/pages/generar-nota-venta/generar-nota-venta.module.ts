import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarNotaVentaComponent } from './generar-nota-venta.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [GenerarNotaVentaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: GenerarNotaVentaComponent}]),
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTableModule,
    NzDropDownModule

  ]
})
export class GenerarNotaVentaModule { }
