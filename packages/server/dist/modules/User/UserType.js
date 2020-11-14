"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserConnection = exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _graphql2 = require("@playground/graphql");

var _UserLoader = require("./UserLoader");

var _TypeRegister = require("../Node/TypeRegister");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UserType = new _graphql.GraphQLObjectType({
  name: "User",
  description: "UserType",
  fields: () => _objectSpread(_objectSpread({
    id: (0, _graphqlRelay.globalIdField)("User")
  }, _graphql2.mongooseIDResolver), {}, {
    email: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString),
      resolve: ({
        email
      }) => email
    },
    createdAt: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.createdAt ? obj.createdAt.toISOString() : null
    },
    updatedAt: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.updatedAt ? obj.updatedAt.toISOString() : null
    }
  }),
  interfaces: () => [_TypeRegister.nodeInterface]
});
var _default = UserType;
exports.default = _default;
(0, _TypeRegister.registerTypeLoader)(UserType, _UserLoader.load);
const UserConnection = (0, _graphql2.connectionDefinitions)({
  name: "User",
  nodeType: UserType
});
exports.UserConnection = UserConnection;
//# sourceMappingURL=UserType.js.map