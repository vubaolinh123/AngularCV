import { ActivatedRoute, Router } from '@angular/router';
import { IBlog, IBlogCate } from 'src/app/models/blog';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent implements OnInit {
 id: number | null | string = null
 BlogCate!: IBlogCate[];
  blog: IBlog= {
    id: 0,
    name: "",
    time: "", 
    cateBlogId: 0,
    author: "",
    desc: ""
  }
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
  ) { 
     this.getAllCateBlog()
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;    
    if(this.id != null){
      this.blogService.getOneBlog(this.id).subscribe(data => {
        this.blog = data
      })
    }
  }

   getAllCateBlog(){
       this.blogService.getAllCate().subscribe(data=>{
        this.BlogCate = data
        
      })
   }

   changeCate(e: any){
    this.blog.cateBlogId = e.target.value
  }

  onSubmit(){
    const id = this.route.snapshot.paramMap.get('id')!;
    
    if(id != null){
      this.blog.id = id
       this.blogService.updateBlog(this.blog).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/blog');
        }, 2000)
      })
     }else{
       this.blogService.addBlog(this.blog).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/blog');
        }, 2000)
      })
     }
  }

}
