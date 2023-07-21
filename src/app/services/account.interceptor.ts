import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token= localStorage.getItem('ACCESS_TOKEN');
    if(token)
    {
      console.log('added token in header: '+token);
      request=request.clone({
        setHeaders:{Authorization:'Bearer ' +token}
      });
    }
    return next.handle(request);
  }
}
