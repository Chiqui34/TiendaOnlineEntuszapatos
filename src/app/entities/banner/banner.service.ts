import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Banner } from './banner.model';
import { DiapositivaModel } from './diapositiva-model';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  
  constructor(private http: HttpClient) { }

    public obtenerDiapositiva(): Observable<DiapositivaModel[]> {
    const urlEndPoint = "http://localhost:8080/api/diapositivas";
    return this.http.get<DiapositivaModel[]>(urlEndPoint);
  
  }

  /*public getBanners(): Banner[]{

    const banners: Banner[] = [];
    const banner01: Banner = new Banner('banner 01', '../../../assets/carousel/MainShop.jpg');
    const banner02: Banner = new Banner('banner 02', '../../../assets/carousel/pedOnline2.jpg');
    const banner03: Banner = new Banner('banner 03', '../../../assets/carousel/sports3.jpg');

    banners.push(banner01);
    banners.push(banner02);
    banners.push(banner03);

    return banners;
  }*/

}
