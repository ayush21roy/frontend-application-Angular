import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { LoginRequest, LoginResponse } from '../../../shared/models/auth.model';
import { Observable, tap } from 'rxjs';
import { AUTH_API_CONST } from '../../constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_API_CONST.LOGIN, payload).pipe(
      tap((res: LoginResponse) => {
        this.storageService.setToken(res.accessToken);
      }),
    );
  }

  logout(): void {
    this.storageService.clearToken();
  }
}
