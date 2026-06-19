import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { TenantService } from '../tenant-service';
import { Tenant } from '../../models/tenant';
@Component({
  selector: 'app-tenant-info',
  standalone: false,
  templateUrl: './tenant-info.html',
  styleUrl: './tenant-info.css',
})
export class TenantInfo implements OnInit {
  constructor(private FormBuilder: FormBuilder, private router: Router, private tenantService: TenantService) { }
  tenantInfoForm: FormGroup = new FormGroup({})


  ngOnInit(): void {
    this.tenantInfoForm = this.FormBuilder.group({
      CompanyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      logo: ['', Validators.required]

    })
    const tenant = this.tenantService.getTenantDetails();
    if (tenant) {
      this.tenantInfoForm.patchValue(tenant); // to fill the form 
    }


    this.tenantInfoForm.valueChanges.subscribe(value => {
      this.tenantService.addTenantDetails(value);
    });



  }





  pilotsStudy: boolean = false;
  patientApp: boolean = false;
  preRegistration: boolean = false;


  next() {
    if (this.tenantInfoForm.invalid) return;
    this.tenantService.addTenantDetails(this.tenantInfoForm.value);

    this.router.navigate(['/admin']);
  }
}
