/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/ts/components/mainBackground/index.ts":
/*!***************************************************!*\
  !*** ./dev/ts/components/mainBackground/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainBackground: () => (/* binding */ MainBackground)\n/* harmony export */ });\n/* harmony import */ var _interface_ClothesGenerator_PatternClothesGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface/ClothesGenerator/PatternClothesGenerator */ \"./dev/ts/components/mainBackground/interface/ClothesGenerator/PatternClothesGenerator.ts\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./dev/ts/components/mainBackground/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\n\n\nvar MainBackground = /*#__PURE__*/function (_HTMLElement) {\n  function MainBackground() {\n    var _this;\n    _classCallCheck(this, MainBackground);\n    _this = _callSuper(this, MainBackground);\n    _this.attachShadow({\n      mode: \"open\"\n    });\n    _this.initStructure();\n    _this.clothesGenerator = new _interface_ClothesGenerator_PatternClothesGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.innerContainer);\n    if (!_this.shadowRoot) return _possibleConstructorReturn(_this);\n    _this.shadowRoot.appendChild(_this.outerContainer);\n    var styleElement = document.createElement(\"style\");\n    styleElement.innerHTML = (_styles_css__WEBPACK_IMPORTED_MODULE_1___default());\n    _this.shadowRoot.appendChild(styleElement);\n    return _this;\n  }\n  _inherits(MainBackground, _HTMLElement);\n  return _createClass(MainBackground, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.clothesGenerator.startGenerating();\n    }\n  }, {\n    key: \"initStructure\",\n    value: function initStructure() {\n      this.outerContainer = this.createOuterContainer();\n      this.innerContainer = this.createInnerContainer();\n      this.outerContainer.appendChild(this.innerContainer);\n      this.outerContainer.className = \"outer\";\n      this.innerContainer.className = \"inner\";\n    }\n  }, {\n    key: \"createOuterContainer\",\n    value: function createOuterContainer() {\n      return document.createElement(\"div\");\n    }\n  }, {\n    key: \"createInnerContainer\",\n    value: function createInnerContainer() {\n      return document.createElement(\"div\");\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [];\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack:///./dev/ts/components/mainBackground/index.ts?");

/***/ }),

/***/ "./dev/ts/components/mainBackground/interface/ClothesGenerator/PatternClothesGenerator.ts":
/*!************************************************************************************************!*\
  !*** ./dev/ts/components/mainBackground/interface/ClothesGenerator/PatternClothesGenerator.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PatternClothesGenerator)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar PatternClothesGenerator = /*#__PURE__*/function () {\n  function PatternClothesGenerator(parent) {\n    _classCallCheck(this, PatternClothesGenerator);\n    _defineProperty(this, \"aliveImages\", []);\n    _defineProperty(this, \"pattern\", []);\n    this.parentElement = parent;\n    this.pattern.push({\n      time: 0,\n      x: 10,\n      src: \"assets/images/top/clothes/clothes_1.png\"\n    });\n    this.pattern.push({\n      time: 725,\n      x: 90,\n      src: \"assets/images/top/clothes/clothes_4.png\"\n    });\n    this.pattern.push({\n      time: 1800,\n      x: 30,\n      src: \"assets/images/top/clothes/clothes_2.png\"\n    });\n    this.pattern.push({\n      time: 2340,\n      x: 60,\n      src: \"assets/images/top/clothes/clothes_5.png\"\n    });\n    this.pattern.push({\n      time: 3060,\n      x: 40,\n      src: \"assets/images/top/clothes/clothes_8.png\"\n    });\n    this.pattern.push({\n      time: 3650,\n      x: 16,\n      src: \"assets/images/top/clothes/clothes_3.png\"\n    });\n    this.pattern.push({\n      time: 4325,\n      x: 70,\n      src: \"assets/images/top/clothes/clothes_7.png\"\n    });\n    this.pattern.push({\n      time: 4950,\n      x: 30,\n      src: \"assets/images/top/clothes/clothes_1.png\"\n    });\n    this.pattern.push({\n      time: 5650,\n      x: 50,\n      src: \"assets/images/top/clothes/clothes_3.png\"\n    });\n    this.pattern.push({\n      time: 6000,\n      x: 80,\n      src: \"assets/images/top/clothes/clothes_6.png\"\n    });\n    this.pattern.push({\n      time: 7150,\n      x: 20,\n      src: \"assets/images/top/clothes/clothes_3.png\"\n    });\n    this.pattern.push({\n      time: 7600,\n      x: 44,\n      src: \"assets/images/top/clothes/clothes_8.png\"\n    });\n    this.pattern.push({\n      time: 8450,\n      x: 67,\n      src: \"assets/images/top/clothes/clothes_6.png\"\n    });\n  }\n  return _createClass(PatternClothesGenerator, [{\n    key: \"startGenerating\",\n    value: function startGenerating() {\n      var _this = this;\n      var roopTime = 9000; // total time for one loop (in ms)\n      var firstTime = performance.now();\n      var lastTime = 0;\n      var _animate = function animate(currentTime) {\n        var elapsedTime = (currentTime - firstTime) % roopTime;\n        if (lastTime > elapsedTime) {\n          lastTime = 0;\n        }\n        var imageInfos = _this.getItemsForTime(elapsedTime, lastTime);\n        _this.generateImages(imageInfos);\n        _this.moveAliveImages(elapsedTime, lastTime, roopTime);\n        _this.removeAliveImages();\n        lastTime = elapsedTime;\n        return requestAnimationFrame(_animate);\n      };\n      requestAnimationFrame(_animate);\n    }\n  }, {\n    key: \"generateImages\",\n    value: function generateImages(imageInfos) {\n      var _this2 = this;\n      imageInfos.forEach(function (imageInfo) {\n        var image = _this2.createImage(imageInfo);\n        _this2.aliveImages.push(image);\n        _this2.parentElement.appendChild(image);\n      });\n    }\n  }, {\n    key: \"removeAliveImages\",\n    value: function removeAliveImages() {\n      var parentRect = this.parentElement.getBoundingClientRect();\n      for (var i = this.aliveImages.length - 1; i >= 0; i--) {\n        var aliveImage = this.aliveImages[i];\n        var childRect = aliveImage.getBoundingClientRect();\n        var isOutsideParent = childRect.bottom < parentRect.top || childRect.top > parentRect.bottom || childRect.right < parentRect.left || childRect.left > parentRect.right;\n        if (!isOutsideParent) continue;\n        console.log(\"removeAliveImages\");\n        aliveImage.remove(); // DOMから削除\n        this.aliveImages.splice(i, 1); // 配列から削除\n      }\n    }\n  }, {\n    key: \"moveAliveImages\",\n    value: function moveAliveImages(currentTime, lastTime, roopTime) {\n      var parentRect = this.parentElement.getBoundingClientRect();\n      var distance = parentRect.height;\n      var elapsedTime = currentTime - lastTime;\n      var ratio = 600 / roopTime;\n      var next = elapsedTime * ratio / 1000 * distance;\n      this.aliveImages.forEach(function (aliveImage) {\n        var currentBottom = parseFloat(window.getComputedStyle(aliveImage).bottom) || 0;\n        aliveImage.style.bottom = \"\".concat(currentBottom + next, \"px\");\n        if (next < 0) console.log(\"delta:\" + next);\n      });\n    }\n  }, {\n    key: \"createImage\",\n    value: function createImage(imageInfo) {\n      if (!imageInfo) throw new Error(\"imageInfoが見つかりませんでした。\");\n      var image = document.createElement(\"img\");\n      image.className = \"img\";\n      image.src = imageInfo.src;\n      image.style.left = \"\".concat(imageInfo.x, \"%\");\n      image.style.bottom = \"0\";\n      return image;\n    }\n  }, {\n    key: \"getItemsForTime\",\n    value: function getItemsForTime(currentTime, lastTime) {\n      // WARNING : 条件式に注意！\n      return this.pattern.filter(function (item) {\n        return item.time >= lastTime && item.time < currentTime;\n      });\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./dev/ts/components/mainBackground/interface/ClothesGenerator/PatternClothesGenerator.ts?");

/***/ }),

