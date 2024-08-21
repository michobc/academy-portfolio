import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
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
