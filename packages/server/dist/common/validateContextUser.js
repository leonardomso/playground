"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateContextUser = void 0;

var _NullConnection = require("./NullConnection");

const validateContextUser = f => (...params) => {
  const [context] = params;

  if (!context.user) {
    return _NullConnection.NullConnection;
  }

  return f(...params);
};

exports.validateContextUser = validateContextUser;
//# sourceMappingURL=validateContextUser.js.map