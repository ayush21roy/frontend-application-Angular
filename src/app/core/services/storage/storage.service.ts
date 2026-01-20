import { Injectable } from '@angular/core';
import { StorageKeys } from '../../../shared/enums/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setToken(token: string): void {
    localStorage.setItem(StorageKeys.TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(StorageKeys.TOKEN);
  }

  clearToken(): void {
    localStorage.removeItem(StorageKeys.TOKEN);
  }
}
