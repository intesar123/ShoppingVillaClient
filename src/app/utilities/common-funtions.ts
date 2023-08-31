import { FormGroup } from "@angular/forms";

export function toFormData( formGroup: FormGroup ) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(formGroup.value)) {
    debugger;
    if (typeof value != "object") {
        formData.append(key, String(value))
    }
    else{
        formData.append(key, value as Blob)
    }
}
  return formData;
}



export async function getBase64(file:File) {
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
        await delayFunc(3000);
    }
    return retval;
}
 
export function getFileBaseType(fileName:string):any
{
    debugger;
    if(fileName==null)
    {
        return null;
    }
    let ext= fileName.split('.').pop();
    return 'data:image/'+ext+';base64,';
}
function delayFunc(interval:number)
{
    return new Promise<void>(resolve => {
        setTimeout(resolve, interval);
    });
}