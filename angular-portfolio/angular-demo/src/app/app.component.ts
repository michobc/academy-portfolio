import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {IContact} from "./interfaces/contact";

@Component({
  selector: 'app-root-christy',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, AboutMeComponent, ProfileComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';

  handleInputClicked() {
    console.log("ABOUT ME WAS CLICKED FROM OUTPUT")
  }

  submittedForm(contact: IContact) {
    console.log("FORM SUBMITTED", contact)
  }
}
