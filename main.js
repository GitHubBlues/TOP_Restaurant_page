/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tile_background_6.png */ "./src/img/tile_background_6.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --height-footer: 2.5rem;\n    --height-header: 2.5rem;\n    box-sizing: border-box;\n    background-color: rgb(50, 50, 50);\n}\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    opacity: 1;\n    margin: 0rem auto;\n    font-family: Arial, Helvetica, sans-serif;\n    height: 100vh; \n    max-width: 900px;\n}\n\n\n/*Home*/\n.main-image {\n    display: flex;\n    justify-content: center;\n    /* width: clamp(5rem 50vmin 40rem); */\n    max-width: 60vmin;\n    margin: auto;\n    box-shadow: 0.5rem 0.5rem 1.5rem black; \n    position: relative;\n    background-color: rgba(225,225,225,0.5);\n}\n\n\n#content {\n    /* display: flex;\n    flex-direction: column; */\n    margin: auto;\n    flex: 1 1 auto;\n    height: calc(100vh - calc(var(--height-footer) + var(--height-header)));\n}\n\n.main-text {\n    display: flex;\n    justify-content: center;\n    margin: 0rem auto;\n    font-size: xx-large;\n    color: rgb(196, 47, 255);\n    /* background-color: rgba(225,225,225,0.5);  */\n    font-family: 'Rock Salt', cursive;\n    transform: rotate(-4deg);\n    padding-left: 2.5rem;\n}\n\n\n/*Header*/\n.top-btn-container{\n    display: flex;\n    justify-content: center;\n    background-color: rgba(225,225,225,0.5);   \n    gap: 1rem;\n    margin: 0rem;\n    height: var(--height-header);\n}\n\n.btn-home,\n.btn-menu,\n.btn-contact{\n   font-size: large;\n   padding: 0.2rem 1rem;\n   margin-top: 0.5rem;\n}\n\n/*Footer*/\nfooter {\n    background-color: rgba(225,225,225,0.5);   \n    display: flex;\n    justify-content: center;\n    padding: 0.6rem;\n    color: rgb(100,100,100);\n    font-size: small;  \n    text-align: center;\n    height: var(--height-footer);\n}\n\n.footer-one,\n.footer-two{\n   padding: 0.1rem;\n}\n\n\n/*Titles*/\n.main-title,\n.menu-title,\n.contact-title {\n    font-size:xx-large;\n    color: rgb(223, 150, 14);\n    background-color: rgba(225,225,225,0.2);   \n    text-align: center;\n    text-shadow: 0.5rem 0.5rem 1.5rem rgba(200, 200, 200, 1); \n    margin: 2.5rem 0;\n}\n\n\n/*Menu*/\n.menu-item-image {\n    width: 5rem;\n}\n\n.menu-page{\n    display: flex;\n    flex-direction: column;\n}\n\n.menu-item{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 1rem; \n}\n\n.menu-item-title{\n    font-size: large;\n    font-weight: 900;\n    margin: 0.2rem 0rem;     \n}\n\n.menu-item-description{\n    font-size: medium;\n    margin: 0.2rem 0.2rem 0.3rem 0rem;\n    background-color: rgba(225,225,225,0.8);     \n}\n\n.menu-item-icon{\n    width: 4rem;\n    height: auto;\n}\n\n\n/*Contact*/\n.contact-page {\n    display:flex;\n    flex-direction: column;\n}\n\n.contact-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0.5rem;\n}\n\n.contact-channel{\n    display: flex;\n    font-size: large;\n    vertical-align: middle;\n    background-color: rgba(225,225,225,0.8);   \n    align-items: center;\n    margin: 1.5rem 0.5rem;\n}\n\n.contact-icon {\n    width: 5rem;\n    height: auto;\n    scale: 80%;\n    margin-left: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,iCAAiC;AACrC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,yDAAoD;IACpD,sBAAsB;IACtB,UAAU;IACV,iBAAiB;IACjB,yCAAyC;IACzC,aAAa;IACb,gBAAgB;AACpB;;;AAGA,OAAO;AACP;IACI,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,iBAAiB;IACjB,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;IAClB,uCAAuC;AAC3C;;;AAGA;IACI;6BACyB;IACzB,YAAY;IACZ,cAAc;IACd,uEAAuE;AAC3E;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;IACxB,8CAA8C;IAC9C,iCAAiC;IACjC,wBAAwB;IACxB,oBAAoB;AACxB;;;AAGA,SAAS;AACT;IACI,aAAa;IACb,uBAAuB;IACvB,uCAAuC;IACvC,SAAS;IACT,YAAY;IACZ,4BAA4B;AAChC;;AAEA;;;GAGG,gBAAgB;GAChB,oBAAoB;GACpB,kBAAkB;AACrB;;AAEA,SAAS;AACT;IACI,uCAAuC;IACvC,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;;GAEG,eAAe;AAClB;;;AAGA,SAAS;AACT;;;IAGI,kBAAkB;IAClB,wBAAwB;IACxB,uCAAuC;IACvC,kBAAkB;IAClB,wDAAwD;IACxD,gBAAgB;AACpB;;;AAGA,OAAO;AACP;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,uCAAuC;AAC3C;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;;AAGA,UAAU;AACV;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,uCAAuC;IACvC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,iBAAiB;AACrB","sourcesContent":[":root{\n    --height-footer: 2.5rem;\n    --height-header: 2.5rem;\n    box-sizing: border-box;\n    background-color: rgb(50, 50, 50);\n}\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    background-image: url(\"./img/tile_background_6.png\");\n    background-size: cover;\n    opacity: 1;\n    margin: 0rem auto;\n    font-family: Arial, Helvetica, sans-serif;\n    height: 100vh; \n    max-width: 900px;\n}\n\n\n/*Home*/\n.main-image {\n    display: flex;\n    justify-content: center;\n    /* width: clamp(5rem 50vmin 40rem); */\n    max-width: 60vmin;\n    margin: auto;\n    box-shadow: 0.5rem 0.5rem 1.5rem black; \n    position: relative;\n    background-color: rgba(225,225,225,0.5);\n}\n\n\n#content {\n    /* display: flex;\n    flex-direction: column; */\n    margin: auto;\n    flex: 1 1 auto;\n    height: calc(100vh - calc(var(--height-footer) + var(--height-header)));\n}\n\n.main-text {\n    display: flex;\n    justify-content: center;\n    margin: 0rem auto;\n    font-size: xx-large;\n    color: rgb(196, 47, 255);\n    /* background-color: rgba(225,225,225,0.5);  */\n    font-family: 'Rock Salt', cursive;\n    transform: rotate(-4deg);\n    padding-left: 2.5rem;\n}\n\n\n/*Header*/\n.top-btn-container{\n    display: flex;\n    justify-content: center;\n    background-color: rgba(225,225,225,0.5);   \n    gap: 1rem;\n    margin: 0rem;\n    height: var(--height-header);\n}\n\n.btn-home,\n.btn-menu,\n.btn-contact{\n   font-size: large;\n   padding: 0.2rem 1rem;\n   margin-top: 0.5rem;\n}\n\n/*Footer*/\nfooter {\n    background-color: rgba(225,225,225,0.5);   \n    display: flex;\n    justify-content: center;\n    padding: 0.6rem;\n    color: rgb(100,100,100);\n    font-size: small;  \n    text-align: center;\n    height: var(--height-footer);\n}\n\n.footer-one,\n.footer-two{\n   padding: 0.1rem;\n}\n\n\n/*Titles*/\n.main-title,\n.menu-title,\n.contact-title {\n    font-size:xx-large;\n    color: rgb(223, 150, 14);\n    background-color: rgba(225,225,225,0.2);   \n    text-align: center;\n    text-shadow: 0.5rem 0.5rem 1.5rem rgba(200, 200, 200, 1); \n    margin: 2.5rem 0;\n}\n\n\n/*Menu*/\n.menu-item-image {\n    width: 5rem;\n}\n\n.menu-page{\n    display: flex;\n    flex-direction: column;\n}\n\n.menu-item{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 1rem; \n}\n\n.menu-item-title{\n    font-size: large;\n    font-weight: 900;\n    margin: 0.2rem 0rem;     \n}\n\n.menu-item-description{\n    font-size: medium;\n    margin: 0.2rem 0.2rem 0.3rem 0rem;\n    background-color: rgba(225,225,225,0.8);     \n}\n\n.menu-item-icon{\n    width: 4rem;\n    height: auto;\n}\n\n\n/*Contact*/\n.contact-page {\n    display:flex;\n    flex-direction: column;\n}\n\n.contact-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0.5rem;\n}\n\n.contact-channel{\n    display: flex;\n    font-size: large;\n    vertical-align: middle;\n    background-color: rgba(225,225,225,0.8);   \n    align-items: center;\n    margin: 1.5rem 0.5rem;\n}\n\n.contact-icon {\n    width: 5rem;\n    height: auto;\n    scale: 80%;\n    margin-left: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeContact": () => (/* binding */ makeContact)
/* harmony export */ });
/* harmony import */ var _img_plane_message_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/plane_message.png */ "./src/img/plane_message.png");
/* harmony import */ var _img_house_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/house.png */ "./src/img/house.png");
/* harmony import */ var _img_phone_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/phone_1.png */ "./src/img/phone_1.png");




