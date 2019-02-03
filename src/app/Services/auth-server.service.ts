import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServerService {
  readonly rootUrl = 'https://tedx-akgec.herokuapp.com/';
  constructor(private http: HttpClient) { }


adminLogin(body : any){
  return this.http.post(this.rootUrl + 'api/admin-login', body );
}


 
}