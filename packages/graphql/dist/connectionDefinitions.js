"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionDefinitions = connectionDefinitions;
exports.connectionArgs = exports.backwardConnectionArgs = exports.forwardConnectionArgs = void 0;

var _graphql = require("graphql");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const forwardConnectionArgs = {
  after: {
    type: _graphql.GraphQLString
  },
  first: {
    type: _graphql.GraphQLInt
  }
};
exports.forwardConnectionArgs = forwardConnectionArgs;
const backwardConnectionArgs = {
  before: {
    type: _graphql.GraphQLString
  },
  last: {
    type: _graphql.GraphQLInt
  }
};
exports.backwardConnectionArgs = backwardConnectionArgs;

const connectionArgs = _objectSpread(_objectSpread({}, forwardConnectionArgs), backwardConnectionArgs);

exports.connectionArgs = connectionArgs;
const pageInfoType = new _graphql.GraphQLObjectType({
  name: "PageInfoExtended",
  description: "Information about pagination in a connection.",
  fields: () => ({
    hasNextPage: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLBoolean),
      description: "When paginating forwards, are there more items?"
    },
    hasPreviousPage: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLBoolean),
      description: "When paginating backwards, are there more items?"
    },
    startCursor: {
      type: _graphql.GraphQLString,
      description: "When paginating backwards, the cursor to continue."
    },
    endCursor: {
      type: _graphql.GraphQLString,
      description: "When paginating forwards, the cursor to continue."
    }
  })
});

function resolveMaybeThunk(thingOrThunk) {
  return typeof thingOrThunk === "function" ? thingOrThunk() : thingOrThunk;
}

function connectionDefinitions(config) {
  const {
    nodeType,
    resolveCursor,
    resolveNode
  } = config;
  const name = config.name || nodeType.name;
  const edgeFields = config.edgeFields || {};
  const connectionFields = config.connectionFields || {};
  const edgeType = new _graphql.GraphQLObjectType({
    name: `${name}Edge`,
    description: "An edge in a connection.",
    fields: () => _objectSpread({
      node: {
        type: nodeType,
        resolve: resolveNode,
        description: "The item at the end of the edge"
      },
      cursor: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString),
        resolve: resolveCursor,
        description: "A cursor for use in pagination"
      }
    }, resolveMaybeThunk(edgeFields))
  });
  const connectionType = new _graphql.GraphQLObjectType({
    name: `${name}Connection`,
    description: "A connection to a list of items.",
    fields: () => _objectSpread({
      count: {
        type: _graphql.GraphQLInt,
        description: "Number of items in this connection"
      },
      totalCount: {
        type: _graphql.GraphQLInt,
        resolve: connection => connection.count,
        description: `A count of the total number of objects in this connection, ignoring pagination.
  This allows a client to fetch the first five objects by passing "5" as the
  argument to "first", then fetch the total count so it could display "5 of 83",
  for example.`
      },
      startCursorOffset: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLInt),
        description: "Offset from start"
      },
      endCursorOffset: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLInt),
        description: "Offset till end"
      },
      pageInfo: {
        type: (0, _graphql.GraphQLNonNull)(pageInfoType),
        description: "Information to aid in pagination."
      },
      edges: {
        type: (0, _graphql.GraphQLNonNull)((0, _graphql.GraphQLList)(edgeType)),
        description: "A list of edges."
      }
    }, resolveMaybeThunk(connectionFields))
  });
  return {
    edgeType,
    connectionType
  };
}
//# sourceMappingURL=connectionDefinitions.js.map