function makeContact(mainContainer){
    const contactPage = document.createElement('div');
    contactPage.classList.add("contact-page");

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Let's get in touch";
    contactTitle.classList.add("contact-title");

    const contactItemContainer = document.createElement("div");
    contactItemContainer.classList.add("contact-item-container");

    contactPage.appendChild(contactTitle);


    function createContactItem (channel, channelURL){
        const contactItem = document.createElement("div");
        contactItem.classList.add("contact-item");

        const contactChannel = document.createElement("div");
        contactChannel.setAttribute('style', 'white-space: pre;');
        contactChannel.textContent = channel;
        contactChannel.classList.add("contact-channel");

        const contactIcon = document.createElement("img");
        contactIcon.src = channelURL;
        contactIcon.classList.add("contact-icon");

        contactItem.appendChild(contactChannel);
        contactItem.appendChild(contactIcon);
        contactItemContainer.appendChild(contactItem);
    }


    let iChannel = "304 East Park Avenue \r\n" + "Greenborough, Ireland";
    let iIcon = _img_house_png__WEBPACK_IMPORTED_MODULE_1__;
    createContactItem (iChannel, iIcon);

    iChannel = "info@ambrosia.com";
    iIcon = _img_plane_message_png__WEBPACK_IMPORTED_MODULE_0__;
    createContactItem (iChannel, iIcon);

    iChannel = "353-8212499";
    iIcon = _img_phone_1_png__WEBPACK_IMPORTED_MODULE_2__;
    createContactItem (iChannel, iIcon);

    contactPage.appendChild(contactItemContainer);
    mainContainer.appendChild(contactPage);
}




