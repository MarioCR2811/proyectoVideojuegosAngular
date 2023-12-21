import { Injectable } from '@angular/core';
import { Videojuego } from './videojuego.model';
import { DataServices } from './data.services';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  constructor(private dataService:DataServices){}

  videojuegos:Videojuego[] = [];

  setVideojuegos(misVideojuegos:Videojuego[]){
    this.videojuegos = misVideojuegos;
  }

  agregarVideojuegoServicio(videojuego:Videojuego) : Observable<any>{
    alert("Se va a agregar a la lista el videojuego " + videojuego.nombre);
    this.videojuegos.push(videojuego);
    return this.dataService.guardarVideojuego(this.videojuegos);
  }

  obtenerVideojuegos() : Observable<Videojuego[]>{
    return this.dataService.cargarVideojuegos();
  }


  //Si no lo hacia de esta forma me daba error todo el rato porque me borraba antes de la base de datos que del array y generaba inconsistencias
  eliminarVideojuego(indice: number): Observable<any> {
        this.videojuegos.splice(indice, 1);
        this.dataService.eliminarVideojuego(indice);
        return this.dataService.guardarVideojuego(this.videojuegos);
  }

  encontrarVideojuego(indice:number){
    let videojuego:Videojuego = this.videojuegos[indice];
    return videojuego;
  }
  
  actualizarVideojuego(indice: number, videojuego: Videojuego): Observable<any> {
    const videojuegoMod = this.videojuegos[indice];
  
    videojuegoMod.nombre = videojuego.nombre;
    videojuegoMod.desarrolladora = videojuego.desarrolladora;
    videojuegoMod.consola = videojuego.consola;
    videojuegoMod.anyo = videojuego.anyo;
  
    return this.dataService.actualizarVideojuego(indice, videojuego);
  }
}
