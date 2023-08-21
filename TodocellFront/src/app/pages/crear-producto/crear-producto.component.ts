import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent {

  validateForm: FormGroup;
  categories: any[] = [];


  onInit() {
    console.log("CrearProductoComponent onInit");
  }

  constructor() { 
    console.log("CrearProductoComponent constructor");
    this.validateForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl(0.0, [Validators.required]),
      stock: new FormControl(0, [Validators.required]),
      imagen: new FormControl(''),
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

  loadCategories(): void {
    //se cargan las categorias
  }


}
