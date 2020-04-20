import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServerService {
  readonly rootUrl = 'http://117.55.241.44/';
  constructor(private http: HttpClient) { }


adminLogin(body: any) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
   });
   console.log(body);
  return this.http.post(this.rootUrl + 'api/admin-login', body, {headers: headers} );
}

postspeakers(data: any, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
  return this.http.post(this.rootUrl + 'api/create-speakers', data, {headers: headers});
}
postsponsors(data: any, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
  return this.http.post(this.rootUrl + 'api/create-sponsors', data, {headers: headers});
}
postteam(data: any, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
  return this.http.post(this.rootUrl + 'api/create-team', data, {headers: headers});
}
getspeakers(token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
  return this.http.get(this.rootUrl + 'api/get-speakers', {headers: headers});
}
getsponsors(token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
  return this.http.get(this.rootUrl + 'api/get-sponsors', {headers: headers});
}
getteam(token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
  return this.http.get(this.rootUrl + 'api/get-team', {headers: headers});
}
delSpeaker(body, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
   return this.http.post(this.rootUrl + 'api/delete-speaker', body, {headers: headers});
}
delSponsors(body, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
   return this.http.post(this.rootUrl + 'api/delete-sponsor', body, {headers: headers});
}
delTeam(body, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
   return this.http.post(this.rootUrl + 'api/delete-team-member', body, {headers: headers});
}
addDate(body, route, token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
   return this.http.post(this.rootUrl + route, body, {headers: headers});

}
getDate(token) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
   });
   return this.http.get(this.rootUrl + 'api/get-event-date', {headers: headers});
}
// uploadImage(fileToUpload: File){

//   const formData: any = new FormData();
//   const files: Array<File> = this.filesTo

//   formData.append('Image', fileToUpload, fileToUpload.name);
//   return this.http.post(this.rootUrl + 'api/admin-login', formData);
// }

spkr(formData) {
  this.http.post(this.rootUrl + 'api/admin-login', formData);
}

get_about(token: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' +  token
   });
  return this.http.get(this.rootUrl + 'api/get-about-us', {headers: headers});
}

update_about(bod: any, token: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' +  token
   });
  //  const bod = {
  //    ted: this.dashboard.ted,
  //    tedx: this.dashboard.tedx,
  //    tedx_akgec : this.dashboard.tedx_akgec
  //  }
  return this.http.post(this.rootUrl + 'api/update-about-us', bod, {headers: headers});
}

}
