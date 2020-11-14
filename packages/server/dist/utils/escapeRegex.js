"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegex = void 0;

// https://stackoverflow.com/a/2593661/710693
const escapeRegex = str => `${str}`.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");

exports.escapeRegex = escapeRegex;
//# sourceMappingURL=escapeRegex.js.map