"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _koa = _interopRequireDefault(require("koa"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _router = _interopRequireDefault(require("@koa/router"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaHelmet = _interopRequireDefault(require("koa-helmet"));

var _koaGraphql = _interopRequireDefault(require("koa-graphql"));

var _graphqlPlaygroundMiddlewareKoa = _interopRequireDefault(require("graphql-playground-middleware-koa"));

var _database = _interopRequireDefault(require("./database"));

var _graphql = _interopRequireDefault(require("./graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = new _koa.default();
const router = new _router.default();
const graphqlServer = (0, _koaGraphql.default)(_graphql.default);
router.all("/graphql", (0, _koaBodyparser.default)(), graphqlServer);
router.all("/graphiql", (0, _graphqlPlaygroundMiddlewareKoa.default)({
  endpoint: "/graphql"
}));
app.listen(process.env.GRAPHQL_PORT);
app.use((0, _koaLogger.default)());
app.use((0, _cors.default)());
app.use((0, _koaHelmet.default)({
  contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false
}));
app.use(router.routes()).use(router.allowedMethods());
(0, _database.default)();
//# sourceMappingURL=index.js.map