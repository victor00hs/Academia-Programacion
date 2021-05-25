import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MisCursosComponent } from './components/mis-cursos/mis-cursos.component';
import { CursosNuevosComponent } from './components/cursos-nuevos/cursos-nuevos.component';
import { CursoComponent } from './components/curso/curso.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'mis-cursos', component: MisCursosComponent},
  {path: 'cursos-nuevos', component: CursosNuevosComponent},
  {path: 'curso', component: CursoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
