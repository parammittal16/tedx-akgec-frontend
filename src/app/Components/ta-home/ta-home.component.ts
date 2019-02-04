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
  scrollToElement($element, divId): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    const els = document.getElementsByClassName('nav-item');
    for (let i = 0; i < els.length; i++) {
      els[i].classList.remove('is-active');
    }
    document.getElementById(divId).classList.add('is-active');
  }
  onSubmit() {
    console.log(this.model);
  }

}
