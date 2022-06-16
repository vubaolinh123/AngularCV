import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { IBlogCate } from 'src/app/models/blog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-cate-blog',
  templateUrl: './form-cate-blog.component.html',
  styleUrls: ['./form-cate-blog.component.css']
})
export class FormCateBlogComponent implements OnInit {
   id: number | null | string = null
  validateForm!: FormGroup; 
  cateBlog: IBlogCate= {
    id: 0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private BlogService: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
     this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
    if(this.id != null){
      this.BlogService.getOneCate(this.id).subscribe(data => this.cateBlog = data)
    }
  }

  onSubmit(){
    const id = this.route.snapshot.paramMap.get('id')!;
    
    if (this.validateForm.valid) {
      if(id != null){
      this.cateBlog.id = id
       this.BlogService.updateCate(this.cateBlog).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/categoryBlog');
        }, 2000)
      })
     }else{
       this.BlogService.AddCate(this.cateBlog).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/categoryBlog');
        }, 2000)
      })
     }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
