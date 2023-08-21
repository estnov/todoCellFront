import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generar-nota-venta',
  templateUrl: './generar-nota-venta.component.html',
  styleUrls: ['./generar-nota-venta.component.scss']
})
export class GenerarNotaVentaComponent {

  validateForm: FormGroup;

  onInit() {
    console.log("GenerarNotaVentaComponent onInit");
  }

  constructor() {
    console.log("GenerarNotaVentaComponent constructor");
    this.validateForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl(0.0, [Validators.required]),
      cantidad: new FormControl(0, [Validators.required]),
      categoria: new FormControl(''),
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    //se envia el formulario
    console.log(this.validateForm.value);
  }

}
