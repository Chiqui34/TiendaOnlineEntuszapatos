import { Component, OnInit } from '@angular/core';
//import { Banner } from '../entities/banner/banner.model';
import { BannerService } from '../entities/banner/banner.service';
import { DiapositivaModel } from '../entities/banner/diapositiva-model';
import { Categoria } from '../entities/categoria/categoria.model';
import { CategoriaService } from '../entities/categoria/categoria.service';
import { Porti } from '../entities/porti/porti.model';
import { PortiService } from '../entities/porti/porti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //portis: Porti[] = [];
  //banners: DiapositivaModel[] = [];

  diapositivas: DiapositivaModel[] = [];
  categorias: Categoria[] = [];
  diapositivasActivas: DiapositivaModel[] = [];

  //////////////////////////////////////////////
  articulosPorti: Porti[] = [];
 

  tituloBanner = "enTusZapatos, TU TIENDA ONLINE ";
  tituloPorTi = "Destacado para ti";
  tituloCategorias = "Nuestras ofertas";


  constructor(
    //private porTiService: PortiService,
    private bannerService: BannerService,    
    private categoriaService: CategoriaService,

    ///////////////////////////////////////////
    private articulosPorTiService: PortiService
  ) { }

  ngOnInit(): void {
    
    //this.portis = this.porTiService.obtenerPorTi();
    //this.banners = this.bannerService.getBanners();
    
    this.categorias = this.categoriaService.obtenerCategoria();

    ///////////////////////////////////////////////
    this.articulosPorTiService.obtenerArticulosPorTi().subscribe(
        articulosPortiAsincronos => this.articulosPorti = articulosPortiAsincronos
      );
/*
    this.bannerService.obtenerDiapositiva().subscribe(
        diapositivasAsincronas => this.diapositivas = diapositivasAsincronas
      );
*/
    this.bannerService.obtenerDiapositiva().subscribe(
      result => {
        this.diapositivas = result;
        this.diapositivasActivas = this.diapositivas.filter(diapositiva => diapositiva.activo === true);
      }
    )

  }

}
