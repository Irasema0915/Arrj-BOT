import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Component
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes:Routes= [
  {path: 'login', component:LoginComponent, canActivate:[AuthLoginGuard]},
  {path: 'register', component:RegisterComponent, canActivate:[AuthLoginGuard]},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],

})



export class AppRoutingModule { }
