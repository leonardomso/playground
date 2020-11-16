"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLoader = void 0;

var _graphqlMongooseLoader = require("@entria/graphql-mongoose-loader");

var _dataloader = _interopRequireDefault(require("dataloader"));

var _graphqlMongoHelpers = require("@entria/graphql-mongo-helpers");

var _withConnectionCursor = require("./withConnectionCursor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const defaultViewerCanSee = (context, data) => data;

const createLoader = ({
  model,
  viewerCanSee = defaultViewerCanSee,
  loaderName,
  filterMapping = {}
}) => {
  class Loader {
    constructor(data) {
      Object.keys(data).map(key => {
        this[key] = data[key];
      });
      this.id = data.id || data._id;
    }

  }

  const nameIt = (name, cls) => ({
    [name]: class extends cls {}
  })[name];

  const Wrapper = nameIt(model.collection.collectionName, Loader);

  const getLoader = () => new _dataloader.default(ids => (0, _graphqlMongooseLoader.mongooseLoader)(model, ids));

  const load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (context, id) {
      if (!id) {
        return null;
      }

      try {
        const data = yield context.dataloaders[loaderName].load(id.toString());

        if (!data) {
          return null;
        }

        const filteredData = yield viewerCanSee(context, data);
        return filteredData ? new Wrapper(filteredData) : null;
      } catch (err) {
        return null;
      }
    });

    return function load(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  const clearCache = ({
    dataloaders
  }, id) => dataloaders[loaderName].clear(id.toString());

  const loadAll = (0, _withConnectionCursor.withConnectionCursor)(model, load, (context, args) => {
    const builtMongoConditions = (0, _graphqlMongoHelpers.buildMongoConditionsFromFilters)(context, args.filters, filterMapping);

    const conditions = _objectSpread({}, builtMongoConditions.conditions);

    const sort = {
      createdAt: -1
    };
    return {
      conditions,
      sort
    };
  });
  return {
    Wrapper: Wrapper,
    getLoader,
    clearCache,
    load,
    loadAll
  };
};

exports.createLoader = createLoader;
//# sourceMappingURL=createLoader.js.map