import { Component, OnInit } from '@angular/core';
import { AuthServerService } from 'src/app/Services/auth-server.service';
import { AdminService } from 'src/app/Services/admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ta-admin',
  templateUrl: './ta-admin.component.html',
  styleUrls: ['./ta-admin.component.css']
})
export class TaAdminComponent implements OnInit {
  data: any;
  error: any;
  constructor(private ass: AuthServerService, private admins: AdminService ) { }

  ngOnInit() {
  }
  check() {
    return this.admins.adminLoggedIn();
  }
  onLogin(form: NgForm) {
    this.ass.adminLogin(form.value).subscribe(
      res => {
        this.data = res;
        if (this.data.token) {
          this.admins.setAdmintoken(this.data.token);
        }
        form.resetForm();
      },
      err => {
        this.error = err;
      },
    );
  }
}