/***/ "./dev/ts/components/mainFrameBorder/index.ts":
/*!****************************************************!*\
  !*** ./dev/ts/components/mainFrameBorder/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainFrameBorder: () => (/* binding */ MainFrameBorder)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nvar MainFrameBorder = /*#__PURE__*/function (_HTMLElement) {\n  function MainFrameBorder() {\n    var _this;\n    _classCallCheck(this, MainFrameBorder);\n    _this = _callSuper(this, MainFrameBorder);\n    _this.attachShadow({\n      mode: \"open\"\n    });\n    if (!_this.shadowRoot) throw Error(\"Browser does not support Shadow DOM\");\n    _this.svg = _this.createElements();\n    _this.path = _this.createPath();\n    _this.svgAnimate = _this.createAnimate();\n    _this.svg.appendChild(_this.path);\n    _this.path.appendChild(_this.svgAnimate);\n    _this.shadowRoot.appendChild(_this.svg);\n    return _this;\n  }\n  _inherits(MainFrameBorder, _HTMLElement);\n  return _createClass(MainFrameBorder, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.setSize();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.setSize();\n    }\n  }, {\n    key: \"createElements\",\n    value: function createElements() {\n      var svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n      return svg;\n    }\n  }, {\n    key: \"createPath\",\n    value: function createPath() {\n      var path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n      path.setAttribute(\"fill\", \"transparent\");\n      path.setAttribute(\"stroke\", \"black\");\n      path.setAttribute(\"stroke-width\", \"5\");\n      path.setAttribute(\"stroke-dasharray\", \"120,180\");\n      return path;\n    }\n  }, {\n    key: \"createAnimate\",\n    value: function createAnimate() {\n      var animate = document.createElementNS(\"http://www.w3.org/2000/svg\", \"animate\");\n      animate.setAttribute(\"attributeName\", \"stroke-dashoffset\");\n      animate.setAttribute(\"dur\", \"2\");\n      animate.setAttribute(\"fill\", \"freeze\");\n      return animate;\n    }\n  }, {\n    key: \"setSize\",\n    value: function setSize() {\n      var _this$getAttribute, _this$getAttribute2;\n      var width = Number((_this$getAttribute = this.getAttribute(\"width\")) !== null && _this$getAttribute !== void 0 ? _this$getAttribute : 100);\n      var height = Number((_this$getAttribute2 = this.getAttribute(\"height\")) !== null && _this$getAttribute2 !== void 0 ? _this$getAttribute2 : 100);\n      this.svg.setAttribute(\"viewBox\", \"0 0 \".concat(width, \" \").concat(height));\n      this.svg.setAttribute(\"width\", \"\".concat(width));\n      this.svg.setAttribute(\"height\", \"\".concat(height));\n      var halfLength = height + width;\n      this.path.setAttribute(\"d\", \"M 2.5 \".concat(-(halfLength - 10), \" V \").concat(height - 5, \" H \").concat(width - 5));\n      var ratio = 5 / 16;\n      this.path.setAttribute(\"stroke-dasharray\", \"\".concat(halfLength * 2 * ratio, \",\").concat(halfLength * 2 * (1 - ratio)));\n      this.svgAnimate.setAttribute(\"from\", \"\".concat(0));\n      this.svgAnimate.setAttribute(\"to\", \"\".concat(-(halfLength + height / 2)));\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [\"width\", \"height\"];\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack:///./dev/ts/components/mainFrameBorder/index.ts?");

/***/ }),

/***/ "./dev/ts/components/mainFrameBorderRight/index.ts":
/*!*********************************************************!*\
  !*** ./dev/ts/components/mainFrameBorderRight/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainFrameBorderRight: () => (/* binding */ MainFrameBorderRight)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nvar MainFrameBorderRight = /*#__PURE__*/function (_HTMLElement) {\n  function MainFrameBorderRight() {\n    var _this;\n    _classCallCheck(this, MainFrameBorderRight);\n    _this = _callSuper(this, MainFrameBorderRight);\n    _this.attachShadow({\n      mode: \"open\"\n    });\n    if (!_this.shadowRoot) throw Error(\"Browser does not support Shadow DOM\");\n    _this.svg = _this.createElements();\n    _this.path = _this.createPath();\n    _this.svgAnimate = _this.createAnimate();\n    _this.svg.appendChild(_this.path);\n    _this.path.appendChild(_this.svgAnimate);\n    _this.shadowRoot.appendChild(_this.svg);\n    return _this;\n  }\n  _inherits(MainFrameBorderRight, _HTMLElement);\n  return _createClass(MainFrameBorderRight, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.setSize();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.setSize();\n    }\n  }, {\n    key: \"createElements\",\n    value: function createElements() {\n      var svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n      return svg;\n    }\n  }, {\n    key: \"createPath\",\n    value: function createPath() {\n      var path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n      path.setAttribute(\"fill\", \"transparent\");\n      path.setAttribute(\"stroke\", \"black\");\n      path.setAttribute(\"stroke-width\", \"5\");\n      path.setAttribute(\"stroke-dasharray\", \"120,180\");\n      return path;\n    }\n  }, {\n    key: \"createAnimate\",\n    value: function createAnimate() {\n      var animate = document.createElementNS(\"http://www.w3.org/2000/svg\", \"animate\");\n      animate.setAttribute(\"attributeName\", \"stroke-dashoffset\");\n      animate.setAttribute(\"dur\", \"2\");\n      animate.setAttribute(\"fill\", \"freeze\");\n      return animate;\n    }\n  }, {\n    key: \"setSize\",\n    value: function setSize() {\n      var _this$getAttribute, _this$getAttribute2;\n      var width = Number((_this$getAttribute = this.getAttribute(\"width\")) !== null && _this$getAttribute !== void 0 ? _this$getAttribute : 100);\n      var height = Number((_this$getAttribute2 = this.getAttribute(\"height\")) !== null && _this$getAttribute2 !== void 0 ? _this$getAttribute2 : 100);\n      this.svg.setAttribute(\"viewBox\", \"0 0 \".concat(width, \" \").concat(height));\n      this.svg.setAttribute(\"width\", \"\".concat(width));\n      this.svg.setAttribute(\"height\", \"\".concat(height));\n      var length = height / 2 + width * 2 / 3;\n      this.path.setAttribute(\"d\", \"M \".concat(width - 2.5, \" \").concat(height / 2, \" V \", 5, \" H \").concat(width / 3));\n      this.path.setAttribute(\"stroke-dasharray\", \"\".concat(length));\n      this.svgAnimate.setAttribute(\"from\", \"\".concat(length));\n      this.svgAnimate.setAttribute(\"to\", \"\".concat(0));\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [\"width\", \"height\"];\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack:///./dev/ts/components/mainFrameBorderRight/index.ts?");

/***/ }),

/***/ "./dev/ts/components/mainFrameText/index.ts":
/*!**************************************************!*\
  !*** ./dev/ts/components/mainFrameText/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainFrameText: () => (/* binding */ MainFrameText)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nvar MainFrameText = /*#__PURE__*/function (_HTMLElement) {\n  function MainFrameText() {\n    var _this;\n    _classCallCheck(this, MainFrameText);\n    _this = _callSuper(this, MainFrameText);\n    _this.attachShadow({\n      mode: \"open\"\n    });\n    if (!_this.shadowRoot) throw Error(\"Browser does not support Shadow DOM\");\n    _this.svg = _this.createElements();\n    _this.path = _this.createPath();\n    _this.text = _this.createText();\n    _this.textPath = _this.createTextPath();\n    _this.svgAnimate = _this.createAnimate();\n    _this.text.appendChild(_this.textPath);\n    _this.textPath.appendChild(_this.svgAnimate);\n    _this.svg.appendChild(_this.path);\n    _this.svg.appendChild(_this.text);\n    _this.shadowRoot.appendChild(_this.svg);\n    return _this;\n  }\n  _inherits(MainFrameText, _HTMLElement);\n  return _createClass(MainFrameText, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.setSize();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.setSize();\n    }\n  }, {\n    key: \"createElements\",\n    value: function createElements() {\n      var svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n      return svg;\n    }\n  }, {\n    key: \"createPath\",\n    value: function createPath() {\n      var path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n      path.setAttribute(\"fill\", \"transparent\");\n      path.setAttribute(\"stroke\", \"none\");\n      path.setAttribute(\"id\", \"myPath\");\n      return path;\n    }\n  }, {\n    key: \"createText\",\n    value: function createText() {\n      var text = document.createElementNS(\"http://www.w3.org/2000/svg\", \"text\");\n      text.setAttribute(\"font-size\", \"88\");\n      text.setAttribute(\"font-weight\", \"700\");\n      text.setAttribute(\"line-height\", \"1.3\");\n      text.setAttribute(\"letter-spacing\", \".14em\");\n      text.setAttribute(\"font-family\", \"'Amiko', sans-serif\");\n      text.setAttribute(\"fill\", \"black\");\n      return text;\n    }\n  }, {\n    key: \"createTextPath\",\n    value: function createTextPath() {\n      var textPath = document.createElementNS(\"http://www.w3.org/2000/svg\", \"textPath\");\n      textPath.setAttribute(\"href\", \"#myPath\");\n      textPath.setAttribute(\"startOffset\", \"0%\");\n      textPath.textContent = \"CLOTHS to CLOTHS\";\n      return textPath;\n    }\n  }, {\n    key: \"createAnimate\",\n    value: function createAnimate() {\n      var animate = document.createElementNS(\"http://www.w3.org/2000/svg\", \"animate\");\n      animate.setAttribute(\"attributeName\", \"startOffset\");\n      animate.setAttribute(\"dur\", \"2s\");\n      animate.setAttribute(\"fill\", \"freeze\");\n      animate.setAttribute(\"keyTimes\", \"0;1\");\n      return animate;\n    }\n  }, {\n    key: \"setSize\",\n    value: function setSize() {\n      var _this$getAttribute, _this$getAttribute2;\n      var width = Number((_this$getAttribute = this.getAttribute(\"width\")) !== null && _this$getAttribute !== void 0 ? _this$getAttribute : 100);\n      var height = Number((_this$getAttribute2 = this.getAttribute(\"height\")) !== null && _this$getAttribute2 !== void 0 ? _this$getAttribute2 : 100);\n      this.svg.setAttribute(\"viewBox\", \"0 0 \".concat(width, \" \").concat(height));\n      this.svg.setAttribute(\"width\", \"\".concat(width));\n      this.svg.setAttribute(\"height\", \"\".concat(height));\n      var textLength = this.text.getComputedTextLength();\n      var halfLength = height + width;\n      this.path.setAttribute(\"d\", \"M 2.5 \".concat(-(halfLength - 10), \" V \").concat(height - 5, \" H \").concat(width - 5));\n      this.svgAnimate.setAttribute(\"values\", \"0;\".concat(halfLength + height));\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [\"width\", \"height\"];\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack:///./dev/ts/components/mainFrameText/index.ts?");

/***/ }),

/***/ "./dev/ts/components/mainFrameTextFirst/index.ts":
/*!*******************************************************!*\
  !*** ./dev/ts/components/mainFrameTextFirst/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainFrameTextFirst: () => (/* binding */ MainFrameTextFirst)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nvar MainFrameTextFirst = /*#__PURE__*/function (_HTMLElement) {\n  function MainFrameTextFirst() {\n    var _this;\n    _classCallCheck(this, MainFrameTextFirst);\n    _this = _callSuper(this, MainFrameTextFirst);\n    _this.attachShadow({\n      mode: \"open\"\n    });\n    if (!_this.shadowRoot) throw Error(\"Browser does not support Shadow DOM\");\n    _this.svg = _this.createElements();\n    _this.path = _this.createPath();\n    _this.text = _this.createText();\n    _this.textPath = _this.createTextPath();\n    _this.svgAnimate = _this.createAnimate();\n    _this.text.appendChild(_this.textPath);\n    _this.textPath.appendChild(_this.svgAnimate);\n    _this.svg.appendChild(_this.path);\n    _this.svg.appendChild(_this.text);\n    _this.shadowRoot.appendChild(_this.svg);\n    return _this;\n  }\n  _inherits(MainFrameTextFirst, _HTMLElement);\n  return _createClass(MainFrameTextFirst, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.setSize();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.setSize();\n    }\n  }, {\n    key: \"createElements\",\n    value: function createElements() {\n      var svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n      return svg;\n    }\n  }, {\n    key: \"createPath\",\n    value: function createPath() {\n      var path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n      path.setAttribute(\"fill\", \"transparent\");\n      path.setAttribute(\"stroke\", \"none\");\n      path.setAttribute(\"id\", \"myPathFirst\");\n      return path;\n    }\n  }, {\n    key: \"createText\",\n    value: function createText() {\n      var text = document.createElementNS(\"http://www.w3.org/2000/svg\", \"text\");\n      text.setAttribute(\"font-size\", \"88\");\n      text.setAttribute(\"fill\", \"black\");\n      text.setAttribute(\"writing-mode\", \"vertical-rl\");\n      text.setAttribute(\"font-weight\", \"700\");\n      text.setAttribute(\"line-height\", \"1.3\");\n      text.setAttribute(\"font-family\", \"'Amiko', sans-serif\");\n      text.setAttribute(\"letter-spacing\", \".14em\");\n      return text;\n    }\n  }, {\n    key: \"createTextPath\",\n    value: function createTextPath() {\n      var textPath = document.createElementNS(\"http://www.w3.org/2000/svg\", \"textPath\");\n      textPath.setAttribute(\"href\", \"#myPathFirst\");\n      textPath.setAttribute(\"startOffset\", \"0%\");\n      textPath.textContent = \"服から服を作る\";\n      return textPath;\n    }\n  }, {\n    key: \"createAnimate\",\n    value: function createAnimate() {\n      var animate = document.createElementNS(\"http://www.w3.org/2000/svg\", \"animate\");\n      animate.setAttribute(\"attributeName\", \"startOffset\");\n      animate.setAttribute(\"dur\", \"2s\");\n      animate.setAttribute(\"fill\", \"freeze\");\n      animate.setAttribute(\"keyTimes\", \"0;1\");\n      return animate;\n    }\n  }, {\n    key: \"setSize\",\n    value: function setSize() {\n      var _this$getAttribute, _this$getAttribute2;\n      var width = Number((_this$getAttribute = this.getAttribute(\"width\")) !== null && _this$getAttribute !== void 0 ? _this$getAttribute : 100);\n      var height = Number((_this$getAttribute2 = this.getAttribute(\"height\")) !== null && _this$getAttribute2 !== void 0 ? _this$getAttribute2 : 100);\n      this.svg.setAttribute(\"viewBox\", \"0 0 \".concat(width, \" \").concat(height));\n      this.svg.setAttribute(\"width\", \"\".concat(width));\n      this.svg.setAttribute(\"height\", \"\".concat(height));\n      var textLength = this.text.getComputedTextLength();\n      var halfLength = height + width;\n      this.path.setAttribute(\"d\", \"M 0 \".concat(-(halfLength - 10), \" V \").concat(height - 5));\n      this.svgAnimate.setAttribute(\"values\", \"0;\".concat(halfLength + height - textLength - 100));\n      this.text.setAttribute(\"transform\", \"translate(\".concat(this.text.getBBox().width / 2, \", 0)\"));\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [\"width\", \"height\"];\n    }\n  }]);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack:///./dev/ts/components/mainFrameTextFirst/index.ts?");

/***/ }),

/***/ "./dev/ts/components/mainLogo/index.ts":
/*!*********************************************!*\
  !*** ./dev/ts/components/mainLogo/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainLogo: () => (/* binding */ MainLogo)\n/* harmony export */ });\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ \"./dev/ts/components/mainLogo/template.html\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./dev/ts/components/mainLogo/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\n\n\nvar MainLogo = /*#__PURE__*/function (_HTMLElement) {\n  function MainLogo() {\n    var _this;\n    _classCallCheck(this, MainLogo);\n    _this = _callSuper(this, MainLogo);\n    _this.attachShadow({\n      mode: \"open\"\n    });\n    if (!_this.shadowRoot) throw Error(\"Browser does not support Shadow DOM\");\n    _this.shadowRoot.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    var styleElement = document.createElement(\"style\");\n    styleElement.innerHTML = (_styles_css__WEBPACK_IMPORTED_MODULE_1___default());\n    _this.shadowRoot.appendChild(styleElement);\n    return _this;\n  }\n  _inherits(MainLogo, _HTMLElement);\n  return _createClass(MainLogo);\n}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack:///./dev/ts/components/mainLogo/index.ts?");

