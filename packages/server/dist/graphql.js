"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = require("./graphql/schema");

var _auth = require("./utils/auth");

var _LoaderRegister = require("./modules/Loader/LoaderRegister");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const graphql = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req) {
    const {
      user
    } = yield (0, _auth.getUser)(req.header.authorization);
    const dataloaders = (0, _LoaderRegister.getDataloaders)();
    return {
      graphiql: process.env.NODE_ENV !== "production",
      schema: _schema.schema,
      context: {
        user,
        req,
        dataloaders
      },
      formatError: ({
        message,
        locations,
        stack
      }) => {
        console.log(message);
        console.log(locations);
        console.log(stack);
        return {
          message,
          locations,
          stack
        };
      }
    };
  });

  return function graphql(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = graphql;
exports.default = _default;
//# sourceMappingURL=graphql.js.map