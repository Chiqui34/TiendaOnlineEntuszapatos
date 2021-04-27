import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  public obtenerCategoria(): Categoria[] {
    
    const categoria: Categoria[] = [];

    const categoria01: Categoria = new Categoria('Manoletinas', '../../../assets/categorias/manoletina.jpg', 'Manoletinas desde 10€');
    const categoria02: Categoria = new Categoria('Botas', '../../../assets/categorias/womenBoots.jpg', 'Botas hasta -25%');
    const categoria03: Categoria = new Categoria('Sckeches', '../../../assets/categorias/sckeches.jpg', 'Skeches hasta -20%');
    const categoria04: Categoria = new Categoria('Zapatos fiesta', '../../../assets/categorias/partyShoes.jpg', 'Zapatos para fiesta hasta 30%');

    categoria.push(categoria01);
    categoria.push(categoria02);
    categoria.push(categoria03);
    categoria.push(categoria04);

    return categoria;
  }
}