/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader),
/* harmony export */   "makeBody": () => (/* binding */ makeBody),
/* harmony export */   "makeFooter": () => (/* binding */ makeFooter)
/* harmony export */ });
/* harmony import */ var _img_pizza_g2cb6cf464_1920_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza-g2cb6cf464_1920.png */ "./src/img/pizza-g2cb6cf464_1920.png");


function makeHeader(){
    const mainHeader = document.querySelector('header');
    
    const topButtonsContainer = document.createElement('div');
    topButtonsContainer.classList.add("top-btn-container");

    const btnHome = document.createElement('button');
    btnHome.textContent = "Home";
    btnHome.classList.add("btn-home");

    const btnMenu = document.createElement('button');
    btnMenu.textContent = "Menu";
    btnMenu.classList.add("btn-menu");

    const btnContact = document.createElement('button');
    btnContact.textContent = "Contact";
    btnContact.classList.add("btn-contact");
    
    topButtonsContainer.appendChild(btnHome);
    topButtonsContainer.appendChild(btnMenu);
    topButtonsContainer.appendChild(btnContact);
    mainHeader.appendChild(topButtonsContainer);
}

function makeBody(mainContainer){
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Welcome to Ambrosia's Diner";
    mainTitle.classList.add("main-title");

    const mainImage = document.createElement('img');
    mainImage.src = _img_pizza_g2cb6cf464_1920_png__WEBPACK_IMPORTED_MODULE_0__;
    mainImage.classList.add("main-image");

    const mainText = document.createElement('div');
    mainText.textContent = "Enjoy our new dishes!";
    mainText.classList.add("main-text");

    mainContainer.appendChild(mainTitle);
    mainContainer.appendChild(mainImage);
    mainContainer.appendChild(mainText);
}

function makeFooter(creditOne, creditTwo){
    const mainFooter = document.querySelector('footer');

    if (creditTwo == ""){
        const footerContainer = document.createElement('div');
        footerContainer .classList.add("footer-one-container");

        const footerOne = document.createElement('div');
        footerOne.textContent = creditOne;
        footerOne.classList.add("footer-one");

        footerContainer.appendChild(footerOne);
        mainFooter.appendChild(footerContainer);
    
    } else {
        const footerContainer = document.createElement('div');
        footerContainer .classList.add("footer-two-containers");
      
        const footerOne = document.createElement('div');
        footerOne.textContent = creditOne;
        footerOne.classList.add("footer-one");

        const footerTwo = document.createElement('div');
        footerTwo.textContent = creditTwo;
        footerTwo.classList.add("footer-two");
        
        footerContainer.appendChild(footerOne);
        footerContainer.appendChild(footerTwo);
        mainFooter.appendChild(footerContainer);
    }
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenu": () => (/* binding */ makeMenu)
/* harmony export */ });
/* harmony import */ var _img_ice_cream_g92b23d527_1920_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/ice-cream-g92b23d527_1920.png */ "./src/img/ice-cream-g92b23d527_1920.png");
/* harmony import */ var _img_french_fries_gc66ef6103_1920_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/french-fries-gc66ef6103_1920.jpg */ "./src/img/french-fries-gc66ef6103_1920.jpg");
/* harmony import */ var _img_abstract_g34a5f67b5_1920_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/abstract-g34a5f67b5_1920.jpg */ "./src/img/abstract-g34a5f67b5_1920.jpg");
/* harmony import */ var _img_american_g613754ed7_1920_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/american-g613754ed7_1920.jpg */ "./src/img/american-g613754ed7_1920.jpg");





