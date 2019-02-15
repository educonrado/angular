import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { Page404Component } from './componentes/page404/page404.component';
//Servicios
import { AuthService } from './servicios/auth.service';
//AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Guards
import { AuthGuard } from './guards/auth.guard';
//Environment
import { environment } from '../environments/environment';
//Flash-messages
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
