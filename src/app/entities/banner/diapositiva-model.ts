export class DiapositivaModel {

   titulo: string;
   imagen: string;
   activo: boolean;

   constructor(titulo: string, imagen: string, activo: boolean){
      this.titulo = titulo;
      this.imagen = imagen;
      this.activo = activo;
   }
}
