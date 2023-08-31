import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  async getBase64(file:File) {
    var isReady=false;
    var retval=null;
    var reader = new FileReader();
    reader.onload = function()
    {
        retval = reader.result!.toString();
    }
    reader.readAsDataURL(file);
    if(!isReady)
    {
       await this.delayFunc(3000);
    }
    return retval;
}
 getFileBaseType(fileName:string):any
{
    debugger;
    if(fileName==null)
    {
        return null;
    }
    let ext= fileName.split('.').pop();
    return 'data:image/'+ext+';base64,';
}
async delayFunc(interval:number)
{
    return new Promise<void>(resolve => {
        setTimeout(resolve, interval);
    });
}
}
