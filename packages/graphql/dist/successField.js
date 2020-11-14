"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successField = void 0;

var _graphql = require("graphql");

const successField = {
  success: {
    type: _graphql.GraphQLString,
    resolve: ({
      success
    }) => success
  }
};
exports.successField = successField;
//# sourceMappingURL=successField.js.map