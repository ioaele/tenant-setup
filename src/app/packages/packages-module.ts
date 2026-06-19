import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Packages } from './packages/packages';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [Packages],
  imports: [ButtonModule,PickListModule,CommonModule,ListboxModule,FormsModule],
})
export class PackagesModule {}
