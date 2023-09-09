export interface FetchProfileResponse {
  UserProfile: UserProfile
}

export interface UserProfile {
  id: string
  username: string
  email: string
  level: number
  balance: number
  publicKey: string
  mpesaNumber: string
  avatar: string
}
