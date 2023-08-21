import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarNotaVentaComponent } from './generar-nota-venta.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';



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
    NzButtonModule


  ]
})
export class GenerarNotaVentaModule { }
