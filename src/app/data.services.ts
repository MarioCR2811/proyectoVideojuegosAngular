import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Videojuego } from "./videojuego.model";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){}

    //Pongo el return of null en todos para evitar que el flujo se detenga cuando hubiese un error

    cargarVideojuegos(): Observable<any> {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://videojuegos-8979b-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token)
          .pipe(
            catchError(error => {
              console.error('Error al cargar videojuegos:', error);
              return of(null);
            })
          );
      }
    
      guardarVideojuego(videojuegos: Videojuego[]): Observable<any> {
        const token = this.loginService.getIdToken();
        return this.httpClient.put('https://videojuegos-8979b-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token, videojuegos)
          .pipe(
            catchError(error => {
              console.error('Error al guardar videojuego:', error);
              return of(null);
            })
          );
      }
    
      eliminarVideojuego(indice: number): Observable<any> {
        const token = this.loginService.getIdToken();
        return this.httpClient.delete('https://videojuegos-8979b-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth=' + token)
          .pipe(
            catchError(error => {
              console.error('Error al eliminar videojuego:', error);
              return of(null);
            })
          );
      }
    
      actualizarVideojuego(indice: number, videojuego: Videojuego): Observable<any> {
        const token = this.loginService.getIdToken();
        return this.httpClient.put('https://videojuegos-8979b-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth=' + token, videojuego)
          .pipe(
            catchError(error => {
              console.error('Error al actualizar videojuego:', error);
              return of(null);
            })
          );
      }
    }