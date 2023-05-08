const { AuthenticationError } = require("apollo-server-express");
const { User, List } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("lists");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("lists");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    test: async (parent, args) => {
      return 123;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addList: async (parent, { username, lists }, context) => {
      const list = await List.insertMany(lists);
      const listIds = list.map((e) => {
        return e._id;
      });
      const updatedUser = await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { lists: { $each: listIds } } },
        {
          new: true,
        }
      );
      return updatedUser;
    },

    updateShops: async (parent, { username, shops }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        {
          username: username,
        },
        { $set: { shops: shops } },
        {
          new: true,
        }
      );
      return updatedUser;
    },

    updateItems: async (parent, { username, items }, context) => {
      items.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      const updatedUser = await User.findOneAndUpdate(
        {
          username: username,
        },
        { $set: { items: items } },
        {
          new: true,
        }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
