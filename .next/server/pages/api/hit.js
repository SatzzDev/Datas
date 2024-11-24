"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hit";
exports.ids = ["pages/api/hit"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./src/lib/DatabaseConnection.js":
/*!***************************************!*\
  !*** ./src/lib/DatabaseConnection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL0RhdGFiYXNlQ29ubmVjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QyxDQUFDO0lBQ0RILGdCQUFnQkMsT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlRixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWFnYWluLy4vc3JjL2xpYi9EYXRhYmFzZUNvbm5lY3Rpb24uanM/MWM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/DatabaseConnection.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/hit.js":
/*!******************************!*\
  !*** ./src/pages/api/hit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_DatabaseConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/DatabaseConnection */ \"(api)/./src/lib/DatabaseConnection.js\");\n\nasync function handler(req, res) {\n    try {\n        let name = \"counter\";\n        let client = await _lib_DatabaseConnection__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        let db = client.db();\n        let Hit = db.collection(name);\n        let has = await Hit.findOne({\n            name\n        });\n        if (has) {\n            await Hit.findOneAndUpdate({\n                name\n            }, {\n                $inc: {\n                    hit: 1\n                }\n            });\n        } else {\n            await Hit.insertOne({\n                name,\n                hit: 0\n            });\n        }\n        let finale = await Hit.findOne({\n            name\n        });\n        delete finale._id;\n        res.status(200).json(finale);\n    } catch (err) {\n        console.log(\"[ERROR /api/hit]\", err);\n        res.status(500).json({\n            msg: \"500 internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hpdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUV0QyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJO1FBQ0YsSUFBSUMsT0FBTztRQUNYLElBQUlDLFNBQVMsTUFBTUwsK0RBQWFBO1FBQ2hDLElBQUlNLEtBQUtELE9BQU9DLEVBQUU7UUFDbEIsSUFBSUMsTUFBTUQsR0FBR0UsVUFBVSxDQUFDSjtRQUV4QixJQUFJSyxNQUFNLE1BQU1GLElBQUlHLE9BQU8sQ0FBQztZQUFFTjtRQUFLO1FBRW5DLElBQUdLLEtBQUs7WUFDTixNQUFNRixJQUFJSSxnQkFBZ0IsQ0FBQztnQkFBRVA7WUFBSyxHQUFHO2dCQUFFUSxNQUFNO29CQUFFQyxLQUFLO2dCQUFFO1lBQUM7UUFDekQsT0FBTztZQUNMLE1BQU1OLElBQUlPLFNBQVMsQ0FBQztnQkFBRVY7Z0JBQU1TLEtBQUs7WUFBRTtRQUNyQyxDQUFDO1FBRUQsSUFBSUUsU0FBUyxNQUFNUixJQUFJRyxPQUFPLENBQUM7WUFBRU47UUFBSztRQUN0QyxPQUFPVyxPQUFPQyxHQUFHO1FBQ2pCYixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtJQUN2QixFQUFFLE9BQU9JLEtBQUs7UUFDWkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkY7UUFDaENoQixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVJLEtBQUs7UUFBNEI7SUFDMUQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWFnYWluLy4vc3JjL3BhZ2VzL2FwaS9oaXQuanM/MzhhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWIvRGF0YWJhc2VDb25uZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBsZXQgbmFtZSA9IFwiY291bnRlclwiO1xuICAgIGxldCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGxldCBkYiA9IGNsaWVudC5kYigpO1xuICAgIGxldCBIaXQgPSBkYi5jb2xsZWN0aW9uKG5hbWUpO1xuXG4gICAgbGV0IGhhcyA9IGF3YWl0IEhpdC5maW5kT25lKHsgbmFtZSB9KTtcblxuICAgIGlmKGhhcykge1xuICAgICAgYXdhaXQgSGl0LmZpbmRPbmVBbmRVcGRhdGUoeyBuYW1lIH0sIHsgJGluYzogeyBoaXQ6IDEgfX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBIaXQuaW5zZXJ0T25lKHsgbmFtZSwgaGl0OiAwIH0pO1xuICAgIH1cblxuICAgIGxldCBmaW5hbGUgPSBhd2FpdCBIaXQuZmluZE9uZSh7IG5hbWUgfSk7XG4gICAgZGVsZXRlIGZpbmFsZS5faWQ7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZmluYWxlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coXCJbRVJST1IgL2FwaS9oaXRdXCIsIGVycik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IFwiNTAwIGludGVybmFsIHNlcnZlciBlcnJvclwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiY2xpZW50IiwiZGIiLCJIaXQiLCJjb2xsZWN0aW9uIiwiaGFzIiwiZmluZE9uZSIsImZpbmRPbmVBbmRVcGRhdGUiLCIkaW5jIiwiaGl0IiwiaW5zZXJ0T25lIiwiZmluYWxlIiwiX2lkIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hit.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hit.js"));
module.exports = __webpack_exports__;

})();