/***/ }),

/***/ "./dev/ts/controller/mainFrameBoder.ts":
/*!*********************************************!*\
  !*** ./dev/ts/controller/mainFrameBoder.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar MainFrameBorderController = function MainFrameBorderController() {\n  // DOMが完全に読み込まれてから処理を開始\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var mainFrameBorder = document.getElementById(\"js-mainFrameBorder\");\n    if (!mainFrameBorder) {\n      console.error(\"MainFrameBorder element not found!\");\n      return;\n    }\n    setSize(mainFrameBorder);\n    window.addEventListener(\"resize\", function () {\n      return setSize(mainFrameBorder);\n    });\n  });\n  var setSize = function setSize(mainFrameBorder) {\n    var width = mainFrameBorder.clientWidth;\n    var height = mainFrameBorder.clientHeight;\n    mainFrameBorder.setAttribute(\"width\", \"\".concat(width));\n    mainFrameBorder.setAttribute(\"height\", \"\".concat(height));\n    console.log(\"Size updated:\", width, height);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainFrameBorderController);\n\n//# sourceURL=webpack:///./dev/ts/controller/mainFrameBoder.ts?");

/***/ }),

/***/ "./dev/ts/controller/mainFrameBoderRight.ts":
/*!**************************************************!*\
  !*** ./dev/ts/controller/mainFrameBoderRight.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainFrameBorderRightController = function mainFrameBorderRightController() {\n  // DOMが完全に読み込まれてから処理を開始\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var mainFrameBorderRight = document.getElementById(\"js-mainFrameBorderRight\");\n    if (!mainFrameBorderRight) {\n      console.error(\"mainFrameBorderRight element not found!\");\n      return;\n    }\n    setSize(mainFrameBorderRight);\n    window.addEventListener(\"resize\", function () {\n      return setSize(mainFrameBorderRight);\n    });\n  });\n  var setSize = function setSize(mainFrameBorderRight) {\n    var width = mainFrameBorderRight.clientWidth;\n    var height = mainFrameBorderRight.clientHeight;\n    mainFrameBorderRight.setAttribute(\"width\", \"\".concat(width));\n    mainFrameBorderRight.setAttribute(\"height\", \"\".concat(height));\n    console.log(\"Size updated:\", width, height);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainFrameBorderRightController);\n\n//# sourceURL=webpack:///./dev/ts/controller/mainFrameBoderRight.ts?");

/***/ }),

