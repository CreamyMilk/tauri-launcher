import { gql } from "graphql-request";
import { RegisterInput } from "../types/auth";
import { makeRequest } from "./request";

export async function REGISTER(newUser: RegisterInput) {
  const query = gql`
  mutation refactored972($input: RegisterInput!) {
    Register(input: $input) {
      token
      name
    }
  }`
  return await makeRequest(query, { input: newUser });
}

export async function LOGIN(mailname: string, pwd: string) {
  const query = gql`
  mutation refactored57($emailOrName: String!, $password: String!) {
    Login(emailOrName: $emailOrName, password: $password) {
      token
      name
    }
  }`
  return await makeRequest(query, { emailOrName: mailname, password: pwd });
}