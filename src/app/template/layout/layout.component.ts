import { Component } from '@angular/core';
import { AuthgoogleService } from '../../authgoogle.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isMenuOpen: boolean = false;

  constructor(private readonly loginService: AuthgoogleService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logout() {
    this.loginService.logout();
  }
}
