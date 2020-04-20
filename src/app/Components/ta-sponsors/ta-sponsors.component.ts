import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ta-sponsors',
  templateUrl: './ta-sponsors.component.html',
  styleUrls: ['./ta-sponsors.component.css']
})
export class TaSponsorsComponent implements OnInit {

  data: any;
  offset = 100;
  defaultImage = 'https://i.imgur.com/efowHsC.png';
  constructor(private sp: DataService) { }

  ngOnInit() {
    this.sp.getSponsors().subscribe(res => {
      this.data = res;
      // console.log(this.data);
    }, err => console.log(err));
  }
  getSponsorsURL(index) {
    return `http://117.55.241.44/api/uploads/${this.data.data[index].imgurl}`;
  }
// [ngStyle]="{'background-image':'url(getSponsorsURL(i))'}"
}
