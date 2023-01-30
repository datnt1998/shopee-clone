import { User } from './user.types'
import { SuccessResponse } from './utils.types'

export type AuthResponse = SuccessResponse<{
  access_token: string
  refresh_token: string
  expires: number
  expires_refresh_token: number
  user: User
}>
