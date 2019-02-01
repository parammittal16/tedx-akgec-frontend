import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ta-sponsors',
  templateUrl: './ta-sponsors.component.html',
  styleUrls: ['./ta-sponsors.component.css']
})
export class TaSponsorsComponent implements OnInit {

  data: any;
  constructor(private sp: DataService) { }

  ngOnInit() {
    this.sp.getData(10).subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => console.log(err));
  }

}
