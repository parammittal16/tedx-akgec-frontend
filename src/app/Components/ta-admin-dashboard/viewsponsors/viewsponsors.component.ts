import { Component, OnInit } from '@angular/core';
import { AuthServerService } from 'src/app/Services/auth-server.service';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewsponsors',
  templateUrl: './viewsponsors.component.html',
  styleUrls: ['./viewsponsors.component.css']
})
export class ViewsponsorsComponent implements OnInit {

  data: any;
  constructor(private as: AuthServerService, private ad: AdminService) { }

  ngOnInit() {
    this.as.getsponsors(this.ad.getAdminToken()).subscribe(res => this.data = res, err => console.log(err));
  }
  delete_p(delId) {
    this.as.delSponsors({ id: +delId}, this.ad.getAdminToken())
    .subscribe(res => {
      this.as.getsponsors(this.ad.getAdminToken()).subscribe(res2 => this.data = res2, err => console.log(err));
    },
    err => console.log(err));
  }


}
