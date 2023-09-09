export interface RegisterInput {
  email: string
  username: string
  password: string
  confirmPassword: string
}
export interface LoginResponse {
  Login: AuthPayload
}
export interface AuthPayload {
  token: string
  name: string
}
export interface RegisterResponse {
  Register: AuthPayload
}