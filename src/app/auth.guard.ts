import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthgoogleService } from './authgoogle.service';
import { Profile } from './landingpage/profile.model';

export const authGuard: CanActivateFn = (_, __) => {
  const loginService: AuthgoogleService = inject(AuthgoogleService);
  const router: Router = inject(Router);
  const loggedProfile: Profile = loginService.getLoggedProfile();
  if (loggedProfile) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
