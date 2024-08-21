import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";

@Component({
  selector: 'app-root-christy',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';

  handleInputClicked() {
    console.log("ABOUT ME WAS CLICKED FROM OUTPUT")
  }
}
