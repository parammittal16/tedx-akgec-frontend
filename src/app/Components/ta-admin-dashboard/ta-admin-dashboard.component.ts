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

}
