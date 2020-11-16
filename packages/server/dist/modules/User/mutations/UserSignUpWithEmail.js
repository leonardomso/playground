"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _common = require("../../../common");

var _UserModel = _interopRequireDefault(require("../UserModel"));

var _auth = require("../../../utils/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: "UserSignUpWithEmail",
  inputFields: {
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  mutateAndGetPayload: function () {
    var _ref = _asyncToGenerator(function* ({
      email,
      password
    }) {
      const userExists = yield _UserModel.default.findOne({
        email: email.trim().toLowerCase()
      });

      if (userExists) {
        return {
          error: "Email is already in use"
        };
      }

      const user = yield new _UserModel.default({
        email,
        password
      }).save();
      return {
        token: (0, _auth.generateToken)(user),
        success: "Signed up succcessfully",
        error: null
      };
    });

    return function mutateAndGetPayload(_x) {
      return _ref.apply(this, arguments);
    };
  }(),
  outputFields: _objectSpread(_objectSpread({
    token: {
      type: _graphql.GraphQLString,
      resolve: ({
        token
      }) => token
    }
  }, _common.errorField), _common.successField)
});

exports.default = _default;
//# sourceMappingURL=UserSignUpWithEmail.js.map