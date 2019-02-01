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
  model: any = {};
  constructor(private d: DataService) { }
  ngOnInit() {
    this.d.getData(36)
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => console.log(err));
  }
  onSubmit() {
    console.log(this.model);
  }

}
