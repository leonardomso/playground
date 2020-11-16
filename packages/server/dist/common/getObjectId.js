"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectId = void 0;

var _graphqlRelay = require("graphql-relay");

var _mongoose = require("mongoose");

// returns an ObjectId given an param of unknown type
const getObjectId = target => {
  if (target instanceof _mongoose.Types.ObjectId) {
    return new _mongoose.Types.ObjectId(target.toString());
  }

  if (typeof target === "object" && target instanceof _mongoose.Document) {
    return target && target._id ? new _mongoose.Types.ObjectId(target._id) : null;
  }

  if (_mongoose.Types.ObjectId.isValid(target)) {
    return new _mongoose.Types.ObjectId(target.toString());
  }

  if (typeof target === "string") {
    const result = (0, _graphqlRelay.fromGlobalId)(target);

    if (result.type && result.id && _mongoose.Types.ObjectId.isValid(result.id)) {
      return new _mongoose.Types.ObjectId(result.id);
    }

    if (_mongoose.Types.ObjectId.isValid(target)) {
      return new _mongoose.Types.ObjectId(target);
    }

    return null;
  }

  return null;
};

exports.getObjectId = getObjectId;
//# sourceMappingURL=getObjectId.js.map