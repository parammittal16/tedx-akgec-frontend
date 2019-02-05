import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 adminLI : boolean
  constructor() { }

  setAdmintoken(token: string){
    localStorage.setItem('admin', token);
  }

  getAdminToken() {
    return localStorage.getItem('admin');
  }

  adminLoggedIn(){
    if (this.getAdminToken()){
        return true;
    }
        return false;
  }

  removeAdminToken(){
    localStorage.removeItem('admin');
  }

  

}
