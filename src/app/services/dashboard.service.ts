import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Common } from '../utilities/common';
import { Module } from '../models/module';
import { Register } from '../models/account/register';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private serviceUrl:string;
  constructor(private http:HttpClient,private message:MessageService) {
    this.serviceUrl= Common.ServiceUrl+"Dashboard/";
   }
  
  getModules():Observable<any>{
    return this.http.get(this.serviceUrl+"GetModules").pipe(catchError(this.handleError.bind(this)));
  }
  getUserProfile(id:string):Observable<any>{
    return this.http.get(this.serviceUrl+"GetUser?id="+id).pipe(catchError(this.handleError.bind(this)));
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
