import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Common } from '../utilities/common';
import { Register } from '../models/account/register';
import { Observable, catchError, throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string;
  constructor(private http: HttpClient,private message:MessageService) { 
    this.url=Common.ServiceUrl+"Account/";
  }
  
  register(register:Register):Observable<any>{
      return this.http.post(this.url+"Register",register).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse) {
    debugger;
    //alert(error.status);
    //alert(error.error.message);
   
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    
debugger;
    if (error.status == 401) {
      this.message.showMessage(error.status.toString(),error.error.title);
      // this.ms.add("Can not allow unauthorized access!");
      // this.router.navigateByUrl("/error");
    }
    else if (error.status == 400) {
      this.message.showMessage(error.status.toString(),error.error.title);
      //this.ms.add(error.error.message);
    }
    else if (error.status == 500) {

      this.message.showMessage(error.status.toString(),error.error);
      //this.ms.add(msg);
    }
    else if (error.status == 403) {
      this.message.showMessage(error.status.toString(),error.error.title);
      // this.ms.add("Can not allow unauthorized access!");
      // this.router.navigateByUrl("/error");
    }
    else {
      this.message.showMessage(error.status.toString(),error.error);
      // this.ms.add("Something bad happened; please try again later.");
      // this.router.navigateByUrl("/error");
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
