import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

admin:Admin=new Admin

addAdmin(admin:Admin){
this.admin=admin
}

getAdminDetails():Admin{
  return this.admin

}
}
