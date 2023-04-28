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
    totalPrice:Float
  }
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

  input ShopData{
    name:String
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
    # updateShop(_id:String, input:ShopData):User
  }
`;

module.exports = typeDefs;
