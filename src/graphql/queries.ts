import { gql } from "graphql-request";
import { makeRequest } from "./request";


export async function FETCH_PROFILE(authToken: string) {
  const query = gql`
  mutation refactored52($token: String!) {
    UserProfile(token: $token) {
      id
      username
      email
      level
      balance
      publicKey
      mpesaNumber
    }
  }`
  return await makeRequest(query, { token: authToken });
}
