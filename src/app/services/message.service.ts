import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageToShow= new BehaviorSubject<string>('')
  constructor() {
   
   }
   
  showMessage(status:string,message:string)
  {
    this.messageToShow.next(status+': '+message);
  }
  
  hideMessage()
  {
    this.messageToShow.next('');
  }
}
