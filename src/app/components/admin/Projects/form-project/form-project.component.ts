import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from './../../../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
  id: number | null | string = null
  validateForm!: FormGroup; 
  project: IProject = {
    id: 0,
    name: "",
    category: "", 
    time: "",
    desc: "",
    avatar: ""
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
      category: [null, [Validators.required]],
      time: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
    });
    if(this.id != null){
      this.projectService.getOneProject(this.id).subscribe(data => this.project = data)
    }

    
  }
  onSubmit(){
    const id = this.route.snapshot.paramMap.get('id')!;
    
    if (this.validateForm.valid) {
      if(id != null){
      this.project.id = id
       this.projectService.updateProject(this.project).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/project');
        }, 2000)
      })
     }else{
       this.projectService.addProject(this.project).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin/project');
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
