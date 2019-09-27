import gql from "graphql-tag";

export const SIGN_IN_MUTATION = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation signUpUser($email: String!, $password: String!) {
    signUpUser(email: $email, password: $password) {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const LOGOUT_USER_MUTATION = gql`
  mutation logoutUser {
    logoutUser {
      token
    }
  }
`;
