import { Component, OnInit } from '@angular/core';
import { AuthServerService } from 'src/app/Services/auth-server.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ta-admin',
  templateUrl: './ta-admin.component.html',
  styleUrls: ['./ta-admin.component.css']
})
export class TaAdminComponent implements OnInit {
  model: any = {};
  data: any;
  constructor(private ass: AuthServerService ) { }

  ngOnInit() {
  }
  
  onLogin(form: NgForm){
    this.ass.adminLogin(form.value).subscribe(
     (data: any) => {
       localStorage.setItem('adminToken',data.access_token);
     }
    )
        
    

    }
  }

