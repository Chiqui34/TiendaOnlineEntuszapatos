import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  public obtenerCategoria(): Categoria[] {
    
    const categoria: Categoria[] = [];

    const categoria01: Categoria = new Categoria('Merceditas', '../../../assets/categorias/merceditas.jpg', 'Merceditas desde 10€');
    const categoria02: Categoria = new Categoria('Botas', '../../../assets/categorias/womenBoots.jpg', 'Botas hasta -25%');
    const categoria03: Categoria = new Categoria('Sckeches', '../../../assets/categorias/sckeches.jpg', 'Skeches hasta -20%');
    const categoria04: Categoria = new Categoria('Zapatos de fiesta', '../../../assets/categorias/partyShoes.jpg', 'Zapatos para fiesta hasta 30%');

    categoria.push(categoria01);
    categoria.push(categoria02);
    categoria.push(categoria03);
    categoria.push(categoria04);

    return categoria;
  }

  public obtenerMerceditas (): Categoria[]{

    const merceditas: Categoria[] = [];

    const merceditas01: Categoria = new Categoria('Merceditas01', '../../../assets/merceditas/merceditasAzul.webp', '10€');
    const merceditas02: Categoria = new Categoria('Merceditas02', '../../../assets/merceditas/merceditasMarron.webp', '12€');
    const merceditas03: Categoria = new Categoria('Merceditas03', '../../../assets/merceditas/merceditasAmarillo.webp', '11€');
    const merceditas04: Categoria = new Categoria('Merceditas04', '../../../assets/merceditas/merceditasGris.webp', '12€');
    const merceditas05: Categoria = new Categoria('Merceditas05', '../../../assets/merceditas/merceditasRojas.webp', '10€');
    const merceditas06: Categoria = new Categoria('Merceditas06', '../../../assets/merceditas/merceditasRojasPerfo.webp', '11€');

    merceditas.push(merceditas01);
    merceditas.push(merceditas02);
    merceditas.push(merceditas03);
    merceditas.push(merceditas04);
    merceditas.push(merceditas05);
    merceditas.push(merceditas06);

    return merceditas;
  }

  public obtenerBotas (): Categoria[]{

    const botas: Categoria[] = [];

    const bota01: Categoria = new Categoria('Botas01', '../../../assets/Botas/botasBlanco.webp', '24€');
    const bota02: Categoria = new Categoria('Botas02', '../../../assets/Botas/botasCeleste.webp', '24€');
    const bota03: Categoria = new Categoria('Botas03', '../../../assets/Botas/botasMarronClaro.webp', '22€');
    const bota04: Categoria = new Categoria('Botas04', '../../../assets/Botas/botasNegro.webp', '20€');
    const bota05: Categoria = new Categoria('Botas05', '../../../assets/Botas/botasNude.webp', '21€');
    const bota06: Categoria = new Categoria('Botas06', '../../../assets/Botas/botasTopoo.webp', '20€');

    botas.push(bota01);
    botas.push(bota02);
    botas.push(bota03);
    botas.push(bota04);
    botas.push(bota05);
    botas.push(bota06);

    return botas;

  }

  public obtenerSkeches (): Categoria[]{

    const skeches: Categoria[] = [];

    const skeches01: Categoria = new Categoria('Skeches01', '../../../assets/Skeches/skechAzulRosa.webp', '18€');
    const skeches02: Categoria = new Categoria('Skeches02', '../../../assets/Skeches/skechTopo.webp', '17€');
    const skeches03: Categoria = new Categoria('Skeches03', '../../../assets/Skeches/skechRosa.webp', '16€');
    const skeches04: Categoria = new Categoria('Skeches04', '../../../assets/Skeches/skechSandaliaRosa.webp', '20€');
    const skeches05: Categoria = new Categoria('Skeches05', '../../../assets/Skeches/skechNegro.webp', '18€');
    const skeches06: Categoria = new Categoria('Skeches06', '../../../assets/Skeches/skechBlanco.webp', '17€');

    skeches.push(skeches01);
    skeches.push(skeches02);
    skeches.push(skeches03);
    skeches.push(skeches04);
    skeches.push(skeches05);
    skeches.push(skeches06);

    return skeches;
  }

  public obtenerZapatosFiesta (): Categoria[]{

    const zapatosFiesta: Categoria[] = [];

    const zapatoFiesta01: Categoria = new Categoria('zapatoFiesta01', '../../../assets/Fiesta/FiestaBeig.webp', '27€');
    const zapatoFiesta02: Categoria = new Categoria('zapatoFiesta02', '../../../assets/Fiesta/FiestaBlanco.webp', '28€');
    const zapatoFiesta03: Categoria = new Categoria('zapatoFiesta03', '../../../assets/Fiesta/FiestaDorado.webp', '24€');
    const zapatoFiesta04: Categoria = new Categoria('zapatoFiesta04', '../../../assets/Fiesta/FiestaMarron.webp', '25€');
    const zapatoFiesta05: Categoria = new Categoria('zapatoFiesta05', '../../../assets/Fiesta/FiestaNegro.webp', '30€');
    const zapatoFiesta06: Categoria = new Categoria('zapatoFiesta06', '../../../assets/Fiesta/FiestaOro.webp', '26€');
    
    zapatosFiesta.push(zapatoFiesta01);
    zapatosFiesta.push(zapatoFiesta02);
    zapatosFiesta.push(zapatoFiesta03);
    zapatosFiesta.push(zapatoFiesta04);
    zapatosFiesta.push(zapatoFiesta05);
    zapatosFiesta.push(zapatoFiesta06);

    return zapatosFiesta;
  }


}
