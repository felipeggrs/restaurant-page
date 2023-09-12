/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n.pageImage {\n  width: 500px;\n  height: 300px;\n  background-size: cover;\n  margin: 1rem;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\n  border: 2px solid #e0cda9;\n  border-radius: 10px;\n}\n\n.pageFood {\n  width: 300px;\n  height: 200px;\n  margin: 1rem;\n  border-radius: 10px; /* Increased border radius for a smoother look */\n  border: 2px solid #e0cda9; /* Added a border with a parchment color */\n  background-color: #f5e4c3; /* Adjusted the background color to a lighter parchment shade */\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle box shadow for depth */\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.btnContainer {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin: 0.5rem;\n}\n\np {\n  text-align: justify;\n  width: 500px;\n}\n\n.paraFood {\n  width: auto;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n}\n\n.btnContainer {\n  position: relative;\n  padding: 5px;\n  border-bottom: 2px solid #c7b89d; /* Solid line border */\n}\n\n.mainContainer {\n  background-color: rgb(240, 234, 214);\n  border: 2px solid #c7b89d; /* Add a solid border with a slightly darker color */\n  border-radius: 10px; /* Increase border-radius for rounded corners */\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  padding: 0px 10px 10px 0px;\n  margin: 10px;\n}\n\n.pageFoodContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  width: 400px;\n  background-color: #ffffff81;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  margin: 20px;\n  overflow: hidden;\n  transition: transform 0.2s;\n}\n\n.pageFoodContainer:hover {\n  transform: scale(\n    1.05\n  ); /* Add a subtle scale effect on hover for interactivity */\n}\n\nbutton {\n  display: inline-block;\n  padding: 5px 20px;\n  background-color: #f0eadd; /* Parchment color */\n  color: #333; /* Text color */\n  font-size: 16px;\n  text-align: center;\n  text-decoration: none;\n  border: 2px solid #c7b89d; /* A slightly darker shade than the background */\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s, color 0.3s, transform 0.2s;\n}\n\nbutton:hover {\n  background-color: #c7b89d; /* Slightly darker color on hover */\n  color: #fff; /* Text becomes white on hover */\n  transform: scale(1.05); /* Slight scale-up effect on hover */\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _contactImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactImg.jpg */ \"./src/contactImg.jpg\");\n\n\n\nfunction contactPage(container) {\n  // creating each element\n  const pageContainer = document.createElement(\"div\");\n  const contentContainer = document.createElement(\"div\");\n  const pageHead = document.createElement(\"h1\");\n  const pageImage = document.createElement(\"div\");\n  const pagePara = document.createElement(\"p\");\n\n  // setting each element's attributes\n  contentContainer.setAttribute(\"id\", \"content\");\n  pageHead.textContent = \"Felipe's Trattoria\";\n  pageImage.setAttribute(\"style\", `background-image: url(${_contactImg_jpg__WEBPACK_IMPORTED_MODULE_1__})`);\n  pageImage.setAttribute(\"class\", \"pageImage\");\n  pagePara.textContent =\n    \"Ciao! 🍝 Need to reach us? Don't worry, we're not trapped in a pasta maze, but we are here to untangle any spaghetti-related problems you might have. Whether you want to talk pizza toppings, pasta shapes, or just share your deepest lasagna secrets, our tomato-sauce-stained phone lines and cheese-covered email servers are ready for your saucy messages. Feel free to drop us a line, and we promise not to toss your inquiries in the air (unless it's pizza dough). Buon divertimento! 🍕🤣\";\n\n  // appending children to parents\n  container.appendChild(pageContainer);\n  pageContainer.appendChild(contentContainer);\n  contentContainer.appendChild(pageHead);\n  contentContainer.appendChild(pageImage);\n  contentContainer.appendChild(pagePara);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n\n//# sourceURL=webpack://project-template/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bg.jpg */ \"./src/bg.jpg\");\n/* harmony import */ var _bodyBackground_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bodyBackground.jpg */ \"./src/bodyBackground.jpg\");\n\n\n\n\nfunction homePage(container) {\n  // creating each element\n  const pageContainer = document.createElement(\"div\");\n  const contentContainer = document.createElement(\"div\");\n  const pageHead = document.createElement(\"h1\");\n  const pageImage = document.createElement(\"div\");\n  const pagePara = document.createElement(\"p\");\n\n  // setting each element's attributes\n  pageContainer.setAttribute(\"id\", \"pageContainer\");\n  contentContainer.setAttribute(\"id\", \"content\");\n  pageHead.textContent = \"Felipe's Trattoria\";\n  pageImage.setAttribute(\"style\", `background-image: url(${_bg_jpg__WEBPACK_IMPORTED_MODULE_1__})`);\n  document.body.setAttribute(\n    \"style\",\n    `background-image: url(${_bodyBackground_jpg__WEBPACK_IMPORTED_MODULE_2__})`\n  );\n  pageImage.setAttribute(\"class\", \"pageImage\");\n  pagePara.setAttribute(\"class\", \"centeredPara\");\n  pagePara.textContent =\n    \"Welcome to Felipe's Trattoria, where pasta is not just a meal; it's a passionate love affair! 🍝💕 Picture this: You, cozy in our trattoria, as tantalizing aromas dance in the air, and the very essence of Italy fills your senses. At Felipe's, we believe that pasta dreams should not remain dreams but should become an affordable reality for all. From the classic spaghetti that'll twirl its way into your heart to the risotto that's pure creamy poetry, our menu is a love letter to Italian cuisine. And it's not just about the food; it's about the experience. So bring your appetite, your friends, and your inner Italian, and let's make some pasta magic together. Buon appetito! 🇮🇹🍷🍕\";\n\n  // appending children to parents\n  container.appendChild(pageContainer);\n  pageContainer.appendChild(contentContainer);\n  contentContainer.appendChild(pageHead);\n  contentContainer.appendChild(pageImage);\n  contentContainer.appendChild(pagePara);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://project-template/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\n\n\nfunction tabButtons() {\n  const btnContainer = document.createElement(\"div\");\n  const homeBtn = document.createElement(\"button\");\n  const menuBtn = document.createElement(\"button\");\n  const contactBtn = document.createElement(\"button\");\n\n  btnContainer.setAttribute(\"class\", \"btnContainer\");\n  homeBtn.textContent = \"Home\";\n  menuBtn.textContent = \"Menu\";\n  contactBtn.textContent = \"Contact\";\n\n  const mainContainer = document.createElement(\"div\");\n  mainContainer.setAttribute(\"class\", \"mainContainer\");\n\n  btnContainer.appendChild(homeBtn);\n  btnContainer.appendChild(menuBtn);\n  btnContainer.appendChild(contactBtn);\n  mainContainer.appendChild(btnContainer);\n  document.body.prepend(mainContainer);\n\n  return {\n    mainContainer,\n    btnContainer,\n    homeBtn,\n    menuBtn,\n    contactBtn,\n  };\n}\n\nconst buttons = tabButtons();\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(buttons.mainContainer);\n\nbuttons.homeBtn.addEventListener(\"click\", () => {\n  document.body.innerHTML = \"\";\n  buttons.mainContainer.innerHTML = \"\";\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(buttons.mainContainer);\n  document.body.prepend(buttons.mainContainer);\n  buttons.mainContainer.prepend(buttons.btnContainer);\n  console.log(\"Switched to Home\");\n});\n\nbuttons.menuBtn.addEventListener(\"click\", () => {\n  document.body.innerHTML = \"\";\n  buttons.mainContainer.innerHTML = \"\";\n  (0,_menupage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(buttons.mainContainer);\n  document.body.prepend(buttons.mainContainer);\n  buttons.mainContainer.prepend(buttons.btnContainer);\n  console.log(\"Switched to Menu\");\n});\n\nbuttons.contactBtn.addEventListener(\"click\", () => {\n  document.body.innerHTML = \"\";\n  buttons.mainContainer.innerHTML = \"\";\n  (0,_contactpage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(buttons.mainContainer);\n  document.body.prepend(buttons.mainContainer);\n  buttons.mainContainer.prepend(buttons.btnContainer);\n  console.log(\"Switched to Contact\");\n});\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _menuImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuImg.jpg */ \"./src/menuImg.jpg\");\n/* harmony import */ var _foodOne_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodOne.jpg */ \"./src/foodOne.jpg\");\n/* harmony import */ var _foodTwo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foodTwo.jpg */ \"./src/foodTwo.jpg\");\n/* harmony import */ var _foodThree_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foodThree.jpg */ \"./src/foodThree.jpg\");\n/* harmony import */ var _foodFour_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodFour.jpg */ \"./src/foodFour.jpg\");\n/* harmony import */ var _foodFive_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodFive.jpg */ \"./src/foodFive.jpg\");\n\n\n\n\n\n\n\n\nfunction menuPage(container) {\n  // creating each element\n  const pageContainer = document.createElement(\"div\");\n  const contentContainer = document.createElement(\"div\");\n  const pageHead = document.createElement(\"h1\");\n  const pageImage = document.createElement(\"div\");\n  const pagePara = document.createElement(\"p\");\n\n  const foodOneContainer = document.createElement(\"div\");\n  const foodTwoContainer = document.createElement(\"div\");\n  const foodThreeContainer = document.createElement(\"div\");\n  const foodFourContainer = document.createElement(\"div\");\n  const foodFiveContainer = document.createElement(\"div\");\n\n  const foodOneHeader = document.createElement(\"h3\");\n  const foodTwoHeader = document.createElement(\"h3\");\n  const foodThreeHeader = document.createElement(\"h3\");\n  const foodFourHeader = document.createElement(\"h3\");\n  const foodFiveHeader = document.createElement(\"h3\");\n\n  const pageFoodOne = document.createElement(\"div\");\n  const pageFoodTwo = document.createElement(\"div\");\n  const pageFoodThree = document.createElement(\"div\");\n  const pageFoodFour = document.createElement(\"div\");\n  const pageFoodFive = document.createElement(\"div\");\n\n  const paraFoodOne = document.createElement(\"p\");\n  const paraFoodTwo = document.createElement(\"p\");\n  const paraFoodThree = document.createElement(\"p\");\n  const paraFoodFour = document.createElement(\"p\");\n  const paraFoodFive = document.createElement(\"p\");\n\n  // setting each element's attributes\n  contentContainer.setAttribute(\"id\", \"content\");\n  pageHead.textContent = \"Felipe's Trattoria\";\n  pageImage.setAttribute(\"style\", `background-image: url(${_menuImg_jpg__WEBPACK_IMPORTED_MODULE_1__})`);\n  pageImage.setAttribute(\"class\", \"pageImage\");\n  pagePara.textContent =\n    \"Prepare to have your taste buds transported to the enchanting landscapes of Italy! Behold an exquisite collection of Italian pasta that's more than just a meal – it's a tantalizing journey for your senses. From spaghetti that's so captivating it should be in a romance novel to ravioli that will have you saying 'Ciao, reality!', get ready to indulge in pasta creations that not only amaze but also magically fulfill your wildest culinary dreams. Your taste buds are in for an Italian adventure that's like a gourmet symphony playing just for you!\";\n\n  foodOneContainer.setAttribute(\"class\", \"pageFoodContainer\");\n  foodOneHeader.textContent = \"Delicious Pizza\";\n  pageFoodOne.setAttribute(\"style\", `background-image: url(${_foodOne_jpg__WEBPACK_IMPORTED_MODULE_2__})`);\n  pageFoodOne.setAttribute(\"class\", \"pageFood\");\n  paraFoodOne.setAttribute(\"class\", \"paraFood\");\n  paraFoodOne.textContent =\n    \"Italian pizza, a culinary masterpiece, boasts a thin crust sturdy as a Roman colosseum and toppings as diverse as a disco of flamingos. It's a flavor explosion that makes your taste buds dance the cha-cha and your heart exclaim, 'Mamma mia!' Each bite is like a crispy cloud kissed by the sun, and its tomato-red, gelato-creamy, and spicier-than-a-Sicilian-soap-opera toppings will have you imagining gondoliers serenading you on a pizza-lined Grand Canal. It's not just food; it's a carnival of absurdly delicious flavors that'll make you shout, 'Oh la la!'\";\n\n  foodTwoContainer.setAttribute(\"class\", \"pageFoodContainer\");\n  foodTwoHeader.textContent = \"Amazing Pasta\";\n  pageFoodTwo.setAttribute(\"style\", `background-image: url(${_foodTwo_jpg__WEBPACK_IMPORTED_MODULE_3__})`);\n  pageFoodTwo.setAttribute(\"class\", \"pageFood\");\n  paraFoodTwo.setAttribute(\"class\", \"paraFood\");\n  paraFoodTwo.textContent =\n    \"Italian pasta, the true diva of the dinner table, waltzes onto your plate with grace and flavor that'll make your taste buds tango. Imagine pasta as tender as a love letter, dressed in sauces richer than a Renaissance painting, and garnished with herbs fresher than a Mediterranean breeze. It's like a culinary symphony conducted by pasta angels, where every twirl of your fork is a note in a delicious opera that sings to your soul.\";\n\n  foodThreeContainer.setAttribute(\"class\", \"pageFoodContainer\");\n  foodThreeHeader.textContent = \"Outrageous Arancini\";\n  pageFoodThree.setAttribute(\"style\", `background-image: url(${_foodThree_jpg__WEBPACK_IMPORTED_MODULE_4__})`);\n  pageFoodThree.setAttribute(\"class\", \"pageFood\");\n  paraFoodThree.setAttribute(\"class\", \"paraFood\");\n  paraFoodThree.textContent =\n    \"Arancini, those golden orbs of delight, are like edible treasures straight from an Italian fairy tale. Imagine crispy, golden rice balls with a surprise inside, each one like a culinary magic trick waiting to unfold. As you bite into them, they reveal a symphony of flavors, with creamy risotto, oozy cheese, and a flavorful surprise at the center, all seasoned to perfection. These bite-sized wonders are like the crown jewels of Italian cuisine, a crunchy exterior protecting the flavorful secrets within.\";\n\n  foodFourContainer.setAttribute(\"class\", \"pageFoodContainer\");\n  foodFourHeader.textContent = \"Forbidden Focaccia\";\n  pageFoodFour.setAttribute(\"style\", `background-image: url(${_foodFour_jpg__WEBPACK_IMPORTED_MODULE_5__})`);\n  pageFoodFour.setAttribute(\"class\", \"pageFood\");\n  paraFoodFour.setAttribute(\"class\", \"paraFood\");\n  paraFoodFour.textContent =\n    \"Italian dough is so good that it needed a special bread to homage it. Focaccia is an oven-baked Italian bread in between flatbread and pizza. Depending on the region, it may look different, it may have different ingredients and toppings, and even a different name.\";\n\n  foodFiveContainer.setAttribute(\"class\", \"pageFoodContainer\");\n  foodFiveHeader.textContent = \"Common Italian Cheese\";\n  pageFoodFive.setAttribute(\"style\", `background-image: url(${_foodFive_jpg__WEBPACK_IMPORTED_MODULE_6__})`);\n  pageFoodFive.setAttribute(\"class\", \"pageFood\");\n  paraFoodFive.setAttribute(\"class\", \"paraFood\");\n  paraFoodFive.textContent =\n    \"There’s so much in the Italian cheese culture that it needs its own list. Cheese has been around the Italian Peninsula for centuries. Ancient Romans created a vast variety of cheeses and experimented with them by smoking, melting, and aging them, giving us the basis of many famous cheeses found today. Strong, soft, creamy, grained, sweet, or salty, how can anyone say no to a good piece of cheese?\";\n\n  // appending children to parents\n  container.appendChild(pageContainer);\n  pageContainer.appendChild(contentContainer);\n  contentContainer.appendChild(pageHead);\n  contentContainer.appendChild(pageImage);\n  contentContainer.appendChild(pagePara);\n\n  contentContainer.appendChild(foodOneContainer);\n  foodOneContainer.appendChild(foodOneHeader);\n  foodOneContainer.appendChild(pageFoodOne);\n  foodOneContainer.appendChild(paraFoodOne);\n\n  contentContainer.appendChild(foodTwoContainer);\n  foodTwoContainer.appendChild(foodTwoHeader);\n  foodTwoContainer.appendChild(pageFoodTwo);\n  foodTwoContainer.appendChild(paraFoodTwo);\n\n  contentContainer.appendChild(foodThreeContainer);\n  foodThreeContainer.appendChild(foodThreeHeader);\n  foodThreeContainer.appendChild(pageFoodThree);\n  foodThreeContainer.appendChild(paraFoodThree);\n\n  contentContainer.appendChild(foodFourContainer);\n  foodFourContainer.appendChild(foodFourHeader);\n  foodFourContainer.appendChild(pageFoodFour);\n  foodFourContainer.appendChild(paraFoodFour);\n\n  contentContainer.appendChild(foodFiveContainer);\n  foodFiveContainer.appendChild(foodFiveHeader);\n  foodFiveContainer.appendChild(pageFoodFive);\n  foodFiveContainer.appendChild(paraFoodFive);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://project-template/./src/menupage.js?");

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"873f9308c746e9fa2c27.jpg\";\n\n//# sourceURL=webpack://project-template/./src/bg.jpg?");

