import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivatechildguardGuard implements CanActivateChild {
  constructor(private router:Router) { }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(localStorage.getItem("currentUser") == 'undefined' || localStorage.getItem("currentUser") == null) {
        debugger;
        alert("You dont have permisson to view child view,redirecting to home page")
      //this.router.navigate(['login'])
      return false;
    }else{
      debugger;
      return true;

    }

  }

}
