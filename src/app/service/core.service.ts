import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http : HttpClient) { }

    get(url: string): Observable<any> {

    return this.http.get<any>(url);

  }
  post(url: string, options: any): Observable<any> {

    return this.http.post(url, options);

  }

  isLoggedIn(){
    return sessionStorage.getItem('access_token')
  }
}
