import { Component, Input, OnInit } from '@angular/core';
//import { Banner } from '../banner.model';
import { DiapositivaModel } from '../diapositiva-model';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css']
})
export class BannerCarouselComponent implements OnInit {

  
  @Input() diapositivasActivas: DiapositivaModel[] = [];
  //@Input() banners: Banner[] = [];


  constructor() { }
  

  ngOnInit(): void {
  }

}
