export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: {
    department: string;
  };
  address: {
    country: string;
  };
}

export interface UserListResponse {
  users: UserModel[];
  total: number;
  skip: number;
  limit: number;
}
