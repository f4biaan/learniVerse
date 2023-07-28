import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadFileComponent } from './components/load-file/load-file.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { MaterialsModule } from './materials/materials.module';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CrearPonenteComponent } from './pages/crear-ponente/crear-ponente.component';
import { PonentesComponent } from './pages/ponente/ponentes.component';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';
import { AnaliticasComponent } from './pages/analiticas/analiticas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleTrendsComponent } from './components/google-trends/google-trends.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.development';
import { getFirestore } from 'firebase/firestore';
import { provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateEventComponent,
    SidebarComponent,
    LoadFileComponent,
    FooterComponent,
    HeaderComponent,
    EventosComponent,
    CrearPonenteComponent,
    PonentesComponent,
    TendenciasComponent,
    AnaliticasComponent,
    GoogleTrendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BootstrapModule,
    NgxBootstrapModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
