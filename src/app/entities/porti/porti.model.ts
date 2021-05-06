/*
export class Porti {
   titulo: string;
   url: string;
   descripcion: string;

   constructor(titulo: string, url: string, descripcion: string) {
      this.titulo = titulo;
      this.url = url;
      this.descripcion = descripcion;
   }
}

*/

export class Porti {
   id: number;
   titulo: string;
   imagen: string;
   descripcion: string;

   constructor(id: number, titulo: string, imagen: string, descripcion: string) {
      this.id = id;
      this.titulo = titulo;
      this.imagen = imagen;
      this.descripcion = descripcion;
   }
}
