import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamplesComponent } from './examples/examples.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ExamplesComponent> {
  canDeactivate() :boolean  {
      return window.confirm("Are you sure to navigate?");
  }
  
}
