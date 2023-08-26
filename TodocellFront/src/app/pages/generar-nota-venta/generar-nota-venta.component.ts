import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generar-nota-venta',
  templateUrl: './generar-nota-venta.component.html',
  styleUrls: ['./generar-nota-venta.component.scss']
})
export class GenerarNotaVentaComponent {

  validateForm: FormGroup;
  datos = true;
  visible = false;
  searchValue = '';
  venta:any = [

  ];

  onInit() {
    console.log("GenerarNotaVentaComponent onInit");
  }

  constructor() {
    console.log("GenerarNotaVentaComponent constructor");
    if(this.datos){

      this.validateForm = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        cedula: new FormControl('', [Validators.required]),
        direccion: new FormControl(0.0, [Validators.required]),
        telefono: new FormControl(0, [Validators.required]),
        productos: new FormControl(''),
      });

    }else{
      this.validateForm = new FormGroup({
        nombre: new FormControl(''),
        cedula: new FormControl(''),
        direccion: new FormControl(0.0),
        telefono: new FormControl(0),
        productos: new FormControl(''),
      });
    }
  }

  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    //se envia el formulario.
    if(this.datos){
      if(this.validateForm.valid ){
        console.log(this.validateForm.value);
        alert("FASE PRUEBAS, VENTA GENERADA A "+this.validateForm.value.nombre);  
      }
    }
    
    else{
      alert("FASE PRUEBAS, NOTA DE VENTA ANONIMA GENERADA");
    }
      
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.venta = this.venta.filter((item: any) => item.nombre.indexOf(this.searchValue) !== -1);
  }

}
