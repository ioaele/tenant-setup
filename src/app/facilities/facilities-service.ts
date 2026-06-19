import { Injectable } from '@angular/core';
import { AccommondationM } from '../models/accommondation-m';
@Injectable({
  providedIn: 'root',
})
export class Facilities {

  acc:AccommondationM=new AccommondationM
  
  addAccom(acc:AccommondationM){
  this.acc=acc
  }
  
  getAcc():AccommondationM |null{
    if(this.acc===null)
return null
      else
    return this.acc
  
  }
}
