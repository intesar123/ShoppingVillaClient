import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { MessageService } from 'src/app/services/message.service';
declare var window: any;
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent  {
  formModal: any;
  message!:string;
   constructor(private messageService:MessageService) {
        
   }

   ngDoCheck(){
     this.messageService.messageToShow.subscribe(value=>{
      this.message=value;
      if(value!=null && value.length>0)
      {
        this.open();
      }
     })
   }

  ngOnInit():void
  {
     this.formModal= new window.bootstrap.Modal(
        document.getElementById("messageModal")
     );
  }
 
  open(){
    this.formModal.show();
  }
  hide(){
    this.messageService.messageToShow.next('');
    this.formModal.hide();
  }

}
