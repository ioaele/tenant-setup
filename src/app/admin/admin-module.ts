import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { AdminDetails } from './admin-details/admin-details';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [AdminDetails],
  imports: [PasswordModule,ToggleSwitchModule,PopoverModule,ButtonModule,InputTextModule,InputNumberModule,SelectModule,CommonModule,FormsModule,ReactiveFormsModule,InputGroupAddonModule,InputGroupModule],
})

export class AdminModule {}
