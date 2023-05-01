const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type List {
    _id: ID
    name: String
    quantity: Float
    unit: String
    shop: String
    price: Float
    date: String
    bought: Boolean
    totalPrice: Float
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    items: [Item]!
    shops: [String]!
    lists: [List]!
  }


  type Item {
    _id: ID
    name: String
    quantity: Float
    unit: String
    shop: String
    price: Float
  }

  input ListData {
    _id: ID
    name: String
    quantity: Float
    unit: String
    shop: String
    price: Float
    date: String
    bought: Boolean
  }


  input ItemData {
    name: String!
    quantity: Float
    unit: String
    shop: String
    price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    test: Int
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addList(username: String!, lists: [ListData!]!): User
    updateShops(username: String!, shops: [String!]!): User
    updateItems(username: String!, items: [ItemData!]!): User
  }
`;

module.exports = typeDefs;
