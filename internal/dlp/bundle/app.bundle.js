/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 630:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/devtools-detector/lib/devtools-detector.js
var devtools_detector = __webpack_require__(954);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/util/path.ts
var WebPath;
(function (WebPath) {
    /**
     * Checks if an string link is valid
     * @param input string
     * @returns {boolean} boolean
     */
    function validURL(input) {
        var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
        return !!pattern.test(input);
    }
    WebPath.validURL = validURL;
    /**
     * Retuns the current page link
     * @param url Current url
     * @returns {string} An sub path without current url
     */
    function getSubPath(url) {
        return window.location.href.replace(/(\?(.*?)=(.*)|\?)/gm, "") + url;
    }
    WebPath.getSubPath = getSubPath;
    function setURL(callback) {
        var loc = window.location.pathname;
        var set = function (data, unused, url) { return window.history.pushState(data, unused, url); };
        var currentPath = loc === "/" ? "" : loc;
        if (typeof callback == "function") {
            callback(set, currentPath);
        }
    }
    WebPath.setURL = setURL;
})(WebPath || (WebPath = {}));
var path = WebPath;
/* harmony default export */ const util_path = (path);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(814);
;// CONCATENATED MODULE: ./src/components/LinkIcon.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var LinkIcon = /** @class */ (function (_super) {
    __extends(LinkIcon, _super);
    function LinkIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkIcon.prototype.render = function () {
        var _a = this.props, link = _a.link, icon = _a.icon, title = _a.title;
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("a", __assign({ target: "_blank", className: "iconColor", href: link }, { children: (0,jsx_runtime.jsx)("i", __assign({ title: title }, { children: (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, { className: "iconColor", icon: ["fab", icon] }) })) })) }));
    };
    return LinkIcon;
}(react.Component));
/* harmony default export */ const components_LinkIcon = (LinkIcon);

;// CONCATENATED MODULE: ./src/components/LinkWrapper.tsx
var LinkWrapper_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LinkWrapper_assign = (undefined && undefined.__assign) || function () {
    LinkWrapper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return LinkWrapper_assign.apply(this, arguments);
};


var LinkWrapper = /** @class */ (function (_super) {
    LinkWrapper_extends(LinkWrapper, _super);
    function LinkWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkWrapper.prototype.render = function () {
        var children = this.props.children;
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("div", LinkWrapper_assign({ className: "icons-social" }, { children: children })) }));
    };
    return LinkWrapper;
}(react.Component));
/* harmony default export */ const components_LinkWrapper = (LinkWrapper);

