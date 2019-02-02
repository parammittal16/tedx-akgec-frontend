import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ta-admin-dashboard',
  templateUrl: './ta-admin-dashboard.component.html',
  styleUrls: ['./ta-admin-dashboard.component.css']
})
export class TaAdminDashboardComponent implements OnInit {
imageUrl: string = "/assets/img/default.png";
fileToUpload: File = null;
sp = [0];
t_team = [0];
w_team = [0];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) =>
    {this.imageUrl = event.target.result; }
    reader.readAsDataURL(this.fileToUpload);

    
  }
  add_sp() {
    this.sp.push(this.sp.length);
  }
  add_t() {
    this.t_team.push(this.t_team.length);
  }
  add_w() {
    this.w_team.push(this.w_team.length);
  }


}
