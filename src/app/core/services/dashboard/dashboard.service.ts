import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListResponse, UserModel } from '../../../shared/models/user.model';
import { DASHBOARD_API_CONST } from '../../constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getUsersList(
    limit: number = 10,
    skip: number = 0,
  ): Observable<UserListResponse> {
    const url = DASHBOARD_API_CONST.GET_USERS;
    return this.http.get<UserListResponse>(url, {
      params: {
        limit: limit.toString(),
        skip: skip.toString(),
      },
    });
  }
}
