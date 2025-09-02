import { Injectable, inject, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { auth } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthgoogleService {
  private readonly oauthService: OAuthService = inject(OAuthService);
  private readonly router: Router = inject(Router);
  profile = signal<any>(null);
  constructor() {
    this.initConfig();
  }

  initConfig() {
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidIdToken()) {
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    });
  }

  logIn() {
    this.oauthService.initImplicitFlow();
  }
  logout() {
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

  getLoggedProfile() {
    return this.profile();
  }
}
