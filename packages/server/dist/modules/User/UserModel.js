"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  ObjectId
} = _mongoose.default.Schema.Types;
const UserSchema = new _mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    hidden: true,
    required: true,
    minlength: 3
  },
  subscriptions: [{
    type: ObjectId,
    ref: "Podcast",
    description: "Podcast that user is subscribed"
  }]
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  },
  collection: "User"
});
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  if (!this.password) return next();
  return _bcrypt.default.hash(this.password, 8).then(hash => {
    this.password = hash;
    next();
  });
});
UserSchema.methods = {
  authenticate(plainTextPassword) {
    return _bcrypt.default.compareSync(plainTextPassword, this.password);
  },

  encryptPassword(password) {
    return _bcrypt.default.hashSync(password, 8);
  }

};

const UserModel = _mongoose.default.model("User", UserSchema);

var _default = UserModel;
exports.default = _default;
//# sourceMappingURL=UserModel.js.map