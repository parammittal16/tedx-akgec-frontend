import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthServerService } from 'src/app/Services/auth-server.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ta-admin-dashboard',
  templateUrl: './ta-admin-dashboard.component.html',
  styleUrls: ['./ta-admin-dashboard.component.css']
})
export class TaAdminDashboardComponent implements OnInit {
data: any;
token: string;
ted = '';
tedx = '';
tedx_akgec = '';
date: any;
imageUrl = '/assets/images/default.png';
fileToUpload_s: Array<File> = [];
fileToUpload_p: Array<File> = [];
fileToUpload_t: Array<File> = [];
sp = [0];
t_team = [0];
w_team = [0];
adminLoggedIn: boolean;
details: any;
  constructor(private router: Router, private admins: AdminService, private as: AuthServerService, private http: HttpClient  ) { }
  ngOnInit() {
    this.token = this.admins.getAdminToken();
    if (this.token) {
    this.as.get_about(this.token).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.tedx_akgec = this.data.data[0].tedx_akgec;
        this.tedx = this.data.data[0].tedx;
        this.ted = this.data.data[0].ted;
      });
    }
  }
  handleFileInput_s(fileInput: any) {
    this.fileToUpload_s.push(fileInput.target.files[0]);
  }
  handleFileInput_p(fileInput: any) {
    this.fileToUpload_p.push(fileInput.target.files[0]);
  }
  handleFileInput_t(fileInput: any) {
    this.fileToUpload_t.push(fileInput.target.files[0]);
  }

  add(x: any){
    if  (x=='s'){
      this.sp.push(this.sp.length);
    }
    else if(x=='t'){
      this.t_team.push(this.t_team.length);
    }
    else if(x=='w'){
      this.w_team.push(this.w_team.length);
    }
  }

  OnLogOut() {
    this.admins.removeAdminToken();
  }
  onSpeakers(f) {
    const formData: any = new FormData();
    const files: Array<File> = this.fileToUpload_s;
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
      formData.append('name', f.value[`s_name${i}`]);
      formData.append('description', f.value[`s_desc${i}`]);
      formData.append('designation', f.value[`s_post${i}`]);
    }
    this.as.postspeakers(formData, this.admins.getAdminToken())
    .subscribe(res => console.log(res), err => console.log(err));
  }
  onSponsors(f) {
    const formData: any = new FormData();
    const files: Array<File> = this.fileToUpload_p;
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
    this.as.postsponsors(formData, this.admins.getAdminToken())
    .subscribe(res => console.log(res), err => console.log(err));
  }
  onTeam(f) {
    const formData: any = new FormData();
    const files: Array<File> = this.fileToUpload_t;
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
      formData.append('name', f.value[`tt_name${i}`]);
      formData.append('designation', f.value[`tt_desg${i}`]);
    }
    this.as.postteam(formData, this.admins.getAdminToken())
    .subscribe(res => console.log(res), err => console.log(err));
  }


onDate(form: NgForm) {
  const tok = this.admins.removeAdminToken();
    console.log(form.value);
}
}
