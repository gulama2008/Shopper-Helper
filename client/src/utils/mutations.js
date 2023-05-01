import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation AddList($username: String!, $lists: [ListData!]!) {
    addList(username: $username, lists: $lists) {
      _id
      username
      email
      lists {
        _id
      }
    }
  }
`;

export const UPDATE_SHOPS = gql`
  mutation UpdateShops($username: String!, $shops: [String!]!) {
    updateShops(username: $username, shops: $shops) {
      _id
      username
      shops
    }
  }
`;

export const UPDATE_ITEMS = gql`
  mutation UpdateItems($username: String!, $items: [ItemData!]!) {
    updateItems(username: $username, items: $items) {
      _id
      username
      items {
        name
        quantity
        unit
        shop
        price
        _id
      }
    }
  }
`;
