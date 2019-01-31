import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaHomeComponent } from './Components/ta-home/ta-home.component';
import { TaAdminComponent } from './Components/ta-admin/ta-admin.component';
import { TaAdminDashboardComponent } from './Components/ta-admin-dashboard/ta-admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TaSponsorsComponent } from './Components/ta-sponsors/ta-sponsors.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaHomeComponent,
    TaAdminComponent,
    TaAdminDashboardComponent,
    TaSponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
