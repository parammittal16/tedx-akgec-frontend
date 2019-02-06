import { Component, OnInit } from '@angular/core';
import { AuthServerService } from 'src/app/Services/auth-server.service';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewspeakers',
  templateUrl: './viewspeakers.component.html',
  styleUrls: ['./viewspeakers.component.css']
})
export class ViewspeakersComponent implements OnInit {
  data: any;
  constructor(private as: AuthServerService, private ad: AdminService) { }

  ngOnInit() {
    this.as.getspeakers(this.ad.getAdminToken()).subscribe(res => this.data = res, err => console.log(err));
  }

}
