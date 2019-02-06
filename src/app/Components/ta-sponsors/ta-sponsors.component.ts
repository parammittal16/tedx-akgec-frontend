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
    this.sp.getSponsors().subscribe(res => {
      this.data = res;
      console.log(this.data);
    }, err => console.log(err));
  }
  getSponsorsURL(index) {
    console.log(`https://tedx-akgec.herokuapp.com/api/uploads/${this.data.data[index].imgurl}`);
    return `https://tedx-akgec.herokuapp.com/api/uploads/${this.data.data[index].imgurl}`;
  }

}
