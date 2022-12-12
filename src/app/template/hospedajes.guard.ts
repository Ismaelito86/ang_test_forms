import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class HospedajesGuard implements CanActivate, CanLoad {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user:LoginResponse = JSON.parse(localStorage.getItem('user')!);
      if (!user.isPresbitero && !user.isSecretario) {
        return true;
      } else {
        return false;
      }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user:LoginResponse = JSON.parse(localStorage.getItem('user')!);
      if (!user.isPresbitero && !user.isSecretario) {
        return true;
      } else {
        return false;
      }
  }
}
