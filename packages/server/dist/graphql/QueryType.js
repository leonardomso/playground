"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _UserType = _interopRequireDefault(require("../modules/User/UserType"));

var UserLoader = _interopRequireWildcard(require("../modules/User/UserLoader"));

var _TypeRegister = require("../modules/Node/TypeRegister");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QueryType = new _graphql.GraphQLObjectType({
  name: "Query",
  description: "Query",
  fields: () => ({
    node: _TypeRegister.nodeField,
    nodes: _TypeRegister.nodesField,
    currentUser: {
      type: _UserType.default,
      resolve: (root, args, context) => {
        var _context$user;

        return UserLoader.load(context, (_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user._id);
      }
    }
  })
});
var _default = QueryType;
exports.default = _default;
//# sourceMappingURL=QueryType.js.map