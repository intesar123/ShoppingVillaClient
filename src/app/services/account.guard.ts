import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './account.service';
import { catchError, map, of } from 'rxjs';

export const accountGuard: CanActivateFn = (route, state) => {
  const authService= inject(AccountService);
  const router= inject(Router);
  return authService.isLoggedIn();
  //return this.authService.isLoggedIn();
};
