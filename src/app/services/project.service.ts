import { IProject, IProjectCate } from './../models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>("http://localhost:3000/project?_expand=cateProject")
  }

  getThreeProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>('http://localhost:3000/project?_expand=cateProject&_start=0&_end=3')
  }

  getOneProject(id: number | string): Observable<IProject>{
    return this.http.get<IProject>(`http://localhost:3000/project/${id}?_expand=cateProject`)
  }

  addProject(project: IProject): Observable<IProject>{
    return this.http.post<IProject>(`http://localhost:3000/project`, project)
  }
  updateProject(project: IProject): Observable<IProject>{
    return this.http.put<IProject>(`http://localhost:3000/project/${project.id}`, project)
  }
  removeProject(id: number | string): Observable<IProject[]>{
    return this.http.delete<IProject[]>(`http://localhost:3000/project/${id}`)
  }
  // CATEGORY PROJECT
  getAllCate(): Observable<IProjectCate[]>{
    return this.http.get<IProjectCate[]>(`http://localhost:3000/cateProjects`)
  }
  AddCate(category: IProjectCate): Observable<IProjectCate>{
    return this.http.post<IProjectCate>(`http://localhost:3000/cateProjects`, category)
  }
  updateCate(category: IProjectCate): Observable<IProjectCate>{
    return this.http.put<IProject>(`http://localhost:3000/cateProjects/${category.id}`, category)
  }
  getOneCate(id: number | string): Observable<IProjectCate>{
    return this.http.get<IProjectCate>(`http://localhost:3000/cateProjects/${id}`)
  }
  removeCate(id: number | string): Observable<IProjectCate[]>{
    return this.http.delete<IProjectCate[]>(`http://localhost:3000/cateProjects/${id}`)
  }
  
}
