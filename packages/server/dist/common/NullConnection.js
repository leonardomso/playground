"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NullConnection = void 0;
const NullConnection = {
  edges: [],
  count: 0,
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    endCursor: "",
    startCursor: ""
  },
  startCursorOffset: 0,
  endCursorOffset: 0
};
exports.NullConnection = NullConnection;
//# sourceMappingURL=NullConnection.js.map