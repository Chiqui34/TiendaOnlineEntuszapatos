import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-articulo-detail',
  templateUrl: './categoria-articulo-detail.component.html',
  styleUrls: ['./categoria-articulo-detail.component.css']
})
export class CategoriaArticuloDetailComponent implements OnInit {

  public tituloDetalle: any;
  public urlDetalle: any;

  constructor(private route: ActivatedRoute) {
    if(this.route.snapshot.paramMap.get('titulo')) {
      this.tituloDetalle = this.route.snapshot.paramMap.get('titulo');
    }
    
    if(this.route.snapshot.paramMap.get('url')) {
      this.urlDetalle = this.route.snapshot.paramMap.get('url');
    }
  }

  ngOnInit(): void {
  }

}
