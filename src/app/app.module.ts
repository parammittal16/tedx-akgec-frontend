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
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
