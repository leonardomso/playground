"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.loadAll = exports.load = exports.clearCache = exports.getLoader = void 0;

var _common = require("../../common");

var _LoaderRegister = require("../Loader/LoaderRegister");

var _UserModel = _interopRequireDefault(require("./UserModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Wrapper: User,
  getLoader,
  clearCache,
  load,
  loadAll
} = (0, _common.createLoader)({
  model: _UserModel.default,
  loaderName: "UserLoader"
});
exports.loadAll = loadAll;
exports.load = load;
exports.clearCache = clearCache;
exports.getLoader = getLoader;
var _default = User;
exports.default = _default;
(0, _LoaderRegister.registerLoader)("UserLoader", getLoader);
//# sourceMappingURL=UserLoader.js.map