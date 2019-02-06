import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TaHomeComponent } from './Components/ta-home/ta-home.component';
import { TaAdminComponent } from './Components/ta-admin/ta-admin.component';
import { TaAdminDashboardComponent } from './Components/ta-admin-dashboard/ta-admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TaSponsorsComponent } from './Components/ta-sponsors/ta-sponsors.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewspeakersComponent } from './Components/ta-admin-dashboard/viewspeakers/viewspeakers.component';
import { ViewsponsorsComponent } from './Components/ta-admin-dashboard/viewsponsors/viewsponsors.component';
import { ViewteamComponent } from './Components/ta-admin-dashboard/viewteam/viewteam.component';

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
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
