import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  const token = storageService.getToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

export const publicGuard: CanActivateFn = () => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  const token = storageService.getToken();

  if (token) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
