import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accommondation } from './accommondation/accommondation';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DrawerModule } from 'primeng/drawer';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { PopoverModule } from 'primeng/popover';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [Accommondation],
  imports: [ToastModule,ConfirmDialogModule,PopoverModule,InputGroupModule,SelectModule,DrawerModule,TableModule,CommonModule,ButtonModule,DialogModule,InputTextModule,FormsModule],
})
export class FacilitiesModule {}
