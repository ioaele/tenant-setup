import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantInfo } from './tenant/tenant-info/tenant-info';
import { AdminDetails } from './admin/admin-details/admin-details';
import { Packages } from './packages/packages/packages';
import { Accommondation } from './facilities/accommondation/accommondation';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tenant' },
  { path: 'tenant',component:TenantInfo},
  { path: 'admin',component:AdminDetails},
  { path: 'packages',component:Packages},
  { path: 'facilities',component:Accommondation}
 
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