/***/ "./dev/ts/controller/mainFrameText.ts":
/*!********************************************!*\
  !*** ./dev/ts/controller/mainFrameText.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar MainFrameTextController = function MainFrameTextController() {\n  // DOMが完全に読み込まれてから処理を開始\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var mainFrameText = document.getElementById(\"js-mainFrameText\");\n    if (!mainFrameText) {\n      console.error(\"MainFrameText element not found!\");\n      return;\n    }\n    setSize(mainFrameText);\n    window.addEventListener(\"resize\", function () {\n      return setSize(mainFrameText);\n    });\n  });\n  var setSize = function setSize(mainFrameText) {\n    var width = mainFrameText.clientWidth;\n    var height = mainFrameText.clientHeight;\n    mainFrameText.setAttribute(\"width\", \"\".concat(width));\n    mainFrameText.setAttribute(\"height\", \"\".concat(height));\n    console.log(\"Size updated:\", width, height);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainFrameTextController);\n\n//# sourceURL=webpack:///./dev/ts/controller/mainFrameText.ts?");

/***/ }),

/***/ "./dev/ts/controller/mainFrameTextFirst.ts":
/*!*************************************************!*\
  !*** ./dev/ts/controller/mainFrameTextFirst.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar MainFrameTextFirstController = function MainFrameTextFirstController() {\n  // DOMが完全に読み込まれてから処理を開始\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var mainFrameTextFirst = document.getElementById(\"js-mainFrameTextFirst\");\n    if (!mainFrameTextFirst) {\n      console.error(\"MainFrameTextFirst element not found!\");\n      return;\n    }\n    setSize(mainFrameTextFirst);\n    window.addEventListener(\"resize\", function () {\n      return setSize(mainFrameTextFirst);\n    });\n  });\n  var setSize = function setSize(mainFrameTextFirst) {\n    var width = mainFrameTextFirst.clientWidth;\n    var height = mainFrameTextFirst.clientHeight;\n    mainFrameTextFirst.setAttribute(\"width\", \"\".concat(width));\n    mainFrameTextFirst.setAttribute(\"height\", \"\".concat(height));\n    console.log(\"Size updated:\", width, height);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainFrameTextFirstController);\n\n//# sourceURL=webpack:///./dev/ts/controller/mainFrameTextFirst.ts?");

/***/ }),

