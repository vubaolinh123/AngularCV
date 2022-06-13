import { IUser } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}


  login(infoUser: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>("http://localhost:3000/login", infoUser)
  }
}
