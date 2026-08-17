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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [admin, setAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"cw_admin_token\");\n        const savedUser = localStorage.getItem(\"cw_admin_user\");\n        if (token && savedUser) {\n            setAdmin(JSON.parse(savedUser));\n        }\n        setLoading(false);\n    }, []);\n    const login = async (email, password)=>{\n        const { data } = await _lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/auth/login\", {\n            email,\n            password\n        });\n        localStorage.setItem(\"cw_admin_token\", data.token);\n        localStorage.setItem(\"cw_admin_user\", JSON.stringify(data.admin));\n        setAdmin(data.admin);\n        return data;\n    };\n    const logout = ()=>{\n        localStorage.removeItem(\"cw_admin_token\");\n        localStorage.removeItem(\"cw_admin_user\");\n        setAdmin(null);\n        router.push(\"/admin/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            admin,\n            loading,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ritik\\\\castle-wellness-frontend-v3\\\\castle-wellness-frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDL0I7QUFDWDtBQUU3QixNQUFNTSw0QkFBY04sb0RBQWFBLENBQUM7QUFFM0IsU0FBU08sYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNVSxTQUFTVCxzREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLE1BQU1DLFlBQVlGLGFBQWFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJRixTQUFTRyxXQUFXO1lBQ3RCUCxTQUFTUSxLQUFLQyxLQUFLLENBQUNGO1FBQ3RCO1FBQ0FMLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxNQUFNUSxRQUFRLE9BQU9DLE9BQU9DO1FBQzFCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTWxCLHFEQUFRLENBQUMsZUFBZTtZQUFFZ0I7WUFBT0M7UUFBUztRQUNqRVAsYUFBYVUsT0FBTyxDQUFDLGtCQUFrQkYsS0FBS1QsS0FBSztRQUNqREMsYUFBYVUsT0FBTyxDQUFDLGlCQUFpQlAsS0FBS1EsU0FBUyxDQUFDSCxLQUFLZCxLQUFLO1FBQy9EQyxTQUFTYSxLQUFLZCxLQUFLO1FBQ25CLE9BQU9jO0lBQ1Q7SUFFQSxNQUFNSSxTQUFTO1FBQ2JaLGFBQWFhLFVBQVUsQ0FBQztRQUN4QmIsYUFBYWEsVUFBVSxDQUFDO1FBQ3hCbEIsU0FBUztRQUNURyxPQUFPZ0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3ZCLFlBQVl3QixRQUFRO1FBQUNDLE9BQU87WUFBRXRCO1lBQU9FO1lBQVNTO1lBQU9PO1FBQU87a0JBQzFEbkI7Ozs7OztBQUdQO0FBRU8sTUFBTXdCLFVBQVUsSUFBTS9CLGlEQUFVQSxDQUFDSyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FzdGxlLXdlbGxuZXNzLWZyb250ZW5kLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz8xMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjd19hZG1pbl90b2tlblwiKTtcbiAgICBjb25zdCBzYXZlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN3X2FkbWluX3VzZXJcIik7XG4gICAgaWYgKHRva2VuICYmIHNhdmVkVXNlcikge1xuICAgICAgc2V0QWRtaW4oSlNPTi5wYXJzZShzYXZlZFVzZXIpKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2F1dGgvbG9naW5cIiwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjd19hZG1pbl90b2tlblwiLCBkYXRhLnRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN3X2FkbWluX3VzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS5hZG1pbikpO1xuICAgIHNldEFkbWluKGRhdGEuYWRtaW4pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImN3X2FkbWluX3Rva2VuXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3dfYWRtaW5fdXNlclwiKTtcbiAgICBzZXRBZG1pbihudWxsKTtcbiAgICByb3V0ZXIucHVzaChcIi9hZG1pbi9sb2dpblwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhZG1pbiwgbG9hZGluZywgbG9naW4sIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhcGkiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYWRtaW4iLCJzZXRBZG1pbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWRVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsInBvc3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   whatsappLink: () => (/* binding */ whatsappLink)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000/api\" || 0\n});\n// Attach the saved admin token automatically (harmless for public GET\n// requests — the backend simply ignores the header on public routes).\napi.interceptors.request.use((config)=>{\n    if (false) {}\n    return config;\n});\n// Auto-logout on an expired/invalid admin token.\napi.interceptors.response.use((res)=>res, (err)=>{\n    if (err.response?.status === 401 && \"undefined\" !== \"undefined\") {}\n    return Promise.reject(err);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n// Every business has its own WhatsApp number now, so this takes the number\n// as an argument instead of reading one fixed env var.\nconst whatsappLink = (number, message = \"\")=>`https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : \"\"}`;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNRCxvREFBWSxDQUFDO0lBQ3ZCRyxTQUFTQywyQkFBK0IsSUFBSSxDQUEyQjtBQUN6RTtBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEVILElBQUlNLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7SUFDNUIsSUFBSSxLQUE2QixFQUFFLEVBS2xDO0lBQ0QsT0FBT0E7QUFDVDtBQUVBLGlEQUFpRDtBQUNqRFQsSUFBSU0sWUFBWSxDQUFDUyxRQUFRLENBQUNQLEdBQUcsQ0FDM0IsQ0FBQ1EsTUFBUUEsS0FDVCxDQUFDQztJQUNDLElBQUlBLElBQUlGLFFBQVEsRUFBRUcsV0FBVyxPQUFPLGdCQUFrQixhQUFhLEVBTWxFO0lBQ0QsT0FBT08sUUFBUUMsTUFBTSxDQUFDVDtBQUN4QjtBQUdGLGlFQUFlakIsR0FBR0EsRUFBQztBQUVuQiwyRUFBMkU7QUFDM0UsdURBQXVEO0FBQ2hELE1BQU0yQixlQUFlLENBQUNDLFFBQVFDLFVBQVUsRUFBRSxHQUMvQyxDQUFDLGNBQWMsRUFBRUQsT0FBTyxFQUFFQyxVQUFVLENBQUMsTUFBTSxFQUFFQyxtQkFBbUJELFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FzdGxlLXdlbGxuZXNzLWZyb250ZW5kLy4vbGliL2FwaS5qcz80NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlcIixcbn0pO1xuXG4vLyBBdHRhY2ggdGhlIHNhdmVkIGFkbWluIHRva2VuIGF1dG9tYXRpY2FsbHkgKGhhcm1sZXNzIGZvciBwdWJsaWMgR0VUXG4vLyByZXF1ZXN0cyDigJQgdGhlIGJhY2tlbmQgc2ltcGx5IGlnbm9yZXMgdGhlIGhlYWRlciBvbiBwdWJsaWMgcm91dGVzKS5cbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbmZpZykgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjd19hZG1pbl90b2tlblwiKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG4vLyBBdXRvLWxvZ291dCBvbiBhbiBleHBpcmVkL2ludmFsaWQgYWRtaW4gdG9rZW4uXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgKHJlcykgPT4gcmVzLFxuICAoZXJyKSA9PiB7XG4gICAgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjd19hZG1pbl90b2tlblwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3dfYWRtaW5fdXNlclwiKTtcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hZG1pblwiKSAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2FkbWluL2xvZ2luXCIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi9sb2dpblwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuXG4vLyBFdmVyeSBidXNpbmVzcyBoYXMgaXRzIG93biBXaGF0c0FwcCBudW1iZXIgbm93LCBzbyB0aGlzIHRha2VzIHRoZSBudW1iZXJcbi8vIGFzIGFuIGFyZ3VtZW50IGluc3RlYWQgb2YgcmVhZGluZyBvbmUgZml4ZWQgZW52IHZhci5cbmV4cG9ydCBjb25zdCB3aGF0c2FwcExpbmsgPSAobnVtYmVyLCBtZXNzYWdlID0gXCJcIikgPT5cbiAgYGh0dHBzOi8vd2EubWUvJHtudW1iZXJ9JHttZXNzYWdlID8gYD90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UpfWAgOiBcIlwifWA7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsInJlcyIsImVyciIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhyZWYiLCJQcm9taXNlIiwicmVqZWN0Iiwid2hhdHNhcHBMaW5rIiwibnVtYmVyIiwibWVzc2FnZSIsImVuY29kZVVSSUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_admin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/admin.css */ \"./styles/admin.css\");\n/* harmony import */ var _styles_admin_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ritik\\\\castle-wellness-frontend-v3\\\\castle-wellness-frontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                position: \"top-right\",\n                toastOptions: {\n                    style: {\n                        background: \"#1b1815\",\n                        color: \"#f3ece0\",\n                        border: \"1px solid rgba(201,162,75,0.3)\",\n                        fontSize: \"14px\"\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ritik\\\\castle-wellness-frontend-v3\\\\castle-wellness-frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ritik\\\\castle-wellness-frontend-v3\\\\castle-wellness-frontend\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUN5QjtBQUNaO0FBRTNCLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNKLDhEQUFZQTs7MEJBQ1gsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNILG9EQUFPQTtnQkFDTkksVUFBUztnQkFDVEMsY0FBYztvQkFDWkMsT0FBTzt3QkFDTEMsWUFBWTt3QkFDWkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsVUFBVTtvQkFDWjtnQkFDRjs7Ozs7Ozs7Ozs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXN0bGUtd2VsbG5lc3MtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYWRtaW4uY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8VG9hc3RlclxuICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgIHRvYXN0T3B0aW9ucz17e1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxYjE4MTVcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmM2VjZTBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgyMDEsMTYyLDc1LDAuMylcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJUb2FzdGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicG9zaXRpb24iLCJ0b2FzdE9wdGlvbnMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/admin.css":
/*!**************************!*\
  !*** ./styles/admin.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();