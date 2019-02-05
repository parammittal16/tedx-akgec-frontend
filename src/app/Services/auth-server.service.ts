import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServerService {
  readonly rootUrl = 'http://2bf19597.ngrok.io/';
  constructor(private http: HttpClient) { }


adminLogin(body : any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
   });
   console.log(body);
  return this.http.post(this.rootUrl + 'api/admin-login', body, {headers: headers} );
}



// uploadImage(fileToUpload: File){
  
//   const formData: any = new FormData();
//   const files: Array<File> = this.filesTo 

//   formData.append('Image', fileToUpload, fileToUpload.name);
//   return this.http.post(this.rootUrl + 'api/admin-login', formData);
// }

spkr(formData){
  this.http.post(this.rootUrl + 'api/admin-login',formData)
}
 
get_about(token: string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' +  token
   });
  return this.http.get(this.rootUrl + 'api/get-about-us',{headers: headers});
}

update_about(bod: any,token: string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' +  token
   });
  //  const bod = {
  //    ted: this.dashboard.ted,
  //    tedx: this.dashboard.tedx,
  //    tedx_akgec : this.dashboard.tedx_akgec
  //  }

  return this.http.post(this.rootUrl + 'api/update-about-us',bod,{headers: headers});
}

}
