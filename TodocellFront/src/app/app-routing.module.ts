import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/crear-producto' },
  { path: 'crear-producto', loadChildren: () => import('./pages/crear-producto/crear-producto.module').then(m => m.CrearProductoModule) },
  { path: 'listar-productos', loadChildren: () => import('./pages/listar-productos/listar-productos.module').then(m => m.ListarProductosModule) },
  { path: 'generar-nota-venta', loadChildren: () => import('./pages/generar-nota-venta/generar-nota-venta.module').then(m => m.GenerarNotaVentaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
