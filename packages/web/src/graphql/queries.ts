import gql from "graphql-tag";

export const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      _id
      email
      firstName
      lastName
      language
      subscriptions {
        name
        feed
      }
      history {
        name
        episode
        episodeLink
        date
      }
    }
  }
`;