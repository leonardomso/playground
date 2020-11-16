"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConnectionCursor = void 0;

var _graphqlMongooseLoader = require("@entria/graphql-mongoose-loader");

const withConnectionCursor = (model, loader, condFn) => (...params) => {
  const {
    conditions = {},
    sort = {}
  } = condFn(...params);
  const [context, args] = params;
  const cursor = model.find(conditions).sort(sort);
  return (0, _graphqlMongooseLoader.connectionFromMongoCursor)({
    cursor,
    context,
    args,
    loader: loader
  });
};

exports.withConnectionCursor = withConnectionCursor;
//# sourceMappingURL=withConnectionCursor.js.map