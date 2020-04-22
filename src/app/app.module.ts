import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { TokenService } from '../service/token.service';

const routes:Routes= [
  {path: 'login', component:LoginComponent, canActivate:[AuthLoginGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
     HttpClientModule,
     FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    AuthLoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
