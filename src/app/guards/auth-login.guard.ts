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
    return this.canLoad();
  }

  canLoad() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    return !this.authService.isLoggedIn();
  }

}
