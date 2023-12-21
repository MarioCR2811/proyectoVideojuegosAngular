import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../videojuego.model';
import { VideojuegosService } from '../videojuegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  constructor(private router: Router, private videojuegoService: VideojuegosService) { }

  titulo = "Proyecto Angular-Videojuegos"

  videojuegos: Videojuego[] = [];

  ngOnInit(): void {
    this.videojuegoService.obtenerVideojuegos().subscribe((misVideojuegos: Videojuego[]) => {
      console.log(misVideojuegos);
      this.videojuegos = Object.values(misVideojuegos);
      this.videojuegoService.setVideojuegos(this.videojuegos);
    });
  }

  cuadroNombre: string = "";
  cuadroDesarrolladora: string = "";
  cuadroConsola: string = "";
  cuadroAnyo: number = 0;

  agregarVideojuego() {
    if (
      this.cuadroNombre.trim() === '' ||
      this.cuadroDesarrolladora.trim() === '' ||
      this.cuadroConsola.trim() === '' ||
      this.cuadroAnyo === 0
    ) {
      alert('Todos los campos deben estar llenos.');
      return;
    }
    let nuevoVideojuego = new Videojuego(this.cuadroNombre, this.cuadroDesarrolladora, this.cuadroConsola, this.cuadroAnyo);

    this.videojuegoService.agregarVideojuegoServicio(nuevoVideojuego).subscribe((response: any) => {
      console.log("Videojuego agregado:", response);
    },
      error => {
        console.error("Error al agregar el videojuego " + error);
      }
    );
  }

  eliminarVideojuego(indice: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este videojuego?');
    if (confirmacion) {
      this.videojuegoService.eliminarVideojuego(indice).subscribe(
        () => {
          console.log("Videojuego eliminado correctamente.");
          alert("Videojuego eliminado correctamente.");
        },
        error => {
          console.error("Error al eliminar el videojuego: " + error);
        }
      );
    }
  }

  irAEditarVideojuego(indice: number) {
    this.router.navigate(['/editar', indice]);
  }
}
