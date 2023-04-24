const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    items: [Item]!
    shops: [Shop]!
    lists: [List]!
  }

  type Shop {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    quantity:Float
    unit:String
    shop:String
    price:Float
  }

  type List {
    _id: ID
    name: String
    quantity:Float
    unit:String
    shop:String
    price:Float
    date:String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
