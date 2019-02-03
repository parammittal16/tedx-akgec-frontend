import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

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
    AOS.init();
    this.d.getData(36)
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => console.log(err));
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
  onSubmit() {
    console.log(this.model);
  }

}
