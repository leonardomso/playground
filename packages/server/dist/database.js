"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const connectDB = () => {
  return new Promise((resolve, reject) => {
    _mongoose.default.Promise = global.Promise;

    _mongoose.default.connection.on("error", error => reject(error)).on("close", () => console.log("Database connection closed.")).once("open", () => resolve(_mongoose.default.connections[0]));

    _mongoose.default.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  });
};

var _default = connectDB;
exports.default = _default;
//# sourceMappingURL=database.js.map