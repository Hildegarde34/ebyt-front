import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
//import { CreationConcertComponent } from './creation-concert/creation-concert.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';

import { ConcertReactiveFormComponent } from './concert-reactive-form/concert-reactive-form.component';
import { RouterModule, Routes, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import { CommonModule } from '@angular/common';


const routes: Routes = 
[
  {path: 'addConcert', component: ConcertReactiveFormComponent},
  {path: 'updateConcert/:id', component: ConcertReactiveFormComponent},
  {path: 'login', component: ConnexionComponent},
]; 


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    //CreationConcertComponent,
    ConnexionComponent,
    HomeComponent,
    ConcertReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    SidebarModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
