import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './profile.model';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  profile: Profile | undefined | null;
  constructor(
    private readonly router: Router,
    private readonly loginService: AuthgoogleService
  ) {}

  navigate() {
    this.router.navigate(['/galeria']);
  }
  logInGoogle() {
    this.loginService.logIn();
  }
  isLoggedIn(): boolean {
    this.profile = this.loginService.getLoggedProfile();
    return !!this.profile;
  }
}
