import {Component, OnInit} from '@angular/core';
import {IAboutMe} from "../../interfaces/aboutme";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile: {
    name: string;
    title: string;
  } = {
    name: '',
    title: ''
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProfile().subscribe(profile => {
      this.profile = profile;
    })
  }
}
