import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TaHomeComponent } from './Components/ta-home/ta-home.component';
import { TaAdminComponent } from './Components/ta-admin/ta-admin.component';
import { TaSponsorsComponent } from './Components/ta-sponsors/ta-sponsors.component';

const appRoutes: Routes = [
   { path: '', component: TaHomeComponent },
   { path: 'admin' , component:  TaAdminComponent},
   { path: 'sponsors', component: TaSponsorsComponent},
   { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
