import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

import { DataService } from 'src/app/Services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ta-home',
  templateUrl: './ta-home.component.html',
  styleUrls: ['./ta-home.component.css']
})
export class TaHomeComponent implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  imgURL = 'https://tedx-akgec.herokuapp.com/api/uploads/';
  offset = 100;
  data: any;
  model: any = {};
  constructor(private d: DataService, private http: HttpClient) { }
  ngOnInit() {
    AOS.init();
    this.d.getData()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => console.log(err));
    const width = $('.g-recaptcha').parent().width();
    console.log(width);
    if (width < 302) {
      const scale = width / 302;
      $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('transform-origin', '0 0');
      $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
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
    this.http.post('http://tedx-akgec.herokuapp.com/api/send-mail', this.model).subscribe(res => console.log(res));
  }
  getSpeakerURL(index) {
    console.log(index);
    return `https://tedx-akgec.herokuapp.com/api/uploads/${this.data.data.speakers[index].imgurl}`;
  }
}