function makeMenu(mainContainer) {

    const menuPage = document.createElement('div');
    menuPage.classList.add("menu-page");

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu"
    menuTitle.classList.add("menu-title");

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add("menu-item-container");


    function createMenuItem(title, description, price, imageURL){
        const menuItem = document.createElement('div');
        menuItem.classList.add("menu-item");

        const menuItemText = document.createElement('div');
        menuItemText.classList.add("menu-item-text");

        const menuItemTitle = document.createElement('div');
        menuItemTitle.textContent = title;
        menuItemTitle.classList.add("menu-item-title");

        const menuItemDescription = document.createElement('div');
        menuItemDescription.setAttribute('style', 'white-space: pre;');
        menuItemDescription.textContent = description;
        menuItemDescription.classList.add("menu-item-description");

        const menuItemPrice = document.createElement('div');
        menuItemPrice.textContent = price + " EUR";
        menuItemPrice.classList.add("menu-item-price");

        const menuItemImage = document.createElement('img');
        menuItemImage.src = imageURL;
        menuItemImage.classList.add("menu-item-image");

        menuItemText.appendChild(menuItemTitle);
        menuItemText.appendChild(menuItemDescription);
        menuItemText.appendChild(menuItemPrice);
        menuItem.appendChild(menuItemText);
        menuItem.appendChild(menuItemImage);
        menuItemContainer.appendChild(menuItem);
    }


    let iName = "Pizza";
    let iDescription = "Savoury pizza with pepperoni, chilli, \r\n" + "bacon, double mozarella and pizza sauce";
    let iPrice = "15.60";
    let iURL = _img_american_g613754ed7_1920_jpg__WEBPACK_IMPORTED_MODULE_3__;
    createMenuItem(iName, iDescription, iPrice, iURL);

    iName = "Burger";
    iDescription = "Beef or vegetarian paddy with cheese, \r\n" + "pickles, tomato, onions, lettuce and special sauces";
    iURL = _img_abstract_g34a5f67b5_1920_jpg__WEBPACK_IMPORTED_MODULE_2__;
    iPrice = "15.10";
    createMenuItem(iName, iDescription, iPrice, iURL);

    iName = "French fries";
    iDescription = "With garlic, mango and avocado dips";
    iURL = _img_french_fries_gc66ef6103_1920_jpg__WEBPACK_IMPORTED_MODULE_1__;
    iPrice = "12.10";
    createMenuItem(iName, iDescription, iPrice, iURL);

    iName = "Ice cream dessert";
    iDescription = "Four ice cream scoops with cholocate sauce. \r\n" + "Ask for the availabe ice-cream flavours";
    iURL = _img_ice_cream_g92b23d527_1920_png__WEBPACK_IMPORTED_MODULE_0__;
    iPrice = "9.70";
    createMenuItem(iName, iDescription, iPrice, iURL);


    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menuItemContainer);

    mainContainer.appendChild(menuPage);
}




/***/ }),

/***/ "./src/img/abstract-g34a5f67b5_1920.jpg":
/*!**********************************************!*\
  !*** ./src/img/abstract-g34a5f67b5_1920.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a490ba741b9d7bc42f8.jpg";

/***/ }),

/***/ "./src/img/american-g613754ed7_1920.jpg":
/*!**********************************************!*\
  !*** ./src/img/american-g613754ed7_1920.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13335f424cba4005c5c7.jpg";

/***/ }),

/***/ "./src/img/french-fries-gc66ef6103_1920.jpg":
/*!**************************************************!*\
  !*** ./src/img/french-fries-gc66ef6103_1920.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc62949de113062e690b.jpg";

/***/ }),

/***/ "./src/img/house.png":
/*!***************************!*\
  !*** ./src/img/house.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80592b508a0125a2776a.png";

/***/ }),

/***/ "./src/img/ice-cream-g92b23d527_1920.png":
/*!***********************************************!*\
  !*** ./src/img/ice-cream-g92b23d527_1920.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42aea836dc6178834ea6.png";

/***/ }),

/***/ "./src/img/phone_1.png":
/*!*****************************!*\
  !*** ./src/img/phone_1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afc1363629883af13f8e.png";

/***/ }),

/***/ "./src/img/pizza-g2cb6cf464_1920.png":
/*!*******************************************!*\
  !*** ./src/img/pizza-g2cb6cf464_1920.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f1ee4ce732a138ef448.png";

/***/ }),

/***/ "./src/img/plane_message.png":
/*!***********************************!*\
  !*** ./src/img/plane_message.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db5c811b41b848208455.png";

/***/ }),

/***/ "./src/img/tile_background_6.png":
/*!***************************************!*\
  !*** ./src/img/tile_background_6.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a2517b0358a554294f6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing */ "./src/landing.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const mainContainer = document.querySelector('#content');
const mainFooter = document.querySelector('footer');

(0,_landing__WEBPACK_IMPORTED_MODULE_1__.makeHeader)();
const btnHome = document.querySelector('.btn-home');
const btnMenu = document.querySelector('.btn-menu');
const btnContact = document.querySelector('.btn-contact');
const topButtonsContainer = document.querySelector('.top-btn-container');


function home(){
    (0,_landing__WEBPACK_IMPORTED_MODULE_1__.makeBody)(mainContainer);
    let creditOne = "Background image: https://patternico.com";
    let creditTwo = "Chef image: Alexas_Fotos from Pixabay";
    (0,_landing__WEBPACK_IMPORTED_MODULE_1__.makeFooter)(creditOne, creditTwo);
}

function menu(){
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.makeMenu)(mainContainer);
    let creditOne = "Background image: https://patternico.com";
    let creditTwo = "Food images from Pixabay";
    (0,_landing__WEBPACK_IMPORTED_MODULE_1__.makeFooter)(creditOne, creditTwo);
}

function contact(){
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.makeContact)(mainContainer);
    let creditOne = "Background image: https://patternico.com";
    let creditTwo = "Icons made by Cuputo (plane), Becris (house), Slidicon (phone) from www.flaticon.com ";
    (0,_landing__WEBPACK_IMPORTED_MODULE_1__.makeFooter)(creditOne, creditTwo);
}

function switchPages(e){

    while (mainContainer.firstChild) {
        mainContainer.firstChild.remove()
    } 
    
    while (mainFooter.firstChild) {
        mainFooter.firstChild.remove()
    } 


    if (e.target.className == "btn-home"){
        home()    
    } else if (e.target.className == "btn-menu"){

        menu()
    } else if (e.target.className == "btn-contact"){
        contact()
    } else{
    }
}