/***/ "./dev/ts/main.ts":
/*!************************!*\
  !*** ./dev/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mainLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mainLogo */ \"./dev/ts/components/mainLogo/index.ts\");\n/* harmony import */ var _components_mainFrameBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainFrameBorder */ \"./dev/ts/components/mainFrameBorder/index.ts\");\n/* harmony import */ var _components_mainFrameText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mainFrameText */ \"./dev/ts/components/mainFrameText/index.ts\");\n/* harmony import */ var _components_mainFrameTextFirst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mainFrameTextFirst */ \"./dev/ts/components/mainFrameTextFirst/index.ts\");\n/* harmony import */ var _controller_mainFrameBoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/mainFrameBoder */ \"./dev/ts/controller/mainFrameBoder.ts\");\n/* harmony import */ var _controller_mainFrameText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller/mainFrameText */ \"./dev/ts/controller/mainFrameText.ts\");\n/* harmony import */ var _controller_mainFrameTextFirst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller/mainFrameTextFirst */ \"./dev/ts/controller/mainFrameTextFirst.ts\");\n/* harmony import */ var _components_mainFrameBorderRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mainFrameBorderRight */ \"./dev/ts/components/mainFrameBorderRight/index.ts\");\n/* harmony import */ var _controller_mainFrameBoderRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller/mainFrameBoderRight */ \"./dev/ts/controller/mainFrameBoderRight.ts\");\n/* harmony import */ var _components_mainBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mainBackground */ \"./dev/ts/components/mainBackground/index.ts\");\n\n\n\n\n\n\n\n\n\n\ncustomElements.define(\"nakasone-logo\", _components_mainLogo__WEBPACK_IMPORTED_MODULE_0__.MainLogo);\ncustomElements.define(\"nakasone-frame-border\", _components_mainFrameBorder__WEBPACK_IMPORTED_MODULE_1__.MainFrameBorder);\ncustomElements.define(\"nakasone-frame-border-right\", _components_mainFrameBorderRight__WEBPACK_IMPORTED_MODULE_7__.MainFrameBorderRight);\ncustomElements.define(\"nakasone-frame-text\", _components_mainFrameText__WEBPACK_IMPORTED_MODULE_2__.MainFrameText);\ncustomElements.define(\"nakasone-frame-text-first\", _components_mainFrameTextFirst__WEBPACK_IMPORTED_MODULE_3__.MainFrameTextFirst);\ncustomElements.define(\"nakasone-background\", _components_mainBackground__WEBPACK_IMPORTED_MODULE_9__.MainBackground);\n\n//animation\n\n(0,_controller_mainFrameBoder__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_controller_mainFrameText__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_controller_mainFrameTextFirst__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_controller_mainFrameBoderRight__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack:///./dev/ts/main.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dev/ts/components/mainBackground/styles.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dev/ts/components/mainBackground/styles.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.outer {\n  width: 100%;\n  height: 100%;\n  padding: 100px 100px;\n  border: 7px solid black;\n  display: flex; /* Flexboxを使って中央揃え */\n  justify-content: center; /* 水平方向に中央 */\n  align-items: center;\n}\n.inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: 7px solid black;\n  padding: 0 20px;\n  overflow: hidden;\n}\n.img {\n  position: absolute;\n  width: 150px;\n  height: auto;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./dev/ts/components/mainBackground/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dev/ts/components/mainLogo/styles.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dev/ts/components/mainLogo/styles.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Amiko:wght@400;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host{\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr;\n    grid-template-rows:2fr 3fr 2fr;\n    grid-template-areas:\n        \"wearing arrow-upRight bee\"\n        \"arrow-leftUp logo arrow-rightDown\" \n        \"create arrow-downLeft recycle\";\n}\n\n.logo {\n    grid-area: logo;\n}\n\n.logo img{\n    max-width: 100%;\n    height: 100%;\n    width: auto;\n    object-fit: contain;\n}\n\n\n.icon{\n    display: flex;\n    flex-direction: column;\n    justify-content:start;\n    row-gap: 8%;\n    align-items: center;\n    overflow: hidden;\n    &.--wearing {\n        grid-area: wearing;\n    }\n    &.--bee {\n        grid-area: bee;\n    }\n    &.--create {\n        grid-area: create;\n    }\n    &.--recycle {\n        grid-area: recycle;\n    }\n    &.--create p{\n        order: 2;\n    }\n    &.--recycle p{\n        order: 2;\n    }\n    &.--create picture{\n        order: 1;\n    }\n    &.--recycle picture{\n        order: 1;\n    }\n}\n.icon p{\n    font-family: \"Amiko\", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 160%;\n    letter-spacing: .14em;\n    margin: 0;\n    text-wrap: nowrap;\n}\n.icon picture{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    height: 64%;\n    width: 100%;\n}\n.icon img{\n    max-width: 100%;\n        height: 100%;\n        width: auto;\n        object-fit: contain;\n}\n\n.arrow {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    &.--upRight {\n        grid-area: arrow-upRight;\n    }\n    &.--downLeft {\n        grid-area: arrow-downLeft;\n    }\n    &.--leftUp {\n        grid-area: arrow-leftUp;\n    }\n    &.--rightDown {\n        grid-area: arrow-rightDown;\n    }\n    &.--upRight img{\n        max-width: 90%;\n        height: 90%;\n        width: auto;\n        object-fit: contain;\n        object-position:  0% 8%;\n    }\n    &.--downLeft img{\n        max-width: 90%;\n        height: 90%;\n        width: auto;\n        object-fit: contain;\n        object-position: 0% 92%;\n    }\n    &.--leftUp img{\n        max-height: 90%;\n        width: 90%;\n        height: auto;\n        object-fit: contain;\n        object-position: 8% 0;\n    }\n    &.--rightDown img{\n        max-height: 90%;\n        width: 90%;\n        height: auto;\n        object-fit: contain;\n        object-position: 92% 0;\n    }\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./dev/ts/components/mainLogo/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./dev/ts/components/mainLogo/template.html":
