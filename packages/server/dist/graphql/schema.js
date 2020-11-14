"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

var _graphql = require("graphql");

var _QueryType = _interopRequireDefault(require("./QueryType"));

var _MutationType = _interopRequireDefault(require("./MutationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _graphql.GraphQLSchema({
  query: _QueryType.default,
  mutation: _MutationType.default
});
exports.schema = schema;
//# sourceMappingURL=schema.js.map