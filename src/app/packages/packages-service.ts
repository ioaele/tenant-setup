import { Injectable } from '@angular/core';
import { Package } from '../models/package';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {

  packs:Package[]=[]

  
  addSPacks(packs:Package[]){
  this.packs=packs
  }
  
  getSelPacks():Package[] | null{
    if(this.packs.length===0)
    return null
  else
    return this.packs

  
  }


  isSelEmpty ():boolean{
        if(this.packs.length===0)
    return true
  else
    return false

  }

}
