import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { LazyLoadImageModule } from 'ng-lazyload-image';


import { AppComponent } from './app.component';
import { TaHomeComponent } from './Components/ta-home/ta-home.component';
import { TaAdminComponent } from './Components/ta-admin/ta-admin.component';
import { TaAdminDashboardComponent } from './Components/ta-admin-dashboard/ta-admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TaSponsorsComponent } from './Components/ta-sponsors/ta-sponsors.component';
import { DataService } from './Services/data.service';
import { ViewspeakersComponent } from './Components/ta-admin-dashboard/viewspeakers/viewspeakers.component';
import { ViewsponsorsComponent } from './Components/ta-admin-dashboard/viewsponsors/viewsponsors.component';
import { ViewteamComponent } from './Components/ta-admin-dashboard/viewteam/viewteam.component';
import { AdminService } from './Services/admin.service';
import { AuthServerService } from './Services/auth-server.service';

@NgModule({
  declarations: [
    AppComponent,
    TaHomeComponent,
    TaAdminComponent,
    TaAdminDashboardComponent,
    TaSponsorsComponent,
    ViewspeakersComponent,
    ViewsponsorsComponent,
    ViewteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,

  ],
  providers: [DataService, AdminService, AuthServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
