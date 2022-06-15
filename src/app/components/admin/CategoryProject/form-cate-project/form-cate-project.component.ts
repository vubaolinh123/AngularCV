import { ProjectService } from 'src/app/services/project.service';
import { IProjectCate } from './../../../../models/project';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-cate-project',
  templateUrl: './form-cate-project.component.html',
  styleUrls: ['./form-cate-project.component.css']
})
export class FormCateProjectComponent implements OnInit {
   id: number | null | string = null
  validateForm!: FormGroup; 
  catePro: IProjectCate = {
    id: 0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
     this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
    if(this.id != null){
      this.projectService.getOneCate(this.id).subscribe(data => this.catePro = data)
    }
  }

  onSubmit(){
    const id = this.route.snapshot.paramMap.get('id')!;
    
    if (this.validateForm.valid) {
      if(id != null){
      this.catePro.id = id
       this.projectService.updateCate(this.catePro).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/category');
        }, 2000)
      })
     }else{
       this.projectService.AddCate(this.catePro).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/category');
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
