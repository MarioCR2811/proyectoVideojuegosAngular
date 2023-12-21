import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from '../videojuegos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from '../videojuego.model';

@Component({
  selector: 'app-actualiza-videojuego',
  templateUrl: './actualiza-videojuego.component.html',
  styleUrls: ['./actualiza-videojuego.component.css']
})
export class ActualizaVideojuegoComponent implements OnInit {

  constructor(private router: Router, private videojuegoService: VideojuegosService, private route: ActivatedRoute) { }

  indice: number = 0;

  videojuegos: Videojuego[] = [];

  ngOnInit(): void {
    this.indice = +this.route.snapshot.params['id'];
    this.videojuegos = this.videojuegoService.videojuegos;

    let videojuego: Videojuego = this.videojuegoService.encontrarVideojuego(this.indice);

    this.cuadroNombre = videojuego.nombre;
    this.cuadroDesarrolladora = videojuego.desarrolladora;
    this.cuadroAnyo = videojuego.anyo;
    this.cuadroConsola = videojuego.consola;

  }

  actualizarVideojuego() {
    if (
      this.cuadroNombre.trim() === '' ||
      this.cuadroDesarrolladora.trim() === '' ||
      this.cuadroConsola.trim() === '' ||
      this.cuadroAnyo === 0
    ) {
      alert('Todos los campos deben estar llenos.');
      return;
    }
    const videojuegoEditado = new Videojuego(this.cuadroNombre, this.cuadroDesarrolladora, this.cuadroConsola, this.cuadroAnyo);
  
    this.videojuegoService.actualizarVideojuego(this.indice, videojuegoEditado).subscribe(
      () => {
        alert("El videojuego ha sido actualizado correctamente");
        this.router.navigate(['']);
      },
      error => {
        console.error("Error al actualizar el videojuego: " + error);
      }
    );
  }

  cuadroNombre: string = ""
  cuadroDesarrolladora: string = ""
  cuadroConsola: string = ""
  cuadroAnyo: number = 0;
}
