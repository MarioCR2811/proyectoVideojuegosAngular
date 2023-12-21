export class Videojuego {
    nombre: string = "";
    desarrolladora: string = "";
    consola: string = "";
    anyo: number = 0;
  
    constructor(nombre: string, desarrolladora: string, consola: string, anyo: number) {
      this.nombre = nombre;
      this.desarrolladora = desarrolladora;
      this.consola = consola;
      this.anyo = anyo;
    }
  }