/*!**************************************************!*\
  !*** ./dev/ts/components/mainLogo/template.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/logo.svg */ \"./assets/images/top/main/logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/wear.svg */ \"./assets/images/top/main/wear.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/bee.webp */ \"./assets/images/top/main/bee.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/bee.png */ \"./assets/images/top/main/bee.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/create.svg */ \"./assets/images/top/main/create.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/recycle.svg */ \"./assets/images/top/main/recycle.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/arrowRight.svg */ \"./assets/images/top/main/arrowRight.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/arrowLeft.svg */ \"./assets/images/top/main/arrowLeft.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/arrowUp.svg */ \"./assets/images/top/main/arrowUp.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/top/main/arrowDown.svg */ \"./assets/images/top/main/arrowDown.svg\"), __webpack_require__.b);\n// Module\nvar code = `<!-- text -->\n<picture class=\"logo\">\n    <source srcset=\"${___HTML_LOADER_IMPORT_0___}\" type=\"image/svg+xml\">\n    <img src=\"${___HTML_LOADER_IMPORT_0___}\">\n</picture>\n<!-- icon -->\n<div class=\"icon --wearing\">\n    <p class=\"textWearing\">着る</p>\n    <picture class=\"imgWearing\">\n        <source srcset=\"${___HTML_LOADER_IMPORT_1___}\" type=\"image/svg+xml\">\n        <img src=\"${___HTML_LOADER_IMPORT_1___}\">\n    </picture>\n</div>\n<div class=\"icon --bee\">\n    <p class=\"textBee\">服を回収する</p>\n    <picture class=\"imgBee\">\n        <source srcset=\"${___HTML_LOADER_IMPORT_2___}\" type=\"image/webp\">\n        <source srcset=\"${___HTML_LOADER_IMPORT_3___}\" type=\"image/png\">\n        <img src=\"${___HTML_LOADER_IMPORT_3___}\">\n    </picture>\n</div>\n<div class=\"icon --create\">\n    <p class=\"textCreate\">服を作る</p>\n    <picture class=\"imgCreate\">\n        <source srcset=\"${___HTML_LOADER_IMPORT_4___}\" type=\"image/svg+xml\">\n        <img src=\"${___HTML_LOADER_IMPORT_4___}\">\n    </picture>\n</div>\n<div class=\"icon --recycle\">\n    <p class=\"textRecycle\">リサイクル</p>\n    <picture class=\"imgRecycle\">\n        <source srcset=\"${___HTML_LOADER_IMPORT_5___}\" type=\"image/svg+xml\">\n        <img  src=\"${___HTML_LOADER_IMPORT_5___}\">\n    </picture>\n</div>\n<!-- arrow -->\n<picture class=\"arrow --upRight\">\n    <source srcset=\"${___HTML_LOADER_IMPORT_6___}\" type=\"image/svg+xml\">\n    <img src=\"${___HTML_LOADER_IMPORT_6___}\">\n</picture>\n<picture class=\"arrow --downLeft\">\n    <source srcset=\"${___HTML_LOADER_IMPORT_7___}\" type=\"image/svg+xml\">\n    <img src=\"${___HTML_LOADER_IMPORT_7___}\">\n</picture>\n<picture class=\"arrow --leftUp\">\n    <source srcset=\"${___HTML_LOADER_IMPORT_8___}\" type=\"image/svg+xml\">\n    <img src=\"${___HTML_LOADER_IMPORT_8___}\">\n</picture>\n<picture class=\"arrow --rightDown\">\n    <source srcset=\"${___HTML_LOADER_IMPORT_9___}\" type=\"image/svg+xml\">\n    <img src=\"${___HTML_LOADER_IMPORT_9___}\">\n</picture>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./dev/ts/components/mainLogo/template.html?");

