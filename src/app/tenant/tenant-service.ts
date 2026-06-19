import { Injectable } from '@angular/core';
import { Tenant } from '../models/tenant';
@Injectable({
  providedIn: 'root',
})
export class TenantService {

tenant:Tenant=new Tenant

addTenantDetails(tenant:Tenant){
this.tenant=tenant
}

getTenantDetails():Tenant{
  return this.tenant

}




  




}
