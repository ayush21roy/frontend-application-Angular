import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard/dashboard.service';
import { UserModel } from '../../../shared/models/user.model';
import { MESSAGE_CONST } from '../../../core/constants/message.constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  users: UserModel[] = [];
  loading = false;
  errorMessage: string | null = null;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchUserList();
  }

  fetchUserList(): void {
    this.loading = true;

    this.dashboardService.getUsersList(10).subscribe({
      next: (res) => {
        this.users = res.users;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage =
          err.error?.message ?? MESSAGE_CONST.FAILED_TO_LOAD_USERS;
        this.loading = false;
      },
    });
  }
}
