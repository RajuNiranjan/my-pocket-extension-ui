export interface User {
  _id: string;
  userName: string;
  email: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserType {
  authUser: User | null;
  isAuthLoading: boolean;
  error: string | null;
}
