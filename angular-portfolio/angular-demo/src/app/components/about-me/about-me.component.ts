import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAboutMe} from "../../interfaces/aboutme";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  @Input() toLogInput: boolean = false;
  @Output() inputClicked = new EventEmitter<void>();

  infos: IAboutMe[] = [];
  profile: {
    description: string;
    name: string;
    title: string;
  } = {
    description: '',
    name: '',
    title: ''
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getInfos().subscribe(infos => {
       this.infos = infos;
    })
    this.projectService.getProfile().subscribe(profile => {
       this.profile = profile;
    })
  }

  toLogInputFunction() {
    this.toLogInput = true;
    this.inputClicked.emit();
  }
}
