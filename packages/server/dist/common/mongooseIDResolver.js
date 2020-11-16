"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongooseIDResolver = void 0;

var _graphql = require("graphql");

const mongooseIDResolver = {
  _id: {
    type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString),
    description: "mongoose _id",
    resolve: ({
      _id
    }) => _id.toString()
  }
};
exports.mongooseIDResolver = mongooseIDResolver;
//# sourceMappingURL=mongooseIDResolver.js.map