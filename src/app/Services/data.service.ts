import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    // return this.http.get('https://randomuser.me/api/?results=' + num);
    return this.http.get('https://www.tedxakgec.com/api/get-all');
  }
  getSponsors() {
    // return this.http.get('https://randomuser.me/api/?results=' + num);
    return this.http.get('https://www.tedxakgec.com/api/get-sponsors');
  }
}
