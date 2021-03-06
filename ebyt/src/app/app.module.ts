import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import {SliderModule} from 'primeng/slider';
import {TabViewModule} from 'primeng/tabview';

import { ConcertReactiveFormComponent } from './concert-reactive-form/concert-reactive-form.component';
import { RouterModule, Routes, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {InputSwitchModule} from 'primeng/inputswitch';
import { CommonModule } from '@angular/common';
import { FicheConcertComponent } from './fiche-concert/fiche-concert.component';
import {GalleriaModule} from 'primeng/galleria';
import { ListeConcertAdminComponent } from './liste-concert-admin/liste-concert-admin.component';
import { ListConcertComponent } from './list-concert/list-concert.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {FileUploadModule} from 'primeng/fileupload';
import { SafePipePipe } from './safe-pipe.pipe';
import {CalendarModule} from 'primeng/calendar';
import { RechercheConcertComponent } from './recherche-concert/recherche-concert.component';
import {SpinnerModule} from 'primeng/spinner';
import { CartComponent } from './cart/cart.component';
import { NumberFormatPipe } from './number-format.pipe';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';
import {PaginatorModule} from 'primeng/paginator';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectItem, MessageService } from 'primeng/api';
import { ListeCommandeAdminComponent } from './liste-commande-admin/liste-commande-admin.component';



const routes: Routes = 
[
  {path: 'addUser', component: UserReactiveFormComponent},
  {path: 'addConcert', component: ConcertReactiveFormComponent},
  {path: 'admin/addConcert', component: ConcertReactiveFormComponent},
  {path: 'updateConcert/:id', component: ConcertReactiveFormComponent},
  {path: 'login', component: ConnexionComponent},
  {path: '', component: HomeComponent},
  {path: 'ficheConcert/:id', component: FicheConcertComponent},
  {path: 'admin/concerts', component: ListeConcertAdminComponent},
  {path: 'admin/commandes', component: ListeCommandeAdminComponent},
  {path: 'listConcert', component: ListConcertComponent},
  {path: 'cart', component: CartComponent},
  {path: 'monCompte/:id', component: CompteUtilisateurComponent},
  {path: 'payment', component: PaymentComponent}
]; 

 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ConnexionComponent,
    HomeComponent,
    ConcertReactiveFormComponent,
    FicheConcertComponent,
    ListeConcertAdminComponent,
    ListConcertComponent,
    SafePipePipe,
    RechercheConcertComponent,
    CartComponent,
    NumberFormatPipe,
    CompteUtilisateurComponent,
    UserReactiveFormComponent,
    PaymentComponent,
    ListeCommandeAdminComponent
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
    RouterModule.forRoot(routes),
    GalleriaModule,
    InputSwitchModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    SliderModule,
    CalendarModule,   
    SpinnerModule,
    PaginatorModule,
    TabViewModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
