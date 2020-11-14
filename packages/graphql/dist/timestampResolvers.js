"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamps = void 0;

var _graphql = require("graphql");

const timestamps = {
  createdAt: {
    type: _graphql.GraphQLString,
    resolve: obj => obj.createdAt ? obj.createdAt.toISOString() : null
  },
  updatedAt: {
    type: _graphql.GraphQLString,
    resolve: obj => obj.updatedAt ? obj.updatedAt.toISOString() : null
  }
};
exports.timestamps = timestamps;
//# sourceMappingURL=timestampResolvers.js.map