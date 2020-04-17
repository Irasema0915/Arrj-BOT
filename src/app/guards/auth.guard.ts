import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AutheticationService} from '../../service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AutheticationService, private router:Router){}

  canActivate(){ 

    if(this.auth.isLoggeIn()){
      this.router.navigateByUrl('/login')
      return false;
    }
  }
  
}
