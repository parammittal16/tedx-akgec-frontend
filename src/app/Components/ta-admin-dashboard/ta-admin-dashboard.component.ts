import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-ta-admin-dashboard',
  templateUrl: './ta-admin-dashboard.component.html',
  styleUrls: ['./ta-admin-dashboard.component.css']
})
export class TaAdminDashboardComponent implements OnInit {

imageUrl: string = "/assets/images/default.png";
fileToUpload: File = null;
sp = [0];
t_team = [0];
w_team = [0];
adminLoggedIn: boolean;
  constructor(private router: Router, private admins: AdminService) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) =>
    {
      this.imageUrl = event.target.result; 
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log(this.fileToUpload)
    
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

}
