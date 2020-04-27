import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
    return !this.authService.isLoggedIn();
  
  }

  canLoad() {
  }

}
