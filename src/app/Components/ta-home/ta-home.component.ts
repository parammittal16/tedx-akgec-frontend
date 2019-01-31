import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ta-home',
  templateUrl: './ta-home.component.html',
  styleUrls: ['./ta-home.component.css']
})
export class TaHomeComponent implements OnInit {
  data: any;
  constructor(private d: DataService) { }
  ngOnInit() {
    this.d.getData()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => console.log(err));
  }

}
