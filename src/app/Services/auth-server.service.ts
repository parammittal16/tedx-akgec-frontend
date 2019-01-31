import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServerService {
  readonly rootUrl = 'http://tedx-akgec.herokuapp.com/';
  constructor(private http: HttpClient) { }


adminLogin(body){
  return this.http.post(this.rootUrl, body );
}
 
}