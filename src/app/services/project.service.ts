import { IProject } from './../models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL: string = 'http://localhost:3000/project';
  constructor(private http: HttpClient) { }

  getProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.API_URL)
  }

}
