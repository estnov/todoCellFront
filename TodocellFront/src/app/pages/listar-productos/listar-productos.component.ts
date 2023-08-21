import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent {
  listOfData: any[] = [
    {
      nombre: 'Producto de prueba 1',
      descripcion: 'esta sería la descripción del producto de prueba 1',
      precio: 100.0,
      cantidad: 10,
      categoria: 'celulares'
    },
    {
      nombre: 'Producto de prueba 2',
      descripcion: 'esta sería la descripción del producto de prueba 2',
      precio: 30.50,
      cantidad: 5,
      categoria: 'celulares'
    }

  ];
} 
