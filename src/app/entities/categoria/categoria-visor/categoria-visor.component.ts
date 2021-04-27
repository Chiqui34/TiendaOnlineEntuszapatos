import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-visor',
  templateUrl: './categoria-visor.component.html',
  styleUrls: ['./categoria-visor.component.css']
})
export class CategoriaVisorComponent implements OnInit {

  @Input() categorias: Categoria[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
