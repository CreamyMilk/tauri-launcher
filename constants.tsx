export const VIDEOSDK_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiYTM2OTUzMC1hNjViLTRhNjYtYjJlNi0xNmE4ZjQ2MTUyYzYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4ODQ3MzExNCwiZXhwIjoxODQ2MjYxMTE0fQ.nv3PNLWcZFuIUt20o52No1ouQ4fCdX6IG8sfQMJ_f7k"
export const AUTHTOKEN = "auth-token"
export const USERNAME = "user-name"
export function GetToken() {
  return localStorage.getItem(AUTHTOKEN)
}
export const API_URL = "https://launcher-backend.onrender.com/query"
// export const API_URL="http://localhost:8080/query"