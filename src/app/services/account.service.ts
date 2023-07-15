import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Common } from '../utilities/common';
import { Register } from '../models/account/register';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string;
  constructor(private http: HttpClient) { 
    this.url=Common.ServiceUrl+"Account/";
  }
  
  register(register:Register):Observable<any>{
      return this.http.post(this.url+"Register",register);
  }
  errored() {
    console.warn(`reCAPTCHA error encountered`);
  }
}
