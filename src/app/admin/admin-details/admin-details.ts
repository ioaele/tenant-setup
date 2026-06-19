import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from '../admin-service';

@Component({
  selector: 'app-admin-details',
  standalone: false,
  templateUrl: './admin-details.html',
  styleUrl: './admin-details.css',
})
export class AdminDetails {
    constructor(private FormBuilder:FormBuilder ,private router :Router,private adminService:AdminService ){}
AdminAccount:FormGroup=new FormGroup({})


ngOnInit(): void {

  this.AdminAccount=this.FormBuilder.group({
username:['',Validators.required],
userEmail:['',[Validators.required,Validators.email]],
firstName:['',Validators.required],
lastName:['',Validators.required],
password:['',Validators.required]
  })
  


const tenant = this.adminService.getAdminDetails();
if(tenant){
   this.AdminAccount.patchValue(tenant); // to fill the form 
}


  this.AdminAccount.valueChanges.subscribe(value => {
    this.adminService.addAdmin(value);
  });

}
next() {
  if (this.AdminAccount.invalid) return;
 this.adminService.addAdmin(this.AdminAccount.value);

  this.router.navigate(['/packages']);
}

back() {
   this.adminService.addAdmin(this.AdminAccount.value);

  this.router.navigate(['/tenant']);
}
}
