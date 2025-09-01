import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './profile.model';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  profile: Profile | undefined | null;
  constructor(private readonly router: Router) {}

  navigate() {
    this.router.navigate(['/galeria']);
  }
  logInGoogle() {}
  isLoggedIn(): boolean {
    return !!this.profile;
  }
}
