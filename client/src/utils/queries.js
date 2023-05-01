import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      shops
      items {
        name
        unit
        quantity
        shop
        price
      }
      lists {
        _id
        name
        quantity
        unit
        shop
        date
        price
        bought
        totalPrice
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      password
      items {
        price
        shop
        unit
        quantity
        name
        _id
      }
      shops {
        name
        _id
      }
    }
  }`
  ;

  export const QUERY_TEST = gql`
    query Query {
      test
    }
  `;
