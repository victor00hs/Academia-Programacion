import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MisCursosComponent } from './components/mis-cursos/mis-cursos.component';
import { CursosNuevosComponent } from './components/cursos-nuevos/cursos-nuevos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PerfilComponent,
    MisCursosComponent,
    CursosNuevosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
