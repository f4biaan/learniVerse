import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PonentesComponent } from './pages/ponente/ponentes.component';
import { CrearPonenteComponent } from './pages/crear-ponente/crear-ponente.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'tendencias', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'tendencias', component: TendenciasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'crear-evento', component: CreateEventComponent },
  { path: 'ponentes', component: PonentesComponent },
  { path: 'crear-ponente', component: CrearPonenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
