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
fileToUpload: Array<File> = [];
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

  handleFileInput(fileInput : any){
  this.fileToUpload.push(fileInput.target.files[0]);

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

  OnLogOut(){
    this.admins.removeAdminToken();
  }

  

  onSpeakers(){

    const formData: any = new FormData();
    const files: Array<File> = this.fileToUpload;

    for(let i = 0; i < files.length; i++)
    {
      console.log('hi');
      formData.append('image', files[i]);
      formData.append('name', files[i]);
      formData.append('description', files[i]);
      formData.append('designation', files[i]);

    }
    console.log('form data variable:' + formData.toString());
    
    this.http.post('http://2bf19597.ngrok.io/' + 'api/admin-login',formData).subscribe(
      fil => console.log('files', fil)
    );
    
  }
  onAbout(form: NgForm) {
    this.token = this.admins.getAdminToken();
    if (this.token) {
      this.as.update_about(form.value, this.token).subscribe(
        res => console.log(res)
    );
  }
}
onDate(form: NgForm) {
  const tok = this.admins.removeAdminToken();
    console.log(form.value);
}
}
