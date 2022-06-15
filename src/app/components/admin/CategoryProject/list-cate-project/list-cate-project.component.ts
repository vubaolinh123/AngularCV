import { IProjectCate } from './../../../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list-cate-project',
  templateUrl: './list-cate-project.component.html',
  styleUrls: ['./list-cate-project.component.css']
})
export class ListCateProjectComponent implements OnInit {
  listCatePro!: IProjectCate[]
  constructor(private projectService: ProjectService) {
    this.getAllCate()
   }

  ngOnInit(): void {
  }

  getAllCate(){
    this.projectService.getAllCate().subscribe(data=>{
      this.listCatePro  = data 
    })
  }

  onRemoveProject(id: number | string){
    const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
    if(confirm){
      this.projectService.removeCate(id).subscribe(()=>{
          this.listCatePro = this.listCatePro.filter(item => item.id !== id);
      })
    }
  }

}
