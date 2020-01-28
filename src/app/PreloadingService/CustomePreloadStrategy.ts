import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CusomePreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any> ): Observable<any>  {
       if(route.data && route.data['preload']){
           return load()
       }else{
           return new Observable(null);
       }
    }


}