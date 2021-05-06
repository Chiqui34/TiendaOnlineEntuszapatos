import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaArticuloDetailComponent } from './entities/categoria/categoria-articulo-detail/categoria-articulo-detail.component';
import { ListArticulosCategoriasComponent } from './entities/categoria/list-articulos-categorias/list-articulos-categorias.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'listaCategoria/:titulo', component: ListArticulosCategoriasComponent},
  {path: 'detalleArticulo/:titulo/:url', component: CategoriaArticuloDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
