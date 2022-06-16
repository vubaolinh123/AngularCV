import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-detal-blog',
  templateUrl: './detal-blog.component.html',
  styleUrls: ['./detal-blog.component.css']
})
export class DetalBlogComponent implements OnInit {
  id: number | null = null;
  detailBlog!: IBlog
  constructor(
    private route: ActivatedRoute,
    private BlogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if(this.id != null){
      this.BlogService.getOneBlog(this.id).subscribe(data => this.detailBlog = data)
    }
  }

}