// EXTERNAL MODULE: ./node_modules/jss/dist/jss.esm.js + 5 modules
var jss_esm = __webpack_require__(917);
// EXTERNAL MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js + 20 modules
var jss_preset_default_esm = __webpack_require__(121);
;// CONCATENATED MODULE: ./src/styles/themes/green-white.ts
var GreenWhite = {
    "@global": {
        main: {
            background: "#43a047",
            color: "#fafafa",
        },
        ".iconColor": {
            color: "#fafafa",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/indigo-white.ts
var IndigoWhite = {
    "@global": {
        main: {
            background: "#303f9f",
            color: "#fafafa",
        },
        ".iconColor": {
            color: "#fafafa",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/red-black.ts
var RedBlack = {
    "@global": {
        main: {
            background: "#af3d4e",
            color: "#1e1e1e",
        },
        ".iconColor": {
            color: "#1e1e1e",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/red-white.ts
var RedWhite = {
    "@global": {
        main: {
            background: "#af3d4e",
            color: "#fafafa",
        },
        ".iconColor": {
            color: "#fafafa",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/white-blue.ts
var WhiteBlue = {
    "@global": {
        main: {
            background: "#fafafa",
            color: "#0277bd",
        },
        ".iconColor": {
            color: "#0277bd",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/white-grey.ts
var WhiteGrey = {
    "@global": {
        main: {
            background: "#ededed",
            color: "#4b5658",
        },
        ".iconColor": {
            color: "#4b5658",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/white-indigo.ts
var WhiteIndigo = {
    "@global": {
        main: {
            background: "#e8eaf6",
            color: "#303f9f",
        },
        ".iconColor": {
            color: "#303f9f",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/white-red.ts
var WhiteRed = {
    "@global": {
        main: {
            background: "#ededed",
            color: "#af3d4e",
        },
        ".iconColor": {
            color: "#af3d4e",
        },
    },
};

;// CONCATENATED MODULE: ./src/styles/themes/yellow-black.ts
var YellowBlack = {
    "@global": {
        main: {
            background: "#ffeb3b",
            color: "#1e1e1e",
        },
        ".iconColor": {
            color: "#1e1e1e",
        },
    },
};

;// CONCATENATED MODULE: ./src/util/themeSelector.ts











var Themes = {
    GreenWhite: "green-white",
    GrayWhite: "grey-white",
    IndigoWhite: "indigo-white",
    RedBlack: "red-black",
    RedWhite: "red-white",
    WhiteBlue: "white-blue",
    WhiteGrey: "white-grey",
    WhiteIndigo: "white-indigo",
    WhiteRed: "white-red",
    YellowBlack: "yellow-black",
};
var ThemeSelector = /** @class */ (function () {
    function ThemeSelector(theme) {
        switch (theme) {
            case Themes.GreenWhite:
                this.useTheme(GreenWhite);
                break;
            case Themes.GreenWhite:
                this.useTheme(GreenWhite);
                break;
            case Themes.IndigoWhite:
                this.useTheme(IndigoWhite);
                break;
            case Themes.RedBlack:
                this.useTheme(RedBlack);
                break;
            case Themes.RedWhite:
                this.useTheme(RedWhite);
                break;
            case Themes.WhiteBlue:
                this.useTheme(WhiteBlue);
                break;
            case Themes.WhiteGrey:
                this.useTheme(WhiteGrey);
                break;
            case Themes.WhiteIndigo:
                this.useTheme(WhiteIndigo);
                break;
            case Themes.WhiteRed:
                this.useTheme(WhiteRed);
                break;
            case Themes.YellowBlack:
                this.useTheme(YellowBlack);
                break;
            default:
                console.log("Unknown theme: " + theme);
                this.useTheme(RedBlack);
                break;
        }
    }
    ThemeSelector.prototype.useTheme = function (style) {
        jss_esm/* default.setup */.ZP.setup((0,jss_preset_default_esm/* default */.Z)());
        jss_esm/* default.createStyleSheet */.ZP.createStyleSheet(style).attach();
    };
    return ThemeSelector;
}());
/* harmony default export */ const themeSelector = (ThemeSelector);

// EXTERNAL MODULE: ./node_modules/scriptjs/dist/script.js
var script = __webpack_require__(277);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/util/browsers.ts

var browsers = {
    browserName: lib/* browserName */.KC,
    browserVersion: lib/* browserVersion */.x_,
    deviceType: lib/* deviceType */.vO,
    engineName: lib/* engineName */.AA,
    engineVersion: lib/* engineVersion */.TI,
    isBrowser: lib/* isBrowser */.jU,
    isChrome: lib/* isChrome */.i7,
    isChromium: lib/* isChromium */.mJ,
    isConsole: lib/* isConsole */.cl,
    isDesktop: lib/* isDesktop */.nI,
    isEdge: lib/* isEdge */.un,
    isEdgeChromium: lib/* isEdgeChromium */.kD,
    isElectron: lib/* isElectron */.d,
    isEmbedded: lib/* isEmbedded */.xR,
    isFirefox: lib/* isFirefox */.vU,
    isIE: lib/* isIE */.w1,
    isIOS: lib/* isIOS */.gn,
    isIOS13: lib/* isIOS13 */.gP,
    isIPad13: lib/* isIPad13 */.Hg,
    isIPhone13: lib/* isIPhone13 */.zL,
    isIPod13: lib/* isIPod13 */.XE,
    isMacOs: lib/* isMacOs */.Q5,
    isMIUI: lib/* isMIUI */.vb,
    isMobile: lib/* isMobile */.tq,
    isMobileOnly: lib/* isMobileOnly */.UA,
    isMobileSafari: lib/* isMobileSafari */.TL,
    isOpera: lib/* isOpera */.f0,
    isSafari: lib/* isSafari */.G6,
    isSamsungBrowser: lib/* isSamsungBrowser */.op,
    isSmartTV: lib/* isSmartTV */.L6,
    isTablet: lib/* isTablet */.Em,
    isWearable: lib/* isWearable */.fB,
    isWinPhone: lib/* isWinPhone */.xk,
    isYandex: lib/* isYandex */.kU,
    mobileModel: lib/* mobileModel */.N7,
    mobileVendor: lib/* mobileVendor */.B3,
};

;// CONCATENATED MODULE: ./src/App.tsx
var App_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App_assign = (undefined && undefined.__assign) || function () {
    App_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return App_assign.apply(this, arguments);
};












var App = /** @class */ (function (_super) {
    App_extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            script_default()(util_path.getSubPath("dlp.config.js"), function () {
                var isInstagram = /Instagram/i.test(window.navigator.userAgent);
                var isFacebook = /Facebook/i.test(window.navigator.userAgent);
                _this.setState(config(App_assign(App_assign({ isInstagram: isInstagram, isFacebook: isFacebook }, browsers), { osVersion: lib/* osVersion */.MM, osName: lib/* osName */.BF, fullBrowserVersion: lib/* fullBrowserVersion */.o3, getUA: lib/* getUA */.z$ }), Themes));
            });
        };
        _this.componentDidUpdate = function () {
            new themeSelector(_this.state.theme);
            if (true) {
                (0,devtools_detector.addListener)(function (isOpen) { return _this.setState({ devToolsOpen: isOpen }); });
                (0,devtools_detector.launch)();
            }
        };
        _this.render = function () {
            var _a = _this.state, intro = _a.intro, tagline = _a.tagline, links = _a.links, devToolsOpen = _a.devToolsOpen;
            if (devToolsOpen) {
                return ((0,jsx_runtime.jsx)("main", { children: (0,jsx_runtime.jsx)("div", App_assign({ className: "intro" }, { children: "Turn off DevTools" }), "intro") }));
            }
            else {
                return ((0,jsx_runtime.jsxs)("main", { children: [(0,jsx_runtime.jsx)("div", App_assign({ className: "intro" }, { children: intro }), "intro"), (0,jsx_runtime.jsx)("div", App_assign({ className: "tagline" }, { children: tagline }), "tagline"), (0,jsx_runtime.jsx)(components_LinkWrapper, { children: links === null || links === void 0 ? void 0 : links.map(function (item) {
                                if (!(item === null || item === void 0 ? void 0 : item.hide)) {
                                    return ((0,jsx_runtime.jsx)(components_LinkIcon, { link: item === null || item === void 0 ? void 0 : item.link, icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title }, item === null || item === void 0 ? void 0 : item.icon));
                                }
                                else {
                                    return null;
                                }
                            }) }, "icons-social")] }));
            }
        };
        _this.componentDidCatch = function (error, errorInfo) {
            var container = document.querySelector("app");
            var root = (0,client/* createRoot */.s)(container);
            root.render((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", App_assign({ className: "intro" }, { children: error.toString() })), (0,jsx_runtime.jsx)("div", App_assign({ className: "tagline" }, { children: errorInfo.toString() }))] }));
        };
        _this.state = {
            devToolsOpen: false,
        };
        return _this;
    }
    App.render = function (component, prevents) {
        // Setup root node where our React app will be attached to
        // @ts-ignore
        var app = document.createElement(component === null || component === void 0 ? void 0 : component.name);
        document.body.prepend(app);
        // Render the app component
        // @ts-ignore
        var container = document.querySelector(component === null || component === void 0 ? void 0 : component.name);
        var root = (0,client/* createRoot */.s)(container);
        root.render(component);
        prevents.map(function (item) {
            window.addEventListener(item, function (e) {
                e.preventDefault();
                console.info("".concat(item, " is prevented from using"));
            });
        });
    };
    return App;
}(react.Component));
/* harmony default export */ const src_App = (App);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var fontawesome_svg_core_index_es = __webpack_require__(947);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__(417);
;// CONCATENATED MODULE: ./src/index.tsx




// Styles


// Add brands icons
fontawesome_svg_core_index_es/* library.add */.vI.add(free_brands_svg_icons_index_es/* fab */.vnX);
src_App.render((0,jsx_runtime.jsx)(src_App, {}), ["contextmenu", "mousedown"]);


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcom_dergoogler"] = self["webpackChunkcom_dergoogler"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(630)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;