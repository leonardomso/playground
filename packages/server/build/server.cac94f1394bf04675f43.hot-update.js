/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-graphql */ \"koa-graphql\");\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_graphql__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-playground-middleware-koa */ \"graphql-playground-middleware-koa\");\n/* harmony import */ var graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database */ \"./src/database.ts\");\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphql */ \"./src/graphql.ts\");\n\n\n\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_1___default())();\nconst router = new (_koa_router__WEBPACK_IMPORTED_MODULE_3___default())();\nconst graphqlServer = koa_graphql__WEBPACK_IMPORTED_MODULE_7___default()(_graphql__WEBPACK_IMPORTED_MODULE_10__.default);\nrouter.all(\"/graphql\", koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default()(), graphqlServer);\nrouter.all(\"/graphiql\", graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8___default()({\n  endpoint: \"/graphql\"\n}));\napp.listen(process.env.PORT || 4000);\napp.use(koa_logger__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(_koa_cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_6___default()({\n  contentSecurityPolicy:  false ? 0 : false\n}));\napp.use(router.routes()).use(router.allowedMethods());\n(0,_database__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack://@playground/server/./src/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a30a1c1bc3d0299d56f7"
/******/ 	})();
/******/ 	
/******/ }
;