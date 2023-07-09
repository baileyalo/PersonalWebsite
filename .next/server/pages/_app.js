(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Contexto),
/* harmony export */   "d": () => (/* binding */ ContextoProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Contexto = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ContextoProvider = (props)=>{
    const { 0: modalIsOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: navResOpen , 1: setNavResOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Contexto.Provider, {
        value: {
            modalIsOpen,
            setIsOpen,
            navResOpen,
            setNavResOpen
        },
        children: props.children
    });
};



/***/ }),

/***/ 534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(800);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "smoothscroll-polyfill"
const external_smoothscroll_polyfill_namespaceObject = require("smoothscroll-polyfill");
var external_smoothscroll_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_smoothscroll_polyfill_namespaceObject);
// EXTERNAL MODULE: ./appContext.js
var appContext = __webpack_require__(843);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./pages/_app.js









fontawesome_svg_core_namespaceObject.config.autoAddCss = false;
function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("touchstart", function() {}, false);
        external_smoothscroll_polyfill_default().polyfill();
        external_react_modal_default().setAppElement("#__next");
        return ()=>{
            document.removeEventListener("touchstart", function() {}, false);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(appContext/* ContextoProvider */.d, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "author",
                            content: "Alwayne Bailey "
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 800:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 931:
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(534));
module.exports = __webpack_exports__;

})();