"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorField = void 0;

var _graphql = require("graphql");

const errorField = {
  error: {
    type: _graphql.GraphQLString,
    resolve: ({
      error
    }) => error
  }
};
exports.errorField = errorField;
//# sourceMappingURL=errorField.js.map