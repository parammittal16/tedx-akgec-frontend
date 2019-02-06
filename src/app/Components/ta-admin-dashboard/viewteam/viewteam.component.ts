import { Component, OnInit } from '@angular/core';
import { AuthServerService } from 'src/app/Services/auth-server.service';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewteam',
  templateUrl: './viewteam.component.html',
  styleUrls: ['./viewteam.component.css']
})
export class ViewteamComponent implements OnInit {

  data: any;
  constructor(private as: AuthServerService, private ad: AdminService) { }

  ngOnInit() {
    this.as.getteam(this.ad.getAdminToken()).subscribe(res => this.data = res, err => console.log(err));
  }

}