topButtonsContainer.addEventListener("click", switchPages);
home();






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQm9CO0FBQ3VDO0FBQzNCO0FBQ007O0FBRXRDO0FBQ0E7O0FBRUEsb0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1o7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZDs7QUFFQTtBQUNBLElBQUksK0NBQVE7QUFDWjtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkOztBQUVBO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90aWxlX2JhY2tncm91bmRfNi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1oZWlnaHQtZm9vdGVyOiAyLjVyZW07XFxuICAgIC0taGVpZ2h0LWhlYWRlcjogMi41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW46IDByZW0gYXV0bztcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG5cXG5cXG4vKkhvbWUqL1xcbi5tYWluLWltYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiBjbGFtcCg1cmVtIDUwdm1pbiA0MHJlbSk7ICovXFxuICAgIG1heC13aWR0aDogNjB2bWluO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMS41cmVtIGJsYWNrOyBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwyMjUsMjI1LDAuNSk7XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gY2FsYyh2YXIoLS1oZWlnaHQtZm9vdGVyKSArIHZhcigtLWhlaWdodC1oZWFkZXIpKSk7XFxufVxcblxcbi5tYWluLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcmVtIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGNvbG9yOiByZ2IoMTk2LCA0NywgMjU1KTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjUpOyAgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdSb2NrIFNhbHQnLCBjdXJzaXZlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbn1cXG5cXG5cXG4vKkhlYWRlciovXFxuLnRvcC1idG4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjUpOyAgIFxcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtaGVhZGVyKTtcXG59XFxuXFxuLmJ0bi1ob21lLFxcbi5idG4tbWVudSxcXG4uYnRuLWNvbnRhY3R7XFxuICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXG4gICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qRm9vdGVyKi9cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwyMjUsMjI1LDAuNSk7ICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbiAgICBmb250LXNpemU6IHNtYWxsOyAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtZm9vdGVyKTtcXG59XFxuXFxuLmZvb3Rlci1vbmUsXFxuLmZvb3Rlci10d297XFxuICAgcGFkZGluZzogMC4xcmVtO1xcbn1cXG5cXG5cXG4vKlRpdGxlcyovXFxuLm1haW4tdGl0bGUsXFxuLm1lbnUtdGl0bGUsXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6eHgtbGFyZ2U7XFxuICAgIGNvbG9yOiByZ2IoMjIzLCAxNTAsIDE0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjIpOyAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwLjVyZW0gMC41cmVtIDEuNXJlbSByZ2JhKDIwMCwgMjAwLCAyMDAsIDEpOyBcXG4gICAgbWFyZ2luOiAyLjVyZW0gMDtcXG59XFxuXFxuXFxuLypNZW51Ki9cXG4ubWVudS1pdGVtLWltYWdlIHtcXG4gICAgd2lkdGg6IDVyZW07XFxufVxcblxcbi5tZW51LXBhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51LWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAxcmVtOyBcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luOiAwLjJyZW0gMHJlbTsgICAgIFxcbn1cXG5cXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgbWFyZ2luOiAwLjJyZW0gMC4ycmVtIDAuM3JlbSAwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwyMjUsMjI1LDAuOCk7ICAgICBcXG59XFxuXFxuLm1lbnUtaXRlbS1pY29ue1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG4vKkNvbnRhY3QqL1xcbi5jb250YWN0LXBhZ2Uge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4uY29udGFjdC1jaGFubmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwyMjUsMjI1LDAuOCk7ICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMS41cmVtIDAuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaWNvbiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHNjYWxlOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHlEQUFvRDtJQUNwRCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBR0EsT0FBTztBQUNQO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7O0FBR0E7SUFDSTs2QkFDeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCx1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDhDQUE4QztJQUM5QyxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7O0FBR0EsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsU0FBUztJQUNULFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7OztHQUdHLGdCQUFnQjtHQUNoQixvQkFBb0I7R0FDcEIsa0JBQWtCO0FBQ3JCOztBQUVBLFNBQVM7QUFDVDtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7O0dBRUcsZUFBZTtBQUNsQjs7O0FBR0EsU0FBUztBQUNUOzs7SUFHSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsd0RBQXdEO0lBQ3hELGdCQUFnQjtBQUNwQjs7O0FBR0EsT0FBTztBQUNQO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBLFVBQVU7QUFDVjtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0taGVpZ2h0LWZvb3RlcjogMi41cmVtO1xcbiAgICAtLWhlaWdodC1oZWFkZXI6IDIuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy90aWxlX2JhY2tncm91bmRfNi5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luOiAwcmVtIGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG59XFxuXFxuXFxuLypIb21lKi9cXG4ubWFpbi1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogY2xhbXAoNXJlbSA1MHZtaW4gNDByZW0pOyAqL1xcbiAgICBtYXgtd2lkdGg6IDYwdm1pbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDEuNXJlbSBibGFjazsgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjUpO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIGNhbGModmFyKC0taGVpZ2h0LWZvb3RlcikgKyB2YXIoLS1oZWlnaHQtaGVhZGVyKSkpO1xcbn1cXG5cXG4ubWFpbi10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHJlbSBhdXRvO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBjb2xvcjogcmdiKDE5NiwgNDcsIDI1NSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LDIyNSwyMjUsMC41KTsgICovXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9jayBTYWx0JywgY3Vyc2l2ZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG59XFxuXFxuXFxuLypIZWFkZXIqL1xcbi50b3AtYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LDIyNSwyMjUsMC41KTsgICBcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDByZW07XFxuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LWhlYWRlcik7XFxufVxcblxcbi5idG4taG9tZSxcXG4uYnRuLW1lbnUsXFxuLmJ0bi1jb250YWN0e1xcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxuICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4vKkZvb3RlciovXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjUpOyAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBjb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG4gICAgZm9udC1zaXplOiBzbWFsbDsgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LWZvb3Rlcik7XFxufVxcblxcbi5mb290ZXItb25lLFxcbi5mb290ZXItdHdve1xcbiAgIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuXFxuXFxuLypUaXRsZXMqL1xcbi5tYWluLXRpdGxlLFxcbi5tZW51LXRpdGxlLFxcbi5jb250YWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xcbiAgICBjb2xvcjogcmdiKDIyMywgMTUwLCAxNCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LDIyNSwyMjUsMC4yKTsgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMC41cmVtIDAuNXJlbSAxLjVyZW0gcmdiYSgyMDAsIDIwMCwgMjAwLCAxKTsgXFxuICAgIG1hcmdpbjogMi41cmVtIDA7XFxufVxcblxcblxcbi8qTWVudSovXFxuLm1lbnUtaXRlbS1pbWFnZSB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbn1cXG5cXG4ubWVudS1wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMXJlbTsgXFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbjogMC4ycmVtIDByZW07ICAgICBcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIG1hcmdpbjogMC4ycmVtIDAuMnJlbSAwLjNyZW0gMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjgpOyAgICAgXFxufVxcblxcbi5tZW51LWl0ZW0taWNvbntcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuXFxuLypDb250YWN0Ki9cXG4uY29udGFjdC1wYWdlIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtY2hhbm5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjgpOyAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwLjVyZW07XFxufVxcblxcbi5jb250YWN0LWljb24ge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBzY2FsZTogODAlO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBJcGxhbmUgZnJvbSBcIi4vaW1nL3BsYW5lX21lc3NhZ2UucG5nXCI7XG5pbXBvcnQgSWhvdXNlIGZyb20gXCIuL2ltZy9ob3VzZS5wbmdcIjtcbmltcG9ydCBJcGhvbmUgZnJvbSBcIi4vaW1nL3Bob25lXzEucG5nXCI7XG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0KG1haW5Db250YWluZXIpe1xuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtcGFnZVwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJMZXQncyBnZXQgaW4gdG91Y2hcIjtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGl0bGVcIik7XG5cbiAgICBjb25zdCBjb250YWN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbS1jb250YWluZXJcIik7XG5cbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWN0SXRlbSAoY2hhbm5lbCwgY2hhbm5lbFVSTCl7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFjdEl0ZW0uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbVwiKTtcblxuICAgICAgICBjb25zdCBjb250YWN0Q2hhbm5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhY3RDaGFubmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKTtcbiAgICAgICAgY29udGFjdENoYW5uZWwudGV4dENvbnRlbnQgPSBjaGFubmVsO1xuICAgICAgICBjb250YWN0Q2hhbm5lbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jaGFubmVsXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY29udGFjdEljb24uc3JjID0gY2hhbm5lbFVSTDtcbiAgICAgICAgY29udGFjdEljb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaWNvblwiKTtcblxuICAgICAgICBjb250YWN0SXRlbS5hcHBlbmRDaGlsZChjb250YWN0Q2hhbm5lbCk7XG4gICAgICAgIGNvbnRhY3RJdGVtLmFwcGVuZENoaWxkKGNvbnRhY3RJY29uKTtcbiAgICAgICAgY29udGFjdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEl0ZW0pO1xuICAgIH1cblxuXG4gICAgbGV0IGlDaGFubmVsID0gXCIzMDQgRWFzdCBQYXJrIEF2ZW51ZSBcXHJcXG5cIiArIFwiR3JlZW5ib3JvdWdoLCBJcmVsYW5kXCI7XG4gICAgbGV0IGlJY29uID0gSWhvdXNlO1xuICAgIGNyZWF0ZUNvbnRhY3RJdGVtIChpQ2hhbm5lbCwgaUljb24pO1xuXG4gICAgaUNoYW5uZWwgPSBcImluZm9AYW1icm9zaWEuY29tXCI7XG4gICAgaUljb24gPSBJcGxhbmU7XG4gICAgY3JlYXRlQ29udGFjdEl0ZW0gKGlDaGFubmVsLCBpSWNvbik7XG5cbiAgICBpQ2hhbm5lbCA9IFwiMzUzLTgyMTI0OTlcIjtcbiAgICBpSWNvbiA9IElwaG9uZTtcbiAgICBjcmVhdGVDb250YWN0SXRlbSAoaUNoYW5uZWwsIGlJY29uKTtcblxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbn1cblxuZXhwb3J0IHttYWtlQ29udGFjdH1cbiIsImltcG9ydCBJY2hlZiBmcm9tIFwiLi9pbWcvcGl6emEtZzJjYjZjZjQ2NF8xOTIwLnBuZ1wiO1xuXG5mdW5jdGlvbiBtYWtlSGVhZGVyKCl7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IHRvcEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYnRuLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5Ib21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgYnRuSG9tZS5jbGFzc0xpc3QuYWRkKFwiYnRuLWhvbWVcIik7XG5cbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGJ0bk1lbnUuY2xhc3NMaXN0LmFkZChcImJ0bi1tZW51XCIpO1xuXG4gICAgY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBidG5Db250YWN0LmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFjdFwiKTtcbiAgICBcbiAgICB0b3BCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICAgIHRvcEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG4gICAgdG9wQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWN0KTtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKHRvcEJ1dHRvbnNDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBtYWtlQm9keShtYWluQ29udGFpbmVyKXtcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBBbWJyb3NpYSdzIERpbmVyXCI7XG4gICAgbWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRpdGxlXCIpO1xuXG4gICAgY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbkltYWdlLnNyYyA9IEljaGVmO1xuICAgIG1haW5JbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbWFnZVwiKTtcblxuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblRleHQudGV4dENvbnRlbnQgPSBcIkVuam95IG91ciBuZXcgZGlzaGVzIVwiO1xuICAgIG1haW5UZXh0LmNsYXNzTGlzdC5hZGQoXCJtYWluLXRleHRcIik7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW1hZ2UpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRleHQpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKGNyZWRpdE9uZSwgY3JlZGl0VHdvKXtcbiAgICBjb25zdCBtYWluRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbiAgICBpZiAoY3JlZGl0VHdvID09IFwiXCIpe1xuICAgICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyIC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLW9uZS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3Rlck9uZS50ZXh0Q29udGVudCA9IGNyZWRpdE9uZTtcbiAgICAgICAgZm9vdGVyT25lLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItb25lXCIpO1xuXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJPbmUpO1xuICAgICAgICBtYWluRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lciAuY2xhc3NMaXN0LmFkZChcImZvb3Rlci10d28tY29udGFpbmVyc1wiKTtcbiAgICAgIFxuICAgICAgICBjb25zdCBmb290ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyT25lLnRleHRDb250ZW50ID0gY3JlZGl0T25lO1xuICAgICAgICBmb290ZXJPbmUuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1vbmVcIik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3RlclR3by50ZXh0Q29udGVudCA9IGNyZWRpdFR3bztcbiAgICAgICAgZm9vdGVyVHdvLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItdHdvXCIpO1xuICAgICAgICBcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlck9uZSk7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUd28pO1xuICAgICAgICBtYWluRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5leHBvcnQge21ha2VIZWFkZXIsIG1ha2VCb2R5LCBtYWtlRm9vdGVyfVxuIiwiaW1wb3J0IGlJY2VDcmVhbSBmcm9tIFwiLi9pbWcvaWNlLWNyZWFtLWc5MmIyM2Q1MjdfMTkyMC5wbmdcIjtcbmltcG9ydCBpRnJpZXMgZnJvbSBcIi4vaW1nL2ZyZW5jaC1mcmllcy1nYzY2ZWY2MTAzXzE5MjAuanBnXCI7XG5pbXBvcnQgaUJ1cmdlciBmcm9tIFwiLi9pbWcvYWJzdHJhY3QtZzM0YTVmNjdiNV8xOTIwLmpwZ1wiO1xuaW1wb3J0IGlQaXp6YSBmcm9tIFwiLi9pbWcvYW1lcmljYW4tZzYxMzc1NGVkN18xOTIwLmpwZ1wiO1xuXG5mdW5jdGlvbiBtYWtlTWVudShtYWluQ29udGFpbmVyKSB7XG5cbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXBhZ2VcIik7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VVUkwpe1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbVRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS10ZXh0XCIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBtZW51SXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tdGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2UgKyBcIiBFVVJcIjtcbiAgICAgICAgbWVudUl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLXByaWNlXCIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbWVudUl0ZW1JbWFnZS5zcmMgPSBpbWFnZVVSTDtcbiAgICAgICAgbWVudUl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWltYWdlXCIpO1xuXG4gICAgICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlKTtcbiAgICAgICAgbWVudUl0ZW1UZXh0LmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICBtZW51SXRlbVRleHQuYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dCk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1hZ2UpO1xuICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfVxuXG5cbiAgICBsZXQgaU5hbWUgPSBcIlBpenphXCI7XG4gICAgbGV0IGlEZXNjcmlwdGlvbiA9IFwiU2F2b3VyeSBwaXp6YSB3aXRoIHBlcHBlcm9uaSwgY2hpbGxpLCBcXHJcXG5cIiArIFwiYmFjb24sIGRvdWJsZSBtb3phcmVsbGEgYW5kIHBpenphIHNhdWNlXCI7XG4gICAgbGV0IGlQcmljZSA9IFwiMTUuNjBcIjtcbiAgICBsZXQgaVVSTCA9IGlQaXp6YTtcbiAgICBjcmVhdGVNZW51SXRlbShpTmFtZSwgaURlc2NyaXB0aW9uLCBpUHJpY2UsIGlVUkwpO1xuXG4gICAgaU5hbWUgPSBcIkJ1cmdlclwiO1xuICAgIGlEZXNjcmlwdGlvbiA9IFwiQmVlZiBvciB2ZWdldGFyaWFuIHBhZGR5IHdpdGggY2hlZXNlLCBcXHJcXG5cIiArIFwicGlja2xlcywgdG9tYXRvLCBvbmlvbnMsIGxldHR1Y2UgYW5kIHNwZWNpYWwgc2F1Y2VzXCI7XG4gICAgaVVSTCA9IGlCdXJnZXI7XG4gICAgaVByaWNlID0gXCIxNS4xMFwiO1xuICAgIGNyZWF0ZU1lbnVJdGVtKGlOYW1lLCBpRGVzY3JpcHRpb24sIGlQcmljZSwgaVVSTCk7XG5cbiAgICBpTmFtZSA9IFwiRnJlbmNoIGZyaWVzXCI7XG4gICAgaURlc2NyaXB0aW9uID0gXCJXaXRoIGdhcmxpYywgbWFuZ28gYW5kIGF2b2NhZG8gZGlwc1wiO1xuICAgIGlVUkwgPSBpRnJpZXM7XG4gICAgaVByaWNlID0gXCIxMi4xMFwiO1xuICAgIGNyZWF0ZU1lbnVJdGVtKGlOYW1lLCBpRGVzY3JpcHRpb24sIGlQcmljZSwgaVVSTCk7XG5cbiAgICBpTmFtZSA9IFwiSWNlIGNyZWFtIGRlc3NlcnRcIjtcbiAgICBpRGVzY3JpcHRpb24gPSBcIkZvdXIgaWNlIGNyZWFtIHNjb29wcyB3aXRoIGNob2xvY2F0ZSBzYXVjZS4gXFxyXFxuXCIgKyBcIkFzayBmb3IgdGhlIGF2YWlsYWJlIGljZS1jcmVhbSBmbGF2b3Vyc1wiO1xuICAgIGlVUkwgPSBpSWNlQ3JlYW07XG4gICAgaVByaWNlID0gXCI5LjcwXCI7XG4gICAgY3JlYXRlTWVudUl0ZW0oaU5hbWUsIGlEZXNjcmlwdGlvbiwgaVByaWNlLCBpVVJMKTtcblxuXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcik7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcbn1cblxuZXhwb3J0IHttYWtlTWVudX1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHttYWtlSGVhZGVyLCBtYWtlQm9keSwgbWFrZUZvb3Rlcn0gZnJvbSAnLi9sYW5kaW5nJztcbmltcG9ydCB7bWFrZU1lbnV9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQge21ha2VDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IG1haW5Gb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblxubWFrZUhlYWRlcigpO1xuY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4taG9tZScpO1xuY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbWVudScpO1xuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29udGFjdCcpO1xuY29uc3QgdG9wQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtYnRuLWNvbnRhaW5lcicpO1xuXG5cbmZ1bmN0aW9uIGhvbWUoKXtcbiAgICBtYWtlQm9keShtYWluQ29udGFpbmVyKTtcbiAgICBsZXQgY3JlZGl0T25lID0gXCJCYWNrZ3JvdW5kIGltYWdlOiBodHRwczovL3BhdHRlcm5pY28uY29tXCI7XG4gICAgbGV0IGNyZWRpdFR3byA9IFwiQ2hlZiBpbWFnZTogQWxleGFzX0ZvdG9zIGZyb20gUGl4YWJheVwiO1xuICAgIG1ha2VGb290ZXIoY3JlZGl0T25lLCBjcmVkaXRUd28pO1xufVxuXG5mdW5jdGlvbiBtZW51KCl7XG4gICAgbWFrZU1lbnUobWFpbkNvbnRhaW5lcik7XG4gICAgbGV0IGNyZWRpdE9uZSA9IFwiQmFja2dyb3VuZCBpbWFnZTogaHR0cHM6Ly9wYXR0ZXJuaWNvLmNvbVwiO1xuICAgIGxldCBjcmVkaXRUd28gPSBcIkZvb2QgaW1hZ2VzIGZyb20gUGl4YWJheVwiO1xuICAgIG1ha2VGb290ZXIoY3JlZGl0T25lLCBjcmVkaXRUd28pO1xufVxuXG5mdW5jdGlvbiBjb250YWN0KCl7XG4gICAgbWFrZUNvbnRhY3QobWFpbkNvbnRhaW5lcik7XG4gICAgbGV0IGNyZWRpdE9uZSA9IFwiQmFja2dyb3VuZCBpbWFnZTogaHR0cHM6Ly9wYXR0ZXJuaWNvLmNvbVwiO1xuICAgIGxldCBjcmVkaXRUd28gPSBcIkljb25zIG1hZGUgYnkgQ3VwdXRvIChwbGFuZSksIEJlY3JpcyAoaG91c2UpLCBTbGlkaWNvbiAocGhvbmUpIGZyb20gd3d3LmZsYXRpY29uLmNvbSBcIjtcbiAgICBtYWtlRm9vdGVyKGNyZWRpdE9uZSwgY3JlZGl0VHdvKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoUGFnZXMoZSl7XG5cbiAgICB3aGlsZSAobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5Db250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgIH0gXG4gICAgXG4gICAgd2hpbGUgKG1haW5Gb290ZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluRm9vdGVyLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9IFxuXG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYnRuLWhvbWVcIil7XG4gICAgICAgIGhvbWUoKSAgICBcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImJ0bi1tZW51XCIpe1xuXG4gICAgICAgIG1lbnUoKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYnRuLWNvbnRhY3RcIil7XG4gICAgICAgIGNvbnRhY3QoKVxuICAgIH0gZWxzZXtcbiAgICB9XG59XG5cbnRvcEJ1dHRvbnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFBhZ2VzKTtcbmhvbWUoKTtcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=