/***/ }),

/***/ "./dev/ts/components/mainBackground/styles.css":
/*!*****************************************************!*\
  !*** ./dev/ts/components/mainBackground/styles.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n        var result = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./dev/ts/components/mainBackground/styles.css\");\n\n        if (result && result.__esModule) {\n            result = result.default;\n        }\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./dev/ts/components/mainBackground/styles.css?");

/***/ }),

/***/ "./dev/ts/components/mainLogo/styles.css":
/*!***********************************************!*\
  !*** ./dev/ts/components/mainLogo/styles.css ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n        var result = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./dev/ts/components/mainLogo/styles.css\");\n\n        if (result && result.__esModule) {\n            result = result.default;\n        }\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./dev/ts/components/mainLogo/styles.css?");

/***/ }),

/***/ "./assets/images/top/main/arrowDown.svg":
/*!**********************************************!*\
  !*** ./assets/images/top/main/arrowDown.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b99e8cfb67ef45dc5092.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/arrowDown.svg?");

/***/ }),

/***/ "./assets/images/top/main/arrowLeft.svg":
/*!**********************************************!*\
  !*** ./assets/images/top/main/arrowLeft.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"72771be5249d24de69b2.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/arrowLeft.svg?");

/***/ }),

/***/ "./assets/images/top/main/arrowRight.svg":
/*!***********************************************!*\
  !*** ./assets/images/top/main/arrowRight.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9785d052501678afd5cd.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/arrowRight.svg?");

/***/ }),

