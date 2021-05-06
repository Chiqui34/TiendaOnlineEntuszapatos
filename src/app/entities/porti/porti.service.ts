import { Injectable } from '@angular/core';
import { Porti } from './porti.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortiService {

  constructor(private http: HttpClient) { }

  /*
    public obtenerPorTi(): Porti[] {
    const porti: Porti[] = [];

    const porti01: Porti = new Porti('Lo tenemos todo para ti', '../../../../assets/porti/Presenta1_2.jpg', 'Encuentra lo que estás buscando');
    const porti02: Porti = new Porti('Cajón de ofertas', '../../../../assets/porti/ofertas.jpg', 'Tu cajón de ofertas');
    const porti03: Porti = new Porti('Déjanos arreglarlo', '../../../../assets/porti/Arreglos.jpg', 'Hacemos tus arreglos');

    porti.push(porti01);
    porti.push(porti02);
    porti.push(porti03);

    return porti;
  }
  */
 
    public obtenerArticulosPorTi(): Observable<Porti[]> {
    const urlEndPoint = "http://localhost:8080/api/articulosPorti";
    return this.http.get<Porti[]>(urlEndPoint);
  }

}
