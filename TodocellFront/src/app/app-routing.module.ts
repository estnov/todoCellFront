import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/crear-producto' },
  { path: 'crear-producto', loadChildren: () => import('./pages/crear-producto/crear-producto.module').then(m => m.CrearProductoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
