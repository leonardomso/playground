"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: "UserUnsubscribeToPodcast",
  inputFields: {
    podcastId: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  mutateAndGetPayload: function () {
    var _ref = _asyncToGenerator(function* ({
      podcastId
    }, {
      user
    }) {
      if (!user) {
        return {
          error: "User not authenticated"
        };
      }

      const subscribedToPodcast = user.subscriptions.includes(podcastId);

      if (subscribedToPodcast === true) {
        const podcastIdIndex = user.subscriptions.indexOf(podcastId);
        const subscriptions = user.subscriptions.filter((_, index) => index !== podcastIdIndex);
        user.subscriptions = subscriptions;
        yield user.save();
        return {
          message: null,
          error: "Unsubscribed successfully"
        };
      } else {
        return {
          message: null,
          error: "Already unsubscribed to podcast"
        };
      }
    });

    return function mutateAndGetPayload(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  outputFields: {
    message: {
      type: _graphql.GraphQLString,
      resolve: ({
        message
      }) => message
    },
    error: {
      type: _graphql.GraphQLString,
      resolve: ({
        error
      }) => error
    }
  }
});

exports.default = _default;
//# sourceMappingURL=UserUnsubscribeToPodcast.js.map