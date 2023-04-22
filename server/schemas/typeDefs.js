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
  # type Auth {
  #   token: ID!
  #   user: User
  # }

  type Query {
    users: [User]
    user(username: String!): User
    # items(username: String!): [Item]
    # item(itemId: ID!): Item
    # shops: [Shop]
    # shop(shopId: ID!): Shop
    # lists(username: String!): [List]
    # list(listId: ID!): List
  }

  # type Mutation {
  #   addUser(username: String!, email: String!, password: String!): Auth
  #   login(email: String!, password: String!): Auth
  #   addThought(thoughtText: String!): Thought
  #   addComment(thoughtId: ID!, commentText: String!): Thought
  #   removeThought(thoughtId: ID!): Thought
  #   removeComment(thoughtId: ID!, commentId: ID!): Thought
  # }
`;

module.exports = typeDefs;
