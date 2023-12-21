import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ActualizaVideojuegoComponent } from './actualiza-videojuego/actualiza-videojuego.component';
import { ErrorComponent } from './error/error.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegosService } from './videojuegos.service';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './data.services';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes:Routes=[
  { path: '', component: ListaVideojuegosComponent, canActivate:[LoginGuardian] },
  { path: 'editar/:id', component: ActualizaVideojuegoComponent, canActivate:[LoginGuardian]},
  { path: 'informacion', component: InformacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ActualizaVideojuegoComponent,
    ErrorComponent,
    ListaVideojuegosComponent,
    InformacionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [VideojuegosService,DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
