export type User = {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};
type Status = 'idle' | 'loading' | 'successed' | 'failed';
type RequstState = {
  status: Status;
  isLoding: boolean;
  message: string | null;
  error: string | null;
};
export type RegisterResponse = {
  user: User;
  message: string;
};
export type LoginResponse = RegisterResponse;
export type GetMe = LoginResponse;

export type AuthState = {
  user: User | null;
  isAuth: boolean;
  statusUser: RequstState;
  statusRegister: RequstState;
  statusLogin: RequstState;
 
};
