import { HttpClient } from '@angular/common/http';
import { IBlog, IBlogCate } from './../models/blog';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlog():Observable<IBlog[]> {
    return this.http.get<IBlog[]>('http://localhost:3000/blog?_expand=cateBlog')
  }
  getTwoBlog():Observable<IBlog[]> {
    return this.http.get<IBlog[]>('http://localhost:3000/blog?_expand=cateBlog&_start=0&_end=2')
  }
  getOneBlog(id: number | string): Observable<IBlog>{
    return this.http.get<IBlog>(`http://localhost:3000/blog/${id}?_expand=cateBlog`)
  }
  addBlog(blog: IBlog): Observable<IBlog>{
    return this.http.post<IBlog>(`http://localhost:3000/blog`, blog)
  }
  updateBlog(blog: IBlog): Observable<IBlog>{
    return this.http.put<IBlog>(`http://localhost:3000/blog/${blog.id}`, blog)
  }
  removeBlog(id: number | string): Observable<IBlog[]>{
    return this.http.delete<IBlog[]>(`http://localhost:3000/blog/${id}`)
  }
  getAllCate(): Observable<IBlogCate[]>{
    return this.http.get<IBlogCate[]>(` http://localhost:3000/cateBlogs`)
  }
}
