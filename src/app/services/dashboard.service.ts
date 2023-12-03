import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Common } from '../utilities/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private serviceUrl:string;
  constructor(private http:HttpClient,private message:MessageService,private router:Router) {
    this.serviceUrl= Common.ServiceUrl+"Dashboard/";
   }
  
  getModules():Observable<any>{
    return this.http.get(this.serviceUrl+"GetModules").pipe(catchError(this.handleError.bind(this)));
  }
  getMenu(id:number):Observable<any>{
    return this.http.get(this.serviceUrl+"GetMenusByModule?moduleId="+id).pipe(catchError(this.handleError.bind(this)));
  }
  getMenus():Observable<any>{
    return this.http.get(this.serviceUrl+"GetMenus").pipe(catchError(this.handleError.bind(this)));
  }
  getUserProfile(token:string):Observable<any>{
    return this.http.get(this.serviceUrl+"GetUser?token="+token).pipe(catchError(this.handleError.bind(this)));
  }
  getUser(id:number):Observable<any>{
    return this.http.get(this.serviceUrl+"GetUserById?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  addProductCategory(formData:FormData):Observable<any>{
    return this.http.post(this.serviceUrl+"AddProductCategory",formData).pipe(catchError(this.handleError.bind(this)));
  }
  updateProductCategory(formData:FormData):Observable<any>{
    return this.http.put(this.serviceUrl+"UpdateProductCategory",formData).pipe(catchError(this.handleError.bind(this)));
  }
  getProductCategories():Observable<any>{
    return this.http.get(this.serviceUrl+"GetProductCategories").pipe(catchError(this.handleError.bind(this)));
  }
  getProductCategory(id:string):Observable<any>{
    return this.http.get(this.serviceUrl+"GetProductCategory?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  deleteProductCategory(id:number):Observable<any>{
    return this.http.delete(this.serviceUrl+"DeleteProductCategory?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  addBrand(formData:FormData):Observable<any>{
    return this.http.post(this.serviceUrl+"AddBrand",formData).pipe(catchError(this.handleError.bind(this)));
  }
  updateBrand(formData:FormData):Observable<any>{
    return this.http.put(this.serviceUrl+"UpdateBrand",formData).pipe(catchError(this.handleError.bind(this)));
  }
  getBrand(id:string):Observable<any>{
    return this.http.get(this.serviceUrl+"GetBrand?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  getBrands():Observable<any>{
    return this.http.get(this.serviceUrl+"GetBrands").pipe(catchError(this.handleError.bind(this)));
  }
  deleteBrand(id:number):Observable<any>{
    return this.http.delete(this.serviceUrl+"DeleteBrand?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  addProduct(formData:FormData):Observable<any>{
    return this.http.post(this.serviceUrl+"AddProduct",formData).pipe(catchError(this.handleError.bind(this)));
  }
  updateProduct(formData:FormData):Observable<any>{
    return this.http.put(this.serviceUrl+"UpdateProduct",formData).pipe(catchError(this.handleError.bind(this)));
  }
  getProduct(id:string):Observable<any>{
    return this.http.get(this.serviceUrl+"GetProduct?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  getProducts():Observable<any>{
    return this.http.get(this.serviceUrl+"GetProduct").pipe(catchError(this.handleError.bind(this)));
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(this.serviceUrl+"DeleteProduct?id="+id).pipe(catchError(this.handleError.bind(this)));
  }
  private handleError(error: HttpErrorResponse) {
   
    if (error.status == 401) {
      this.message.showMessage(error.status.toString(),error.error.title);
      this.router.navigateByUrl('/login');
    }
    else if (error.status == 400) {
      this.message.showMessage(error.status.toString(),error.error.title);
    }
    else if (error.status == 500) {

      this.message.showMessage(error.status.toString(),error.error);
    }
    else if (error.status == 403) {
      this.message.showMessage(error.status.toString(),error.error.title);
    }
    else {
      this.message.showMessage(error.status.toString(),error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
