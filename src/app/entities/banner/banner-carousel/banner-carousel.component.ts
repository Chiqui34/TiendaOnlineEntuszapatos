import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../banner.model';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css']
})
export class BannerCarouselComponent implements OnInit {

  @Input() banners: Banner[] = [];
  constructor() { }
  

  ngOnInit(): void {
  }

}
