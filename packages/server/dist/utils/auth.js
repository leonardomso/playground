"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = getUser;
exports.generateToken = generateToken;
exports.authenticate = authenticate;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _UserModel = _interopRequireDefault(require("../modules/User/UserModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

function getUser(_x) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator(function* (token) {
    if (!token) return {
      user: null
    };

    try {
      const decodedToken = _jsonwebtoken.default.verify(token.substring(4), process.env.JWT_SECRET);

      const user = yield _UserModel.default.findOne({
        _id: decodedToken.id
      });
      return {
        user
      };
    } catch (err) {
      return {
        user: null
      };
    }
  });
  return _getUser.apply(this, arguments);
}

function generateToken(user) {
  return `JWT ${_jsonwebtoken.default.sign({
    id: user._id
  }, process.env.JWT_SECRET)}`;
}

function authenticate(plainTextPassword) {
  return _bcryptjs.default.compare(plainTextPassword, this.password);
}
//# sourceMappingURL=auth.js.map