export interface User {
  _id: string;
  userName: string;
  email: string;
}

export interface UserType {
  authUser: User | null;
  isAuthLoading: boolean;
  error: string | null;
}
