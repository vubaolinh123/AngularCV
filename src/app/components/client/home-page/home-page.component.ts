import { IProfile } from './../../../models/profile';
import { ProjectService } from './../../../services/project.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  listProfile!: IProfile[]
  listProject!: IProject[]
  constructor(
    private projectService: ProjectService
  ) {
    this.showProject()
   }

  ngOnInit(): void {
  }

  
  showProject(){
    this.projectService.getProject().subscribe(data=> this.listProject = data)
  }

}
