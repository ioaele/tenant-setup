import { Injectable } from '@angular/core';
import { SelectedPackages } from '../models/selected-packages';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {

  pack:SelectedPackages=new SelectedPackages
  
  addSPack(pack:SelectedPackages){
  this.pack=pack
  }
  
  getSelPack():SelectedPackages{
    return this.pack
  
  }


}
