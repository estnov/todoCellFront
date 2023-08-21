import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductoComponent } from './crear-producto.component';
import { Router, RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [CrearProductoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CrearProductoComponent}]),
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class CrearProductoModule { }