/***/ "./assets/images/top/main/arrowUp.svg":
/*!********************************************!*\
  !*** ./assets/images/top/main/arrowUp.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d5b750badd20057b11a4.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/arrowUp.svg?");

/***/ }),

/***/ "./assets/images/top/main/bee.png":
/*!****************************************!*\
  !*** ./assets/images/top/main/bee.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a70d5a4770c72b42061d.png\";\n\n//# sourceURL=webpack:///./assets/images/top/main/bee.png?");

/***/ }),

/***/ "./assets/images/top/main/bee.webp":
/*!*****************************************!*\
  !*** ./assets/images/top/main/bee.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"adf958edeb62d65daa96.webp\";\n\n//# sourceURL=webpack:///./assets/images/top/main/bee.webp?");

/***/ }),

/***/ "./assets/images/top/main/create.svg":
/*!*******************************************!*\
  !*** ./assets/images/top/main/create.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f77679f078806a1d7c40.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/create.svg?");

/***/ }),

/***/ "./assets/images/top/main/logo.svg":
/*!*****************************************!*\
  !*** ./assets/images/top/main/logo.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a51a16234fe146d8ab7d.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/logo.svg?");

/***/ }),

/***/ "./assets/images/top/main/recycle.svg":
/*!********************************************!*\
  !*** ./assets/images/top/main/recycle.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b8ac5e8e31fef4997754.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/recycle.svg?");

/***/ }),

/***/ "./assets/images/top/main/wear.svg":
/*!*****************************************!*\
  !*** ./assets/images/top/main/wear.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"364e92b94ff111f9d398.svg\";\n\n//# sourceURL=webpack:///./assets/images/top/main/wear.svg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/ts/main.ts");
/******/ 	
/******/ })()
;