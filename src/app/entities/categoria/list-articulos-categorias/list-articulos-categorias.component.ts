import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-list-articulos-categorias',
  templateUrl: './list-articulos-categorias.component.html',
  styleUrls: ['./list-articulos-categorias.component.css']
})
export class ListArticulosCategoriasComponent implements OnInit {

  public tituloCategoria: any;
  public listaCategoria: Categoria[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService      
    ) {
        if (this.route.snapshot.paramMap.get('titulo')) {
          this.tituloCategoria = this.route.snapshot.paramMap.get('titulo');
        }
    }

  ngOnInit(): void {
    if (this.tituloCategoria == 'Merceditas') {
      this.listaCategoria = this.categoriaService.obtenerMerceditas();
    } else if (this.tituloCategoria == 'Botas') {
      this.listaCategoria = this.categoriaService.obtenerBotas();
    } else if (this.tituloCategoria == 'Sckeches') {
      this.listaCategoria = this.categoriaService.obtenerSkeches();
    } else this.listaCategoria = this.categoriaService.obtenerZapatosFiesta();

  }

}
