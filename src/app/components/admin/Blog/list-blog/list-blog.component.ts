import { BlogService } from './../../../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  listBlog!: IBlog[]
  constructor(
    private blogService: BlogService
  ) { 
    this.getAllBlog()
  }

  ngOnInit(): void {
  }

  getAllBlog(){
    this.blogService.getAllBlog().subscribe(data=>{
      this.listBlog = data
    })
  }
  onRemoveBlog(id: string | number){
    const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
    if(confirm){
      this.blogService.removeBlog(id).subscribe(()=>{
          this.listBlog = this.listBlog.filter(item => item.id !== id);
      })
    }
  }

}
