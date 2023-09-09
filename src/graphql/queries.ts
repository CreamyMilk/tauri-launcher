import { gql } from "graphql-request";
import { makeRequest } from "./request";


export async function FETCH_PROFILE(authToken: string) {
  const query = gql`
  query refactored52($token: String!) {
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


export async function FETCH_STREAMS(authToken: string) {
  const query = gql`
  query refactored959($token: String!) {
    FetchStreams(token: $token) {
      id
      title
      username
      game
      roomId
    }
  }`
  return await makeRequest(query, { token: authToken });
}