/***/ }),

/***/ "./src/bodyBackground.jpg":
/*!********************************!*\
  !*** ./src/bodyBackground.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0cedaafef013e3df894e.jpg\";\n\n//# sourceURL=webpack://project-template/./src/bodyBackground.jpg?");

/***/ }),

/***/ "./src/contactImg.jpg":
/*!****************************!*\
  !*** ./src/contactImg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39c6f74a8d6f7310be4a.jpg\";\n\n//# sourceURL=webpack://project-template/./src/contactImg.jpg?");

/***/ }),

/***/ "./src/foodFive.jpg":
/*!**************************!*\
  !*** ./src/foodFive.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e554722bcbb5060465d9.jpg\";\n\n//# sourceURL=webpack://project-template/./src/foodFive.jpg?");

/***/ }),

/***/ "./src/foodFour.jpg":
/*!**************************!*\
  !*** ./src/foodFour.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81d7e1a842d5cd51112d.jpg\";\n\n//# sourceURL=webpack://project-template/./src/foodFour.jpg?");

/***/ }),

/***/ "./src/foodOne.jpg":
/*!*************************!*\
  !*** ./src/foodOne.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7cdc16fdbc34caa3de04.jpg\";\n\n//# sourceURL=webpack://project-template/./src/foodOne.jpg?");

/***/ }),

/***/ "./src/foodThree.jpg":
/*!***************************!*\
  !*** ./src/foodThree.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b6c257c44688cdde943.jpg\";\n\n//# sourceURL=webpack://project-template/./src/foodThree.jpg?");

/***/ }),

/***/ "./src/foodTwo.jpg":
/*!*************************!*\
  !*** ./src/foodTwo.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5faf5d4265ac63044100.jpg\";\n\n//# sourceURL=webpack://project-template/./src/foodTwo.jpg?");

/***/ }),

/***/ "./src/menuImg.jpg":
/*!*************************!*\
  !*** ./src/menuImg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11e19456ba5a759ee3bd.jpg\";\n\n//# sourceURL=webpack://project-template/./src/menuImg.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;