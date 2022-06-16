import { IBlogCate } from 'src/app/models/blog';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-cate-blog',
  templateUrl: './list-cate-blog.component.html',
  styleUrls: ['./list-cate-blog.component.css']
})
export class ListCateBlogComponent implements OnInit {
  listCateBlog!: IBlogCate[]
  constructor(private blogService: BlogService) {
    this.getAllCate()
   }

  ngOnInit(): void {
  }
  getAllCate(){
    this.blogService.getAllCate().subscribe(data=>{
      this.listCateBlog  = data 
    })
  }

  onRemoveBlog(id: number | string){
    const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
    if(confirm){
      this.blogService.removeBlog(id).subscribe(()=>{
          this.listCateBlog = this.listCateBlog.filter(item => item.id !== id);
      })
    }
  }

}
