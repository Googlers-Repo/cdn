(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/onsenui/js/onsenui.js
var onsenui = __webpack_require__(1394);
var onsenui_default = /*#__PURE__*/__webpack_require__.n(onsenui);
// EXTERNAL MODULE: ./node_modules/eruda/eruda.js
var eruda = __webpack_require__(2007);
var eruda_default = /*#__PURE__*/__webpack_require__.n(eruda);
;// CONCATENATED MODULE: ./src/misc/config.ts
const config = {
    base: {
        title: "Hentai Web",
        swipeable: true,
    },
    options: {
        userAgent: "HENTAI_WEB_AGENT",
        userAgentWindows: "HENTAI_WEB_WINDOWS",
    },
};
/* harmony default export */ const misc_config = (config);

// EXTERNAL MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs
var js_yaml = __webpack_require__(1272);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"1.4.1"};
// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__(1354);
var crypto_js_default = /*#__PURE__*/__webpack_require__.n(crypto_js);
// EXTERNAL MODULE: ./node_modules/safer-eval/lib/browser.js
var browser = __webpack_require__(5058);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/misc/Logger.ts
class Logger {
    static log(message, ...optionalParams) {
        console.log(`%c[WARN]:%c ${message}`, "color: #57c0f0", "", ...optionalParams);
    }
    static warn(message, ...optionalParams) {
        console.log(`%c[WARN]:%c ${message}`, "color: #ef721f", "", ...optionalParams);
    }
    static error(message, ...optionalParams) {
        console.log(`%c[ERROR]:%c ${message}`, "color: #a41117", "", ...optionalParams);
    }
}
/* harmony default export */ const misc_Logger = (Logger);

;// CONCATENATED MODULE: ./src/misc/tools.ts




class tools_tools {
    /**
     * Converts an string into boolean
     * @param string
     * @returns {Boolean}
     */
    static stringToBoolean(string) {
        if (typeof string == "boolean")
            return string;
        switch (string) {
            case "true":
            case "yes":
            case "1":
                return true;
            case "false":
            case "no":
            case "0":
            case null:
                return false;
            default:
                return Boolean(string);
        }
    }
    /**
     * Returns a reference to the first object with the specified value of the ID attribute.
     * @param id String that specifies the ID value.
     * @deprecated
     *
     * Use
     * ```ts
     * // Id's
     * tools.ref("element", (element: HTMLElement) => { element.style.display = "none" })
     *
     * // Refs
     * tools.ref(this.myRef, (reff: HTMLElement) => { reff.style.display = "none" })
     * ```
     */
    static getElementById(id, callback) {
        var e;
        if ((e = document.getElementById(id))) {
            if (typeof callback == "function") {
                callback(e);
                name;
            }
        }
    }
    /**
     * @param id
     * @param callback HTMLElement
     *
     * @description
     * Usage
     * ```ts
     * // Id's
     * tools.ref("element", (element: HTMLElement) => { element.style.display = "none" })
     *
     * // Refs
     * tools.ref(this.myRef, (ref: HTMLElement) => { ref.style.display = "none" })
     * ```
     */
    static ref(id, callback) {
        if (typeof id == "string") {
            var element;
            if ((element = document.getElementById(id))) {
                if (typeof callback == "function") {
                    callback(element);
                }
            }
        }
        else {
            var reff;
            if ((reff = id)) {
                if (reff && reff.current) {
                    if (typeof callback == "function") {
                        const ref = reff.current;
                        callback(ref);
                    }
                }
            }
        }
    }
    static gesture(e, eventName, callback) {
        tools_tools.ref(e, (element) => {
            element.addEventListener(eventName, () => {
                if (typeof callback === "function") {
                    callback();
                }
            });
        });
    }
    /**
     * Inline IF statement
     * @deprecated Use the normal inline if statement
     */
    static typeIF(_, __, ___) {
        if (this.stringToBoolean(_)) {
            return __;
        }
        else {
            return ___;
        }
    }
    static getMisc(url, callback, options) {
        axios_default().get(window.location.href.replace(/(\?(.*?)=(.*)|\?)/gm, "") + `misc/${url}`).then((res) => {
            let data;
            if (options === null || options === void 0 ? void 0 : options.json) {
                data = res.data;
            }
            else {
                data = js_yaml/* default.load */.ZP.load(res.data, { json: true });
            }
            if (typeof callback === "function") {
                callback(data);
            }
        });
    }
    static inViewport(element) {
        const scroll = window.scrollY || window.pageYOffset;
        const boundsTop = element.getBoundingClientRect().top + scroll;
        const viewport = {
            top: scroll,
            bottom: scroll + window.innerHeight,
        };
        const bounds = {
            top: boundsTop,
            bottom: boundsTop + element.clientHeight,
        };
        return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
    }
    static PluginInitial(folder) {
        const getPluginConfig = src_native.fs.readFile("plugins/" + folder + "/plugin.yaml", {
            parse: { use: true, mode: "yaml" },
        });
        if (src_native.getPref("enableCustomScriptLoading") === "true") {
            if (src_native.fs.isFileExist("plugins.yaml")) {
                if (!src_native.fs.isFileExist("plugins/" + folder + "/" + getPluginConfig.run)) {
                    misc_Logger.error(`An plugin for ${folder} was not found!`);
                    src_native.setPref("Plugin.Settings." + folder, "null");
                }
                else {
                    src_native.eval(src_native.fs.readFile("plugins/" + folder + "/" + getPluginConfig.run), {
                        plugin: {
                            name: folder,
                        },
                    });
                }
            }
        }
    }
    static if(item) {
        if (this.stringToBoolean(item.wenn)) {
            return item.dann;
        }
        else {
            return item.fehler;
        }
    }
    static arrayRemove(arr, position) {
        arr.splice(position, position);
        return arr;
    }
    static typeCheck(_, __) {
        if (_ === undefined || _ === null || _ === "" || __ === 0 || _ === "0" || _ === false || _ === "false") {
            return __;
        }
        else {
            return _;
        }
    }
    static getUrlParam(param) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[?&]" + param + "=([^&#]*)");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    }
}
/**
 * Easy use undefined
 */
tools_tools.undefined =  false || undefined;
/* harmony default export */ const misc_tools = (tools_tools);

// EXTERNAL MODULE: ./node_modules/jss/dist/jss.esm.js + 5 modules
var jss_esm = __webpack_require__(8917);
// EXTERNAL MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js + 20 modules
var jss_preset_default_esm = __webpack_require__(8121);
;// CONCATENATED MODULE: ./src/localization/utils/LocalizedStrings.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function getInterfaceLanguage() {
  var defaultLang = "en-US";

  if (typeof navigator === "undefined") {
    return defaultLang;
  }

  var nav = navigator; // eslint-disable-line no-undef

  if (nav) {
    if (nav.language) {
      return nav.language;
    }

    if (!!nav.languages && !!nav.languages[0]) {
      return nav.languages[0];
    }

    if (nav.userLanguage) {
      return nav.userLanguage;
    }

    if (nav.browserLanguage) {
      return nav.browserLanguage;
    }
  }

  return defaultLang;
}
/**
 * Get the best match based on the language passed and the available languages
 * @param {*} language
 * @param {*} props
 */


function getBestMatchingLanguage(language, props) {
  // If an object with the passed language key exists return it
  if (props[language]) return language; // if the string is composed try to find a match with only the first language identifiers (en-US --> en)

  var idx = language.indexOf("-");
  var auxLang = idx >= 0 ? language.substring(0, idx) : language;
  return props[auxLang] ? auxLang : Object.keys(props)[0];
}
/**
 * Check that the keys used in the provided strings object don't collide with existing property
 * already defined in the LocalizedStrings object
 * @param {*} translationKeys
 */


function validateTranslationKeys(translationKeys) {
  var reservedNames = ["_interfaceLanguage", "_language", "_defaultLanguage", "_defaultLanguageFirstLevelKeys", "_props"];
  translationKeys.forEach(function (key) {
    if (reservedNames.indexOf(key) !== -1) {
      throw new Error("".concat(key, " cannot be used as a key. It is a reserved word."));
    }
  });
}
/**
 * Get a random pseudo string back after specified a length
 * @param {Number} len - How many characters to get back
 */


function randomPseudo(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

var placeholderReplaceRegex = /(\{[\d|\w]+\})/;
var placeholderReferenceRegex = /(\$ref\{[\w|.]+\})/;

var LocalizedStrings = /*#__PURE__*/function () {
  /**
   * Constructor used to provide the strings objects in various language and the optional callback to get
   * the interface language
   * @param {*} props - the strings object
   * @param {Function} options.customLanguageInterface - the optional method to use to get the InterfaceLanguage
   * @param {Boolean} options.pseudo - convert all strings to pseudo, helpful when implementing
   * @param {Boolean} options.pseudoMultipleLanguages - add 40% to pseudo, helps with translations in the future
   * @param {Boolean} options.logsEnabled - Enable/Disable console.log outputs (default=true)
   */
  function LocalizedStrings(props, options) {
    _classCallCheck(this, LocalizedStrings);

    // Compatibility fix with previous version
    if (typeof options === "function") {
      /* eslint-disable no-param-reassign */
      options = {
        customLanguageInterface: options
      };
      /* eslint-enable */
    }

    this._opts = Object.assign({}, {
      customLanguageInterface: getInterfaceLanguage,
      pseudo: false,
      pseudoMultipleLanguages: false,
      logsEnabled: true
    }, options);
    this._interfaceLanguage = this._opts.customLanguageInterface();
    this._language = this._interfaceLanguage;
    this.setContent(props);
  }
  /**
   * Set the strings objects based on the parameter passed in the constructor
   * @param {*} props
   */


  _createClass(LocalizedStrings, [{
    key: "setContent",
    value: function setContent(props) {
      var _this = this;

      var _Object$keys = Object.keys(props),
          _Object$keys2 = _slicedToArray(_Object$keys, 1),
          defaultLang = _Object$keys2[0];

      this._defaultLanguage = defaultLang;
      this._defaultLanguageFirstLevelKeys = []; // Store locally the passed strings

      this._props = props;
      validateTranslationKeys(Object.keys(props[this._defaultLanguage])); // Store first level keys (for identifying missing translations)

      Object.keys(this._props[this._defaultLanguage]).forEach(function (key) {
        if (typeof _this._props[_this._defaultLanguage][key] === "string") {
          _this._defaultLanguageFirstLevelKeys.push(key);
        }
      }); // Set language to its default value (the interface)

      this.setLanguage(this._interfaceLanguage); // Developermode with pseudo

      if (this._opts.pseudo) {
        this._pseudoAllValues(this._props);
      }
    }
    /**
     * Replace all strings to pseudo value
     * @param {Object} obj - Loopable object
     */

  }, {
    key: "_pseudoAllValues",
    value: function _pseudoAllValues(obj) {
      var _this2 = this;

      Object.keys(obj).forEach(function (property) {
        if (_typeof(obj[property]) === "object") {
          _this2._pseudoAllValues(obj[property]);
        } else if (typeof obj[property] === "string") {
          if (obj[property].indexOf("[") === 0 && obj[property].lastIndexOf("]") === obj[property].length - 1) {
            // already psuedo fixed
            return;
          } // @TODO must be a way to get regex to find all replaceble strings except our replacement variables


          var strArr = obj[property].split(" ");

          for (var i = 0; i < strArr.length; i += 1) {
            if (strArr[i].match(placeholderReplaceRegex)) {// we want to keep this string, includes specials
            } else if (strArr[i].match(placeholderReferenceRegex)) {// we want to keep this string, includes specials
            } else {
              var len = strArr[i].length;

              if (_this2._opts.pseudoMultipleLanguages) {
                len = parseInt(len * 1.4, 10); // add length with 40%
              }

              strArr[i] = randomPseudo(len);
            }
          }

          obj[property] = "[".concat(strArr.join(" "), "]"); // eslint-disable-line no-param-reassign
        }
      });
    }
    /**
     * Can be used from ouside the class to force a particular language
     * indipendently from the interface one
     * @param {*} language
     */

  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      var _this3 = this;

      // Check if exists a translation for the current language or if the default
      // should be used
      var bestLanguage = getBestMatchingLanguage(language, this._props);
      var defaultLanguage = Object.keys(this._props)[0];
      this._language = bestLanguage; // Associate the language object to the this object

      if (this._props[bestLanguage]) {
        // delete default propery values to identify missing translations
        for (var i = 0; i < this._defaultLanguageFirstLevelKeys.length; i += 1) {
          delete this[this._defaultLanguageFirstLevelKeys[i]];
        }

        var localizedStrings = Object.assign({}, this._props[this._language]);
        Object.keys(localizedStrings).forEach(function (key) {
          _this3[key] = localizedStrings[key];
        }); // Now add any string missing from the translation but existing in the default language

        if (defaultLanguage !== this._language) {
          localizedStrings = this._props[defaultLanguage];

          this._fallbackValues(localizedStrings, this);
        }
      }
    }
    /**
     * Load fallback values for missing translations
     * @param {*} defaultStrings
     * @param {*} strings
     */

  }, {
    key: "_fallbackValues",
    value: function _fallbackValues(defaultStrings, strings) {
      var _this4 = this;

      Object.keys(defaultStrings).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(defaultStrings, key) && !strings[key] && strings[key] !== "") {
          strings[key] = defaultStrings[key]; // eslint-disable-line no-param-reassign

          if (_this4._opts.logsEnabled) {
            console.log("\uD83D\uDEA7 \uD83D\uDC77 key '".concat(key, "' not found in localizedStrings for language ").concat(_this4._language, " \uD83D\uDEA7"));
          }
        } else if (typeof strings[key] !== "string") {
          // It's an object
          _this4._fallbackValues(defaultStrings[key], strings[key]);
        }
      });
    }
    /**
     * The current language displayed (could differ from the interface language
     * if it has been forced manually and a matching translation has been found)
     */

  }, {
    key: "getLanguage",
    value: function getLanguage() {
      return this._language;
    }
    /**
     * The current interface language (could differ from the language displayed)
     */

  }, {
    key: "getInterfaceLanguage",
    value: function getInterfaceLanguage() {
      return this._interfaceLanguage;
    }
    /**
     * Return an array containing the available languages passed as props in the constructor
     */

  }, {
    key: "getAvailableLanguages",
    value: function getAvailableLanguages() {
      var _this5 = this;

      if (!this._availableLanguages) {
        this._availableLanguages = [];
        Object.keys(this._props).forEach(function (key) {
          _this5._availableLanguages.push(key);
        });
      }

      return this._availableLanguages;
    } // Format the passed string replacing the numbered or tokenized placeholders
    // eg. 1: I'd like some {0} and {1}, or just {0}
    // eg. 2: I'd like some {bread} and {butter}, or just {bread}
    // eg. 3: I'd like some $ref{bread} and $ref{butter}, or just $ref{bread}
    // Use example:
    // eg. 1: strings.formatString(strings.question, strings.bread, strings.butter)
    // eg. 2: strings.formatString(strings.question, { bread: strings.bread, butter: strings.butter })
    // eg. 3: strings.formatString(strings.question)

  }, {
    key: "formatString",
    value: function formatString(str) {
      var _this6 = this;

      for (var _len = arguments.length, valuesForPlaceholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        valuesForPlaceholders[_key - 1] = arguments[_key];
      }

      var input = str || "";

      if (typeof input === "string") {
        input = this.getString(str, null, true) || input;
      }

      var ref = input.split(placeholderReferenceRegex).filter(function (textPart) {
        return !!textPart;
      }).map(function (textPart) {
        if (textPart.match(placeholderReferenceRegex)) {
          var matchedKey = textPart.slice(5, -1);

          var referenceValue = _this6.getString(matchedKey);

          if (referenceValue) return referenceValue;

          if (_this6._opts.logsEnabled) {
            console.log("No Localization ref found for '".concat(textPart, "' in string '").concat(str, "'"));
          } // lets print it another way so next replacer doesn't find it


          return "$ref(id:".concat(matchedKey, ")");
        }

        return textPart;
      }).join("");
      return ref.split(placeholderReplaceRegex).filter(function (textPart) {
        return !!textPart;
      }).map(function (textPart) {
        if (textPart.match(placeholderReplaceRegex)) {
          var matchedKey = textPart.slice(1, -1);
          var valueForPlaceholder = valuesForPlaceholders[matchedKey]; // If no value found, check if working with an object instead

          if (valueForPlaceholder === undefined) {
            var valueFromObjectPlaceholder = valuesForPlaceholders[0][matchedKey];

            if (valueFromObjectPlaceholder !== undefined) {
              valueForPlaceholder = valueFromObjectPlaceholder;
            } else {
              // If value still isn't found, then it must have been undefined/null
              return valueForPlaceholder;
            }
          }

          return valueForPlaceholder;
        }

        return textPart;
      }).join("");
    } // Return a string with the passed key in a different language or defalt if not set
    // We allow deep . notation for finding strings

  }, {
    key: "getString",
    value: function getString(key, language) {
      var omitWarning = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      try {
        var current = this._props[language || this._language];
        var paths = key.split(".");

        for (var i = 0; i < paths.length; i += 1) {
          if (current[paths[i]] === undefined) {
            throw Error(paths[i]);
          }

          current = current[paths[i]];
        }

        return current;
      } catch (ex) {
        if (!omitWarning && this._opts.logsEnabled) {
          console.log("No localization found for key '".concat(key, "' and language '").concat(language, "', failed on ").concat(ex.message));
        }
      }

      return null;
    }
    /**
     * The current props (locale object)
     */

  }, {
    key: "getContent",
    value: function getContent() {
      return this._props;
    }
  }]);

  return LocalizedStrings;
}();

/* harmony default export */ const utils_LocalizedStrings = (LocalizedStrings);
;// CONCATENATED MODULE: ./src/native/hwplugin/index.ts






const getPluginConfig = (name) => {
    return src_native.fs.readFile("/plugins/" + name + "/plugin.yaml", {
        parse: { use: true, mode: "yaml" },
    });
};
class HWPlugin {
    constructor(pluginName) {
        this.pluginErrorString = "Please define an plugin name";
        this.pluginName = pluginName;
    }
    addSettings(items) {
        if (this.pluginName === ( false || null)) {
            throw new Error(this.pluginErrorString);
        }
        else {
            src_native.setPref("Plugin.Settings." + this.pluginName + ".settings", JSON.stringify(items));
            src_native.setPref("Plugin.Settings." + this.pluginName + ".name", this.pluginName);
        }
    }
    removeSettings() {
        src_native.removePref("Plugin.Settings." + this.pluginName + ".settings");
    }
    setPluginPref(key, content) {
        src_native.setPref("Plugin.Settings." + this.pluginName + "." + key, content);
    }
    getPluginPref(key) {
        return src_native.getPref("Plugin.Settings." + this.pluginName + "." + key);
    }
    removePluginPref(key) {
        src_native.removePref("Plugin.Settings." + this.pluginName + "." + key);
    }
    getSelectedHardDevice() {
        return src_native.getPref("electron.hardDevice");
    }
    require(path) {
        if (typeof path == "object") {
            path.map((item) => src_native.eval(src_native.fs.readFile("plugins/" + this.pluginName + "/" + path), {
                plugin: {
                    name: this.pluginName,
                },
            }));
        }
        else {
            src_native.eval(src_native.fs.readFile("plugins/" + this.pluginName + "/" + path), {
                plugin: {
                    name: this.pluginName,
                },
            });
        }
    }
    library(url) {
        axios_default().get(url).then((res) => {
            if (res.status === 200) {
                src_native.eval(res.data, {
                    plugin: {
                        name: this.pluginName,
                    },
                });
            }
            else {
                console.log("Can't find library");
            }
        });
    }
    strings(globals) {
        // @ts-ignore
        const string = new utils_LocalizedStrings(globals, {});
        string.setLanguage(this.checkLanguage());
        //@ts-ignore
        return string;
    }
    checkLanguage() {
        const lang = src_native.getPref("language");
        if (lang === misc_tools.undefined) {
            return "en";
        }
        else {
            return lang;
        }
    }
    func(func) {
        console.log(`function ${func.name}(${func.args}){${func.callback}}${func.name}(${func.run})`);
        src_native.eval(`function ${func.name}(${func.args}){${func.callback}}${func.name}(${func.run})`, {
            plugin: {
                name: this.pluginName,
            },
        });
    }
    loadCSS(x) {
        jss_esm/* default.setup */.ZP.setup((0,jss_preset_default_esm/* default */.Z)());
        const sheet = jss_esm/* default.createStyleSheet */.ZP.createStyleSheet(x);
        sheet.attach();
    }
    loadCSSfromFile(path) {
        var style = document.createElement("style");
        style.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(style);
        style.innerHTML = src_native.fs.readFile("plugins/" + this.pluginName + "/" + path);
    }
    readFile(path, options) {
        return src_native.fs.readFile(this.pluginName + "/" + path, options);
    }
    mkDir(path) {
        src_native.fs.mkDir(this.pluginName + "/" + path);
    }
    writeFile(path, content) {
        src_native.fs.writeFile(this.pluginName + "/" + path, content);
    }
    isFileExist(path) {
        return src_native.fs.isFileExist(this.pluginName + "/" + path);
    }
    get getAuthor() {
        var _a;
        return (_a = getPluginConfig(this.pluginName).package) === null || _a === void 0 ? void 0 : _a.author;
    }
    get getVersion() {
        var _a;
        return (_a = getPluginConfig(this.pluginName).package) === null || _a === void 0 ? void 0 : _a.version;
    }
    get getLanguage() {
        var _a;
        return (_a = getPluginConfig(this.pluginName).package) === null || _a === void 0 ? void 0 : _a.language;
    }
    get getDescription() {
        var _a;
        return (_a = getPluginConfig(this.pluginName).package) === null || _a === void 0 ? void 0 : _a.description;
    }
}
/* harmony default export */ const hwplugin = (HWPlugin);

;// CONCATENATED MODULE: ./src/misc/ipc.ts
class ipc {
    static on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail));
    }
    static send(event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    }
    static destroy(event, callback) {
        document.removeEventListener(event, callback);
    }
}
/* harmony default export */ const misc_ipc = (ipc);

;// CONCATENATED MODULE: ./src/native/hwplugin/eval.ts






function evil(javascriptString, extras) {
    "use strict";
    const consoleColor = {
        purple: "color: #fff; background: #4a148c; padding: 4px; border-radius: 8px 0px 0px 8px;",
        lightPurple: "color: #fff; background: #bb86fc; padding: 4px; border-radius: 0px 8px 8px 0px;",
    };
    const context = {
        native: src_native,
        HWPlugin: hwplugin,
        tools: misc_tools,
        ipc: misc_ipc,
        ons: (onsenui_default()),
        __dirname: `${src_native.getPref("electron.hardDevice").toUpperCase()}:\\hentai-web\\plugins\\${extras.plugin.name}`,
        window: {
            Android: undefined,
            Windows: undefined,
        },
        initFile: (callback, options) => {
            const requireVersion = options === null || options === void 0 ? void 0 : options.requireVersion;
            const plugin = new hwplugin(extras.plugin.name);
            if (src_native.version.require(requireVersion)) {
                if (typeof callback == "function") {
                    callback(plugin);
                }
            }
            else {
                console.log(`This plugin requires the latest version of ${requireVersion}`);
            }
        },
        Android: undefined,
        Windows: undefined,
        eval: undefined,
        document: document,
        require(path) {
            const pluginName = extras.plugin.name;
            if (typeof path == "object") {
                path.map((item) => src_native.eval(src_native.fs.readFile("plugins/" + pluginName + "/" + item), {
                    plugin: {
                        name: pluginName,
                    },
                }));
            }
            else {
                src_native.eval(src_native.fs.readFile("plugins/" + pluginName + "/" + path), {
                    plugin: {
                        name: pluginName,
                    },
                });
            }
        },
        console: {
            log(message, ...optionalParams) {
                let pluginName = extras.plugin.name;
                console.log(`%c${pluginName}%c=>%c ${message}`, consoleColor.purple, consoleColor.lightPurple, "", ...optionalParams);
            },
            info(message, ...optionalParams) {
                let pluginName = extras.plugin.name;
                console.info(`%c${pluginName}%c=>%c ${message}`, consoleColor.purple, consoleColor.lightPurple, "", ...optionalParams);
            },
            warn(message, ...optionalParams) {
                let pluginName = extras.plugin.name;
                console.warn(`%c${pluginName}%c=>%c ${message}`, consoleColor.purple, consoleColor.lightPurple, "", ...optionalParams);
            },
            error(message, ...optionalParams) {
                let pluginName = extras.plugin.name;
                console.error(`%c${pluginName}%c=>%c ${message}`, consoleColor.purple, consoleColor.lightPurple, "", ...optionalParams);
            },
        },
    };
    try {
        browser_default()(javascriptString, context);
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            console.log(e.message);
        }
    }
}

// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(5518);
;// CONCATENATED MODULE: ./src/native/index.ts
var _a;







/**
 * Native calls for Windows and Android
 */
class native_native {
    /**
     * Get the Android userAgent
     * @deprecated Use `native.isAndroid`
     */
    static userAgentEqualAndroid(state) {
        if (state) {
            return this.navigator.userAgent === misc_config.options.userAgent;
        }
        else {
            return this.navigator.userAgent != misc_config.options.userAgent;
        }
    }
    /**
     * Get the Windows userAgent
     * @deprecated Use `native.isWindows`
     */
    static userAgentEqualWindows(state) {
        if (state) {
            return this.navigator.userAgent === misc_config.options.userAgentWindows;
        }
        else {
            return this.navigator.userAgent != misc_config.options.userAgentWindows;
        }
    }
    static get getBuildMANUFACTURER() {
        if (this.userAgent === this.userAgentAndroid) {
            return window.Android.BuildMANUFACTURER().toUpperCase();
        }
        else if (this.userAgent === this.userAgentWindows) {
            return window.Windows.getType().toUpperCase();
        }
        else {
            return window.navigator.appCodeName.toUpperCase();
        }
    }
    static get getMODEL() {
        if (this.userAgent === this.userAgentAndroid) {
            return window.Android.BuildMODEL().toUpperCase();
        }
        else if (this.userAgent === this.userAgentWindows) {
            return window.Windows.getPlatform().toUpperCase();
        }
        else {
            return window.navigator.platform.toUpperCase();
        }
    }
    /**
     * Reloads native the app
     * @returns
     */
    static reload() {
        if (this.userAgent === this.userAgentAndroid) {
            window.Android.reload();
        }
        else if (this.userAgent === this.userAgentWindows) {
            window.Windows.reload();
        }
        else {
            window.location.reload();
        }
    }
    static dialog(props) {
        if (this.isAndroid) {
            window.Android.dialog(props.title, props.message);
        }
        else if (this.isWindows) {
            window.Windows.dialog(props);
        }
        else {
            onsenui_default().notification.alert({
                message: props.message,
                title: props.title,
                buttonLabels: ["Ok"],
                modifier: native_native.checkPlatformForBorderStyle,
                animation: "default",
                primaryButtonIndex: 1,
                cancelable: false,
            });
        }
    }
    /**
     * Copy an string to clipboard on Android
     * @param content
     */
    static copyClipborad(content) {
        const copy = window.navigator.clipboard.writeText(content);
        if (this.userAgent === this.userAgentAndroid) {
            window.Android.copyToClipboard(content);
        }
        else if (this.userAgent === this.userAgentWindows) {
            copy;
        }
        else {
            copy;
        }
    }
    static alert(message) {
        alert(message);
    }
    static confirm(message) {
        return confirm(message);
    }
    static prompt(message, _default) {
        return prompt(message, _default);
    }
    /**
     * Download an anime picture
     * @param filename
     * @param downloadUrlOfImage
     * @param id
     */
    static downloadPicture(downloadUrlOfImage, filename, id) {
        const a = () => onsenui_default().notification.alert("Make an right click on the picture you want an save it.");
        if (native_native.isAndroid) {
            window.Android.downloadImage(downloadUrlOfImage);
        }
        else if (native_native.isWindows) {
            a(); // window.Windows.downloadImage(downloadUrlOfImage);
        }
        else {
            a();
        }
    }
    /**
     * Set an saved key from localstorage or shared prefs
     * @param key
     * @param content
     */
    static setPref(key, content) {
        if (native_native.isAndroid) {
            window.Android.setPref(key, content.toString());
        }
        else if (native_native.isWindows) {
            window.Windows.setPref(key, content.toString());
        }
        else {
            localStorage.setItem(key, content.toString());
        }
    }
    /**
     * Get an saved key from localstorage or shared prefs
     * @param key
     * @returns
     */
    static getPref(key) {
        if (native_native.isAndroid) {
            const get = window.Android.getPref(key);
            if (get === undefined || get === null || get === "") {
                return "false";
            }
            else {
                return get;
            }
        }
        else if (native_native.isWindows) {
            const get = window.Windows.getPref(key);
            if (get === undefined || get === null || get === "") {
                return "false";
            }
            else {
                return get;
            }
        }
        else {
            const get = localStorage.getItem(key);
            if (get === undefined || get === null || get === "") {
                return "false";
            }
            else {
                return get;
            }
        }
    }
    /**
     * Remove an saved key from localstorage or shared prefs
     * @param key
     */
    static removePref(key) {
        if (this.userAgent === this.userAgentAndroid) {
            window.Android.removePref(key);
        }
        else if (this.userAgent === this.userAgentWindows) {
            window.Windows.removePref(key);
        }
        else {
            localStorage.removeItem(key);
        }
    }
    /**
     * Open an link specified by the platform
     * @param link
     * @param target
     */
    static open(link, target) {
        if (this.userAgent === this.userAgentAndroid) {
            window.Android.open(link);
        }
        else if (this.userAgent === this.userAgentWindows) {
            window.Windows.open(link);
        }
        else {
            window.open(link, target);
        }
    }
    /**
     * Closes the app
     */
    static close() {
        function clo(method) {
            onsenui_default().notification.confirm({
                message: "Do you want to close this app?",
                title: "Close app?",
                buttonLabels: ["Yes", "No"],
                modifier: native_native.checkPlatformForBorderStyle,
                animation: "default",
                primaryButtonIndex: 1,
                cancelable: true,
                callback: (index) => {
                    switch (index) {
                        case 0:
                            method();
                            break;
                        default:
                            break;
                    }
                },
            });
        }
        if (this.userAgent === this.userAgentAndroid) {
            clo(() => window.Android.close());
        }
        else if (this.userAgent === this.userAgentWindows) {
            clo(() => window.Windows.close());
        }
        else {
            clo(() => window.close());
        }
    }
    /**
     * Evaluates JavaScript code and executes it.
     * @param javascriptString A String value that contains valid JavaScript code.
     */
    static eval(javascriptString, extras) {
        evil(javascriptString, extras);
    }
}
_a = native_native;
// User agents
native_native.userAgentAndroid = "HENTAI_WEB_AGENT";
native_native.userAgentWindows = "HENTAI_WEB_WINDOWS";
native_native.userAgent = window.navigator.userAgent;
native_native.isWindows = _a.userAgentWindows === _a.userAgent ? true : false;
native_native.isAndroid = _a.userAgentAndroid === _a.userAgent ? true : false;
native_native.isInstagram = /Instagram/i.test(_a.userAgent);
native_native.isFacebook = /Facebook/i.test(_a.userAgent);
native_native.isIframe = window.self !== window.top;
native_native.isSmartTV = lib/* isSmartTV */.L6;
native_native.isConsole = lib/* isConsole */.cl;
native_native.isWearable = lib/* isWearable */.fB;
native_native.isEmbedded = lib/* isEmbedded */.xR;
native_native.isMobileSafari = lib/* isMobileSafari */.TL;
native_native.isChromium = lib/* isChromium */.mJ;
native_native.isMobile = lib/* isMobile */.tq;
native_native.isMobileOnly = lib/* isMobileOnly */.UA;
native_native.isTablet = lib/* isTablet */.Em;
native_native.isBrowser = lib/* isBrowser */.jU;
native_native.isDesktop = lib/* isDesktop */.nI;
native_native.isWinPhone = lib/* isWinPhone */.xk;
native_native.isIOS = lib/* isIOS */.gn;
native_native.isChrome = lib/* isChrome */.i7;
native_native.isFirefox = lib/* isFirefox */.vU;
native_native.isSafari = lib/* isSafari */.G6;
native_native.isOpera = lib/* isOpera */.f0;
native_native.isIE = lib/* isIE */.w1;
native_native.browserVersion = lib/* browserVersion */.x_;
native_native.browserName = lib/* browserName */.KC;
native_native.mobileVendor = lib/* mobileVendor */.B3;
native_native.mobileModel = lib/* mobileModel */.N7;
native_native.engineName = lib/* engineName */.AA;
native_native.engineVersion = lib/* engineVersion */.TI;
native_native.isEdge = lib/* isEdge */.un;
native_native.isYandex = lib/* isYandex */.kU;
native_native.deviceType = lib/* deviceType */.vO;
native_native.isIOS13 = lib/* isIOS13 */.gP;
native_native.isIPad13 = lib/* isIPad13 */.Hg;
native_native.isIPhone13 = lib/* isIPhone13 */.zL;
native_native.isIPod13 = lib/* isIPod13 */.XE;
native_native.isElectron = lib/* isElectron */.d;
native_native.isEdgeChromium = lib/* isEdgeChromium */.kD;
native_native.isMacOs = lib/* isMacOs */.Q5;
native_native.isMIUI = lib/* isMIUI */.vb;
native_native.isSamsungBrowser = lib/* isSamsungBrowser */.op;
// Pltforms checks
native_native.checkPlatformForBorderStyle = _a.isWindows ? "windows" : "";
// Basics
native_native.navigator = navigator;
native_native.location = location;
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     native.AES.encrypt(text, password);
 *     native.AES.decrypt(text, password);
 */
native_native.AES = {
    encrypt(text, password) {
        return crypto_js_default().AES.encrypt(text, password).toString();
    },
    decrypt(text, password) {
        return crypto_js_default().AES.decrypt(text, password).toString((crypto_js_default()).enc.Utf8);
    },
};
native_native.version = {
    get get() {
        if (native_native.isAndroid) {
            return window.Android.getVersion();
        }
        else if (native_native.isWindows) {
            return window.Windows.getVersion();
        }
        else {
            return package_namespaceObject.i8;
        }
    },
    /**
     * Requires an selected version above {version}
     */
    require(version) {
        return +Number(this.get.replace(/\./gm, "")) >= +!version;
    },
};
/**
 * Methods that are here can only used on Windows
 */
native_native.electron = {
    userAgentAndroid: "HENTAI_WEB_AGENT",
    userAgentWindows: "HENTAI_WEB_WINDOWS",
    agent: window.navigator.userAgent,
    newWindow: (url, options) => {
        if (native_native.isWindows) {
            window.Windows.newWindow(url, options);
        }
    },
    /**
     *
     * @param state
     */
    discordRPC(state) {
        if (this.agent === this.userAgentWindows) {
            if (native_native.getPref("electron.disableDiscordRPC") === "true") {
                window.Windows.discordRPCdisconnect();
            }
            else {
                window.Windows.discordRPC(state);
            }
        }
    },
    addEventListener(event, callback) {
        if (this.agent === this.userAgentWindows) {
            window.Windows.webContentsAddEventListener(event, callback);
        }
    },
    /**
     * Opens the devtools.
     *
     * When `contents` is a `<webview>` tag, the `mode` would be `detach` by default,
     * explicitly passing an empty `mode` can force using last used dock state.
     */
    openDevTools() {
        if (this.agent === this.userAgentWindows) {
            window.Windows.openDevTools();
        }
    },
    /**
     * Closes the devtools.
     */
    closeDevTools() {
        if (this.agent === this.userAgentWindows) {
            window.Windows.closeDevTools();
        }
    },
    notification(title, body) {
        if (this.agent === this.userAgentWindows) {
            window.Windows.notification(title, body);
        }
    },
};
/**
 * Methods that are here can only used on Android
 */
native_native.android = {
    userAgentAndroid: "HENTAI_WEB_AGENT",
    userAgentWindows: "HENTAI_WEB_WINDOWS",
    agent: window.navigator.userAgent,
    setStatusbarColor(color) {
        if (this.agent === this.userAgentAndroid) {
            window.Android.setStatusbarColor(color);
        }
    },
    setStatusbarBackgroundWhite() {
        if (this.agent === this.userAgentAndroid) {
            window.Android.setStatusbarBackgroundWhite();
        }
    },
    keepScreenOn() {
        if (this.agent === this.userAgentAndroid) {
            window.Android.keepScreenOn();
        }
    },
    hasBiometricEnrolled() {
        if (this.agent === this.userAgentAndroid) {
            return window.Android.hasBiometricEnrolled();
        }
        else {
            return false;
        }
    },
    isHardwareAvailable() {
        if (this.agent === this.userAgentAndroid) {
            return window.Android.isHardwareAvailable();
        }
        else {
            return false;
        }
    },
    /**
     * Check if has write permission
     * @returns {boolean}
     */
    hasStoragePermission() {
        if (native_native.isAndroid) {
            return window.Android.hasStoragePermission();
        }
        else {
            return false;
        }
    },
    /**
     * request permission
     */
    requestPermission() {
        if (native_native.isAndroid) {
            window.Android.requestStoargePermission();
        }
    },
    requireSDK(sdk) {
        return +Number(window.Android.requireSDK().replace(/\./gm, "")) >= +sdk;
    },
};
/**
 * The fs class enables interacting with the file system on both platforms, Windows and Android
 */
native_native.fs = {
    userAgentAndroid: "HENTAI_WEB_AGENT",
    userAgentWindows: "HENTAI_WEB_WINDOWS",
    agent: window.navigator.userAgent,
    readFile(path, options) {
        if (this.agent === this.userAgentAndroid) {
            if (options === null || options === void 0 ? void 0 : options.parse.use) {
                switch (options === null || options === void 0 ? void 0 : options.parse.mode) {
                    case "json":
                        try {
                            return JSON.parse(window.Android.readFile(path));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    case "yaml":
                        try {
                            // @ts-ignore
                            return js_yaml/* default.load */.ZP.load(window.Android.readFile(path), { json: options === null || options === void 0 ? void 0 : options.parse.use });
                        }
                        catch (error) {
                            console.log(error);
                        }
                    default:
                        return window.Android.readFile(path);
                }
            }
            else {
                return window.Android.readFile(path);
            }
        }
        else if (this.agent === this.userAgentWindows) {
            if (options === null || options === void 0 ? void 0 : options.parse.use) {
                switch (options === null || options === void 0 ? void 0 : options.parse.mode) {
                    case "json":
                        try {
                            return JSON.parse(window.Windows.readFile(path));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    case "yaml":
                        try {
                            // @ts-ignore
                            return js_yaml/* default.load */.ZP.load(window.Windows.readFile(path), { json: options === null || options === void 0 ? void 0 : options.parse.use });
                        }
                        catch (error) {
                            console.log(error);
                        }
                    default:
                        return window.Windows.readFile(path);
                }
            }
            else {
                return window.Windows.readFile(path);
            }
        }
        else {
            return "";
        }
    },
    mkDir(path) {
        if (this.agent === this.userAgentAndroid) {
            window.Android.mkDir(path);
        }
        else if (this.agent === this.userAgentWindows) {
            window.Windows.mkDir(path);
        }
        else {
            return;
        }
    },
    writeFile(path, content) {
        if (this.agent === this.userAgentAndroid) {
            window.Android.writeFile(path, content);
        }
        else if (this.agent === this.userAgentWindows) {
            window.Windows.writeFile(path, content);
        }
        else {
            return;
        }
    },
    isFileExist(path) {
        if (this.agent === this.userAgentAndroid) {
            return window.Android.isFileExist(path);
        }
        else if (this.agent === this.userAgentWindows) {
            return window.Windows.isFileExist(path);
        }
        else {
            return false;
        }
    },
};
/* harmony default export */ const src_native = (native_native);

// EXTERNAL MODULE: ./node_modules/eruda-dom/eruda-dom.js
var eruda_dom = __webpack_require__(6090);
var eruda_dom_default = /*#__PURE__*/__webpack_require__.n(eruda_dom);
;// CONCATENATED MODULE: ./src/styles/dark/index.ts
const darkMode = {
    "@global": {
        html: {
            height: "100%",
            width: "100%",
        },
        body: {
            position: "absolute",
            overflow: "hidden",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            margin: "0",
            webkitTextSizeAdjust: "100%",
            touchAction: "manipulation",
        },
        "a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video": {
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            webkitTapHighlightColor: "transparent",
            webkitTouchCallout: "none",
        },
        "input, select, textarea": {
            webkitUserSelect: "auto",
            msUserSelect: "auto",
            userSelect: "auto",
            mozUserSelect: "text",
            webkitTouchCallout: "none",
        },
        "a, button, input, select, textarea": {
            touchAction: "manipulation",
        },
        "input:active, input:focus, select:active, select:focus, textarea:active, textarea:focus": {
            outline: "0",
        },
        h1: {
            fontSize: "36px",
        },
        h2: {
            fontSize: "30px",
        },
        h3: {
            fontSize: "24px",
        },
        "h4, h5, h6": {
            fontSize: "18px",
        },
        ".page": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            backgroundColor: "#121212",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            overflowX: "visible",
            overflowY: "hidden",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    color: "#fff",
                },
            ],
            msOverflowStyle: "none",
        },
        ".page::-webkit-scrollbar": {
            display: "none",
        },
        ".page__content": {
            backgroundColor: "#121212",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            boxSizing: "border-box",
            fallbacks: [
                {
                    bottom: "0",
                },
                {
                    top: "0",
                },
            ],
            paddingTop: "0",
        },
        ".page__background": {
            backgroundColor: "#121212",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            boxSizing: "border-box",
        },
        ".page--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            backgroundColor: "#121212",
        },
        ".page--material__content": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
        },
        ".page__content h1, .page__content h2, .page__content h3, .page__content h4, .page__content h5": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            margin: "0.6em 0",
            padding: "0",
        },
        ".page__content h1": {
            fontSize: "28px",
        },
        ".page__content h2": {
            fontSize: "24px",
        },
        ".page__content h3": {
            fontSize: "20px",
        },
        ".page--material__content h1, .page--material__content h2, .page--material__content h3, .page--material__content h4, .page--material__content h5": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            margin: "0.6em 0",
            padding: "0",
        },
        ".page--material__content h1": {
            fontSize: "28px",
        },
        ".page--material__content h2": {
            fontSize: "24px",
        },
        ".page--material__content h3": {
            fontSize: "20px",
        },
        ".page--material__background": {
            backgroundColor: "#121212",
        },
        ".switch": {
            display: "inline-block",
            verticalAlign: "top",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            minWidth: "51px",
            fontSize: "17px",
            padding: "0 20px",
            border: "none",
            overflow: "visible",
            width: "51px",
            height: "32px",
            zIndex: "0",
            textAlign: "left",
        },
        ".switch__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "0",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    zIndex: "1",
                },
            ],
        },
        ".switch__toggle": {
            backgroundColor: "#fff",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            borderRadius: "30px",
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "ease-out",
            boxShadow: "inset 0 0 0 2px #e5e5e5",
        },
        ".switch__handle": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "absolute",
            content: '""',
            borderRadius: "28px",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            left: "1px",
            top: "2px",
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "cubic-bezier(0.59, 0.01, 0.5, 0.99)",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
        },
        ".switch--active__handle": {
            transition: "none",
        },
        ":checked + .switch__toggle": {
            boxShadow: "inset 0 0 0 2px #44db5e",
            backgroundColor: "#44db5e",
        },
        ":checked + .switch__toggle > .switch__handle": {
            left: "21px",
            boxShadow: "0 3px 2px rgba(0, 0, 0, 0.25)",
        },
        ":disabled + .switch__toggle": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".switch__touch": {
            position: "absolute",
            top: "-5px",
            bottom: "-5px",
            left: "-10px",
            right: "-10px",
        },
        ".switch--material": {
            width: "36px",
            height: "24px",
            padding: "0 10px",
            minWidth: "36px",
        },
        ".switch--material__toggle": {
            backgroundColor: "#b0afaf",
            marginTop: "5px",
            height: "14px",
            boxShadow: "none",
        },
        ".switch--material__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "0",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    zIndex: "1",
                },
            ],
        },
        ".switch--material__handle": {
            backgroundColor: "#f1f1f1",
            left: "0",
            marginTop: "-5px",
            width: "20px",
            height: "20px",
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
        },
        ":checked + .switch--material__toggle": {
            backgroundColor: "#7c43bd",
            boxShadow: "none",
        },
        ":checked + .switch--material__toggle > .switch--material__handle": {
            left: "16px",
            backgroundColor: "#bb86fc",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
        },
        ":disabled + .switch--material__toggle": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".switch--material__handle:before": {
            background: "0 0",
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            zIndex: "0",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.12)",
            transition: "box-shadow 0.1s linear",
        },
        ".switch--material__toggle > .switch--active__handle:before": {
            boxShadow: "0 0 0 14px rgba(0, 0, 0, 0.12)",
        },
        ":checked + .switch--material__toggle > .switch--active__handle:before": {
            boxShadow: "0 0 0 14px color-mod(#bb86fc alpha(20%))",
        },
        ".switch--material__touch": {
            position: "absolute",
            top: "-10px",
            bottom: "-10px",
            left: "-15px",
            right: "-15px",
        },
        ".range": {
            display: "inline-block",
            position: "relative",
            width: "100px",
            height: "30px",
            margin: "0",
            padding: "0",
            backgroundImage: "linear-gradient(#a4aab3, #a4aab3)",
            backgroundPosition: "left center",
            backgroundSize: "100% 2px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "transparent",
        },
        ".range__input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            verticalAlign: "top",
            outline: "0",
            lineHeight: "1",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            backgroundImage: "linear-gradient(#4a148c, #4a148c)",
            backgroundPosition: "left center",
            backgroundSize: "0 2px",
            backgroundRepeat: "no-repeat",
            height: "30px",
            position: "relative",
            zIndex: "1",
            width: "100%",
        },
        ".range__input::-moz-range-track": {
            position: "relative",
            border: "none",
            background: "0 0",
            boxShadow: "none",
            top: "0",
            margin: "0",
            padding: "0",
        },
        ".range__input::-ms-track": {
            position: "relative",
            border: "none",
            backgroundColor: "#a4aab3",
            height: "0",
            borderRadius: "50%",
        },
        ".range__input::-webkit-slider-thumb": {
            cursor: "pointer",
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            webkitAppearance: "none",
            appearance: "none",
            top: "0",
            zIndex: "1",
        },
        ".range__input::-moz-range-thumb": {
            cursor: "pointer",
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
        },
        ".range__input::-ms-thumb": {
            cursor: "pointer",
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
            top: "0",
        },
        ".range__input::-ms-fill-lower": {
            height: "2px",
            backgroundColor: "#4a148c",
        },
        ".range__input::-ms-tooltip": {
            display: "none",
        },
        ".range__input:disabled": {
            opacity: "1",
            pointerEvents: "none",
        },
        ".range__focus-ring": {
            pointerEvents: "none",
            top: "0",
            left: "0",
            display: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            verticalAlign: "top",
            outline: "0",
            lineHeight: "1",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    background: "0 0",
                },
            ],
            height: "30px",
            position: "absolute",
            zIndex: "0",
            width: "100%",
        },
        ".range--disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
            fallbacks: [
                {
                    pointerEvents: "none",
                },
            ],
        },
        ".range--material": {
            position: "relative",
            backgroundImage: "linear-gradient(#bdbdbd, #bdbdbd)",
        },
        ".range--material__input": {
            backgroundImage: "linear-gradient(#bb86fc, #bb86fc)",
            backgroundPosition: "center left",
            backgroundSize: "0 2px",
        },
        ".range--material__focus-ring": {
            display: "block",
        },
        ".range--material__focus-ring::-webkit-slider-thumb": {
            webkitAppearance: "none",
            appearance: "none",
            width: "14px",
            height: "14px",
            border: "none",
            boxShadow: "0 0 0 9px #bb86fc",
            backgroundColor: "#bb86fc",
            borderRadius: "50%",
            opacity: "0",
            transition: "opacity 0.25s ease-out, transform 0.25s ease-out,\r\n    -webkit-transform 0.25s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.25s ease-out",
                },
            ],
        },
        ".range--material__input.range__input--active\r\n  + .range--material__focus-ring::-webkit-slider-thumb": {
            opacity: "0.2",
            webkitTransform: "scale(1.5, 1.5, 1.5)",
            transform: "scale(1.5, 1.5, 1.5)",
        },
        ".range--material__input::-webkit-slider-thumb": {
            position: "relative",
            boxSizing: "border-box",
            border: "none",
            backgroundColor: "transparent",
            width: "14px",
            height: "32px",
            borderRadius: "0",
            boxShadow: "none",
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #bb86fc 0,\r\n    #bb86fc 6.6px,\r\n    transparent 7px\r\n  )",
            transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            fallbacks: [
                {
                    transition: "transform 0.1s linear",
                },
                {
                    transition: "-webkit-transform 0.1s linear",
                },
            ],
            overflow: "visible",
        },
        ".range--material__input[_zero]::-webkit-slider-thumb": {
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #f2f2f2 0,\r\n    #f2f2f2 4px,\r\n    #bdbdbd 4px,\r\n    #bdbdbd 6.4px,\r\n    transparent 7px\r\n  )",
        },
        ".range--material__input[_zero]\r\n  + .range--material__focus-ring::-webkit-slider-thumb": {
            boxShadow: "0 0 0 9px #bdbdbd",
        },
        ".range--material__input::-moz-range-track": {
            background: "0 0",
        },
        ".range--material__input::-moz-range-thumb, .range--material__input:focus::-moz-range-thumb": {
            boxSizing: "border-box",
            border: "none",
            width: "14px",
            height: "32px",
            borderRadius: "0",
            backgroundColor: "transparent",
            backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #bb86fc 0,\r\n    #bb86fc 6.6px,\r\n    transparent 7px\r\n  )",
            boxShadow: "none",
        },
        ".range--material__input.range__input--active::-webkit-slider-thumb, .range--material__input:active::-webkit-slider-thumb": {
            webkitTransform: "scale(1.5)",
            transform: "scale(1.5)",
            transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            fallbacks: [
                {
                    transition: "transform 0.1s linear",
                },
                {
                    transition: "-webkit-transform 0.1s linear",
                },
            ],
        },
        ".range--disabled.range--material": {
            opacity: "1",
        },
        ".range--disabled > .range--material__input": {
            backgroundImage: "none",
        },
        ".range--material__input:disabled::-webkit-slider-thumb": {
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0,\r\n    #b0b0b0 4px,\r\n    #eee 4.4px,\r\n    #eee 7.6px,\r\n    transparent 7.6px\r\n  )",
            transition: "none",
        },
        ".range--material__input:disabled::-moz-range-thumb": {
            backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0,\r\n    #b0b0b0 4px,\r\n    #eee 4.4px,\r\n    #eee 7.6px,\r\n    transparent 7.6px\r\n  )",
            transition: "none",
        },
        ".notification": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            font: "inherit",
            border: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 4px",
            margin: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    lineHeight: "normal",
                },
                {
                    color: "inherit",
                },
                {
                    padding: "0",
                },
                {
                    margin: "0",
                },
                {
                    border: "none",
                },
                {
                    font: "inherit",
                },
            ],
            color: "#fff",
            background: "0 0",
            lineHeight: "19px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            width: "auto",
            height: "19px",
            borderRadius: "19px",
            backgroundColor: "#fe3824",
            textAlign: "center",
            fontSize: "16px",
            minWidth: "19px",
        },
        ".notification:empty": {
            display: "none",
        },
        ".notification--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            backgroundColor: "#bb86fc",
            fontSize: "16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            color: "#fff",
        },
        ".toolbar": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "#fafafa",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            zIndex: "2",
            display: "flex",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    whiteSpace: "nowrap",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    background: "0 0",
                },
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            height: "44px",
            paddingLeft: "0",
            paddingRight: "0",
            boxShadow: "none",
            width: "100%",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 100%)",
            top: "0",
            paddingTop: "0",
        },
        "@media (-webkit-min-device-pixel-ratio: 2),\r\n  (min-resolution: 192dpi),\r\n  (min-resolution: 2dppx)": {
            ".toolbar": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      #b2b2b2,\r\n      #b2b2b2 50%,\r\n      transparent 50%\r\n    )",
            },
            ".bottom-bar": {
                backgroundImage: "linear-gradient(\r\n      180deg,\r\n      #b2b2b2,\r\n      #b2b2b2 50%,\r\n      transparent 50%\r\n    )",
            },
            ".tabbar": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".tabbar__button": {
                borderTop: "none",
            },
            ".tabbar--top": {
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%),\r\n      linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item--expandable": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item__center": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item__right": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-header": {
                backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item--material__center, .list-item--material__left:empty": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      #1f1f1f,\r\n      #1f1f1f 50%,\r\n      transparent 50%\r\n    )",
            },
            ".list-item--material__right": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      #1f1f1f,\r\n      #1f1f1f 50%,\r\n      transparent 50%\r\n    )",
            },
            ".list-item--material.list-item--expandable": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      #1f1f1f,\r\n      #1f1f1f 50%,\r\n      transparent 50%\r\n    )",
            },
            ".list-item--material.list-item--expandable.list-item--longdivider, .list-item--material.list-item--longdivider": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      #1f1f1f,\r\n      #1f1f1f 50%,\r\n      transparent 50%\r\n    )",
            },
            ".list-header--material:not(:first-of-type)": {
                backgroundImage: "linear-gradient(\r\n      180deg,\r\n      #1f1f1f,\r\n      #1f1f1f 50%,\r\n      transparent 50%\r\n    )",
            },
            ".list-item--longdivider": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".alert-dialog-button": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%)",
            },
            ".alert-dialog-button--rowfooter": {
                borderTop: "none",
                borderLeft: "none",
                backgroundSize: "100% 1px, 1px 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top, left",
                backgroundImage: "linear-gradient(\r\n        0deg,\r\n        transparent,\r\n        transparent 50%,\r\n        #ddd 50%\r\n      ),\r\n      linear-gradient(90deg, transparent, transparent 50%, #ddd 50%)",
            },
            ".alert-dialog-button--rowfooter:first-child": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top, left",
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      transparent,\r\n      transparent 50%,\r\n      #ddd 50%\r\n    )",
            },
            ".alert-dialog-button--material": {
                background: "0 0",
            },
            ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
                background: "0 0",
            },
            ".alert-dialog-button--primal--material": {
                background: "0 0",
            },
            ".action-sheet-button": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
            },
            ".action-sheet-title": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
            },
        },
        ".toolbar__bg": {
            background: "#fafafa",
        },
        ".toolbar__item": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            height: "44px",
            overflow: "visible",
            display: "block",
            verticalAlign: "middle",
        },
        ".toolbar__left": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "44px",
            maxWidth: "50%",
            width: "27%",
            textAlign: "left",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
            ],
        },
        ".toolbar__right": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "44px",
            maxWidth: "50%",
            width: "27%",
            textAlign: "right",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
            ],
        },
        ".toolbar__center": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "0 0",
            border: "none",
            lineHeight: "44px",
            width: "46%",
            textAlign: "center",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            fontSize: "17px",
            fontWeight: "500",
        },
        ".toolbar__title": {
            lineHeight: "44px",
            fontSize: "17px",
            fontWeight: "500",
            color: "#1f1f21",
            margin: "0",
            padding: "0",
            overflow: "visible",
        },
        ".toolbar__center:first-child:last-child": {
            width: "100%",
        },
        ".bottom-bar": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "#fafafa",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            zIndex: "2",
            display: "block",
            height: "44px",
            paddingLeft: "0",
            paddingRight: "0",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    bottom: "0",
                },
                {
                    borderTop: "1px solid #b2b2b2",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    background: "0 0",
                },
            ],
            boxShadow: "none",
            borderBottom: "none",
            borderTop: "none",
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 100%)",
            paddingBottom: "0",
        },
        ".bottom-bar__line-height": {
            lineHeight: "44px",
            paddingBottom: "0",
            paddingTop: "0",
        },
        ".bottom-bar--aligned": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            lineHeight: "44px",
        },
        ".bottom-bar--transparent": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            border: "none",
        },
        ".toolbar--material": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            webkitBoxPack: "justify",
            webkitJustifyContent: "space-between",
            justifyContent: "space-between",
            height: "56px",
            borderBottom: "0",
            boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
            padding: "0",
            backgroundColor: "#1f1f1f",
            backgroundSize: "0",
        },
        ".toolbar--noshadow": {
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: "none",
        },
        ".toolbar--material__left, .toolbar--material__right": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    fontWeight: "400",
                },
            ],
            color: "rgba(255, 255, 255, 1)",
            height: "56px",
            minWidth: "72px",
            width: "auto",
            lineHeight: "56px",
        },
        ".toolbar--material__center": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    fontWeight: "400",
                },
            ],
            color: "rgba(255, 255, 255, 1)",
            height: "56px",
            width: "auto",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "left",
            lineHeight: "56px",
        },
        ".toolbar--material__center:first-child": {
            marginLeft: "16px",
        },
        ".toolbar--material__center:last-child": {
            marginRight: "16px",
        },
        ".toolbar--material__left:empty, .toolbar--material__right:empty": {
            minWidth: "16px",
        },
        ".toolbar--transparent": {
            backgroundColor: "transparent",
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: "none",
        },
        ".button": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "0 0",
            border: "0 solid currentColor",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
        },
        ".button::-moz-focus-inner": {
            outline: "0",
        },
        ".button:hover": {
            transition: "none",
        },
        ".button:active": {
            backgroundColor: "#4a148c",
            transition: "none",
            opacity: "0.2",
        },
        ".button:focus": {
            outline: "0",
        },
        ".button:disabled, .button[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".button--outline": {
            backgroundColor: "transparent",
            border: "1px solid #4a148c",
            color: "#4a148c",
        },
        ".button--outline:active": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "1px solid #4a148c",
            color: "#4a148c",
            opacity: "1",
        },
        ".button--outline:hover": {
            border: "1px solid #4a148c",
            transition: "0",
        },
        ".button--light": {
            backgroundColor: "transparent",
            color: "color-mod(black a(40%))",
            border: "1px solid color-mod(black a(20%))",
        },
        ".button--light:active": {
            backgroundColor: "color-mod(black a(5%))",
            color: "color-mod(black a(40%))",
            border: "1px solid color-mod(black a(20%))",
            opacity: "1",
        },
        ".button--quiet": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "0 0",
            border: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    border: "1px solid transparent",
                },
                {
                    color: "#fff",
                },
                {
                    background: "0 0",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    background: "0 0",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
            boxShadow: "none",
        },
        ".button--quiet:disabled, .button--quiet[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
            border: "none",
        },
        ".button--quiet:hover": {
            transition: "none",
        },
        ".button--quiet:focus": {
            outline: "0",
        },
        ".button--quiet:active": {
            backgroundColor: "transparent",
            border: "none",
            transition: "none",
            opacity: "0.2",
            color: "#4a148c",
        },
        ".button--cta": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "0 0",
            border: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#7c43bd",
            borderRadius: "3px",
            transition: "none",
        },
        ".button--cta:hover": {
            transition: "none",
        },
        ".button--cta:focus": {
            outline: "0",
        },
        ".button--cta:active": {
            color: "#fff",
            backgroundColor: "#7c43bd",
            transition: "none",
            opacity: "0.2",
        },
        ".button--cta:disabled, .button--cta[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".button--large": {
            fontSize: "17px",
            fontWeight: "500",
            lineHeight: "36px",
            padding: "4px 12px",
            display: "block",
            width: "100%",
            textAlign: "center",
        },
        ".button--large:active": {
            backgroundColor: "#4a148c",
            transition: "none",
            opacity: "0.2",
            fallbacks: [
                {
                    transition: "none",
                },
            ],
        },
        ".button--large:disabled, .button--large[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".button--large:hover": {
            transition: "none",
        },
        ".button--large:focus": {
            outline: "0",
        },
        ".button--large--quiet": {
            position: "relative",
            display: "block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "0 0",
            border: "1px solid transparent",
            lineHeight: "36px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    background: "0 0",
                },
                {
                    display: "inline-block",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    fontSize: "17px",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
            width: "100%",
            boxShadow: "none",
            textAlign: "center",
        },
        ".button--large--quiet:active": {
            transition: "none",
            opacity: "0.2",
            color: "#4a148c",
            background: "0 0",
            border: "1px solid transparent",
            boxShadow: "none",
        },
        ".button--large--quiet:disabled, .button--large--quiet[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".button--large--quiet:hover": {
            transition: "none",
        },
        ".button--large--quiet:focus": {
            outline: "0",
        },
        ".button--large--cta": {
            position: "relative",
            display: "block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "0 0",
            border: "none",
            lineHeight: "36px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    display: "inline-block",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    fontSize: "17px",
                },
                {
                    color: "#fff",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#7c43bd",
            borderRadius: "3px",
            transition: "none",
            width: "100%",
            textAlign: "center",
        },
        ".button--large--cta:hover": {
            transition: "none",
        },
        ".button--large--cta:focus": {
            outline: "0",
        },
        ".button--large--cta:active": {
            color: "#fff",
            backgroundColor: "#7c43bd",
            transition: "none",
            opacity: "0.2",
        },
        ".button--large--cta:disabled, .button--large--cta[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".button--material": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 16px",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "0 0",
            border: "0 solid currentColor",
            lineHeight: "36px",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    transition: "background-color 0.25s linear",
                },
                {
                    transition: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "#fff",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    fontSize: "17px",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "14px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#bb86fc",
            borderRadius: "3px",
            transition: "all 0.25s linear",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            minHeight: "36px",
            textAlign: "center",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            textTransform: "uppercase",
            opacity: "1",
        },
        ".button--material:hover": {
            transition: "all 0.25s linear",
        },
        ".button--material:active": {
            boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 5px -1px rgba(0, 0, 0, 0.4)",
            backgroundColor: "#bb86fc",
            opacity: "0.9",
            transition: "all 0.25s linear",
        },
        ".button--material:focus": {
            outline: "0",
        },
        ".button--material:disabled, .button--material[disabled]": {
            transition: "none",
            boxShadow: "none",
            backgroundColor: "color-mod(#4f4f4f a(26%))",
            color: "color-mod(black a(26%))",
            opacity: "1",
        },
        ".button--material--flat": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 16px",
            margin: "0",
            font: "inherit",
            color: "#bb86fc",
            background: "0 0",
            border: "0 solid currentColor",
            lineHeight: "36px",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    transition: "background-color 0.25s linear",
                },
                {
                    color: "#fff",
                },
                {
                    backgroundColor: "#bb86fc",
                },
                {
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
                },
                {
                    transition: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "#fff",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    fontSize: "17px",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "14px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "transparent",
            borderRadius: "3px",
            transition: "all 0.25s linear",
            boxShadow: "none",
            minHeight: "36px",
            textAlign: "center",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            textTransform: "uppercase",
        },
        ".button--material--flat:hover": {
            transition: "all 0.25s linear",
        },
        ".button--material--flat:focus": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#bb86fc",
            outline: "0",
            opacity: "1",
            border: "none",
        },
        ".button--material--flat:active": {
            boxShadow: "none",
            outline: "0",
            opacity: "1",
            border: "none",
            backgroundColor: "color-mod(#999 a(20%))",
            color: "#bb86fc",
            transition: "all 0.25s linear",
        },
        ".button--material--flat:disabled, .button--material--flat[disabled]": {
            transition: "none",
            opacity: "1",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "color-mod(black a(26%))",
        },
        ".button-bar": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitAlignContent: "stretch",
            alignContent: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            margin: "0",
            padding: "0",
            border: "none",
        },
        ".button-bar__item": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            width: "100%",
            padding: "0",
            margin: "0",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
        },
        ".button-bar__button": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#4a148c",
            border: "1px solid #4a148c",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0",
            fontSize: "13px",
            height: "27px",
            lineHeight: "27px",
            width: "100%",
            transition: "background-color 0.2s linear, color 0.2s linear",
            boxSizing: "border-box",
        },
        ".button-bar__button:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".button-bar__button:hover": {
            transition: "none",
        },
        ".button-bar__button:focus": {
            outline: "0",
        },
        ":checked + .button-bar__button": {
            backgroundColor: "#4a148c",
            color: "#fff",
            transition: "none",
        },
        ".button-bar__button:active, :active + .button-bar__button": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "0 solid #4a148c",
            borderTop: "1px solid #4a148c",
            borderBottom: "1px solid #4a148c",
            borderRight: "1px solid #4a148c",
            fontSize: "13px",
            width: "100%",
            transition: "none",
        },
        ".button-bar__item:first-child > .button-bar__button": {
            borderLeftWidth: "1px",
            borderRadius: "4px 0 0 4px",
        },
        ".button-bar__item:last-child > .button-bar__button": {
            borderRightWidth: "1px",
            borderRadius: "0 4px 4px 0",
        },
        ".segment": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitAlignContent: "stretch",
            alignContent: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            margin: "0",
            padding: "0",
            border: "none",
        },
        ".segment__item": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            width: "100%",
            padding: "0",
            margin: "0",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "block",
            backgroundColor: "transparent",
            border: "none",
        },
        ".segment__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".segment__button": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#4a148c",
            border: "1px solid #4a148c",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0",
            fontSize: "13px",
            height: "29px",
            lineHeight: "29px",
            width: "100%",
            transition: "background-color 0.2s linear, color 0.2s linear",
            boxSizing: "border-box",
            textAlign: "center",
        },
        ".segment__item:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".segment__button:hover": {
            transition: "none",
        },
        ".segment__button:focus": {
            outline: "0",
        },
        ":active + .segment__button": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "0 solid #4a148c",
            borderTop: "1px solid #4a148c",
            borderBottom: "1px solid #4a148c",
            borderRight: "1px solid #4a148c",
            fontSize: "13px",
            width: "100%",
            transition: "none",
        },
        ":checked + .segment__button": {
            backgroundColor: "#4a148c",
            color: "#fff",
            transition: "none",
        },
        ".segment__item:first-child > .segment__button": {
            borderLeftWidth: "1px",
            borderRadius: "4px 0 0 4px",
        },
        ".segment__item:last-child > .segment__button": {
            borderRightWidth: "1px",
            borderRadius: "0 4px 4px 0",
        },
        ".segment--material": {
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
        },
        ".segment--material__button": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fontSize: "14px",
            height: "32px",
            lineHeight: "32px",
            borderWidth: "0",
            color: "color-mod(black a(38%))",
            borderRadius: "0",
            backgroundColor: "#fafafa",
        },
        ":active + .segment--material__button": {
            backgroundColor: "#fafafa",
            borderRadius: "0",
            borderWidth: "0",
            fontSize: "14px",
            transition: "none",
            color: "color-mod(black a(38%))",
        },
        ":checked + .segment--material__button": {
            backgroundColor: "#c8c8c8",
            color: "#353535",
            borderRadius: "0",
            borderWidth: "0",
        },
        ".segment--material__item:first-child > .segment--material__button, .segment--material__item:last-child > .segment--material__button": {
            borderRadius: "0",
            borderWidth: "0",
        },
        ".tabbar": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            whiteSpace: "nowrap",
            margin: "0",
            padding: "0",
            height: "49px",
            backgroundColor: "#fafafa",
            borderTop: "0px solid #ccc",
            width: "100%",
        },
        ".tabbar__item": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "relative",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            webkitFlexBasis: "0",
            flexBasis: "0",
            width: "auto",
            borderRadius: "0",
        },
        ".tabbar__item > input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".tabbar__button": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#999",
            background: "0 0",
            border: "none",
            lineHeight: "49px",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
            display: "inline-block",
            textDecoration: "none",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    padding: "0",
                },
            ],
            height: "49px",
            letterSpacing: "0",
            verticalAlign: "top",
            backgroundColor: "transparent",
            borderTop: "none",
            width: "100%",
        },
        ".tabbar__icon": {
            fontSize: "24px",
            padding: "0",
            margin: "0",
            lineHeight: "26px",
            display: "block !important",
            height: "28px",
        },
        ".tabbar__label": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-block",
        },
        ".tabbar__badge.notification": {
            verticalAlign: "text-bottom",
            top: "-1px",
            marginLeft: "5px",
            zIndex: "10",
            fontSize: "12px",
            height: "16px",
            minWidth: "16px",
            lineHeight: "16px",
            borderRadius: "8px",
        },
        ".tabbar__icon ~ .tabbar__badge.notification": {
            position: "absolute",
            top: "5px",
            marginLeft: "0",
        },
        ".tabbar__icon + .tabbar__label": {
            display: "block",
            fontSize: "10px",
            lineHeight: "1",
            margin: "0",
            fontWeight: "400",
        },
        ".tabbar__label:first-child": {
            fontSize: "16px",
            lineHeight: "49px",
            margin: "0",
            padding: "0",
        },
        ":checked + .tabbar__button": {
            color: "#4a148c",
            backgroundColor: "transparent",
            boxShadow: "none",
            borderTop: "none",
        },
        ".tabbar__button:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".tabbar__button:focus": {
            zIndex: "1",
            borderTop: "none",
            boxShadow: "none",
            outline: "0",
        },
        ".tabbar__content": {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "49px",
            zIndex: "0",
        },
        ".tabbar--autogrow .tabbar__item": {
            webkitFlexBasis: "auto",
            flexBasis: "auto",
        },
        ".tabbar--top": {
            position: "relative",
            top: "0",
            left: "0",
            right: "0",
            bottom: "auto",
            borderTop: "none",
            borderBottom: "1px solid #ccc",
            paddingTop: "0",
        },
        ".tabbar--top__content": {
            top: "49px",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0",
        },
        ".tabbar--top-border__button": {
            backgroundColor: "transparent",
            borderBottom: "4px solid transparent",
        },
        ":checked + .tabbar--top-border__button": {
            backgroundColor: "transparent",
            borderBottom: "4px solid #4a148c",
        },
        ".tabbar__border": {
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "0",
            height: "4px",
            backgroundColor: "#4a148c",
        },
        ".tabbar--material": {
            background: "0 0",
            backgroundColor: "#1f1f1f",
            borderBottomWidth: "0",
            boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.14),\r\n    0 3px 5px -2px rgba(0, 0, 0, 0.12), 0 5px 1px -4px rgba(0, 0, 0, 0.2)",
        },
        ".tabbar--material__button": {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    fontWeight: "500",
                },
                {
                    color: "#fff",
                },
            ],
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
        },
        ".tabbar--material__button:after": {
            content: '""',
            display: "block",
            width: "0",
            height: "2px",
            bottom: "0",
            position: "absolute",
            marginTop: "-2px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#fff",
                },
            ],
        },
        ":checked + .tabbar--material__button:after": {
            width: "100%",
            transition: "width 0.2s ease-in-out",
        },
        ":checked + .tabbar--material__button": {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
        },
        ".tabbar--material__item:not([ripple]):active": {
            backgroundColor: "rgba(49, 49, 58, 0.1)",
            fallbacks: [
                {
                    backgroundColor: "#31313a",
                },
            ],
        },
        ".tabbar--material__border": {
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#fff",
                },
            ],
        },
        ".tabbar--material__icon": {
            fontSize: "22px !important",
            lineHeight: "36px",
        },
        ".tabbar--material__label": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".tabbar--material__label:first-child": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            letterSpacing: "0.015em",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            fontSize: "14px",
        },
        ".tabbar--material__icon + .tabbar--material__label": {
            fontSize: "10px",
        },
        ".toolbar-button": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            padding: "4px 10px",
            letterSpacing: "0",
            color: "#4a148c",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    backgroundColor: "#000",
                },
            ],
            borderRadius: "2px",
            border: "1px solid transparent",
            fontSize: "17px",
            transition: "none",
        },
        ".toolbar-button:active": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
            transition: "none",
            opacity: "0.2",
        },
        ".toolbar-button:disabled, .toolbar-button[disabled]": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".toolbar-button:focus": {
            outline: "0",
            transition: "none",
        },
        ".toolbar-button:hover": {
            transition: "none",
        },
        ".toolbar-button--outline": {
            border: "1px solid #4a148c",
            margin: "auto 8px",
            paddingLeft: "6px",
            paddingRight: "6px",
        },
        ".toolbar-button--material": {
            fontSize: "22px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    verticalAlign: "baseline",
                },
                {
                    color: "#fff",
                },
            ],
            display: "inline-block",
            padding: "0 12px",
            height: "100%",
            margin: "0",
            border: "none",
            borderRadius: "0",
            verticalAlign: "initial",
            transition: "background-color 0.25s linear",
        },
        ".toolbar-button--material:first-of-type": {
            marginLeft: "4px",
        },
        ".toolbar-button--material:last-of-type": {
            marginRight: "4px",
        },
        ".toolbar-button--material:active": {
            opacity: "1",
            transition: "background-color 0.25s linear",
        },
        ".back-button": {
            height: "44px",
            lineHeight: "44px",
            paddingLeft: "8px",
            color: "#4a148c",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
            display: "inline-block",
        },
        ".back-button:active": {
            opacity: "0.2",
        },
        ".back-button__label": {
            display: "inline-block",
            height: "100%",
            verticalAlign: "top",
            lineHeight: "44px",
            fontSize: "17px",
            fontWeight: "500",
        },
        ".back-button__icon": {
            marginRight: "6px",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            fill: "#4a148c",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            height: "100%",
        },
        ".back-button--material": {
            fontSize: "22px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    verticalAlign: "baseline",
                },
                {
                    color: "#fff",
                },
            ],
            display: "inline-block",
            padding: "0 12px",
            height: "100%",
            margin: "0 0 0 4px",
            border: "none",
            borderRadius: "0",
            verticalAlign: "initial",
            lineHeight: "56px",
        },
        ".back-button--material__label": {
            display: "none",
            fontSize: "20px",
        },
        ".back-button--material__icon": {
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            fill: "rgba(255, 255, 255, 1)",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            height: "100%",
        },
        ".back-button--material:active": {
            opacity: "1",
        },
        ".checkbox": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            lineHeight: "22px",
        },
        ".checkbox__checkmark": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
            height: "22px",
            width: "22px",
            pointerEvents: "none",
        },
        ".checkbox__input, .checkbox__input:checked": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".checkbox__checkmark:before": {
            content: '""',
            position: "absolute",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "0 0",
            border: "1px solid #c7c7cd",
            borderRadius: "22px",
            left: "0",
        },
        ".checkbox__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "5px",
            width: "11px",
            height: "5px",
            background: "0 0",
            border: "2px solid #fff",
            borderWidth: "1px",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
            opacity: "0",
        },
        ":checked + .checkbox__checkmark:before": {
            background: "#4a148c",
            border: "none",
        },
        ":checked + .checkbox__checkmark:after": {
            opacity: "1",
        },
        ":disabled + .checkbox__checkmark": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ":disabled:active + .checkbox__checkmark:before": {
            background: "0 0",
        },
        ".checkbox--noborder": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            lineHeight: "22px",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
        },
        ".checkbox--noborder__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".checkbox--noborder__checkmark": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "0 0",
            border: "none",
        },
        ".checkbox--noborder__checkmark:before": {
            content: '""',
            position: "absolute",
            width: "22px",
            height: "22px",
            background: "0 0",
            border: "none",
            borderRadius: "22px",
            left: "0",
        },
        ".checkbox--noborder__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "4px",
            opacity: "0",
            width: "11px",
            height: "4px",
            background: "0 0",
            border: "2px solid #4a148c",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
        },
        ":checked + .checkbox--noborder__checkmark:before": {
            background: "0 0",
            border: "none",
        },
        ":checked + .checkbox--noborder__checkmark:after": {
            opacity: "1",
        },
        ":focus + .checkbox--noborder__checkmark:before": {
            border: "none",
        },
        ":disabled + .checkbox--noborder__checkmark": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ":disabled:active + .checkbox--noborder__checkmark:before": {
            background: "0 0",
            border: "none",
        },
        ".checkbox--material": {
            lineHeight: "18px",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            overflow: "visible",
        },
        ".checkbox--material__checkmark": {
            width: "18px",
            height: "18px",
        },
        ".checkbox--material__checkmark:before": {
            borderRadius: "2px",
            height: "18px",
            width: "18px",
            border: "2px solid #717171",
            transition: "background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s",
            backgroundColor: "transparent",
        },
        ":checked + .checkbox--material__checkmark:before": {
            border: "2px solid #bb86fc",
            backgroundColor: "#bb86fc",
            transition: "background-color 0.1s linear, border-color 0.1s linear",
        },
        ".checkbox--material__checkmark:after": {
            borderColor: "#fff",
            transition: "transform 0.2s ease 0, -webkit-transform 0.2s ease 0",
            fallbacks: [
                {
                    transition: "transform 0.2s ease 0",
                },
                {
                    transition: "-webkit-transform 0.2s ease 0",
                },
            ],
            width: "10px",
            height: "5px",
            top: "4px",
            left: "3px",
            webkitTransform: "scale(0) rotate(-45deg)",
            transform: "scale(0) rotate(-45deg)",
            borderWidth: "2px",
        },
        ":checked + .checkbox--material__checkmark:after": {
            transition: "transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s",
            fallbacks: [
                {
                    transition: "transform 0.2s ease 0.2s",
                },
                {
                    transition: "-webkit-transform 0.2s ease 0.2s",
                },
            ],
            width: "10px",
            height: "5px",
            top: "4px",
            left: "3px",
            webkitTransform: "scale(1) rotate(-45deg)",
            transform: "scale(1) rotate(-45deg)",
            borderWidth: "2px",
        },
        ".checkbox--material__input:before": {
            content: '""',
            opacity: "0",
            position: "absolute",
            top: "0",
            left: "0",
            width: "18px",
            height: "18px",
            boxShadow: "0 0 0 11px #717171",
            boxSizing: "border-box",
            borderRadius: "50%",
            backgroundColor: "#717171",
            pointerEvents: "none",
            display: "block",
            webkitTransform: "scale3d(0.2, 0.2, 0.2)",
            transform: "scale3d(0.2, 0.2, 0.2)",
            transition: "opacity 0.25s ease-out, transform 0.1s ease-out,\r\n    -webkit-transform 0.1s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.1s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out",
                },
            ],
        },
        ".checkbox--material__input:checked:before": {
            boxShadow: "0 0 0 11px #bb86fc",
            backgroundColor: "#bb86fc",
        },
        ".checkbox--material__input:active:before": {
            opacity: "0.15",
            webkitTransform: "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
        },
        ":disabled + .checkbox--material__checkmark": {
            opacity: "1",
        },
        ":disabled + .checkbox--material__checkmark:before": {
            borderColor: "#afafaf",
        },
        ":disabled:checked + .checkbox--material__checkmark:before": {
            backgroundColor: "#afafaf",
        },
        ":disabled:checked + .checkbox--material__checkmark:after": {
            borderColor: "#fff",
        },
        ".radio-button__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "0",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".radio-button__input:active, .radio-button__input:focus": {
            outline: "0",
            webkitTapHighlightColor: "transparent",
        },
        ".radio-button": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
            lineHeight: "24px",
            textAlign: "left",
        },
        ".radio-button__checkmark:before": {
            content: '""',
            position: "absolute",
            borderRadius: "22px",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "0 0",
            border: "none",
            fallbacks: [
                {
                    borderRadius: "100%",
                },
            ],
            left: "0",
        },
        ".radio-button__checkmark": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    position: "relative",
                },
                {
                    position: "relative",
                },
            ],
            width: "24px",
            height: "24px",
            background: "0 0",
            pointerEvents: "none",
        },
        ".radio-button__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "4px",
            opacity: "0",
            width: "11px",
            height: "4px",
            background: "0 0",
            border: "2px solid #4a148c",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
        },
        ":checked + .radio-button__checkmark": {
            background: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    background: "#000",
                },
            ],
        },
        ":checked + .radio-button__checkmark:after": {
            opacity: "1",
        },
        ":checked + .radio-button__checkmark:before": {
            background: "0 0",
            border: "none",
        },
        ":disabled + .radio-button__checkmark": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".radio-button--material": {
            lineHeight: "22px",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".radio-button--material__input:before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            opacity: "0",
            width: "20px",
            height: "20px",
            boxShadow: "0 0 0 14px rgba(123, 123, 123, 1)",
            border: "none",
            boxSizing: "border-box",
            borderRadius: "50%",
            backgroundColor: "rgba(123, 123, 123, 1)",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.1s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out",
                },
                {
                    backgroundColor: "#7b7b7b",
                },
            ],
            pointerEvents: "none",
            display: "block",
            webkitTransform: "scale3d(0.2, 0.2, 0.2)",
            transform: "scale3d(0.2, 0.2, 0.2)",
            transition: "opacity 0.25s ease-out, transform 0.1s ease-out,\r\n    -webkit-transform 0.1s ease-out",
        },
        ".radio-button--material__input:checked:before": {
            boxShadow: "0 0 0 14px #bb86fc",
            backgroundColor: "#bb86fc",
        },
        ".radio-button--material__input:active:before": {
            opacity: "0.15",
            webkitTransform: "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
        },
        ".radio-button--material__checkmark": {
            width: "20px",
            height: "20px",
            overflow: "visible",
        },
        ".radio-button--material__checkmark:before": {
            background: "0 0",
            border: "2px solid rgba(123, 123, 123, 1)",
            fallbacks: [
                {
                    border: "2px solid #7b7b7b",
                },
            ],
            boxSizing: "border-box",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            transition: "border 0.2s ease",
        },
        ".radio-button--material__checkmark:after": {
            transition: "background 0.2s ease, transform 0.2s ease,\r\n    -webkit-transform 0.2s ease",
            fallbacks: [
                {
                    transition: "background 0.2s ease, transform 0.2s ease",
                },
                {
                    transition: "background 0.2s ease, -webkit-transform 0.2s ease",
                },
            ],
            top: "5px",
            left: "5px",
            width: "10px",
            height: "10px",
            border: "none",
            borderRadius: "50%",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ":checked + .radio-button--material__checkmark:before": {
            background: "0 0",
            border: "2px solid #bb86fc",
        },
        ".radio-button--material__input + .radio-button__checkmark:after": {
            background: "rgba(123, 123, 123, 1)",
            fallbacks: [
                {
                    background: "#7b7b7b",
                },
            ],
            opacity: "1",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ":checked + .radio-button--material__checkmark:after": {
            opacity: "1",
            background: "#bb86fc",
            webkitTransform: "scale(1)",
            transform: "scale(1)",
        },
        ":disabled + .radio-button--material__checkmark": {
            opacity: "1",
        },
        ":disabled + .radio-button--material__checkmark:after": {
            backgroundColor: "#afafaf",
            borderColor: "#afafaf",
        },
        ":disabled + .radio-button--material__checkmark:before": {
            borderColor: "#afafaf",
        },
        ".list": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            listStyleType: "none",
            textAlign: "left",
            display: "block",
            webkitOverflowScrolling: "touch",
            overflow: "hidden",
            backgroundImage: "linear-gradient(#ccc, #ccc), linear-gradient(#ccc, #ccc)",
            backgroundSize: "100% 1px, 100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom, top",
            fallbacks: [
                {
                    border: "none",
                },
            ],
            backgroundColor: "#fff",
        },
        ".list-item": {
            position: "relative",
            width: "100%",
            listStyle: "none",
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxPack: "start",
            webkitJustifyContent: "flex-start",
            justifyContent: "flex-start",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            padding: "0 0 0 14px",
            margin: "0 0 -1px 0",
            color: "rgba(255, 255, 255, 1)",
            transition: "background-color 0.2s linear",
        },
        ".list-item__top": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxPack: "start",
            webkitJustifyContent: "flex-start",
            justifyContent: "flex-start",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
            width: "100%",
        },
        ".list-item--expandable": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "vertical",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "column",
            flexDirection: "column",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            backgroundPositionX: "14px",
        },
        ".list-item__expandable-content": {
            display: "none",
            width: "100%",
            padding: "12px 14px 12px 0",
            boxSizing: "border-box",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            overflow: "hidden",
        },
        ".list-item.expanded > .list-item__expandable-content": {
            display: "block",
            height: "auto",
        },
        ".list-item__left": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            padding: "12px 14px 12px 0",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-item__left:empty": {
            width: "0",
            minWidth: "0",
            padding: "0",
            margin: "0",
        },
        ".list-item__center": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            webkitFlexWrap: "wrap",
            flexWrap: "wrap",
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            marginRight: "auto",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            marginLeft: "0",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            padding: "12px 6px 12px 0",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-item__right": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            marginLeft: "auto",
            padding: "12px 12px 12px 0",
            webkitBoxOrdinalGroup: "3",
            webkitOrder: "2",
            order: "2",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-header": {
            margin: "0",
            listStyle: "none",
            textAlign: "left",
            display: "block",
            boxSizing: "border-box",
            padding: "0 0 0 15px",
            fontSize: "12px",
            fontWeight: "500",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
            minHeight: "24px",
            lineHeight: "25px",
            textTransform: "uppercase",
            position: "relative",
            backgroundColor: "#eee",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
        },
        ".list--noborder": {
            borderTop: "none",
            borderBottom: "none",
            backgroundImage: "none",
        },
        ".list-item--tappable:active": {
            transition: "none",
            backgroundColor: "#d9d9d9",
        },
        ".list--inset": {
            margin: "0 8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundImage: "none",
        },
        ".list-item__label": {
            fontSize: "14px",
            padding: "0 4px",
            opacity: "0.6",
        },
        ".list-item__title": {
            webkitFlexBasis: "100%",
            flexBasis: "100%",
            webkitAlignSelf: "flex-end",
            alignSelf: "flex-end",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
        },
        ".list-item__subtitle": {
            opacity: "0.75",
            fontSize: "14px",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            webkitFlexBasis: "100%",
            flexBasis: "100%",
            webkitAlignSelf: "flex-start",
            alignSelf: "flex-start",
        },
        ".list-item__thumbnail": {
            width: "40px",
            height: "40px",
            borderRadius: "6px",
            display: "block",
            margin: "0",
        },
        ".list-item__icon": {
            fontSize: "22px",
            padding: "0 6px",
        },
        ".list--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            backgroundImage: "none",
            backgroundColor: "#121212",
        },
        ".list-item--material": {
            border: "0",
            padding: "0 0 0 16px",
            lineHeight: "normal",
        },
        ".list-item--material__subtitle": {
            marginTop: "4px",
        },
        ".list-item--material:first-child": {
            boxShadow: "none",
        },
        ".list-item--material__left": {
            padding: "14px 0",
            minWidth: "56px",
            lineHeight: "1",
            minHeight: "48px",
        },
        ".list-item--material__center, .list-item--material__left:empty": {
            padding: "14px 6px 14px 0",
            borderColor: "#1f1f1f",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #1f1f1f, #1f1f1f 100%)",
            minHeight: "48px",
        },
        ".list-item--material__right": {
            padding: "14px 16px 14px 0",
            lineHeight: "1",
            borderColor: "#1f1f1f",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #1f1f1f, #1f1f1f 100%)",
            minHeight: "48px",
        },
        ".list-item--material.list-item--expandable": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #1f1f1f",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #1f1f1f, #1f1f1f 100%)",
            backgroundPositionX: "16px",
        },
        ".list-item--material.list-item--expandable.list-item--longdivider, .list-item--material.list-item--longdivider": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #1f1f1f",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #1f1f1f, #1f1f1f 100%)",
        },
        ".list-header--material": {
            background: "#121212",
            border: "none",
            fontSize: "14px",
            textTransform: "none",
            margin: "-1px 0 0 0",
            color: "#757575",
            fontWeight: "500",
            padding: "8px 16px",
        },
        ".list-header--material:not(:first-of-type)": {
            borderTop: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(180deg, #1f1f1f, #1f1f1f 100%)",
            paddingTop: "16px",
        },
        ".list-item--material__thumbnail": {
            width: "40px",
            height: "40px",
            borderRadius: "100%",
        },
        ".list-item--material__icon": {
            fontSize: "20px",
            padding: "0 4px",
        },
        ".list-item--chevron:before, .list-item__expand-chevron": {
            borderRight: "2px solid #c7c7cc",
            borderBottom: "2px solid #c7c7cc",
            width: "7px",
            height: "7px",
            backgroundColor: "transparent",
            zIndex: "5",
        },
        ".list-item--chevron:before": {
            position: "absolute",
            content: '""',
            right: "16px",
            top: "50%",
            webkitTransform: "translateY(-50%) rotate(-45deg)",
            transform: "translateY(-50%) rotate(-45deg)",
        },
        ".list-item__expand-chevron": {
            webkitTransform: "rotate(45deg)",
            transform: "rotate(45deg)",
            margin: "1px",
        },
        ".list-item--expandable.expanded .list-item__expand-chevron": {
            webkitTransform: "rotate(225deg)",
            transform: "rotate(225deg)",
        },
        ".list-item--chevron__right": {
            paddingRight: "30px",
        },
        ".list-item--expandable .list-item__center, .list-item--expandable .list-item__right, .list-item--nodivider.list-item--expandable, .list-item--nodivider__center, .list-item--nodivider__right": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #ccc",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
        },
        ".list-item--longdivider:last-of-type": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider__center": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider__right": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-title": {
            padding: "0 0 0 16px",
            margin: "0",
            font: "inherit",
            color: "#6d6d72",
            background: "0 0",
            border: "none",
            lineHeight: "24px",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            display: "block",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
            ],
            textAlign: "left",
            boxSizing: "border-box",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
        },
        ".list-title--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            color: "#757575",
            fontSize: "14px",
            margin: "0",
            padding: "12px 0 12px 16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            lineHeight: "24px",
        },
        ".search-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 8px 0 28px",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "none",
            verticalAlign: "top",
            outline: "0",
            lineHeight: "1.3",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitAppearance: "textfield",
            mozAppearance: "textfield",
            appearance: "textfield",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    lineHeight: "1",
                },
                {
                    color: "#fff",
                },
                {
                    color: "inherit",
                },
                {
                    backgroundColor: "#030303",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            height: "28px",
            fontSize: "14px",
            backgroundColor: "rgba(3, 3, 3, 0.09)",
            boxShadow: "none",
            borderRadius: "5.5px",
            backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW9zLXNlYXJjaC1pbnB1dC1pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpb3Mtc2VhcmNoLWlucHV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNDMuMDAwMDAwKSIgZmlsbD0iIzdBNzk3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45OTcyNDgyLDE1LjUwNDE0NjYgQzE3LjA3NzM2NTcsMTUuNTQwNTkzOCAxNy4xNTIyNzMxLDE1LjU5MTYxMjkgMTcuMjE3NzUxNiwxNS42NTcwOTE0IEwyMC42NDk5OTEsMTkuMDg5MzMwOCBDMjAuOTQ0ODQ0OSwxOS4zODQxODQ3IDIwLjk0ODQ3NjQsMTkuODU4NjA2IDIwLjY1MzU0MTIsMjAuMTUzNTQxMiBDMjAuMzYwNjQ4LDIwLjQ0NjQzNDQgMTkuODgxMjcxNiwyMC40NDE5MzE3IDE5LjU4OTMzMDgsMjAuMTQ5OTkxIEwxNi4xNTcwOTE0LDE2LjcxNzc1MTYgQzE2LjA5MTM3LDE2LjY1MjAzMDEgMTYuMDQwMTE3MSwxNi41NzczODc0IDE2LjAwMzQxNDEsMTYuNDk3Nzk5NSBDMTUuMTY3MTY5NCwxNy4xMjcwNDExIDE0LjEyNzEzOTMsMTcuNSAxMywxNy41IEMxMC4yMzg1NzYzLDE3LjUgOCwxNS4yNjE0MjM3IDgsMTIuNSBDOCw5LjczODU3NjI1IDEwLjIzODU3NjMsNy41IDEzLDcuNSBDMTUuNzYxNDIzNyw3LjUgMTgsOS43Mzg1NzYyNSAxOCwxMi41IEMxOCwxMy42Mjc0Njg1IDE3LjYyNjgyMzIsMTQuNjY3Nzc2OCAxNi45OTcyNDgyLDE1LjUwNDE0NjYgWiBNMTMsMTYuNSBDMTUuMjA5MTM5LDE2LjUgMTcsMTQuNzA5MTM5IDE3LDEyLjUgQzE3LDEwLjI5MDg2MSAxNS4yMDkxMzksOC41IDEzLDguNSBDMTAuNzkwODYxLDguNSA5LDEwLjI5MDg2MSA5LDEyLjUgQzksMTQuNzA5MTM5IDEwLjc5MDg2MSwxNi41IDEzLDE2LjUgWiIgaWQ9Imlvcy1zZWFyY2gtaW5wdXQtaWNvbiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)",
            backgroundPosition: "8px center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "13px",
            display: "inline-block",
            textIndent: "0",
        },
        ".search-input::-webkit-search-cancel-button": {
            webkitAppearance: "textfield",
            appearance: "textfield",
            display: "none",
        },
        ".search-input::-webkit-search-decoration": {
            display: "none",
        },
        ".search-input:focus": {
            outline: "0",
        },
        ".search-input::-webkit-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input:-ms-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input::-ms-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input::placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".search-input--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "2px",
            height: "48px",
            backgroundColor: "rgba(250, 250, 250, 0)",
            fallbacks: [
                {
                    backgroundColor: "#fafafa",
                },
            ],
            backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbmRyb2lkLXNlYXJjaC1pbnB1dC1pY29uIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM4OTg5ODkiPgogICAgICAgICAgICA8ZyBpZD0iY29tcG9uZW50cyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibWF0ZXJpYWwtc2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hdGVyaWFsL0ljb25zLWJsYWNrL3NlYXJjaCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTAyLDYuNDkxIEwxMS43MDgsNi40OTEgTDExLjQzMiw2Ljc2NSBDMTIuNDA3LDcuOTAyIDEzLDkuMzc2IDEzLDEwLjk5MSBDMTMsMTQuNTgxIDEwLjA5LDE3LjQ5MSA2LjUsMTcuNDkxIEMyLjkxLDE3LjQ5MSAwLDE0LjU4MSAwLDEwLjk5MSBDMCw3LjQwMSAyLjkxLDQuNDkxIDYuNSw0LjQ5MSBDOC4xMTUsNC40OTEgOS41ODgsNS4wODMgMTAuNzI1LDYuMDU3IEwxMS4wMDEsNS43ODMgTDExLjAwMSw0Ljk5MSBMMTUuOTk5LDAgTDE3LjQ5LDEuNDkxIEwxMi41MDIsNi40OTEgTDEyLjUwMiw2LjQ5MSBaIE02LjUsNi40OTEgQzQuMDE0LDYuNDkxIDIsOC41MDUgMiwxMC45OTEgQzIsMTMuNDc2IDQuMDE0LDE1LjQ5MSA2LjUsMTUuNDkxIEM4Ljk4NSwxNS40OTEgMTEsMTMuNDc2IDExLDEwLjk5MSBDMTEsOC41MDUgOC45ODUsNi40OTEgNi41LDYuNDkxIEw2LjUsNi40OTEgWiIgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc0NTAwMCwgOC43NDU1MDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC43NDUwMDAsIC04Ljc0NTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)",
            backgroundSize: "18px",
            backgroundPosition: "18px center",
            fontSize: "14px",
            padding: "0 24px 0 64px",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24),\r\n    0 1px 0 0 rgba(255, 255, 255, 0.06) inset",
        },
        ".text-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "none",
            verticalAlign: "top",
            outline: "0",
            lineHeight: "1",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "#fff",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            width: "auto",
            fontSize: "16px",
            height: "31px",
        },
        ".text-input::-ms-clear": {
            display: "none",
        },
        ".text-input:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".text-input::-webkit-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input:-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input::-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input::placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
        },
        ".text-input--underbar": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "none",
            verticalAlign: "top",
            outline: "0",
            lineHeight: "1",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    boxSizing: "border-box",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "#fff",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            width: "auto",
            fontSize: "16px",
            height: "31px",
            borderBottom: "1px solid #ccc",
            borderRadius: "0",
        },
        ".text-input--underbar:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: "1px solid #ccc",
        },
        ".text-input--underbar:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input--underbar:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input--underbar:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input--underbar:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".text-input--underbar:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#fff",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".text-input--material": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#212121",
            background: "0 0",
            border: "none",
            verticalAlign: "middle",
            outline: "0",
            lineHeight: "1",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    verticalAlign: "top",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
                },
            ],
            backgroundImage: "linear-gradient(to top, transparent 1px, #afafaf 1px)",
            backgroundSize: "100% 2px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundColor: "transparent",
            fontSize: "16px",
            paddingBottom: "2px",
            borderRadius: "0",
            height: "24px",
            webkitTransform: "translate3d(0, 0, 0)",
        },
        ".text-input--material__label": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#afafaf",
            position: "absolute",
            left: "0",
            top: "2px",
            fontSize: "16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            pointerEvents: "none",
        },
        ".text-input--material__label--active": {
            color: "#3d5afe",
            webkitTransform: "translate(0, -75%) scale(0.75)",
            transform: "translate(0, -75%) scale(0.75)",
            webkitTransformOrigin: "left top",
            transformOrigin: "left top",
            transition: "transform 0.1s ease-in, color 0.1s ease-in,\r\n    -webkit-transform 0.1s ease-in",
            fallbacks: [
                {
                    transition: "transform 0.1s ease-in, color 0.1s ease-in",
                },
                {
                    transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in",
                },
            ],
        },
        ".text-input--material:focus": {
            backgroundImage: "linear-gradient(#3d5afe, #3d5afe),\r\n    linear-gradient(to top, transparent 1px, #afafaf 1px)",
            webkitAnimation: "material-text-input-animate 0.3s forwards",
            animation: "material-text-input-animate 0.3s forwards",
        },
        ".text-input--material::-webkit-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material:-ms-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material::-ms-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material::placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        "@keyframes material-text-input-animate": {
            "0%": {
                backgroundSize: "0 2px, 100% 2px",
            },
            "100%": {
                backgroundSize: "100% 2px, 100% 2px",
            },
        },
        ".textarea": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "5px 5px 5px 5px",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "1px solid #ccc",
            lineHeight: "normal",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            verticalAlign: "top",
            resize: "none",
            outline: "0",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "#121212",
            letterSpacing: "0",
            boxShadow: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            width: "auto",
        },
        ".textarea:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".textarea::-webkit-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea:-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea::-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea::placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea--transparent": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "5px 5px 5px 5px",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            verticalAlign: "top",
            resize: "none",
            outline: "0",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    padding: "0",
                },
            ],
            paddingLeft: "0",
            paddingRight: "0",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            width: "auto",
        },
        ".textarea--transparent:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        ".textarea--transparent::-webkit-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea--transparent:-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea--transparent::-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".textarea--transparent::placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".dialog": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "auto auto",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            top: "50%",
            left: "50%",
            webkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            fallbacks: [
                {
                    margin: "0",
                },
            ],
            overflow: "hidden",
            minWidth: "270px",
            minHeight: "100px",
            textAlign: "left",
        },
        ".dialog-container": {
            height: "inherit",
            minHeight: "inherit",
            overflow: "hidden",
            borderRadius: "4px",
            backgroundColor: "#f4f4f4",
            webkitMaskImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
        },
        ".dialog-mask": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
        },
        ".dialog--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            textAlign: "left",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14),\r\n    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".dialog-container--material": {
            borderRadius: "2px",
            backgroundColor: "#121212",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
        },
        ".dialog-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
        },
        ".alert-dialog": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "auto",
            font: "inherit",
            color: "#1f1f21",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            top: "50%",
            left: "50%",
            webkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            width: "270px",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    margin: "0",
                },
            ],
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
            overflow: "visible",
            maxWidth: "95%",
        },
        ".alert-dialog-container": {
            height: "inherit",
            paddingTop: "16px",
            overflow: "hidden",
        },
        ".alert-dialog-title": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            fontSize: "17px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0 8px",
            textAlign: "center",
            color: "#1f1f21",
        },
        ".alert-dialog-content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px 8px",
            fontSize: "14px",
            minHeight: "36px",
            textAlign: "center",
            color: "#1f1f21",
        },
        ".alert-dialog-footer": {
            width: "100%",
        },
        ".alert-dialog-button": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 8px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "0 0",
            border: "none",
            lineHeight: "44px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            letterSpacing: "0",
            verticalAlign: "middle",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    border: "none",
                },
            ],
            borderTop: "1px solid #ddd",
            fontSize: "16px",
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            textAlign: "center",
            height: "44px",
            outline: "0",
        },
        ".alert-dialog-button:active": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
        },
        ".alert-dialog-button--primal": {
            fontWeight: "500",
        },
        ".alert-dialog-footer--rowfooter": {
            whiteSpace: "nowrap",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "wrap",
            flexWrap: "wrap",
        },
        ".alert-dialog-button--rowfooter": {
            webkitBoxFlex: "1",
            webkitFlex: "1",
            flex: "1",
            display: "block",
            width: "100%",
            borderLeft: "1px solid #ddd",
        },
        ".alert-dialog-button--rowfooter:first-child": {
            borderLeft: "none",
        },
        ".alert-dialog-mask": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
        },
        ".alert-dialog--material": {
            borderRadius: "2px",
            backgroundColor: "#121212",
        },
        ".alert-dialog-container--material": {
            padding: "22px 0 0 0",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14),\r\n    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".alert-dialog-title--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            textAlign: "left",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    fontWeight: "400",
                },
            ],
            padding: "0 24px",
            color: "rgba(255, 255, 255, 1)",
        },
        ".alert-dialog-content--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            textAlign: "left",
            fontSize: "16px",
            fallbacks: [
                {
                    color: "#fff",
                },
                {
                    fontWeight: "400",
                },
            ],
            lineHeight: "20px",
            padding: "0 24px",
            margin: "24px 0 10px 0",
            minHeight: "0",
            color: "rgba(255, 255, 255, 0.85)",
        },
        ".alert-dialog-footer--material": {
            display: "block",
            padding: "0",
            height: "52px",
            boxSizing: "border-box",
            margin: "0",
            lineHeight: "1",
        },
        ".alert-dialog-button--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            textTransform: "uppercase",
            display: "inline-block",
            width: "auto",
            float: "right",
            background: "0 0",
            border: "none",
            borderRadius: "2px",
            fontSize: "14px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            outline: "0",
            height: "36px",
            lineHeight: "36px",
            padding: "0 8px",
            margin: "8px 8px 8px 0",
            boxSizing: "border-box",
            minWidth: "50px",
            color: "#bb86fc",
        },
        ".alert-dialog-button--material:active": {
            backgroundColor: "initial",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
            ],
        },
        ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
            border: "0",
        },
        ".alert-dialog-button--primal--material": {
            fontWeight: "500",
        },
        ".alert-dialog-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
        },
        ".popover": {
            position: "absolute",
            zIndex: "20001",
        },
        ".popover--bottom": {
            bottom: "0",
        },
        ".popover--top": {
            top: "0",
        },
        ".popover--left": {
            left: "0",
        },
        ".popover--right": {
            right: "0",
        },
        ".popover-mask": {
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
            position: "absolute",
            zIndex: "19999",
        },
        ".popover__content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "block",
            width: "220px",
            overflow: "auto",
            minHeight: "100px",
            maxHeight: "100%",
            backgroundColor: "#fff",
            borderRadius: "8px",
            fallbacks: [
                {
                    color: "inherit",
                },
            ],
            pointerEvents: "auto",
        },
        ".popover__arrow": {
            position: "absolute",
            width: "18px",
            height: "18px",
            webkitTransformOrigin: "50% 50% 0",
            transformOrigin: "50% 50% 0",
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(45deg, #fff, #fff 50%, transparent 50%)",
            borderRadius: "0 0 0 4px",
            margin: "0",
            zIndex: "20001",
        },
        ".popover--bottom__arrow": {
            webkitTransform: "translateY(6px) translateX(-9px) rotate(-45deg)",
            transform: "translateY(6px) translateX(-9px) rotate(-45deg)",
            bottom: "0",
            marginRight: "-18px",
        },
        ".popover--top__arrow": {
            webkitTransform: "translateY(-6px) translateX(-9px) rotate(135deg)",
            transform: "translateY(-6px) translateX(-9px) rotate(135deg)",
            top: "0",
            marginRight: "-18px",
        },
        ".popover--left__arrow": {
            webkitTransform: "translateX(-6px) translateY(-9px) rotate(45deg)",
            transform: "translateX(-6px) translateY(-9px) rotate(45deg)",
            left: "0",
            marginBottom: "-18px",
        },
        ".popover--right__arrow": {
            webkitTransform: "translateX(6px) translateY(-9px) rotate(225deg)",
            transform: "translateX(6px) translateY(-9px) rotate(225deg)",
            right: "0",
            marginBottom: "-18px",
        },
        ".popover-mask--material": {
            backgroundColor: "transparent",
        },
        ".popover--material__content": {
            backgroundColor: "#fafafa",
            borderRadius: "2px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
        },
        ".popover--material__arrow": {
            display: "none",
        },
        ".progress-bar": {
            position: "relative",
            height: "2px",
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            backgroundClip: "padding-box",
            margin: "0",
            overflow: "hidden",
            borderRadius: "4px",
        },
        ".progress-bar__primary, .progress-bar__secondary": {
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            bottom: "0",
            transition: "width 0.3s linear",
            zIndex: "100",
            borderRadius: "4px",
        },
        ".progress-bar__secondary": {
            backgroundColor: "#65adff",
            zIndex: "0",
        },
        ".progress-bar--indeterminate:before": {
            content: '""',
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            left: "0",
            bottom: "0",
            willChange: "left, right",
            webkitAnimation: "progress-bar__indeterminate 2.1s\r\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
            animation: "progress-bar__indeterminate 2.1s\r\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
            borderRadius: "4px",
        },
        ".progress-bar--indeterminate:after": {
            content: '""',
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            left: "0",
            bottom: "0",
            willChange: "left, right",
            webkitAnimation: "progress-bar__indeterminate-short 2.1s\r\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
            animation: "progress-bar__indeterminate-short 2.1s\r\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
            webkitAnimationDelay: "1.15s",
            animationDelay: "1.15s",
            borderRadius: "4px",
        },
        "@keyframes progress-bar__indeterminate": {
            "0%": {
                left: "-35%",
                right: "100%",
            },
            "60%": {
                left: "100%",
                right: "-90%",
            },
            "100%": {
                left: "100%",
                right: "-90%",
            },
        },
        "@keyframes progress-bar__indeterminate-short": {
            "0%": {
                left: "-200%",
                right: "100%",
            },
            "60%": {
                left: "107%",
                right: "-8%",
            },
            "100%": {
                left: "107%",
                right: "-8%",
            },
        },
        ".progress-bar--material": {
            height: "4px",
            backgroundColor: "transparent",
            borderRadius: "0",
        },
        ".progress-bar--material__primary, .progress-bar--material__secondary": {
            backgroundColor: "#bb86fc",
            borderRadius: "0",
        },
        ".progress-bar--material__secondary": {
            backgroundColor: "rgba(168, 98, 254, 1)",
            fallbacks: [
                {
                    backgroundColor: "#a862fe",
                },
            ],
            zIndex: "0",
        },
        ".progress-bar--material.progress-bar--indeterminate:before": {
            backgroundColor: "#bb86fc",
            borderRadius: "0",
        },
        ".progress-bar--material.progress-bar--indeterminate:after": {
            backgroundColor: "#bb86fc",
            borderRadius: "0",
        },
        ".progress-circular": {
            height: "32px",
            position: "relative",
            width: "32px",
            webkitTransform: "rotate(270deg)",
            transform: "rotate(270deg)",
            webkitAnimation: "none",
            animation: "none",
        },
        ".progress-circular__background, .progress-circular__primary, .progress-circular__secondary": {
            webkitAnimation: "none",
            animation: "none",
            fill: "none",
            strokeWidth: "5%",
            strokeMiterlimit: "10",
        },
        ".progress-circular__background": {
            stroke: "transparent",
        },
        ".progress-circular__primary": {
            strokeDasharray: "1, 200",
            strokeDashoffset: "0",
            stroke: "#4a148c",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        ".progress-circular__secondary": {
            stroke: "#65adff",
        },
        ".progress-circular--indeterminate": {
            webkitAnimation: "progress__rotate 2s linear infinite",
            animation: "progress__rotate 2s linear infinite",
            webkitTransform: "none",
            transform: "none",
        },
        ".progress-circular--indeterminate__primary": {
            webkitAnimation: "progress__dash 1.5s ease-in-out infinite",
            animation: "progress__dash 1.5s ease-in-out infinite",
        },
        ".progress-circular--indeterminate__secondary": {
            display: "none",
        },
        "@keyframes progress__rotate": {
            "100%": {
                webkitTransform: "rotate(360deg)",
                transform: "rotate(360deg)",
            },
        },
        "@keyframes progress__dash": {
            "0%": {
                strokeDasharray: "10%, 241.32%",
                strokeDashoffset: "0",
            },
            "50%": {
                strokeDasharray: "201%, 50.322%",
                strokeDashoffset: "-100%",
            },
            "100%": {
                strokeDasharray: "10%, 241.32%",
                strokeDashoffset: "-251.32%",
            },
        },
        ".progress-circular--material__background, .progress-circular--material__primary, .progress-circular--material__secondary": {
            strokeWidth: "9%",
        },
        ".progress-circular--material__background": {
            stroke: "transparent",
        },
        ".progress-circular--material__primary": {
            stroke: "#bb86fc",
        },
        ".progress-circular--material__secondary": {
            stroke: "rgba(172, 105, 254, 1)",
        },
        "button.fab, ons-fab.fab, ons-speed-dial-item.fab": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "0 0",
            border: "0 solid currentColor",
            lineHeight: "56px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            width: "56px",
            height: "56px",
            textDecoration: "none",
            fontSize: "25px",
            fallbacks: [
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            letterSpacing: "0",
            verticalAlign: "middle",
            textAlign: "center",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
            transition: "all 0.1s linear",
        },
        "button.fab:active, ons-fab.fab:active, ons-speed-dial-item.fab:active": {
            boxShadow: "0 0 6 rgba(0, 0, 0, 0.12)",
            backgroundColor: "color-mod(#4a148c a(70%))",
            transition: "all 0.2s ease",
            fallbacks: [
                {
                    boxShadow: "0 3px 6 rgba(0, 0, 0, 0.12)",
                },
            ],
        },
        "button.fab:focus, ons-fab.fab:focus, ons-speed-dial-item.fab:focus": {
            outline: "0",
        },
        "button.fab:disabled, button.fab[disabled], ons-fab.fab:disabled, ons-fab.fab[disabled], ons-speed-dial-item.fab:disabled, ons-speed-dial-item.fab[disabled]": {
            backgroundColor: "color-mod(black alpha(50%))",
            boxShadow: "none",
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        "button.fab__icon, ons-fab.fab__icon, ons-speed-dial-item.fab__icon": {
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "block",
            borderRadius: "100%",
            padding: "0",
            zIndex: "100",
            lineHeight: "56px",
        },
        "button.fab--material, ons-fab.fab--material, ons-speed-dial-item.fab--material": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "0 solid currentColor",
            lineHeight: "56px",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            width: "56px",
            height: "56px",
            textDecoration: "none",
            fontSize: "25px",
            fallbacks: [
                {
                    transition: "all 0.1s linear",
                },
                {
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    color: "#fff",
                },
                {
                    color: "#fff",
                },
                {
                    lineHeight: "56px",
                },
                {
                    fontSize: "25px",
                },
                {
                    textDecoration: "none",
                },
                {
                    height: "56px",
                },
                {
                    width: "56px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            letterSpacing: "0",
            verticalAlign: "middle",
            textAlign: "center",
            backgroundColor: "#bb86fc",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
            transition: "all 0.2s ease-in-out",
        },
        "button.fab--material:active, ons-fab.fab--material:active, ons-speed-dial-item.fab--material:active": {
            boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4)",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            fallbacks: [
                {
                    backgroundColor: "#fff",
                },
            ],
            transition: "all 0.2s ease",
        },
        "button.fab--material:focus, ons-fab.fab--material:focus, ons-speed-dial-item.fab--material:focus": {
            outline: "0",
        },
        "button.fab--material__icon, ons-fab.fab--material__icon, ons-speed-dial-item.fab--material__icon": {
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "block",
            borderRadius: "100%",
            padding: "0",
            zIndex: "100",
            lineHeight: "56px",
        },
        "button.fab--material:disabled, button.fab--material[disabled], ons-fab.fab--material:disabled, ons-fab.fab--material[disabled], ons-speed-dial-item.fab--material:disabled, ons-speed-dial-item.fab--material[disabled]": {
            backgroundColor: "color-mod(black alpha(50%))",
            boxShadow: "none",
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
        },
        "button.fab--mini, ons-fab.fab--mini, ons-speed-dial-item.fab--mini": {
            width: "40px",
            height: "40px",
            lineHeight: "40px",
        },
        "button.fab--mini__icon, ons-fab.fab--mini__icon, ons-speed-dial-item.fab--mini__icon": {
            lineHeight: "40px",
        },
        "button.speed-dial__item, ons-fab.speed-dial__item, ons-speed-dial-item.speed-dial__item": {
            position: "absolute",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ".speed-dial.fab--top__right, button.fab--top__right, ons-fab.fab--top__right": {
            top: "20px",
            bottom: "auto",
            right: "20px",
            left: "auto",
            position: "absolute",
        },
        ".speed-dial.fab--bottom__right, button.fab--bottom__right, ons-fab.fab--bottom__right": {
            top: "auto",
            bottom: "20px",
            right: "20px",
            left: "auto",
            position: "absolute",
        },
        ".speed-dial.fab--top__left, button.fab--top__left, ons-fab.fab--top__left": {
            top: "20px",
            bottom: "auto",
            right: "auto",
            left: "20px",
            position: "absolute",
        },
        ".speed-dial.fab--bottom__left, button.fab--bottom__left, ons-fab.fab--bottom__left": {
            top: "auto",
            bottom: "20px",
            right: "auto",
            left: "20px",
            position: "absolute",
        },
        ".speed-dial.fab--top__center, button.fab--top__center, ons-fab.fab--top__center": {
            top: "20px",
            bottom: "auto",
            marginLeft: "-28px",
            left: "50%",
            right: "auto",
            position: "absolute",
        },
        ".speed-dial.fab--bottom__center, button.fab--bottom__center, ons-fab.fab--bottom__center": {
            top: "auto",
            bottom: "20px",
            marginLeft: "-28px",
            left: "50%",
            right: "auto",
            position: "absolute",
        },
        ".modal": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
                {
                    overflow: "hidden",
                },
                {
                    backgroundClip: "padding-box",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            display: "table",
            zIndex: "2147483647",
        },
        ".modal__content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "normal",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "0 0",
            border: "none",
            lineHeight: "normal",
            fallbacks: [
                {
                    whiteSpace: "nowrap",
                },
                {
                    color: "inherit",
                },
                {
                    backgroundClip: "padding-box",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
        },
        ".select-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 20px 0 0",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "0 0",
            border: "none",
            verticalAlign: "top",
            outline: "0",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    padding: "0",
                },
                {
                    border: "none",
                },
                {
                    color: "#fff",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "1",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            position: "relative",
            fontSize: "17px",
            height: "32px",
            borderColor: "#ccc",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            display: "inline-block",
            borderRadius: "0",
            backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            borderBottom: "none",
        },
        ".select-input::-ms-clear": {
            display: "none",
        },
        ".select-input::-webkit-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input:-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input::-ms-input-placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input::placeholder": {
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
        },
        ".select-input:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
        },
        ".select-input[multiple]": {
            height: "64px",
        },
        ".select-input--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "rgba(212, 212, 232, 1)",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    color: "#d4d4e8",
                },
            ],
            fontSize: "15px",
            backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=),\r\n    linear-gradient(\r\n      to top,\r\n      color-mod(black a(12%)) 50%,\r\n      color-mod(black a(12%)) 50%\r\n    )",
            backgroundSize: "auto, 100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center, left bottom",
            border: "none",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
        },
        ".select-input--material__label": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 0.92)",
            fallbacks: [
                {
                    color: "#000",
                },
            ],
            position: "absolute",
            left: "0",
            top: "2px",
            fontSize: "16px",
            pointerEvents: "none",
        },
        ".select-input--material__label--active": {
            color: "rgba(0, 0, 0, 0.15)",
            fallbacks: [
                {
                    transition: "transform 0.1s ease-in, color 0.1s ease-in",
                },
                {
                    transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in",
                },
                {
                    color: "#000",
                },
            ],
            webkitTransform: "translate(0, -75%) scale(0.75)",
            transform: "translate(0, -75%) scale(0.75)",
            webkitTransformOrigin: "left top",
            transformOrigin: "left top",
            transition: "transform 0.1s ease-in, color 0.1s ease-in,\r\n    -webkit-transform 0.1s ease-in",
        },
        ".select-input--material::-webkit-input-placeholder": {
            color: "rgba(0, 0, 0, 0.92)",
            fallbacks: [
                {
                    color: "#000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material:-ms-input-placeholder": {
            color: "rgba(0, 0, 0, 0.92)",
            fallbacks: [
                {
                    color: "#000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material::-ms-input-placeholder": {
            color: "rgba(0, 0, 0, 0.92)",
            fallbacks: [
                {
                    color: "#000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material::placeholder": {
            color: "rgba(0, 0, 0, 0.92)",
            fallbacks: [
                {
                    color: "#000",
                },
            ],
            lineHeight: "20px",
        },
        "@keyframes material-select-input-animate": {
            "0%": {
                backgroundSize: "0 2px, 100% 2px",
            },
            "100%": {
                backgroundSize: "100% 2px, 100% 2px",
            },
        },
        ".select-input--underbar": {
            border: "none",
            borderBottom: "1px solid #ccc",
        },
        ".select-input--underbar:disabled": {
            opacity: "0.3",
            cursor: "default",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".select-input--underbar:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input--underbar:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input--underbar:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input--underbar:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(221, 217, 217, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#ddd9d9",
                },
            ],
        },
        ".select-input--underbar:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "#fff",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".action-sheet": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            cursor: "default",
            position: "absolute",
            left: "10px",
            right: "10px",
            bottom: "10px",
            zIndex: "2",
        },
        ".action-sheet-button": {
            boxSizing: "border-box",
            height: "56px",
            fontSize: "20px",
            textAlign: "center",
            color: "#4a148c",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fallbacks: [
                {
                    backgroundColor: "#fff",
                },
            ],
            borderRadius: "0",
            lineHeight: "56px",
            border: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            display: "block",
            width: "100%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(\r\n    0deg,\r\n    rgba(0, 0, 0, 0.1),\r\n    rgba(0, 0, 0, 0.1) 100%\r\n  )",
        },
        ".action-sheet-button:first-child": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
        },
        ".action-sheet-button:active": {
            backgroundColor: "#e9e9e9",
            backgroundImage: "none",
        },
        ".action-sheet-button:focus": {
            outline: "0",
        },
        ".action-sheet-button:nth-last-of-type(2)": {
            borderBottomRightRadius: "12px",
            borderBottomLeftRadius: "12px",
            backgroundImage: "none",
        },
        ".action-sheet-button:last-of-type": {
            borderRadius: "12px",
            margin: "8px 0 0 0",
            backgroundColor: "#fff",
            backgroundImage: "none",
            fontWeight: "600",
        },
        ".action-sheet-button:last-of-type:active": {
            backgroundColor: "#e9e9e9",
        },
        ".action-sheet-button--destructive": {
            color: "#fe3824",
        },
        ".action-sheet-title": {
            boxSizing: "border-box",
            height: "56px",
            fontSize: "13px",
            color: "#8f8e94",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fallbacks: [
                {
                    backgroundColor: "#fff",
                },
            ],
            lineHeight: "56px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(\r\n    0deg,\r\n    rgba(0, 0, 0, 0.1),\r\n    rgba(0, 0, 0, 0.1) 100%\r\n  )",
        },
        ".action-sheet-title:first-child": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
        },
        ".action-sheet-icon": {
            display: "none",
        },
        ".action-sheet-mask": {
            position: "absolute",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
            zIndex: "1",
        },
        ".action-sheet--material": {
            left: "0",
            right: "0",
            bottom: "0",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14),\r\n    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".action-sheet-title--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "0",
            backgroundImage: "none",
            textAlign: "left",
            height: "56px",
            lineHeight: "56px",
            fontSize: "16px",
            padding: "0 0 0 16px",
            color: "#686868",
            backgroundColor: "#fff",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
        },
        ".action-sheet-title--material:first-child": {
            borderRadius: "0",
        },
        ".action-sheet-button--material": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "0",
            backgroundImage: "none",
            height: "52px",
            lineHeight: "52px",
            textAlign: "left",
            fontSize: "16px",
            padding: "0 0 0 16px",
            color: "#686868",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            backgroundColor: "#fff",
        },
        ".action-sheet-button--material:first-child": {
            borderRadius: "0",
        },
        ".action-sheet-button--material:nth-last-of-type(2)": {
            borderRadius: "0",
        },
        ".action-sheet-button--material:last-of-type": {
            margin: "0",
            borderRadius: "0",
            fontWeight: "400",
            backgroundColor: "#fff",
        },
        ".action-sheet-icon--material": {
            display: "inline-block",
            float: "left",
            height: "52px",
            lineHeight: "52px",
            marginRight: "32px",
            fontSize: "26px",
            width: "0.8em",
            textAlign: "center",
        },
        ".action-sheet-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
        },
        ".card": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxSizing: "border-box",
            display: "block",
            margin: "8px",
            padding: "16px",
            textAlign: "left",
            wordWrap: "break-word",
        },
        ".card__content": {
            margin: "0",
            fontSize: "14px",
            lineHeight: "1.4",
            color: "#030303",
        },
        ".card__title": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            fontSize: "20px",
            margin: "4px 0 8px 0",
            padding: "0",
            display: "block",
            boxSizing: "border-box",
        },
        ".card--material": {
            backgroundColor: "#1f1f1f",
            borderRadius: "2px",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".card--material__content": {
            fontSize: "14px",
            lineHeight: "1.4",
            color: "rgba(255, 255, 255, 0.54)",
            fallbacks: [
                {
                    color: "#fff",
                },
            ],
        },
        ".card--material__title": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fontSize: "24px",
            margin: "8px 0 12px 0",
        },
        ".toast": {
            fontFamily: '-apple-system, "Helvetica Neue", Helvetica, Arial,\r\n    "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            zIndex: "2",
            left: "8px",
            right: "8px",
            bottom: "0",
            margin: "8px 0",
            borderRadius: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
                {
                    backgroundColor: "#000",
                },
            ],
            display: "flex",
            minHeight: "48px",
            lineHeight: "1.5",
            boxSizing: "border-box",
            padding: "16px 16px",
        },
        ".toast__message": {
            fontSize: "14px",
            color: "#fff",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            textAlign: "left",
            margin: "0 16px 0 0",
            whiteSpace: "normal",
        },
        ".toast__button": {
            fontSize: "14px",
            color: "#fff",
            webkitBoxFlex: "0",
            webkitFlexGrow: "0",
            flexGrow: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            border: "none",
            backgroundColor: "transparent",
            cursor: "default",
            textTransform: "uppercase",
        },
        ".toast__button:focus": {
            outline: "0",
        },
        ".toast__button:active": {
            opacity: "0.4",
        },
        ".toast--material": {
            left: "0",
            right: "0",
            bottom: "0",
            margin: "0",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fallbacks: [
                {
                    backgroundColor: "#000",
                },
            ],
            borderRadius: "0",
            padding: "16px 24px",
        },
        ".toast--material__message": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            margin: "0 24px 0 0",
        },
        ".toast--material__button": {
            fontFamily: "Roboto, Noto, sans-serif",
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#bb86fc",
        },
        ".toolbar + .page__background": {
            top: "44px",
        },
        ".toolbar + .page__background + .page__content": {
            top: "44px",
            paddingTop: "0",
        },
        ".page-with-bottom-toolbar > .page__content": {
            bottom: "44px",
        },
        ".toolbar.toolbar--material + .page__background": {
            top: "56px",
        },
        ".toolbar.toolbar--material + .page__background + .page__content": {
            top: "56px",
            paddingTop: "0",
        },
        ".toolbar.toolbar--transparent + .page__background": {
            top: "0",
        },
        ".toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
            top: "0",
            paddingTop: "44px",
        },
        ".toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
            top: "0",
            paddingTop: "56px",
        },
        ".tabbar:not(.tabbar--top)": {
            paddingBottom: "0",
        },
        "@media (orientation: landscape)": {
            "html[onsflag-iphonex-landscape] .page__content": {
                paddingLeft: "44px",
                paddingRight: "44px",
                bottom: "0",
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .modal .page__content": {
                paddingLeft: "0",
                paddingRight: "0",
            },
            "html[onsflag-iphonex-landscape] .toolbar__left": {
                paddingLeft: "44px",
            },
            "html[onsflag-iphonex-landscape] .toolbar__right": {
                paddingRight: "44px",
            },
            "html[onsflag-iphonex-landscape] .bottom-bar": {
                paddingRight: "44px",
                paddingLeft: "44px",
                bottom: "0",
                boxSizing: "content-box",
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .tabbar": {
                paddingLeft: "44px",
                paddingRight: "44px",
                width: "calc(100% - 88px)",
            },
            "html[onsflag-iphonex-landscape] .fab--bottom__center, html[onsflag-iphonex-landscape] .fab--bottom__left, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                bottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .fab--bottom__left, html[onsflag-iphonex-landscape] .fab--top__left": {
                left: "44px",
            },
            "html[onsflag-iphonex-landscape] .fab--bottom__right, html[onsflag-iphonex-landscape] .fab--top__right": {
                right: "44px",
            },
            "html[onsflag-iphonex-landscape] .action-sheet": {
                left: "calc((100vw - 100vh + 20px) / 2)",
                right: "calc((100vw - 100vh + 20px) / 2)",
                bottom: "33px",
            },
            "html[onsflag-iphonex-landscape] .toast": {
                left: "52px",
                right: "52px",
                bottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .bottom-bar, html[onsflag-iphonex-landscape]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .bottom-bar, html[onsflag-iphonex-landscape]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .bottom-bar": {
                bottom: "0",
                boxSizing: "border-box",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .page__content, html[onsflag-iphonex-landscape]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .page__content": {
                bottom: "0",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                bottom: "65px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page-with-bottom-toolbar\r\n    > .page__content, html[onsflag-iphonex-landscape]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .page-with-bottom-toolbar\r\n    > .page__content, html[onsflag-iphonex-landscape]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .page-with-bottom-toolbar\r\n    > .page__content": {
                bottom: "44px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .tabbar:not(.tabbar--top)": {
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content)": {
                bottom: "70px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .tabbar__content:not(.tabbar--top__content)": {
                bottom: "49px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset)": {
                marginLeft: "-44px",
                marginRight: "-44px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-header": {
                paddingLeft: "59px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item": {
                paddingLeft: "58px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                right: "60px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                paddingRight: "50px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                paddingRight: "56px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                paddingRight: "74px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)": {
                marginLeft: "0",
                marginRight: "0",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-header": {
                paddingLeft: "15px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item": {
                paddingLeft: "14px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                right: "16px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                paddingRight: "6px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                paddingRight: "12px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                paddingRight: "30px",
            },
        },
        "@media (orientation: portrait)": {
            "html[onsflag-iphonex-portrait] .fab--top__center, html[onsflag-iphonex-portrait] .fab--top__left, html[onsflag-iphonex-portrait] .fab--top__right": {
                top: "64px",
            },
            "html[onsflag-iphonex-portrait] .fab--bottom__center, html[onsflag-iphonex-portrait] .fab--bottom__left, html[onsflag-iphonex-portrait] .fab--bottom__right": {
                bottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .action-sheet": {
                bottom: "48px",
            },
            "html[onsflag-iphonex-portrait] .toast": {
                bottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .toolbar": {
                top: "0",
                boxSizing: "content-box",
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .toolbar": {
                top: "0",
                boxSizing: "border-box",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .bottom-bar": {
                bottom: "0",
                boxSizing: "content-box",
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .bottom-bar, html[onsflag-iphonex-portrait]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .bottom-bar, html[onsflag-iphonex-portrait]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .bottom-bar": {
                bottom: "0",
                boxSizing: "border-box",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .page__content": {
                top: "0",
                paddingTop: "44px",
                bottom: "0",
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .page__content": {
                top: "0",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .page__content, html[onsflag-iphonex-portrait]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .page__content": {
                bottom: "0",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content": {
                top: "88px",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background, html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .tabbar--top__content\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background, html[onsflag-iphonex-portrait]\r\n    .tabbar--top__content\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content": {
                top: "44px",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                bottom: "78px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .page-with-bottom-toolbar\r\n    > .page__content, html[onsflag-iphonex-portrait]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .page-with-bottom-toolbar\r\n    > .page__content, html[onsflag-iphonex-portrait]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .page-with-bottom-toolbar\r\n    > .page__content": {
                bottom: "44px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content": {
                top: "0",
                paddingTop: "88px",
            },
            "html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content, html[onsflag-iphonex-portrait]\r\n    .tabbar--top__content\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .tabbar--top__content\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page__content": {
                top: "0",
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .tabbar--top": {
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar--top, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .tabbar--top": {
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .tabbar--top__content": {
                top: "93px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar--top__content, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top__content, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content\r\n    .tabbar--top__content": {
                top: "49px",
            },
            "html[onsflag-iphonex-portrait] .tabbar:not(.tabbar--top):not(.tabbar--top)": {
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .tabbar:not(.tabbar--top):not(.tabbar--top), html[onsflag-iphonex-portrait]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .tabbar:not(.tabbar--top), html[onsflag-iphonex-portrait]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content)": {
                bottom: "83px",
            },
            "html[onsflag-iphonex-portrait]\r\n    .dialog\r\n    .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait]\r\n    .page-with-bottom-toolbar\r\n    > .page__content\r\n    .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait]\r\n    .tabbar__content:not(.tabbar--top__content)\r\n    .tabbar__content:not(.tabbar--top__content)": {
                bottom: "49px",
            },
        },
    },
};
/* harmony default export */ const dark = (darkMode);

;// CONCATENATED MODULE: ./src/styles/light/index.ts
const lightMode = {
    "@global": {
        ":root": {},
        html: {
            height: "100%",
            width: "100%",
        },
        body: {
            position: "absolute",
            overflow: "hidden",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            margin: "0",
            webkitTextSizeAdjust: "100%",
            touchAction: "manipulation",
        },
        "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            webkitTapHighlightColor: "transparent",
            webkitTouchCallout: "none",
        },
        "input, textarea, select": {
            webkitUserSelect: "auto",
            msUserSelect: "auto",
            userSelect: "auto",
            mozUserSelect: "text",
            webkitTouchCallout: "none",
        },
        "a, button, input, textarea, select": {
            touchAction: "manipulation",
        },
        "input:active, input:focus, textarea:active, textarea:focus, select:active, select:focus": {
            outline: "none",
        },
        h1: {
            fontSize: "36px",
        },
        h2: {
            fontSize: "30px",
        },
        h3: {
            fontSize: "24px",
        },
        "h4, h5, h6": {
            fontSize: "18px",
        },
        ".page": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    // @ts-ignore
                    webkitFontSmoothing: "antialiased",
                },
                {
                    backgroundColor: "#ffffff",
                },
            ],
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            overflowX: "visible",
            overflowY: "hidden",
            color: "#1f1f21",
            msOverflowStyle: "none",
        },
        ".page::-webkit-scrollbar": {
            display: "none",
        },
        ".page__content": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    bottom: "0",
                },
                {
                    top: "0",
                },
                {
                    backgroundColor: "#ffffff",
                },
            ],
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            boxSizing: "border-box",
            paddingTop: "0",
        },
        ".page__background": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            boxSizing: "border-box",
        },
        ".page--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ".page--material__content": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
        },
        ".page__content h1, .page__content h2, .page__content h3, .page__content h4, .page__content h5": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            margin: "0.6em 0",
            padding: "0",
        },
        ".page__content h1": {
            fontSize: "28px",
        },
        ".page__content h2": {
            fontSize: "24px",
        },
        ".page__content h3": {
            fontSize: "20px",
        },
        ".page--material__content h1, .page--material__content h2, .page--material__content h3, .page--material__content h4, .page--material__content h5": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            margin: "0.6em 0",
            padding: "0",
        },
        ".page--material__content h1": {
            fontSize: "28px",
        },
        ".page--material__content h2": {
            fontSize: "24px",
        },
        ".page--material__content h3": {
            fontSize: "20px",
        },
        ".page--material__background": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ".switch": {
            display: "inline-block",
            verticalAlign: "top",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            minWidth: "51px",
            fontSize: "17px",
            padding: "0 20px",
            border: "none",
            overflow: "visible",
            width: "51px",
            height: "32px",
            zIndex: "0",
            textAlign: "left",
        },
        ".switch__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "0",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    zIndex: "1",
                },
            ],
        },
        ".switch__toggle": {
            backgroundColor: "white",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            borderRadius: "30px",
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "ease-out",
            boxShadow: "inset 0 0 0 2px #e5e5e5",
        },
        ".switch__handle": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "absolute",
            content: '""',
            borderRadius: "28px",
            height: "28px",
            width: "28px",
            backgroundColor: "white",
            left: "1px",
            top: "2px",
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "cubic-bezier(0.59, 0.01, 0.5, 0.99)",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
        },
        ".switch--active__handle": {
            transition: "none",
        },
        ":checked + .switch__toggle": {
            boxShadow: "inset 0 0 0 2px #44db5e",
            backgroundColor: "#44db5e",
        },
        ":checked + .switch__toggle > .switch__handle": {
            left: "21px",
            boxShadow: "0 3px 2px rgba(0, 0, 0, 0.25)",
        },
        ":disabled + .switch__toggle": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".switch__touch": {
            position: "absolute",
            top: "-5px",
            bottom: "-5px",
            left: "-10px",
            right: "-10px",
        },
        ".switch--material": {
            width: "36px",
            height: "24px",
            padding: "0 10px",
            minWidth: "36px",
        },
        ".switch--material__toggle": {
            backgroundColor: "#b0afaf",
            marginTop: "5px",
            height: "14px",
            boxShadow: "none",
        },
        ".switch--material__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "0",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    zIndex: "1",
                },
            ],
        },
        ".switch--material__handle": {
            backgroundColor: "#f1f1f1",
            left: "0",
            marginTop: "-5px",
            width: "20px",
            height: "20px",
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
        },
        ":checked + .switch--material__toggle": {
            backgroundColor: "#7c43bd",
            boxShadow: "none",
        },
        ":checked + .switch--material__toggle > .switch--material__handle": {
            left: "16px",
            backgroundColor: "#4a148c",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
        },
        ":disabled + .switch--material__toggle": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".switch--material__handle:before": {
            background: "transparent",
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            zIndex: "0",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.12)",
            transition: "box-shadow 0.1s linear",
        },
        ".switch--material__toggle > .switch--active__handle:before": {
            boxShadow: "0 0 0 14px rgba(0, 0, 0, 0.12)",
        },
        ":checked + .switch--material__toggle > .switch--active__handle:before": {
            boxShadow: "0 0 0 14px color-mod(#4a148c alpha(20%))",
        },
        ".switch--material__touch": {
            position: "absolute",
            top: "-10px",
            bottom: "-10px",
            left: "-15px",
            right: "-15px",
        },
        ".range": {
            display: "inline-block",
            position: "relative",
            width: "100px",
            height: "30px",
            margin: "0",
            padding: "0",
            backgroundImage: "linear-gradient(#a4aab3, #a4aab3)",
            backgroundPosition: "left center",
            backgroundSize: "100% 2px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "transparent",
        },
        ".range__input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            backgroundImage: "linear-gradient(#4a148c, #4a148c)",
            backgroundPosition: "left center",
            backgroundSize: "0% 2px",
            backgroundRepeat: "no-repeat",
            height: "30px",
            position: "relative",
            zIndex: "1",
            width: "100%",
        },
        ".range__input::-moz-range-track": {
            position: "relative",
            border: "none",
            background: "none",
            boxShadow: "none",
            top: "0",
            margin: "0",
            padding: "0",
        },
        ".range__input::-ms-track": {
            position: "relative",
            border: "none",
            backgroundColor: "#a4aab3",
            height: "0",
            borderRadius: "50%",
        },
        ".range__input::-webkit-slider-thumb": {
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            webkitAppearance: "none",
            appearance: "none",
            top: "0",
            zIndex: "1",
        },
        ".range__input::-moz-range-thumb": {
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
        },
        ".range__input::-ms-thumb": {
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
            top: "0",
        },
        ".range__input::-ms-fill-lower": {
            height: "2px",
            backgroundColor: "#4a148c",
        },
        ".range__input::-ms-tooltip": {
            display: "none",
        },
        ".range__input:disabled": {
            opacity: "1",
            pointerEvents: "none",
        },
        ".range__focus-ring": {
            pointerEvents: "none",
            top: "0",
            left: "0",
            display: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "none",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    background: "transparent",
                },
            ],
            height: "30px",
            position: "absolute",
            zIndex: "0",
            width: "100%",
        },
        ".range--disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            fallbacks: [
                {
                    pointerEvents: "none",
                },
            ],
        },
        ".range--material": {
            position: "relative",
            backgroundImage: "linear-gradient(#bdbdbd, #bdbdbd)",
        },
        ".range--material__input": {
            backgroundImage: "linear-gradient(#4a148c, #4a148c)",
            backgroundPosition: "center left",
            backgroundSize: "0% 2px",
        },
        ".range--material__focus-ring": {
            display: "block",
        },
        ".range--material__focus-ring::-webkit-slider-thumb": {
            webkitAppearance: "none",
            appearance: "none",
            width: "14px",
            height: "14px",
            border: "none",
            boxShadow: "0 0 0 9px #4a148c",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            opacity: "0",
            transition: "opacity 0.25s ease-out, transform 0.25s ease-out, -webkit-transform 0.25s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.25s ease-out",
                },
            ],
        },
        ".range--material__input.range__input--active + .range--material__focus-ring::-webkit-slider-thumb": {
            opacity: "0.2",
            webkitTransform: "scale(1.5, 1.5, 1.5)",
            transform: "scale(1.5, 1.5, 1.5)",
        },
        ".range--material__input::-webkit-slider-thumb": {
            position: "relative",
            boxSizing: "border-box",
            border: "none",
            backgroundColor: "transparent",
            width: "14px",
            height: "32px",
            borderRadius: "0",
            boxShadow: "none",
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #4a148c 0%,\r\n    #4a148c 6.6px,\r\n    transparent 7px\r\n  )",
            transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            fallbacks: [
                {
                    transition: "transform 0.1s linear",
                },
                {
                    transition: "-webkit-transform 0.1s linear",
                },
            ],
            overflow: "visible",
        },
        ".range--material__input[_zero]::-webkit-slider-thumb": {
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #f2f2f2 0%,\r\n    #f2f2f2 4px,\r\n    #bdbdbd 4px,\r\n    #bdbdbd 6.4px,\r\n    transparent 7px\r\n  )",
        },
        ".range--material__input[_zero] + .range--material__focus-ring::-webkit-slider-thumb": {
            boxShadow: "0 0 0 9px #bdbdbd",
        },
        ".range--material__input::-moz-range-track": {
            background: "none",
        },
        ".range--material__input::-moz-range-thumb, .range--material__input:focus::-moz-range-thumb": {
            boxSizing: "border-box",
            border: "none",
            width: "14px",
            height: "32px",
            borderRadius: "0",
            backgroundColor: "transparent",
            backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #4a148c 0%,\r\n    #4a148c 6.6px,\r\n    transparent 7px\r\n  )",
            boxShadow: "none",
        },
        ".range--material__input:active::-webkit-slider-thumb, .range--material__input.range__input--active::-webkit-slider-thumb": {
            webkitTransform: "scale(1.5)",
            transform: "scale(1.5)",
            transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            fallbacks: [
                {
                    transition: "transform 0.1s linear",
                },
                {
                    transition: "-webkit-transform 0.1s linear",
                },
            ],
        },
        ".range--disabled.range--material": {
            opacity: "1",
        },
        ".range--disabled > .range--material__input": {
            backgroundImage: "none",
        },
        ".range--material__input:disabled::-webkit-slider-thumb": {
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
            transition: "none",
        },
        ".range--material__input:disabled::-moz-range-thumb": {
            backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
            transition: "none",
        },
        ".notification": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            font: "inherit",
            border: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 4px",
            margin: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    lineHeight: "normal",
                },
                {
                    color: "inherit",
                },
                {
                    padding: "0",
                },
                {
                    margin: "0",
                },
                {
                    border: "none",
                },
                {
                    font: "inherit",
                },
            ],
            color: "white",
            background: "transparent",
            lineHeight: "19px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            width: "auto",
            height: "19px",
            borderRadius: "19px",
            backgroundColor: "#fe3824",
            textAlign: "center",
            fontSize: "16px",
            minWidth: "19px",
        },
        ".notification:empty": {
            display: "none",
        },
        ".notification--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            backgroundColor: "#4a148c",
            fontSize: "16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            color: "white",
        },
        ".toolbar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "#fafafa",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            zIndex: "2",
            display: "flex",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    whiteSpace: "nowrap",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    background: "transparent",
                },
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            height: "44px",
            paddingLeft: "0",
            paddingRight: "0",
            boxShadow: "none",
            width: "100%",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 100%)",
            top: "0",
            paddingTop: "0",
        },
        "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)": {
            ".toolbar": {
                backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
            },
            ".bottom-bar": {
                backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
            },
            ".tabbar": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".tabbar__button": {
                borderTop: "none",
            },
            ".tabbar--top": {
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%),\r\n      linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item--expandable": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item__center": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item__right": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-header": {
                backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item--material__left:empty, .list-item--material__center": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--material__right": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--material.list-item--expandable": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-header--material:not(:first-of-type)": {
                backgroundImage: "linear-gradient(180deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--longdivider": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".alert-dialog-button": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%)",
            },
            ".alert-dialog-button--rowfooter": {
                borderTop: "none",
                borderLeft: "none",
                backgroundSize: "100% 1px, 1px 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top, left",
                backgroundImage: "linear-gradient(0deg, transparent, transparent 50%, #ddd 50%),\r\n      linear-gradient(90deg, transparent, transparent 50%, #ddd 50%)",
            },
            ".alert-dialog-button--rowfooter:first-child": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top, left",
                backgroundImage: "linear-gradient(0deg, transparent, transparent 50%, #ddd 50%)",
            },
            ".alert-dialog-button--material": {
                background: "none",
            },
            ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
                background: "none",
            },
            ".alert-dialog-button--primal--material": {
                background: "none",
            },
            ".action-sheet-button": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
            },
            ".action-sheet-title": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
            },
        },
        ".toolbar__bg": {
            background: "#fafafa",
        },
        ".toolbar__item": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            height: "44px",
            overflow: "visible",
            display: "block",
            verticalAlign: "middle",
        },
        ".toolbar__left": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            maxWidth: "50%",
            width: "27%",
            textAlign: "left",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
            ],
        },
        ".toolbar__right": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            maxWidth: "50%",
            width: "27%",
            textAlign: "right",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
            ],
        },
        ".toolbar__center": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            width: "46%",
            textAlign: "center",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            fontSize: "17px",
            fontWeight: "500",
        },
        ".toolbar__title": {
            lineHeight: "44px",
            fontSize: "17px",
            fontWeight: "500",
            color: "#1f1f21",
            margin: "0",
            padding: "0",
            overflow: "visible",
        },
        ".toolbar__center:first-child:last-child": {
            width: "100%",
        },
        ".bottom-bar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "#fafafa",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            zIndex: "2",
            display: "block",
            height: "44px",
            paddingLeft: "0",
            paddingRight: "0",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    bottom: "0",
                },
                {
                    borderTop: "1px solid #b2b2b2",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    background: "transparent",
                },
            ],
            boxShadow: "none",
            borderBottom: "none",
            borderTop: "none",
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 100%)",
            paddingBottom: "0",
        },
        ".bottom-bar__line-height": {
            lineHeight: "44px",
            paddingBottom: "0",
            paddingTop: "0",
        },
        ".bottom-bar--aligned": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            lineHeight: "44px",
        },
        ".bottom-bar--transparent": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            border: "none",
        },
        ".toolbar--material": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            webkitBoxPack: "justify",
            webkitJustifyContent: "space-between",
            justifyContent: "space-between",
            height: "56px",
            borderBottom: "0",
            boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
            padding: "0",
            backgroundColor: "#4a148c",
            backgroundSize: "0",
        },
        ".toolbar--noshadow": {
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: "none",
        },
        ".toolbar--material__left, .toolbar--material__right": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#ffffff",
                },
                {
                    fontWeight: "400",
                },
            ],
            color: "rgba(255, 255, 255, 1)",
            height: "56px",
            minWidth: "72px",
            width: "auto",
            lineHeight: "56px",
        },
        ".toolbar--material__center": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#ffffff",
                },
                {
                    fontWeight: "400",
                },
            ],
            color: "rgba(255, 255, 255, 1)",
            height: "56px",
            width: "auto",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "left",
            lineHeight: "56px",
        },
        ".toolbar--material__center:first-child": {
            marginLeft: "16px",
        },
        ".toolbar--material__center:last-child": {
            marginRight: "16px",
        },
        ".toolbar--material__left:empty, .toolbar--material__right:empty": {
            minWidth: "16px",
        },
        ".toolbar--transparent": {
            backgroundColor: "transparent",
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: "none",
        },
        ".button": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "white",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
        },
        ".button::-moz-focus-inner": {
            outline: "0",
        },
        ".button:hover": {
            transition: "none",
        },
        ".button:active": {
            backgroundColor: "#4a148c",
            transition: "none",
            opacity: "0.2",
        },
        ".button:focus": {
            outline: "0",
        },
        ".button:disabled, .button[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--outline": {
            backgroundColor: "transparent",
            border: "1px solid #4a148c",
            color: "#4a148c",
        },
        ".button--outline:active": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "1px solid #4a148c",
            color: "#4a148c",
            opacity: "1",
        },
        ".button--outline:hover": {
            border: "1px solid #4a148c",
            transition: "0",
        },
        ".button--light": {
            backgroundColor: "transparent",
            color: "color-mod(black a(40%))",
            border: "1px solid color-mod(black a(20%))",
        },
        ".button--light:active": {
            backgroundColor: "color-mod(black a(5%))",
            color: "color-mod(black a(40%))",
            border: "1px solid color-mod(black a(20%))",
            opacity: "1",
        },
        ".button--quiet": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    border: "1px solid transparent",
                },
                {
                    color: "white",
                },
                {
                    background: "transparent",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    background: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
            boxShadow: "none",
        },
        ".button--quiet:disabled, .button--quiet[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
        },
        ".button--quiet:hover": {
            transition: "none",
        },
        ".button--quiet:focus": {
            outline: "0",
        },
        ".button--quiet:active": {
            backgroundColor: "transparent",
            border: "none",
            transition: "none",
            opacity: "0.2",
            color: "#4a148c",
        },
        ".button--cta": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "white",
            background: "transparent",
            border: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#7c43bd",
            borderRadius: "3px",
            transition: "none",
        },
        ".button--cta:hover": {
            transition: "none",
        },
        ".button--cta:focus": {
            outline: "0",
        },
        ".button--cta:active": {
            color: "white",
            backgroundColor: "#7c43bd",
            transition: "none",
            opacity: "0.2",
        },
        ".button--cta:disabled, .button--cta[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--large": {
            fontSize: "17px",
            fontWeight: "500",
            lineHeight: "36px",
            padding: "4px 12px",
            display: "block",
            width: "100%",
            textAlign: "center",
        },
        ".button--large:active": {
            backgroundColor: "#4a148c",
            transition: "none",
            opacity: "0.2",
            fallbacks: [
                {
                    transition: "none",
                },
            ],
        },
        ".button--large:disabled, .button--large[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--large:hover": {
            transition: "none",
        },
        ".button--large:focus": {
            outline: "0",
        },
        ".button--large--quiet": {
            position: "relative",
            display: "block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "1px solid transparent",
            lineHeight: "36px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    color: "white",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    background: "transparent",
                },
                {
                    display: "inline-block",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    fontSize: "17px",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
            width: "100%",
            boxShadow: "none",
            textAlign: "center",
        },
        ".button--large--quiet:active": {
            transition: "none",
            opacity: "0.2",
            color: "#4a148c",
            background: "transparent",
            border: "1px solid transparent",
            boxShadow: "none",
        },
        ".button--large--quiet:disabled, .button--large--quiet[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--large--quiet:hover": {
            transition: "none",
        },
        ".button--large--quiet:focus": {
            outline: "0",
        },
        ".button--large--cta": {
            position: "relative",
            display: "block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px",
            margin: "0",
            font: "inherit",
            color: "white",
            background: "transparent",
            border: "none",
            lineHeight: "36px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    display: "inline-block",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    fontSize: "17px",
                },
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#7c43bd",
            borderRadius: "3px",
            transition: "none",
            width: "100%",
            textAlign: "center",
        },
        ".button--large--cta:hover": {
            transition: "none",
        },
        ".button--large--cta:focus": {
            outline: "0",
        },
        ".button--large--cta:active": {
            color: "white",
            backgroundColor: "#7c43bd",
            transition: "none",
            opacity: "0.2",
        },
        ".button--large--cta:disabled, .button--large--cta[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--material": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 16px",
            margin: "0",
            font: "inherit",
            color: "#ffffff",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "36px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    transition: "background-color 0.25s linear",
                },
                {
                    transition: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    fontSize: "17px",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "14px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "all 0.25s linear",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            minHeight: "36px",
            textAlign: "center",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            textTransform: "uppercase",
            opacity: "1",
        },
        ".button--material:hover": {
            transition: "all 0.25s linear",
        },
        ".button--material:active": {
            boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 5px -1px rgba(0, 0, 0, 0.4)",
            backgroundColor: "#4a148c",
            opacity: "0.9",
            transition: "all 0.25s linear",
        },
        ".button--material:focus": {
            outline: "0",
        },
        ".button--material:disabled, .button--material[disabled]": {
            transition: "none",
            boxShadow: "none",
            backgroundColor: "color-mod(#4f4f4f a(26%))",
            color: "color-mod(black a(26%))",
            opacity: "1",
        },
        ".button--material--flat": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 16px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "36px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    transition: "background-color 0.25s linear",
                },
                {
                    color: "#ffffff",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
                },
                {
                    transition: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    fontSize: "17px",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "14px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "transparent",
            borderRadius: "3px",
            transition: "all 0.25s linear",
            boxShadow: "none",
            minHeight: "36px",
            textAlign: "center",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            textTransform: "uppercase",
        },
        ".button--material--flat:hover": {
            transition: "all 0.25s linear",
        },
        ".button--material--flat:focus": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#4a148c",
            outline: "0",
            opacity: "1",
            border: "none",
        },
        ".button--material--flat:active": {
            boxShadow: "none",
            outline: "0",
            opacity: "1",
            border: "none",
            backgroundColor: "color-mod(#999 a(20%))",
            color: "#4a148c",
            transition: "all 0.25s linear",
        },
        ".button--material--flat:disabled, .button--material--flat[disabled]": {
            transition: "none",
            opacity: "1",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "color-mod(black a(26%))",
        },
        ".button-bar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitAlignContent: "stretch",
            alignContent: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            margin: "0",
            padding: "0",
            border: "none",
        },
        ".button-bar__item": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            width: "100%",
            padding: "0",
            margin: "0",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
        },
        ".button-bar__button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#4a148c",
            border: "1px solid #4a148c",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0",
            fontSize: "13px",
            height: "27px",
            lineHeight: "27px",
            width: "100%",
            transition: "background-color 0.2s linear, color 0.2s linear",
            boxSizing: "border-box",
        },
        ".button-bar__button:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button-bar__button:hover": {
            transition: "none",
        },
        ".button-bar__button:focus": {
            outline: "0",
        },
        ":checked + .button-bar__button": {
            backgroundColor: "#4a148c",
            color: "#fff",
            transition: "none",
        },
        ".button-bar__button:active, :active + .button-bar__button": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "0 solid #4a148c",
            borderTop: "1px solid #4a148c",
            borderBottom: "1px solid #4a148c",
            borderRight: "1px solid #4a148c",
            fontSize: "13px",
            width: "100%",
            transition: "none",
        },
        ".button-bar__item:first-child > .button-bar__button": {
            borderLeftWidth: "1px",
            borderRadius: "4px 0 0 4px",
        },
        ".button-bar__item:last-child > .button-bar__button": {
            borderRightWidth: "1px",
            borderRadius: "0 4px 4px 0",
        },
        ".segment": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitAlignContent: "stretch",
            alignContent: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            margin: "0",
            padding: "0",
            border: "none",
        },
        ".segment__item": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            width: "100%",
            padding: "0",
            margin: "0",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "block",
            backgroundColor: "transparent",
            border: "none",
        },
        ".segment__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".segment__button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#4a148c",
            border: "1px solid #4a148c",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0",
            fontSize: "13px",
            height: "29px",
            lineHeight: "29px",
            width: "100%",
            transition: "background-color 0.2s linear, color 0.2s linear",
            boxSizing: "border-box",
            textAlign: "center",
        },
        ".segment__item:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".segment__button:hover": {
            transition: "none",
        },
        ".segment__button:focus": {
            outline: "0",
        },
        ":active + .segment__button": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "0 solid #4a148c",
            borderTop: "1px solid #4a148c",
            borderBottom: "1px solid #4a148c",
            borderRight: "1px solid #4a148c",
            fontSize: "13px",
            width: "100%",
            transition: "none",
        },
        ":checked + .segment__button": {
            backgroundColor: "#4a148c",
            color: "#fff",
            transition: "none",
        },
        ".segment__item:first-child > .segment__button": {
            borderLeftWidth: "1px",
            borderRadius: "4px 0 0 4px",
        },
        ".segment__item:last-child > .segment__button": {
            borderRightWidth: "1px",
            borderRadius: "0 4px 4px 0",
        },
        ".segment--material": {
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
        },
        ".segment--material__button": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fontSize: "14px",
            height: "32px",
            lineHeight: "32px",
            borderWidth: "0",
            color: "color-mod(black a(38%))",
            borderRadius: "0",
            backgroundColor: "#fafafa",
        },
        ":active + .segment--material__button": {
            backgroundColor: "#fafafa",
            borderRadius: "0",
            borderWidth: "0",
            fontSize: "14px",
            transition: "none",
            color: "color-mod(black a(38%))",
        },
        ":checked + .segment--material__button": {
            backgroundColor: "#c8c8c8",
            color: "#353535",
            borderRadius: "0",
            borderWidth: "0",
        },
        ".segment--material__item:first-child > .segment--material__button, .segment--material__item:last-child > .segment--material__button": {
            borderRadius: "0",
            borderWidth: "0",
        },
        ".tabbar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            whiteSpace: "nowrap",
            margin: "0",
            padding: "0",
            height: "49px",
            backgroundColor: "#fafafa",
            borderTop: "none",
            width: "100%",
        },
        ".tabbar__item": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "relative",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            webkitFlexBasis: "0",
            flexBasis: "0",
            width: "auto",
            borderRadius: "0",
        },
        ".tabbar__item > input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".tabbar__button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#999",
            background: "transparent",
            border: "none",
            lineHeight: "49px",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
            display: "inline-block",
            textDecoration: "none",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    padding: "0",
                },
            ],
            height: "49px",
            letterSpacing: "0",
            verticalAlign: "top",
            backgroundColor: "transparent",
            borderTop: "none",
            width: "100%",
        },
        ".tabbar__icon": {
            fontSize: "24px",
            padding: "0",
            margin: "0",
            lineHeight: "26px",
            display: "block !important",
            height: "28px",
        },
        ".tabbar__label": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-block",
        },
        ".tabbar__badge.notification": {
            verticalAlign: "text-bottom",
            top: "-1px",
            marginLeft: "5px",
            zIndex: "10",
            fontSize: "12px",
            height: "16px",
            minWidth: "16px",
            lineHeight: "16px",
            borderRadius: "8px",
        },
        ".tabbar__icon ~ .tabbar__badge.notification": {
            position: "absolute",
            top: "5px",
            marginLeft: "0",
        },
        ".tabbar__icon + .tabbar__label": {
            display: "block",
            fontSize: "10px",
            lineHeight: "1",
            margin: "0",
            fontWeight: "400",
        },
        ".tabbar__label:first-child": {
            fontSize: "16px",
            lineHeight: "49px",
            margin: "0",
            padding: "0",
        },
        ":checked + .tabbar__button": {
            color: "#4a148c",
            backgroundColor: "transparent",
            boxShadow: "none",
            borderTop: "none",
        },
        ".tabbar__button:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".tabbar__button:focus": {
            zIndex: "1",
            borderTop: "none",
            boxShadow: "none",
            outline: "0",
        },
        ".tabbar__content": {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "49px",
            zIndex: "0",
        },
        ".tabbar--autogrow .tabbar__item": {
            webkitFlexBasis: "auto",
            flexBasis: "auto",
        },
        ".tabbar--top": {
            position: "relative",
            top: "0",
            left: "0",
            right: "0",
            bottom: "auto",
            borderTop: "none",
            borderBottom: "1px solid #ccc",
            paddingTop: "0",
        },
        ".tabbar--top__content": {
            top: "49px",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0",
        },
        ".tabbar--top-border__button": {
            backgroundColor: "transparent",
            borderBottom: "4px solid transparent",
        },
        ":checked + .tabbar--top-border__button": {
            backgroundColor: "transparent",
            borderBottom: "4px solid #4a148c",
        },
        ".tabbar__border": {
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "0",
            height: "4px",
            backgroundColor: "#4a148c",
        },
        ".tabbar--material": {
            background: "none",
            backgroundColor: "#4a148c",
            borderBottomWidth: "0",
            boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.14), 0 3px 5px -2px rgba(0, 0, 0, 0.12),\r\n    0 5px 1px -4px rgba(0, 0, 0, 0.2)",
        },
        ".tabbar--material__button": {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    fontWeight: "500",
                },
                {
                    color: "#ffffff",
                },
            ],
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
        },
        ".tabbar--material__button:after": {
            content: '""',
            display: "block",
            width: "0",
            height: "2px",
            bottom: "0",
            position: "absolute",
            marginTop: "-2px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ":checked + .tabbar--material__button:after": {
            width: "100%",
            transition: "width 0.2s ease-in-out",
        },
        ":checked + .tabbar--material__button": {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#ffffff",
                },
            ],
        },
        ".tabbar--material__item:not([ripple]):active": {
            backgroundColor: "rgba(49, 49, 58, 0.1)",
            fallbacks: [
                {
                    backgroundColor: "#31313a",
                },
            ],
        },
        ".tabbar--material__border": {
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ".tabbar--material__icon": {
            fontSize: "22px !important",
            lineHeight: "36px",
        },
        ".tabbar--material__label": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".tabbar--material__label:first-child": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            letterSpacing: "0.015em",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            fontSize: "14px",
        },
        ".tabbar--material__icon + .tabbar--material__label": {
            fontSize: "10px",
        },
        ".toolbar-button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            padding: "4px 10px",
            letterSpacing: "0",
            color: "#4a148c",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    backgroundColor: "#000000",
                },
            ],
            borderRadius: "2px",
            border: "1px solid transparent",
            fontSize: "17px",
            transition: "none",
        },
        ".toolbar-button:active": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            transition: "none",
            opacity: "0.2",
        },
        ".toolbar-button:disabled, .toolbar-button[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".toolbar-button:focus": {
            outline: "0",
            transition: "none",
        },
        ".toolbar-button:hover": {
            transition: "none",
        },
        ".toolbar-button--outline": {
            border: "1px solid #4a148c",
            margin: "auto 8px",
            paddingLeft: "6px",
            paddingRight: "6px",
        },
        ".toolbar-button--material": {
            fontSize: "22px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    verticalAlign: "baseline",
                },
                {
                    color: "#ffffff",
                },
            ],
            display: "inline-block",
            height: "100%",
            margin: "0",
            border: "none",
            borderRadius: "0",
            verticalAlign: "initial",
            transition: "background-color 0.25s linear",
        },
        ".toolbar-button--material:first-of-type": {
            marginLeft: "4px",
        },
        ".toolbar-button--material:last-of-type": {
            marginRight: "4px",
        },
        ".toolbar-button--material:active": {
            opacity: "1",
            transition: "background-color 0.25s linear",
        },
        ".back-button": {
            height: "44px",
            lineHeight: "44px",
            paddingLeft: "8px",
            color: "#4a148c",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            display: "inline-block",
        },
        ".back-button:active": {
            opacity: "0.2",
        },
        ".back-button__label": {
            display: "inline-block",
            height: "100%",
            verticalAlign: "top",
            lineHeight: "44px",
            fontSize: "17px",
            fontWeight: "500",
        },
        ".back-button__icon": {
            marginRight: "6px",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            fill: "#4a148c",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            height: "100%",
        },
        ".back-button--material": {
            fontSize: "22px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    verticalAlign: "baseline",
                },
                {
                    color: "#ffffff",
                },
            ],
            display: "inline-block",
            padding: "0 12px",
            height: "100%",
            margin: "0 0 0 4px",
            border: "none",
            borderRadius: "0",
            verticalAlign: "initial",
            lineHeight: "56px",
        },
        ".back-button--material__label": {
            display: "none",
            fontSize: "20px",
        },
        ".back-button--material__icon": {
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            fill: "rgba(255, 255, 255, 1)",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            height: "100%",
        },
        ".back-button--material:active": {
            opacity: "1",
        },
        ".checkbox": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            lineHeight: "22px",
        },
        ".checkbox__checkmark": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
            height: "22px",
            width: "22px",
            pointerEvents: "none",
        },
        ".checkbox__input, .checkbox__input:checked": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".checkbox__checkmark:before": {
            content: '""',
            position: "absolute",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "1px solid #c7c7cd",
            borderRadius: "22px",
            left: "0",
        },
        ".checkbox__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "5px",
            width: "11px",
            height: "5px",
            background: "transparent",
            border: "2px solid #fff",
            borderWidth: "1px",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
            opacity: "0",
        },
        ":checked + .checkbox__checkmark:before": {
            background: "#4a148c",
            border: "none",
        },
        ":checked + .checkbox__checkmark:after": {
            opacity: "1",
        },
        ":disabled + .checkbox__checkmark": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ":disabled:active + .checkbox__checkmark:before": {
            background: "transparent",
        },
        ".checkbox--noborder": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            lineHeight: "22px",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
        },
        ".checkbox--noborder__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".checkbox--noborder__checkmark": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "none",
        },
        ".checkbox--noborder__checkmark:before": {
            content: '""',
            position: "absolute",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "none",
            borderRadius: "22px",
            left: "0",
        },
        ".checkbox--noborder__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "4px",
            opacity: "0",
            width: "11px",
            height: "4px",
            background: "transparent",
            border: "2px solid #4a148c",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
        },
        ":checked + .checkbox--noborder__checkmark:before": {
            background: "transparent",
            border: "none",
        },
        ":checked + .checkbox--noborder__checkmark:after": {
            opacity: "1",
        },
        ":focus + .checkbox--noborder__checkmark:before": {
            border: "none",
        },
        ":disabled + .checkbox--noborder__checkmark": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ":disabled:active + .checkbox--noborder__checkmark:before": {
            background: "transparent",
            border: "none",
        },
        ".checkbox--material": {
            lineHeight: "18px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            overflow: "visible",
        },
        ".checkbox--material__checkmark": {
            width: "18px",
            height: "18px",
        },
        ".checkbox--material__checkmark:before": {
            borderRadius: "2px",
            height: "18px",
            width: "18px",
            border: "2px solid #717171",
            transition: "background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s",
            backgroundColor: "transparent",
        },
        ":checked + .checkbox--material__checkmark:before": {
            border: "2px solid #4a148c",
            backgroundColor: "#4a148c",
            transition: "background-color 0.1s linear, border-color 0.1s linear",
        },
        ".checkbox--material__checkmark:after": {
            borderColor: "#ffffff",
            transition: "transform 0.2s ease 0, -webkit-transform 0.2s ease 0",
            fallbacks: [
                {
                    transition: "transform 0.2s ease 0",
                },
                {
                    transition: "-webkit-transform 0.2s ease 0",
                },
            ],
            width: "10px",
            height: "5px",
            top: "4px",
            left: "3px",
            webkitTransform: "scale(0) rotate(-45deg)",
            transform: "scale(0) rotate(-45deg)",
            borderWidth: "2px",
        },
        ":checked + .checkbox--material__checkmark:after": {
            transition: "transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s",
            fallbacks: [
                {
                    transition: "transform 0.2s ease 0.2s",
                },
                {
                    transition: "-webkit-transform 0.2s ease 0.2s",
                },
            ],
            width: "10px",
            height: "5px",
            top: "4px",
            left: "3px",
            webkitTransform: "scale(1) rotate(-45deg)",
            transform: "scale(1) rotate(-45deg)",
            borderWidth: "2px",
        },
        ".checkbox--material__input:before": {
            content: '""',
            opacity: "0",
            position: "absolute",
            top: "0",
            left: "0",
            width: "18px",
            height: "18px",
            boxShadow: "0 0 0 11px #717171",
            boxSizing: "border-box",
            borderRadius: "50%",
            backgroundColor: "#717171",
            pointerEvents: "none",
            display: "block",
            webkitTransform: "scale3d(0.2, 0.2, 0.2)",
            transform: "scale3d(0.2, 0.2, 0.2)",
            transition: "opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.1s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out",
                },
            ],
        },
        ".checkbox--material__input:checked:before": {
            boxShadow: "0 0 0 11px #4a148c",
            backgroundColor: "#4a148c",
        },
        ".checkbox--material__input:active:before": {
            opacity: "0.15",
            webkitTransform: "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
        },
        ":disabled + .checkbox--material__checkmark": {
            opacity: "1",
        },
        ":disabled + .checkbox--material__checkmark:before": {
            borderColor: "#afafaf",
        },
        ":disabled:checked + .checkbox--material__checkmark:before": {
            backgroundColor: "#afafaf",
        },
        ":disabled:checked + .checkbox--material__checkmark:after": {
            borderColor: "#ffffff",
        },
        ".radio-button__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".radio-button__input:active, .radio-button__input:focus": {
            outline: "0",
            webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        },
        ".radio-button": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
            lineHeight: "24px",
            textAlign: "left",
        },
        ".radio-button__checkmark:before": {
            content: '""',
            position: "absolute",
            borderRadius: "22px",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "none",
            fallbacks: [
                {
                    borderRadius: "100%",
                },
            ],
            left: "0",
        },
        ".radio-button__checkmark": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    position: "relative",
                },
                {
                    position: "relative",
                },
            ],
            width: "24px",
            height: "24px",
            background: "transparent",
            pointerEvents: "none",
        },
        ".radio-button__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "4px",
            opacity: "0",
            width: "11px",
            height: "4px",
            background: "transparent",
            border: "2px solid #4a148c",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
        },
        ":checked + .radio-button__checkmark": {
            background: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    background: "#000000",
                },
            ],
        },
        ":checked + .radio-button__checkmark:after": {
            opacity: "1",
        },
        ":checked + .radio-button__checkmark:before": {
            background: "transparent",
            border: "none",
        },
        ":disabled + .radio-button__checkmark": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".radio-button--material": {
            lineHeight: "22px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".radio-button--material__input:before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            opacity: "0",
            width: "20px",
            height: "20px",
            boxShadow: "0 0 0 14px #717171",
            border: "none",
            boxSizing: "border-box",
            borderRadius: "50%",
            backgroundColor: "#717171",
            pointerEvents: "none",
            display: "block",
            webkitTransform: "scale3d(0.2, 0.2, 0.2)",
            transform: "scale3d(0.2, 0.2, 0.2)",
            transition: "opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.1s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out",
                },
            ],
        },
        ".radio-button--material__input:checked:before": {
            boxShadow: "0 0 0 14px #4a148c",
            backgroundColor: "#4a148c",
        },
        ".radio-button--material__input:active:before": {
            opacity: "0.15",
            webkitTransform: "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
        },
        ".radio-button--material__checkmark": {
            width: "20px",
            height: "20px",
            overflow: "visible",
        },
        ".radio-button--material__checkmark:before": {
            background: "transparent",
            border: "2px solid #717171",
            boxSizing: "border-box",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            transition: "border 0.2s ease",
        },
        ".radio-button--material__checkmark:after": {
            transition: "background 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease",
            fallbacks: [
                {
                    transition: "background 0.2s ease, transform 0.2s ease",
                },
                {
                    transition: "background 0.2s ease, -webkit-transform 0.2s ease",
                },
            ],
            top: "5px",
            left: "5px",
            width: "10px",
            height: "10px",
            border: "none",
            borderRadius: "50%",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ":checked + .radio-button--material__checkmark:before": {
            background: "transparent",
            border: "2px solid #4a148c",
        },
        ".radio-button--material__input + .radio-button__checkmark:after": {
            background: "#717171",
            opacity: "1",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ":checked + .radio-button--material__checkmark:after": {
            opacity: "1",
            background: "#4a148c",
            webkitTransform: "scale(1)",
            transform: "scale(1)",
        },
        ":disabled + .radio-button--material__checkmark": {
            opacity: "1",
        },
        ":disabled + .radio-button--material__checkmark:after": {
            backgroundColor: "#afafaf",
            borderColor: "#afafaf",
        },
        ":disabled + .radio-button--material__checkmark:before": {
            borderColor: "#afafaf",
        },
        ".list": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            listStyleType: "none",
            textAlign: "left",
            display: "block",
            webkitOverflowScrolling: "touch",
            overflow: "hidden",
            backgroundImage: "linear-gradient(#ccc, #ccc), linear-gradient(#ccc, #ccc)",
            backgroundSize: "100% 1px, 100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom, top",
            fallbacks: [
                {
                    border: "none",
                },
            ],
            backgroundColor: "#fff",
        },
        ".list-item": {
            position: "relative",
            width: "100%",
            listStyle: "none",
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxPack: "start",
            webkitJustifyContent: "flex-start",
            justifyContent: "flex-start",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            padding: "0 0 0 14px",
            margin: "0 0 -1px 0",
            color: "#1f1f21",
            transition: "background-color 0.2s linear",
        },
        ".list-item__top": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxPack: "start",
            webkitJustifyContent: "flex-start",
            justifyContent: "flex-start",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
            width: "100%",
        },
        ".list-item--expandable": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "vertical",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "column",
            flexDirection: "column",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            backgroundPositionX: "14px",
        },
        ".list-item__expandable-content": {
            display: "none",
            width: "100%",
            padding: "12px 14px 12px 0",
            boxSizing: "border-box",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            overflow: "hidden",
        },
        ".list-item.expanded > .list-item__expandable-content": {
            display: "block",
            height: "auto",
        },
        ".list-item__left": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            padding: "12px 14px 12px 0",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-item__left:empty": {
            width: "0",
            minWidth: "0",
            padding: "0",
            margin: "0",
        },
        ".list-item__center": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            webkitFlexWrap: "wrap",
            flexWrap: "wrap",
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            marginRight: "auto",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            marginLeft: "0",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            padding: "12px 6px 12px 0",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-item__right": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            marginLeft: "auto",
            padding: "12px 12px 12px 0",
            webkitBoxOrdinalGroup: "3",
            webkitOrder: "2",
            order: "2",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-header": {
            margin: "0",
            listStyle: "none",
            textAlign: "left",
            display: "block",
            boxSizing: "border-box",
            padding: "0 0 0 15px",
            fontSize: "12px",
            fontWeight: "500",
            color: "#1f1f21",
            minHeight: "24px",
            lineHeight: "25px",
            textTransform: "uppercase",
            position: "relative",
            backgroundColor: "#eee",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
        },
        ".list--noborder": {
            borderTop: "none",
            borderBottom: "none",
            backgroundImage: "none",
        },
        ".list-item--tappable:active": {
            transition: "none",
            backgroundColor: "#d9d9d9",
        },
        ".list--inset": {
            margin: "0 8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundImage: "none",
        },
        ".list-item__label": {
            fontSize: "14px",
            padding: "0 4px",
            opacity: "0.6",
        },
        ".list-item__title": {
            webkitFlexBasis: "100%",
            flexBasis: "100%",
            webkitAlignSelf: "flex-end",
            alignSelf: "flex-end",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
        },
        ".list-item__subtitle": {
            opacity: "0.75",
            fontSize: "14px",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            webkitFlexBasis: "100%",
            flexBasis: "100%",
            webkitAlignSelf: "flex-start",
            alignSelf: "flex-start",
        },
        ".list-item__thumbnail": {
            width: "40px",
            height: "40px",
            borderRadius: "6px",
            display: "block",
            margin: "0",
        },
        ".list-item__icon": {
            fontSize: "22px",
            padding: "0 6px",
        },
        ".list--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            backgroundImage: "none",
            backgroundColor: "#fff",
        },
        ".list-item--material": {
            border: "0",
            padding: "0 0 0 16px",
            lineHeight: "normal",
        },
        ".list-item--material__subtitle": {
            marginTop: "4px",
        },
        ".list-item--material:first-child": {
            boxShadow: "none",
        },
        ".list-item--material__left": {
            padding: "14px 0",
            minWidth: "56px",
            lineHeight: "1",
            minHeight: "48px",
        },
        ".list-item--material__left:empty, .list-item--material__center": {
            padding: "14px 6px 14px 0",
            borderColor: "#eee",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
            minHeight: "48px",
        },
        ".list-item--material__right": {
            padding: "14px 16px 14px 0",
            lineHeight: "1",
            borderColor: "#eee",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
            minHeight: "48px",
        },
        ".list-item--material.list-item--expandable": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #eee",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
            backgroundPositionX: "16px",
        },
        ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #eee",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
        },
        ".list-header--material": {
            background: "#fff",
            border: "none",
            fontSize: "14px",
            textTransform: "none",
            margin: "-1px 0 0 0",
            color: "#757575",
            fontWeight: "500",
            padding: "8px 16px",
        },
        ".list-header--material:not(:first-of-type)": {
            borderTop: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(180deg, #eee, #eee 100%)",
            paddingTop: "16px",
        },
        ".list-item--material__thumbnail": {
            width: "40px",
            height: "40px",
            borderRadius: "100%",
        },
        ".list-item--material__icon": {
            fontSize: "20px",
            padding: "0 4px",
        },
        ".list-item--chevron:before, .list-item__expand-chevron": {
            borderRight: "2px solid #c7c7cc",
            borderBottom: "2px solid #c7c7cc",
            width: "7px",
            height: "7px",
            backgroundColor: "transparent",
            zIndex: "5",
        },
        ".list-item--chevron:before": {
            position: "absolute",
            content: '""',
            right: "16px",
            top: "50%",
            webkitTransform: "translateY(-50%) rotate(-45deg)",
            transform: "translateY(-50%) rotate(-45deg)",
        },
        ".list-item__expand-chevron": {
            webkitTransform: "rotate(45deg)",
            transform: "rotate(45deg)",
            margin: "1px",
        },
        ".list-item--expandable.expanded .list-item__expand-chevron": {
            webkitTransform: "rotate(225deg)",
            transform: "rotate(225deg)",
        },
        ".list-item--chevron__right": {
            paddingRight: "30px",
        },
        ".list-item--nodivider__center, .list-item--nodivider__right, .list-item--nodivider.list-item--expandable, .list-item--expandable .list-item__center, .list-item--expandable .list-item__right": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #ccc",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
        },
        ".list-item--longdivider:last-of-type": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider__center": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider__right": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-title": {
            padding: "0 0 0 16px",
            margin: "0",
            font: "inherit",
            color: "#6d6d72",
            background: "transparent",
            border: "none",
            lineHeight: "24px",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            display: "block",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
            ],
            textAlign: "left",
            boxSizing: "border-box",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
        },
        ".list-title--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            color: "#757575",
            fontSize: "14px",
            margin: "0",
            padding: "12px 0 12px 16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            lineHeight: "24px",
        },
        ".search-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 8px 0 28px",
            margin: "0",
            "border-radius": "8px",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1.3",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitAppearance: "textfield",
            mozAppearance: "textfield",
            appearance: "textfield",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    lineHeight: "1",
                },
                {
                    color: "inherit",
                },
                {
                    backgroundColor: "#030303",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            height: "28px",
            fontSize: "14px",
            backgroundColor: "rgba(3, 3, 3, 0.09)",
            boxShadow: "none",
            borderRadius: "5.5px",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW9zLXNlYXJjaC1pbnB1dC1pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpb3Mtc2VhcmNoLWlucHV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNDMuMDAwMDAwKSIgZmlsbD0iIzdBNzk3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45OTcyNDgyLDE1LjUwNDE0NjYgQzE3LjA3NzM2NTcsMTUuNTQwNTkzOCAxNy4xNTIyNzMxLDE1LjU5MTYxMjkgMTcuMjE3NzUxNiwxNS42NTcwOTE0IEwyMC42NDk5OTEsMTkuMDg5MzMwOCBDMjAuOTQ0ODQ0OSwxOS4zODQxODQ3IDIwLjk0ODQ3NjQsMTkuODU4NjA2IDIwLjY1MzU0MTIsMjAuMTUzNTQxMiBDMjAuMzYwNjQ4LDIwLjQ0NjQzNDQgMTkuODgxMjcxNiwyMC40NDE5MzE3IDE5LjU4OTMzMDgsMjAuMTQ5OTkxIEwxNi4xNTcwOTE0LDE2LjcxNzc1MTYgQzE2LjA5MTM3LDE2LjY1MjAzMDEgMTYuMDQwMTE3MSwxNi41NzczODc0IDE2LjAwMzQxNDEsMTYuNDk3Nzk5NSBDMTUuMTY3MTY5NCwxNy4xMjcwNDExIDE0LjEyNzEzOTMsMTcuNSAxMywxNy41IEMxMC4yMzg1NzYzLDE3LjUgOCwxNS4yNjE0MjM3IDgsMTIuNSBDOCw5LjczODU3NjI1IDEwLjIzODU3NjMsNy41IDEzLDcuNSBDMTUuNzYxNDIzNyw3LjUgMTgsOS43Mzg1NzYyNSAxOCwxMi41IEMxOCwxMy42Mjc0Njg1IDE3LjYyNjgyMzIsMTQuNjY3Nzc2OCAxNi45OTcyNDgyLDE1LjUwNDE0NjYgWiBNMTMsMTYuNSBDMTUuMjA5MTM5LDE2LjUgMTcsMTQuNzA5MTM5IDE3LDEyLjUgQzE3LDEwLjI5MDg2MSAxNS4yMDkxMzksOC41IDEzLDguNSBDMTAuNzkwODYxLDguNSA5LDEwLjI5MDg2MSA5LDEyLjUgQzksMTQuNzA5MTM5IDEwLjc5MDg2MSwxNi41IDEzLDE2LjUgWiIgaWQ9Imlvcy1zZWFyY2gtaW5wdXQtaWNvbiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
            backgroundPosition: "8px center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "13px",
            display: "inline-block",
            textIndent: "0",
        },
        ".search-input::-webkit-search-cancel-button": {
            webkitAppearance: "textfield",
            appearance: "textfield",
            display: "none",
        },
        ".search-input::-webkit-search-decoration": {
            display: "none",
        },
        ".search-input:focus": {
            outline: "none",
        },
        ".search-input::-webkit-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input:-ms-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input::-ms-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input::placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input:placeholder-shown": {},
        ".search-input:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".search-input--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "8px",
            height: "48px",
            backgroundColor: "#fafafa",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbmRyb2lkLXNlYXJjaC1pbnB1dC1pY29uIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM4OTg5ODkiPgogICAgICAgICAgICA8ZyBpZD0iY29tcG9uZW50cyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibWF0ZXJpYWwtc2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hdGVyaWFsL0ljb25zLWJsYWNrL3NlYXJjaCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTAyLDYuNDkxIEwxMS43MDgsNi40OTEgTDExLjQzMiw2Ljc2NSBDMTIuNDA3LDcuOTAyIDEzLDkuMzc2IDEzLDEwLjk5MSBDMTMsMTQuNTgxIDEwLjA5LDE3LjQ5MSA2LjUsMTcuNDkxIEMyLjkxLDE3LjQ5MSAwLDE0LjU4MSAwLDEwLjk5MSBDMCw3LjQwMSAyLjkxLDQuNDkxIDYuNSw0LjQ5MSBDOC4xMTUsNC40OTEgOS41ODgsNS4wODMgMTAuNzI1LDYuMDU3IEwxMS4wMDEsNS43ODMgTDExLjAwMSw0Ljk5MSBMMTUuOTk5LDAgTDE3LjQ5LDEuNDkxIEwxMi41MDIsNi40OTEgTDEyLjUwMiw2LjQ5MSBaIE02LjUsNi40OTEgQzQuMDE0LDYuNDkxIDIsOC41MDUgMiwxMC45OTEgQzIsMTMuNDc2IDQuMDE0LDE1LjQ5MSA2LjUsMTUuNDkxIEM4Ljk4NSwxNS40OTEgMTEsMTMuNDc2IDExLDEwLjk5MSBDMTEsOC41MDUgOC45ODUsNi40OTEgNi41LDYuNDkxIEw2LjUsNi40OTEgWiIgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc0NTAwMCwgOC43NDU1MDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC43NDUwMDAsIC04Ljc0NTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")',
            backgroundSize: "18px",
            backgroundPosition: "18px center",
            fontSize: "14px",
            padding: "0 24px 0 64px",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24),\r\n    0 1px 0 0 rgba(255, 255, 255, 0.06) inset",
        },
        ".text-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            width: "auto",
            fontSize: "16px",
            height: "31px",
        },
        ".text-input::-ms-clear": {
            display: "none",
        },
        ".text-input:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".text-input::-webkit-input-placeholder": {
            color: "#999",
        },
        ".text-input:-ms-input-placeholder": {
            color: "#999",
        },
        ".text-input::-ms-input-placeholder": {
            color: "#999",
        },
        ".text-input::placeholder": {
            color: "#999",
        },
        ".text-input:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
        },
        ".text-input--underbar": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    boxSizing: "border-box",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            width: "auto",
            fontSize: "16px",
            height: "31px",
            borderBottom: "1px solid #ccc",
            borderRadius: "0",
        },
        ".text-input--underbar:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: "1px solid #ccc",
        },
        ".text-input--underbar:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".text-input--material": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#212121",
            background: "transparent",
            border: "none",
            verticalAlign: "middle",
            outline: "none",
            lineHeight: "1",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    verticalAlign: "top",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
            ],
            backgroundImage: "linear-gradient(to top, transparent 1px, #afafaf 1px)",
            backgroundSize: "100% 2px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundColor: "transparent",
            fontSize: "16px",
            paddingBottom: "2px",
            borderRadius: "0",
            height: "24px",
            webkitTransform: "translate3d(0, 0, 0)",
        },
        ".text-input--material__label": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#afafaf",
            position: "absolute",
            left: "0",
            top: "2px",
            fontSize: "16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            pointerEvents: "none",
        },
        ".text-input--material__label--active": {
            color: "#3d5afe",
            webkitTransform: "translate(0, -75%) scale(0.75)",
            transform: "translate(0, -75%) scale(0.75)",
            webkitTransformOrigin: "left top",
            transformOrigin: "left top",
            transition: "transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in",
            fallbacks: [
                {
                    transition: "transform 0.1s ease-in, color 0.1s ease-in",
                },
                {
                    transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in",
                },
            ],
        },
        ".text-input--material:focus": {
            backgroundImage: "linear-gradient(#3d5afe, #3d5afe),\r\n    linear-gradient(to top, transparent 1px, #afafaf 1px)",
            webkitAnimation: "material-text-input-animate 0.3s forwards",
            animation: "material-text-input-animate 0.3s forwards",
        },
        ".text-input--material::-webkit-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material:-ms-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material::-ms-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material::placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        "@keyframes material-text-input-animate": {
            "0%": {
                backgroundSize: "0% 2px, 100% 2px",
            },
            "100%": {
                backgroundSize: "100% 2px, 100% 2px",
            },
        },
        ".textarea": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "5px 5px 5px 5px",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "1px solid #ccc",
            lineHeight: "normal",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            verticalAlign: "top",
            resize: "none",
            outline: "none",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    backgroundColor: "#ffffff",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            letterSpacing: "0",
            boxShadow: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            width: "auto",
        },
        ".textarea:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".textarea::-webkit-input-placeholder": {
            color: "#999",
        },
        ".textarea:-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea::-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea::placeholder": {
            color: "#999",
        },
        ".textarea--transparent": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "5px 5px 5px 5px",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            verticalAlign: "top",
            resize: "none",
            outline: "none",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    padding: "0",
                },
            ],
            paddingLeft: "0",
            paddingRight: "0",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            width: "auto",
        },
        ".textarea--transparent:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".textarea--transparent::-webkit-input-placeholder": {
            color: "#999",
        },
        ".textarea--transparent:-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea--transparent::-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea--transparent::placeholder": {
            color: "#999",
        },
        ".dialog": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "auto auto",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            top: "50%",
            left: "50%",
            webkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            fallbacks: [
                {
                    margin: "0",
                },
            ],
            overflow: "hidden",
            minWidth: "270px",
            minHeight: "100px",
            textAlign: "left",
        },
        ".dialog-container": {
            height: "inherit",
            minHeight: "inherit",
            overflow: "hidden",
            borderRadius: "4px",
            backgroundColor: "#f4f4f4",
            webkitMaskImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC")',
            color: "#1f1f21",
        },
        ".dialog-mask": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".dialog--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            textAlign: "left",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".dialog-container--material": {
            borderRadius: "2px",
            backgroundColor: "#ffffff",
            color: "#1f1f21",
        },
        ".dialog-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".alert-dialog": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "auto",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            top: "50%",
            left: "50%",
            webkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            width: "270px",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    margin: "0",
                },
            ],
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
            overflow: "visible",
            maxWidth: "95%",
        },
        ".alert-dialog-container": {
            height: "inherit",
            paddingTop: "16px",
            overflow: "hidden",
        },
        ".alert-dialog-title": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            fontSize: "17px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0 8px",
            textAlign: "center",
            color: "#1f1f21",
        },
        ".alert-dialog-content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px 8px",
            fontSize: "14px",
            minHeight: "36px",
            textAlign: "center",
            color: "#1f1f21",
        },
        ".alert-dialog-footer": {
            width: "100%",
        },
        ".alert-dialog-button": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 8px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            letterSpacing: "0",
            verticalAlign: "middle",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    border: "none",
                },
            ],
            borderTop: "1px solid #ddd",
            fontSize: "16px",
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            textAlign: "center",
            height: "44px",
            outline: "none",
        },
        ".alert-dialog-button:active": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".alert-dialog-button--primal": {
            fontWeight: "500",
        },
        ".alert-dialog-footer--rowfooter": {
            whiteSpace: "nowrap",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "wrap",
            flexWrap: "wrap",
        },
        ".alert-dialog-button--rowfooter": {
            webkitBoxFlex: "1",
            webkitFlex: "1",
            flex: "1",
            display: "block",
            width: "100%",
            borderLeft: "1px solid #ddd",
        },
        ".alert-dialog-button--rowfooter:first-child": {
            borderLeft: "none",
        },
        ".alert-dialog-mask": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".alert-dialog--material": {
            borderRadius: "8px",
            backgroundColor: "#ffffff",
        },
        ".alert-dialog-container--material": {
            borderRadius: "8px",
            padding: "22px 0 0 0",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".alert-dialog-title--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            textAlign: "left",
            fontSize: "20px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0 24px",
            color: "#31313a",
        },
        ".alert-dialog-content--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            textAlign: "left",
            fontSize: "16px",
            fallbacks: [
                {
                    color: "#31313a",
                },
                {
                    fontWeight: "400",
                },
            ],
            lineHeight: "20px",
            padding: "0 24px",
            margin: "24px 0 10px 0",
            minHeight: "0",
            color: "rgba(49, 49, 58, 0.85)",
        },
        ".alert-dialog-footer--material": {
            display: "block",
            padding: "0",
            height: "52px",
            boxSizing: "border-box",
            margin: "0",
            lineHeight: "1",
        },
        ".alert-dialog-button--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            textTransform: "uppercase",
            display: "inline-block",
            width: "auto",
            float: "right",
            background: "none",
            border: "none",
            borderRadius: "2px",
            fontSize: "14px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            outline: "none",
            height: "36px",
            lineHeight: "36px",
            padding: "0 8px",
            margin: "8px 8px 8px 0",
            boxSizing: "border-box",
            minWidth: "50px",
            color: "#4a148c",
        },
        ".alert-dialog-button--material:active": {
            backgroundColor: "initial",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
            ],
        },
        ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
            border: "0",
        },
        ".alert-dialog-button--primal--material": {
            fontWeight: "500",
        },
        ".alert-dialog-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".popover": {
            position: "absolute",
            zIndex: "20001",
        },
        ".popover--bottom": {
            bottom: "0",
        },
        ".popover--top": {
            top: "0",
        },
        ".popover--left": {
            left: "0",
        },
        ".popover--right": {
            right: "0",
        },
        ".popover-mask": {
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            position: "absolute",
            zIndex: "19999",
        },
        ".popover__content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "block",
            width: "220px",
            overflow: "auto",
            minHeight: "100px",
            maxHeight: "100%",
            backgroundColor: "white",
            borderRadius: "8px",
            fallbacks: [
                {
                    color: "inherit",
                },
            ],
            pointerEvents: "auto",
        },
        ".popover--top__content": {},
        ".popover--bottom__content": {},
        ".popover--left__content": {},
        ".popover--right__content": {},
        ".popover__arrow": {
            position: "absolute",
            width: "18px",
            height: "18px",
            webkitTransformOrigin: "50% 50% 0",
            transformOrigin: "50% 50% 0",
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(45deg, white, white 50%, transparent 50%)",
            borderRadius: "0 0 0 4px",
            margin: "0",
            zIndex: "20001",
        },
        ".popover--bottom__arrow": {
            webkitTransform: "translateY(6px) translateX(-9px) rotate(-45deg)",
            transform: "translateY(6px) translateX(-9px) rotate(-45deg)",
            bottom: "0",
            marginRight: "-18px",
        },
        ".popover--top__arrow": {
            webkitTransform: "translateY(-6px) translateX(-9px) rotate(135deg)",
            transform: "translateY(-6px) translateX(-9px) rotate(135deg)",
            top: "0",
            marginRight: "-18px",
        },
        ".popover--left__arrow": {
            webkitTransform: "translateX(-6px) translateY(-9px) rotate(45deg)",
            transform: "translateX(-6px) translateY(-9px) rotate(45deg)",
            left: "0",
            marginBottom: "-18px",
        },
        ".popover--right__arrow": {
            webkitTransform: "translateX(6px) translateY(-9px) rotate(225deg)",
            transform: "translateX(6px) translateY(-9px) rotate(225deg)",
            right: "0",
            marginBottom: "-18px",
        },
        ".popover--material": {},
        ".popover-mask--material": {
            backgroundColor: "transparent",
        },
        ".popover--material__content": {
            backgroundColor: "#fafafa",
            borderRadius: "2px",
            color: "#1f1f21",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
        },
        ".popover--material__arrow": {
            display: "none",
        },
        ".progress-bar": {
            position: "relative",
            height: "2px",
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            backgroundClip: "padding-box",
            margin: "0",
            overflow: "hidden",
            borderRadius: "4px",
        },
        ".progress-bar__primary, .progress-bar__secondary": {
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            bottom: "0",
            transition: "width 0.3s linear",
            zIndex: "100",
            borderRadius: "4px",
        },
        ".progress-bar__secondary": {
            backgroundColor: "#65adff",
            zIndex: "0",
        },
        ".progress-bar--indeterminate:before": {
            content: '""',
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            left: "0",
            bottom: "0",
            willChange: "left, right",
            webkitAnimation: "progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)\r\n    infinite",
            animation: "progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
            borderRadius: "4px",
        },
        ".progress-bar--indeterminate:after": {
            content: '""',
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            left: "0",
            bottom: "0",
            willChange: "left, right",
            webkitAnimation: "progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)\r\n    infinite",
            animation: "progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
            webkitAnimationDelay: "1.15s",
            animationDelay: "1.15s",
            borderRadius: "4px",
        },
        "@keyframes progress-bar__indeterminate": {
            "0%": {
                left: "-35%",
                right: "100%",
            },
            "60%": {
                left: "100%",
                right: "-90%",
            },
            "100%": {
                left: "100%",
                right: "-90%",
            },
        },
        "@keyframes progress-bar__indeterminate-short": {
            "0%": {
                left: "-200%",
                right: "100%",
            },
            "60%": {
                left: "107%",
                right: "-8%",
            },
            "100%": {
                left: "107%",
                right: "-8%",
            },
        },
        ".progress-bar--material": {
            height: "4px",
            backgroundColor: "transparent",
            borderRadius: "0",
        },
        ".progress-bar--material__primary, .progress-bar--material__secondary": {
            backgroundColor: "#4a148c",
            borderRadius: "0",
        },
        ".progress-bar--material__secondary": {
            backgroundColor: "#12005e",
            zIndex: "0",
        },
        ".progress-bar--material.progress-bar--indeterminate:before": {
            backgroundColor: "#4a148c",
            borderRadius: "0",
        },
        ".progress-bar--material.progress-bar--indeterminate:after": {
            backgroundColor: "#4a148c",
            borderRadius: "0",
        },
        ".progress-circular": {
            height: "32px",
            position: "relative",
            width: "32px",
            webkitTransform: "rotate(270deg)",
            transform: "rotate(270deg)",
            webkitAnimation: "none",
            animation: "none",
        },
        ".progress-circular__background, .progress-circular__primary, .progress-circular__secondary": {
            cx: "50%",
            cy: "50%",
            r: "40%",
            webkitAnimation: "none",
            animation: "none",
            fill: "none",
            strokeWidth: "5%",
            strokeMiterlimit: "10",
        },
        ".progress-circular__background": {
            stroke: "transparent",
        },
        ".progress-circular__primary": {
            strokeDasharray: "1, 200",
            strokeDashoffset: "0",
            stroke: "#4a148c",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        ".progress-circular__secondary": {
            stroke: "#65adff",
        },
        ".progress-circular--indeterminate": {
            webkitAnimation: "progress__rotate 2s linear infinite",
            animation: "progress__rotate 2s linear infinite",
            webkitTransform: "none",
            transform: "none",
        },
        ".progress-circular--indeterminate__primary": {
            webkitAnimation: "progress__dash 1.5s ease-in-out infinite",
            animation: "progress__dash 1.5s ease-in-out infinite",
        },
        ".progress-circular--indeterminate__secondary": {
            display: "none",
        },
        "@keyframes progress__rotate": {
            "100%": {
                webkitTransform: "rotate(360deg)",
                transform: "rotate(360deg)",
            },
        },
        "@keyframes progress__dash": {
            "0%": {
                strokeDasharray: "10%, 241.32%",
                strokeDashoffset: "0",
            },
            "50%": {
                strokeDasharray: "201%, 50.322%",
                strokeDashoffset: "-100%",
            },
            "100%": {
                strokeDasharray: "10%, 241.32%",
                strokeDashoffset: "-251.32%",
            },
        },
        ".progress-circular--material__background, .progress-circular--material__primary, .progress-circular--material__secondary": {
            strokeWidth: "9%",
        },
        ".progress-circular--material__background": {
            stroke: "transparent",
        },
        ".progress-circular--material__primary": {
            stroke: "#4a148c",
        },
        ".progress-circular--material__secondary": {
            stroke: "#12005e",
        },
        "ons-fab.fab, ons-speed-dial-item.fab, button.fab": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#ffffff",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "56px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            width: "56px",
            height: "56px",
            textDecoration: "none",
            fontSize: "25px",
            fallbacks: [
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            letterSpacing: "0",
            verticalAlign: "middle",
            textAlign: "center",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
            transition: "all 0.1s linear",
        },
        "ons-fab.fab:active, ons-speed-dial-item.fab:active, button.fab:active": {
            boxShadow: "0 0 6 rgba(0, 0, 0, 0.12)",
            backgroundColor: "color-mod(#4a148c a(70%))",
            transition: "all 0.2s ease",
            fallbacks: [
                {
                    boxShadow: "0 3px 6 rgba(0, 0, 0, 0.12)",
                },
            ],
        },
        "ons-fab.fab:focus, ons-speed-dial-item.fab:focus, button.fab:focus": {
            outline: "0",
        },
        "ons-fab.fab:disabled, ons-fab.fab[disabled], ons-speed-dial-item.fab:disabled, ons-speed-dial-item.fab[disabled], button.fab:disabled, button.fab[disabled]": {
            backgroundColor: "color-mod(black alpha(50%))",
            boxShadow: "none",
            opacity: "0.3",
            pointerEvents: "none",
        },
        "ons-fab.fab__icon, ons-speed-dial-item.fab__icon, button.fab__icon": {
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "block",
            borderRadius: "100%",
            padding: "0",
            zIndex: "100",
            lineHeight: "56px",
        },
        "ons-fab.fab--material, ons-speed-dial-item.fab--material, button.fab--material": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "56px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            width: "56px",
            height: "56px",
            textDecoration: "none",
            fontSize: "25px",
            fallbacks: [
                {
                    transition: "all 0.1s linear",
                },
                {
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    color: "#ffffff",
                },
                {
                    color: "#ffffff",
                },
                {
                    lineHeight: "56px",
                },
                {
                    fontSize: "25px",
                },
                {
                    textDecoration: "none",
                },
                {
                    height: "56px",
                },
                {
                    width: "56px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            letterSpacing: "0",
            verticalAlign: "middle",
            textAlign: "center",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
            transition: "all 0.2s ease-in-out",
        },
        "ons-fab.fab--material:active, ons-speed-dial-item.fab--material:active, button.fab--material:active": {
            boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),\r\n    0 5px 5px -3px rgba(0, 0, 0, 0.4)",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            transition: "all 0.2s ease",
        },
        "ons-fab.fab--material:focus, ons-speed-dial-item.fab--material:focus, button.fab--material:focus": {
            outline: "0",
        },
        "ons-fab.fab--material__icon, ons-speed-dial-item.fab--material__icon, button.fab--material__icon": {
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "block",
            borderRadius: "100%",
            padding: "0",
            zIndex: "100",
            lineHeight: "56px",
        },
        "ons-fab.fab--material:disabled, ons-fab.fab--material[disabled], ons-speed-dial-item.fab--material:disabled, ons-speed-dial-item.fab--material[disabled], button.fab--material:disabled, button.fab--material[disabled]": {
            backgroundColor: "color-mod(black alpha(50%))",
            boxShadow: "none",
            opacity: "0.3",
            pointerEvents: "none",
        },
        "ons-fab.fab--mini, ons-speed-dial-item.fab--mini, button.fab--mini": {
            width: "40px",
            height: "40px",
            lineHeight: "40px",
        },
        "ons-fab.fab--mini__icon, ons-speed-dial-item.fab--mini__icon, button.fab--mini__icon": {
            lineHeight: "40px",
        },
        "ons-fab.speed-dial__item, ons-speed-dial-item.speed-dial__item, button.speed-dial__item": {
            position: "absolute",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        "ons-fab.fab--top__right, button.fab--top__right, .speed-dial.fab--top__right": {
            top: "20px",
            bottom: "auto",
            right: "20px",
            left: "auto",
            position: "absolute",
        },
        "ons-fab.fab--bottom__right, button.fab--bottom__right, .speed-dial.fab--bottom__right": {
            top: "auto",
            bottom: "20px",
            right: "20px",
            left: "auto",
            position: "absolute",
        },
        "ons-fab.fab--top__left, button.fab--top__left, .speed-dial.fab--top__left": {
            top: "20px",
            bottom: "auto",
            right: "auto",
            left: "20px",
            position: "absolute",
        },
        "ons-fab.fab--bottom__left, button.fab--bottom__left, .speed-dial.fab--bottom__left": {
            top: "auto",
            bottom: "20px",
            right: "auto",
            left: "20px",
            position: "absolute",
        },
        "ons-fab.fab--top__center, button.fab--top__center, .speed-dial.fab--top__center": {
            top: "20px",
            bottom: "auto",
            marginLeft: "-28px",
            left: "50%",
            right: "auto",
            position: "absolute",
        },
        "ons-fab.fab--bottom__center, button.fab--bottom__center, .speed-dial.fab--bottom__center": {
            top: "auto",
            bottom: "20px",
            marginLeft: "-28px",
            left: "50%",
            right: "auto",
            position: "absolute",
        },
        ".modal": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
                {
                    overflow: "hidden",
                },
                {
                    backgroundClip: "padding-box",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            display: "table",
            zIndex: "2147483647",
        },
        ".modal__content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "normal",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            fallbacks: [
                {
                    whiteSpace: "nowrap",
                },
                {
                    color: "inherit",
                },
                {
                    backgroundClip: "padding-box",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
        },
        ".select-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 20px 0 0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    padding: "0",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "1",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            position: "relative",
            fontSize: "17px",
            height: "32px",
            borderColor: "#ccc",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            display: "inline-block",
            borderRadius: "0",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            borderBottom: "none",
        },
        ".select-input::-ms-clear": {
            display: "none",
        },
        ".select-input::-webkit-input-placeholder": {
            color: "#999",
        },
        ".select-input:-ms-input-placeholder": {
            color: "#999",
        },
        ".select-input::-ms-input-placeholder": {
            color: "#999",
        },
        ".select-input::placeholder": {
            color: "#999",
        },
        ".select-input:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
        },
        ".select-input:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
        },
        ".select-input[multiple]": {
            height: "64px",
        },
        ".select-input--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#1f1f21",
            fontSize: "15px",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="),\r\n    linear-gradient(to top, color-mod(black a(12%)) 50%, color-mod(black a(12%)) 50%)',
            backgroundSize: "auto, 100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center, left bottom",
            border: "none",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
        },
        ".select-input--material__label": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            position: "absolute",
            left: "0",
            top: "2px",
            fontSize: "16px",
            pointerEvents: "none",
        },
        ".select-input--material__label--active": {
            color: "rgba(0, 0, 0, 0.15)",
            fallbacks: [
                {
                    transition: "transform 0.1s ease-in, color 0.1s ease-in",
                },
                {
                    transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in",
                },
                {
                    color: "#000000",
                },
            ],
            webkitTransform: "translate(0, -75%) scale(0.75)",
            transform: "translate(0, -75%) scale(0.75)",
            webkitTransformOrigin: "left top",
            transformOrigin: "left top",
            transition: "transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in",
        },
        ".select-input--material::-webkit-input-placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material:-ms-input-placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material::-ms-input-placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material::placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        "@keyframes material-select-input-animate": {
            "0%": {
                backgroundSize: "0% 2px, 100% 2px",
            },
            "100%": {
                backgroundSize: "100% 2px, 100% 2px",
            },
        },
        ".select-input--underbar": {
            border: "none",
            borderBottom: "1px solid #ccc",
        },
        ".select-input--underbar:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".select-input--underbar:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".action-sheet": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            left: "10px",
            right: "10px",
            bottom: "10px",
            zIndex: "2",
        },
        ".action-sheet-button": {
            boxSizing: "border-box",
            height: "56px",
            fontSize: "20px",
            textAlign: "center",
            color: "#4a148c",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            borderRadius: "0",
            lineHeight: "56px",
            border: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            display: "block",
            width: "100%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 100%)",
        },
        ".action-sheet-button:first-child": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
        },
        ".action-sheet-button:active": {
            backgroundColor: "#e9e9e9",
            backgroundImage: "none",
        },
        ".action-sheet-button:focus": {
            outline: "none",
        },
        ".action-sheet-button:nth-last-of-type(2)": {
            borderBottomRightRadius: "12px",
            borderBottomLeftRadius: "12px",
            backgroundImage: "none",
        },
        ".action-sheet-button:last-of-type": {
            borderRadius: "12px",
            margin: "8px 0 0 0",
            backgroundColor: "#fff",
            backgroundImage: "none",
            fontWeight: "600",
        },
        ".action-sheet-button:last-of-type:active": {
            backgroundColor: "#e9e9e9",
        },
        ".action-sheet-button--destructive": {
            color: "#fe3824",
        },
        ".action-sheet-title": {
            boxSizing: "border-box",
            height: "56px",
            fontSize: "13px",
            color: "#8f8e94",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            lineHeight: "56px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 100%)",
        },
        ".action-sheet-title:first-child": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
        },
        ".action-sheet-icon": {
            display: "none",
        },
        ".action-sheet-mask": {
            position: "absolute",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            zIndex: "1",
        },
        ".action-sheet--material": {
            left: "0",
            right: "0",
            bottom: "0",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".action-sheet-title--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "0",
            backgroundImage: "none",
            textAlign: "left",
            height: "56px",
            lineHeight: "56px",
            fontSize: "16px",
            padding: "0 0 0 16px",
            color: "#686868",
            backgroundColor: "white",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
        },
        ".action-sheet-title--material:first-child": {
            borderRadius: "0",
        },
        ".action-sheet-button--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "0",
            backgroundImage: "none",
            height: "52px",
            lineHeight: "52px",
            textAlign: "left",
            fontSize: "16px",
            padding: "0 0 0 16px",
            color: "#686868",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            backgroundColor: "white",
        },
        ".action-sheet-button--material:first-child": {
            borderRadius: "0",
        },
        ".action-sheet-button--material:nth-last-of-type(2)": {
            borderRadius: "0",
        },
        ".action-sheet-button--material:last-of-type": {
            margin: "0",
            borderRadius: "8px",
            backgroundColor: "white",
        },
        ".action-sheet-icon--material": {
            display: "inline-block",
            float: "left",
            height: "52px",
            lineHeight: "52px",
            marginRight: "32px",
            fontSize: "26px",
            width: "0.8em",
            textAlign: "center",
        },
        ".action-sheet-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".card": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
            borderRadius: "8px",
            backgroundColor: "white",
            boxSizing: "border-box",
            display: "block",
            margin: "8px",
            padding: "16px",
            textAlign: "left",
            wordWrap: "break-word",
        },
        ".card__content": {
            margin: "0",
            fontSize: "14px",
            lineHeight: "1.4",
            color: "#030303",
        },
        ".card__title": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            fontSize: "20px",
            margin: "4px 0 8px 0",
            padding: "0",
            display: "block",
            boxSizing: "border-box",
        },
        ".card--material": {
            backgroundColor: "white",
            borderRadius: "2px",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".card--material__content": {
            fontSize: "14px",
            lineHeight: "1.4",
            color: "rgba(0, 0, 0, 0.54)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
        },
        ".card--material__title": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fontSize: "24px",
            margin: "8px 0 12px 0",
        },
        ".toast": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            zIndex: "2",
            left: "8px",
            right: "8px",
            bottom: "0",
            margin: "8px 0",
            borderRadius: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
                {
                    backgroundColor: "#000000",
                },
            ],
            display: "flex",
            minHeight: "48px",
            lineHeight: "1.5",
            boxSizing: "border-box",
            padding: "16px 16px",
        },
        ".toast__message": {
            fontSize: "14px",
            color: "white",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            textAlign: "left",
            margin: "0 16px 0 0",
            whiteSpace: "normal",
        },
        ".toast__button": {
            fontSize: "14px",
            color: "white",
            webkitBoxFlex: "0",
            webkitFlexGrow: "0",
            flexGrow: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            border: "none",
            backgroundColor: "transparent",
            textTransform: "uppercase",
        },
        ".toast__button:focus": {
            outline: "none",
        },
        ".toast__button:active": {
            opacity: "0.4",
        },
        ".toast--material": {
            left: "0",
            right: "0",
            bottom: "0",
            margin: "0",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            borderRadius: "0",
            padding: "16px 24px",
        },
        ".toast--material__message": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            margin: "0 24px 0 0",
        },
        ".toast--material__button": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#4a148c",
        },
        ".toolbar + .page__background": {
            top: "44px",
        },
        ".toolbar + .page__background + .page__content": {
            top: "44px",
            paddingTop: "0",
        },
        ".page-with-bottom-toolbar > .page__content": {
            bottom: "44px",
        },
        ".toolbar.toolbar--material + .page__background": {
            top: "56px",
        },
        ".toolbar.toolbar--material + .page__background + .page__content": {
            top: "56px",
            paddingTop: "0",
        },
        ".toolbar.toolbar--transparent + .page__background": {
            top: "0",
        },
        ".toolbar.toolbar--transparent.toolbar--cover-content + .page__background + .page__content, .toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
            top: "0",
            paddingTop: "44px",
        },
        ".toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
            top: "0",
            paddingTop: "56px",
        },
        ".tabbar:not(.tabbar--top)": {
            paddingBottom: "0",
        },
        "@media (orientation: landscape)": {
            "html[onsflag-iphonex-landscape] .page__content": {
                paddingLeft: "44px",
                paddingRight: "44px",
                bottom: "0",
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .modal .page__content": {
                paddingLeft: "0",
                paddingRight: "0",
            },
            "html[onsflag-iphonex-landscape] .toolbar__left": {
                paddingLeft: "44px",
            },
            "html[onsflag-iphonex-landscape] .toolbar__right": {
                paddingRight: "44px",
            },
            "html[onsflag-iphonex-landscape] .bottom-bar": {
                paddingRight: "44px",
                paddingLeft: "44px",
                bottom: "0",
                boxSizing: "content-box",
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .tabbar": {
                paddingLeft: "44px",
                paddingRight: "44px",
                width: "calc(100% - 88px)",
            },
            "html[onsflag-iphonex-landscape] .fab--bottom__left, html[onsflag-iphonex-landscape] .fab--bottom__center, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                bottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .fab--top__left, html[onsflag-iphonex-landscape] .fab--bottom__left": {
                left: "44px",
            },
            "html[onsflag-iphonex-landscape] .fab--top__right, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                right: "44px",
            },
            "html[onsflag-iphonex-landscape] .action-sheet": {
                left: "calc((100vw - 100vh + 20px) / 2)",
                right: "calc((100vw - 100vh + 20px) / 2)",
                bottom: "33px",
            },
            "html[onsflag-iphonex-landscape] .toast": {
                left: "52px",
                right: "52px",
                bottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .bottom-bar, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
                bottom: "0",
                boxSizing: "border-box",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                bottom: "0",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                bottom: "65px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
                bottom: "44px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .tabbar:not(.tabbar--top)": {
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content)": {
                bottom: "70px",
            },
            "html[onsflag-iphonex-landscape] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
                bottom: "49px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset)": {
                marginLeft: "-44px",
                marginRight: "-44px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-header": {
                paddingLeft: "59px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item": {
                paddingLeft: "58px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                right: "60px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                paddingRight: "50px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                paddingRight: "56px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                paddingRight: "74px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset)": {
                marginLeft: "0",
                marginRight: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-header": {
                paddingLeft: "15px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item": {
                paddingLeft: "14px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                right: "16px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                paddingRight: "6px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                paddingRight: "12px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                paddingRight: "30px",
            },
        },
        "@media (orientation: portrait)": {
            "html[onsflag-iphonex-portrait] .fab--top__left, html[onsflag-iphonex-portrait] .fab--top__center, html[onsflag-iphonex-portrait] .fab--top__right": {
                top: "64px",
            },
            "html[onsflag-iphonex-portrait] .fab--bottom__left, html[onsflag-iphonex-portrait] .fab--bottom__center, html[onsflag-iphonex-portrait] .fab--bottom__right": {
                bottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .action-sheet": {
                bottom: "48px",
            },
            "html[onsflag-iphonex-portrait] .toast": {
                bottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .toolbar": {
                top: "0",
                boxSizing: "content-box",
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar": {
                top: "0",
                boxSizing: "border-box",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .bottom-bar": {
                bottom: "0",
                boxSizing: "content-box",
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .bottom-bar, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
                bottom: "0",
                boxSizing: "border-box",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .page__content": {
                top: "0",
                paddingTop: "44px",
                bottom: "0",
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
                top: "0",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                bottom: "0",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content) + .page__background, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content": {
                top: "88px",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
                top: "44px",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                bottom: "78px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
                bottom: "44px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content": {
                top: "0",
                paddingTop: "88px",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content": {
                top: "0",
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .tabbar--top": {
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar--top, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top": {
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .tabbar--top__content": {
                top: "93px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar--top__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top__content, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top__content": {
                top: "49px",
            },
            "html[onsflag-iphonex-portrait] .tabbar:not(.tabbar--top):not(.tabbar--top)": {
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar:not(.tabbar--top):not(.tabbar--top), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content)": {
                bottom: "83px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
                bottom: "49px",
            },
        },
    },
};
/* harmony default export */ const light = (lightMode);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-onsenui/dist/react-onsenui.js
var react_onsenui = __webpack_require__(3057);
;// CONCATENATED MODULE: ./src/builders/ActionSheetBuilder.tsx




/**
 * Creats an menu
 */
class ActionSheetBuilder extends react.Component {
    render() {
        const { data, options } = this.props;
        const result = data.map((item) => (_jsx(ActionSheetButton, Object.assign({ icon: item.icon, style: item.style, modifier: item.modifier, onClick: () => {
                if (typeof item.onClick == "function") {
                    item.onClick();
                }
                else {
                    throw new Error("Invalid onClick in MenuBuilder");
                }
            } }, { children: item.text }), void 0)));
        return (_jsx(_Fragment, { children: _jsx(ActionSheet, Object.assign({ isOpen: options.isOpen, animation: tools.typeCheck(options.animation, "default"), modifier: options.modifier, onCancel: () => {
                    if (typeof options.onCancel == "function") {
                        options.onCancel();
                    }
                    else {
                        throw new Error("onCancel is not a function");
                    }
                }, isCancelable: tools.typeCheck(options.isCancelable, true), title: options.title }, { children: result }), void 0) }, void 0));
    }
}
/* harmony default export */ const builders_ActionSheetBuilder = ((/* unused pure expression or super */ null && (ActionSheetBuilder)));

;// CONCATENATED MODULE: ./src/components/MDIcon.tsx




class MDIcon extends react.Component {
    render() {
        const { icon, size, disabled, isInList, ignoreDarkmode, style } = this.props;
        return ((0,jsx_runtime.jsx)("span", Object.assign({ style: style }, { children: (0,jsx_runtime.jsx)("span", Object.assign({ className: "material-icons-round " +
                    misc_tools.typeIF(isInList, "list-item__icon", "") +
                    " ons-icon " +
                    "material-icons md-" +
                    size +
                    misc_tools.typeCheck(ignoreDarkmode, " md-" + misc_tools.typeIF(src_native.getPref("enableDarkmode"), "light", "dark")) +
                    " " +
                    misc_tools.typeIF(disabled, "md-inactive ", ""), style: {
                    textAlign: "center",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: icon }), void 0) }), void 0));
    }
}
/* harmony default export */ const components_MDIcon = (MDIcon);

;// CONCATENATED MODULE: ./src/components/Gesture.tsx



class Gesture extends react.Component {
    constructor(props) {
        super(props);
        this.gerstureID = react.createRef();
    }
    componentDidMount() {
        const { callback, event } = this.props;
        misc_tools.ref(this.gerstureID, (ref) => {
            ref.addEventListener(event, callback);
        });
    }
    render() {
        const { children } = this.props;
        return (0,jsx_runtime.jsx)("div", Object.assign({ ref: this.gerstureID }, { children: children }), void 0);
    }
}
/* harmony default export */ const components_Gesture = (Gesture);

;// CONCATENATED MODULE: ./src/builders/ListViewBuilder.tsx









class ListViewBuilder extends react.Component {
    /**
     * Check if an key is there
     * @param key
     * @returns {Boolean}
     */
    getSettingSwitch(key) {
        var get = this.getPref(key);
        if (get === undefined || get === null || get === "" || get === "false") {
            return false;
        }
        else {
            return true;
        }
    }
    getSettingSelect(key) {
        var get = this.getPref(key);
        if (get === undefined || get === null || get === "") {
            return "en";
        }
        else {
            return get;
        }
    }
    getPref(key) {
        if (this.props.isPlugin) {
            return new hwplugin(this.props.pluginName).getPluginPref(key);
        }
        else {
            return src_native.getPref(key);
        }
    }
    setPref(key, content) {
        if (this.props.isPlugin) {
            new hwplugin(this.props.pluginName).setPluginPref(key, content);
        }
        else {
            src_native.setPref(key, content);
        }
    }
    setSetting(key, data) {
        this.setPref(key, data);
    }
    default(_, __, ___) {
        if (_ === undefined || _ === null) {
            return __;
        }
        else if (_ === undefined || _ === null) {
            return ___;
        }
    }
    render() {
        const { data } = this.props;
        const list = data.map((header) => ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)("section", Object.assign({ id: header.id, className: header.className, style: header.style }, { children: [(0,jsx_runtime.jsx)(react_onsenui.ListTitle, { children: header.title }, void 0), header.content.map((item) => ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ modifier: misc_tools.typeCheck(item.modifier, ""), tappable: misc_tools.typeCheck(item.tappable, false), id: item.key + "-ListItem", style: item.style, onClick: () => {
                                if (typeof item.onClick == "function") {
                                    const key = item.key;
                                    item.onClick(key);
                                }
                            } }, { children: [(() => {
                                    if (item.icon === null || item.icon === undefined) {
                                        return;
                                    }
                                    else {
                                        return ((0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: item.icon, size: "24", isInList: true }, void 0) }), void 0));
                                    }
                                })(), (0,jsx_runtime.jsx)(components_Gesture, Object.assign({ event: "hold", callback: () => {
                                        var _a, _b;
                                        onsenui_default().notification.alert({
                                            message: (_a = item.helper) === null || _a === void 0 ? void 0 : _a.text,
                                            title: "Info",
                                            buttonLabels: ["Ok"],
                                            modifier: src_native.checkPlatformForBorderStyle,
                                            animation: "default",
                                            primaryButtonIndex: 1,
                                            cancelable: misc_tools.typeCheck((_b = item.helper) === null || _b === void 0 ? void 0 : _b.cancelable, true),
                                        });
                                    } }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: "center" }, { children: item.text }), void 0) }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "right" }, { children: (() => {
                                        var _a;
                                        switch (item.type) {
                                            case "switch":
                                                return ((0,jsx_runtime.jsx)(react_onsenui.Switch, { checked: this.default(item.switchDefaultValue, this.getSettingSwitch(item.key), false), disabled: Boolean(item.disabled), onChange: (e) => {
                                                        /**
                                                         * This will keep the default funtion
                                                         */
                                                        const keepDefaultFuntion = () => this.setSetting(item.key, e.target.checked);
                                                        if (typeof item.callback == "function") {
                                                            const key = item.key;
                                                            item.callback(e, key, keepDefaultFuntion());
                                                        }
                                                        else {
                                                            keepDefaultFuntion();
                                                        }
                                                    } }, void 0));
                                            case "select":
                                                return ((0,jsx_runtime.jsxs)(react_onsenui.Select, Object.assign({ id: "choose-sel", disabled: Boolean(item.disabled), value: misc_tools.typeCheck(this.getSettingSelect(item.key), misc_tools.typeCheck(item.selectDefaultValue, "")), onChange: (e) => {
                                                        /**
                                                         * This will keep the default funtion
                                                         */
                                                        const keepDefaultFuntion = () => this.setSetting(item.key, e.target.value);
                                                        if (typeof item.callback == "function") {
                                                            const key = item.key;
                                                            item.callback(e, key, keepDefaultFuntion());
                                                        }
                                                        else {
                                                            keepDefaultFuntion();
                                                        }
                                                    } }, { children: [(0,jsx_runtime.jsx)("option", Object.assign({ value: "", selected: true, disabled: true, hidden: true }, { children: "Choose" }), void 0), (_a = item.selectValue) === null || _a === void 0 ? void 0 : _a.map((select) => ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("option", Object.assign({ value: select.value, disabled: select.disabled }, { children: select.text }), void 0) }, void 0)))] }), void 0));
                                            default:
                                                return;
                                        }
                                    })() }), void 0)] }), void 0) }, void 0)))] }), void 0) }, void 0)));
        return list;
    }
}
/* harmony default export */ const builders_ListViewBuilder = (ListViewBuilder);

;// CONCATENATED MODULE: ./src/builders/ListDialogBuilder.tsx





class ListDialogBuilder extends react.Component {
    render() {
        const { data, options } = this.props;
        return ((0,jsx_runtime.jsx)(react_onsenui.Dialog, Object.assign({ isCancelable: misc_tools.typeCheck(options.isCancelable, true), animation: misc_tools.typeCheck(options.animation, "default"), modifier: options.modifier, onCancel: () => {
                if (typeof options.onCancel == "function") {
                    options.onCancel();
                }
                else {
                    throw new Error("onCancel is not a function");
                }
            }, style: {
                overflowY: "auto",
            }, isOpen: options.isOpen }, { children: (0,jsx_runtime.jsx)(react_onsenui.List, Object.assign({ style: { height: "587px", overflowY: "auto" } }, { children: (0,jsx_runtime.jsx)(builders_ListViewBuilder, { isPlugin: false, pluginName: "", data: data }, void 0) }), void 0) }), void 0));
    }
}
/* harmony default export */ const builders_ListDialogBuilder = (ListDialogBuilder);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 7 modules
var Card = __webpack_require__(777);
;// CONCATENATED MODULE: ./src/localization/lang/de.ts
const de = {
    windowsCloseDialogMessage: "Willst du diese App schließen?",
    windowsCloseDialogTitle: "App schließen?",
    ok: "Ok",
    yes: "Ja",
    no: "Nein",
    general: "Allgemein",
    download: "Herunterladen",
    viewImageSource: "Quelle anzeigen",
    viewImageInBrowser: "Bild im Browser ansehen",
    settings: "Einstellungen",
    copyLink: "Link kopieren",
    signIn: "Anmelden",
    howToLoginLink: "https://dergoogler.com/?/guide/hentai-web/de/how-to-login/",
    howToLogin: "Wie melde ich mich an?",
    MODEL: "Modell",
    MANUFACTURER: "Hersteller",
    displayMoreButton: "Mehr Button anzeigen",
    hideFAB: "Verstecke FAB",
    fitImageToCard: "Bild auf Karte anpassen",
    enableDarkmode: "Dark mode aktieviren",
    appearance: "Aussehen",
    security: "Sicherheit",
    card: "Karte",
    others: "Anderes",
    saveLastUsedTab: "Letzten benutzten Tab speichern",
    removeTitle: "Titel von Karte entfernen",
    enableSwipeBetweenTabs: "Wischen zwischen Tabs",
    alwaysLogin: "Immer anmelden",
    hideSearchbar: "Verstecke Suche",
    erudaEnabled: "Konsole aktieviren",
    useFingerPrintToLogin: "Fingerabdruck zum öffnen der App benutzen",
    language: "Sprache",
    enableKeepScreenOn: "Behalte Bildschirm an",
    electronChangeWindowSizeDialogMessage: "Fenster größe auf {size} ändern?",
    electronChangeWindowSizeDialogTitle: "Größe ändern?",
    hardDevice: "Speichermedium",
    enableAlwaysOnTop: "Immer ganz oben",
    enableDevTools: "Aktivere DevTools",
    electronWindowSize: "Fenster größe",
    disableNSFWcontent: "Deaktivire NSFW inhalt",
    placeTabberOnBottom: "Tabbar unten platzieren",
    licenses: "Lizenzen",
    cancel: "Abbrechen",
    search: "Suche",
    hideCardWithImageError: "Bilder die nicht gefunden wurden ausblenden",
};
/* harmony default export */ const lang_de = (de);

;// CONCATENATED MODULE: ./src/localization/lang/en.ts
const en = {
    windowsCloseDialogMessage: "Do you want to close this app?",
    windowsCloseDialogTitle: "Close app?",
    ok: "Ok",
    yes: "yes",
    no: "No",
    general: "General",
    download: "Download",
    viewImageSource: "View source",
    viewImageInBrowser: "View image in browser",
    settings: "Settings",
    copyLink: "Copy link",
    signIn: "Sign in",
    howToLoginLink: "https://dergoogler.com/?/guide/hentai-web/en/how-to-login/",
    howToLogin: "How to login?",
    MODEL: "Model",
    MANUFACTURER: "Manufactor",
    displayMoreButton: "Display more button",
    hideFAB: "Hide FAB",
    fitImageToCard: "Fit image to card",
    enableDarkmode: "Enable dark mode",
    appearance: "Appearance",
    security: "Security",
    card: "Card",
    others: "Others",
    saveLastUsedTab: "Save last used tab",
    removeTitle: "Remove title from card",
    enableSwipeBetweenTabs: "Swipe between tabs",
    alwaysLogin: "Always login",
    hideSearchbar: "Hide search bar",
    erudaEnabled: "Enable console",
    useFingerPrintToLogin: "Use fingerprint to login",
    language: "Language",
    enableKeepScreenOn: "Enable keepscreen on",
    electronChangeWindowSizeDialogMessage: "Do you want to change the screen size to {size}?",
    electronChangeWindowSizeDialogTitle: "Change size?",
    hardDevice: "Hard Device",
    enableAlwaysOnTop: "Enable always on top",
    enableDevTools: "Enable DevTools",
    electronWindowSize: "Screen/Window Size",
    disableNSFWcontent: "Disable NSFW content",
    placeTabberOnBottom: "Enable tabber on bottom",
    licenses: "Licenses",
    cancel: "Cancel",
    search: "Search",
    hideCardWithImageError: "Hide cards with no images",
};
/* harmony default export */ const lang_en = (en);

;// CONCATENATED MODULE: ./src/localization/lang/idiot.german.ts

const idiotGERMAN = {
    windowsCloseDialogMessage: "Willst du diese Äpp schließen?",
    windowsCloseDialogTitle: "Äpp schließen?",
    ok: "ok",
    yes: "Jo",
    no: "Nö",
    general: "Allgem🥚n",
    download: "Herunterladen",
    viewImageSource: "Quelle anzeigen",
    viewImageInBrowser: "🖼 im Browser an👁",
    settings: "1stellungen",
    copyLink: "🔗 kopieren",
    signIn: "Anmelden",
    howToLoginLink: "https://dergoogler.com/?/guide/hentai-web/de/how-to-login/",
    howToLogin: "Wie melde ich mich an? lol",
    MODEL: "Modell",
    MANUFACTURER: "Hersteller",
    displayMoreButton: "Mehr Button anzeigen",
    hideFAB: "Verstecke FAB",
    fitImageToCard: "🖼 auf Karte anpassen",
    enableDarkmode: "Dark mode aktieviren",
    appearance: "Aus👁",
    security: "🔐heit",
    card: "Karte",
    others: "Änderes",
    saveLastUsedTab: "Letzten benutzten Tab speichern",
    removeTitle: "Tietel von Karte entfernen",
    enableSwipeBetweenTabs: "Wichsen zwischen Tabs",
    alwaysLogin: "Immer anmelden",
    hideSearchbar: "Verstecke Suche",
    erudaEnabled: "Konsole aktiviren",
    useFingerPrintToLogin: "Fingeräbdruck zum öffnen der Äpp benutzen",
    language: "Spräche",
    enableKeepScreenOn: "Behalte Bildschirm an",
    electronChangeWindowSizeDialogMessage: "Fenster größe auf {size} ändern?",
    electronChangeWindowSizeDialogTitle: "Größe ändern?",
    hardDevice: "Speichermädium",
    enableAlwaysOnTop: "Immer ganz oben",
    enableDevTools: "Aktivere DevTools",
    electronWindowSize: "Fenster größe",
    disableNSFWcontent: "Deaktivire NSFW inhalt (Dumm wer das macht)",
    placeTabberOnBottom: "Tabbar unten platzieren",
    licenses: "Lizenzen",
    cancel: "Äbbrechen",
    search: "Süche",
    hideCardWithImageError: lang_de.hideCardWithImageError,
};
/* harmony default export */ const idiot_german = (idiotGERMAN);

;// CONCATENATED MODULE: ./src/localization/languageIndexes.ts




const globals = {
    en: lang_en,
    de: lang_de,
    idiotGERMAN: idiot_german,
};
const settingsIndex = [
    {
        text: "English",
        value: "en",
    },
    {
        text: "German",
        value: "de",
    },
];
// Only available on Android and Windows App
if (src_native.isAndroid || src_native.isWindows) {
    settingsIndex.push({
        text: "Idioten Deutsch",
        value: "idiotGERMAN",
    });
}


;// CONCATENATED MODULE: ./src/localization/index.ts



function checkLanguage() {
    const lang = src_native.getPref("language");
    if (lang === "false") {
        return "en";
    }
    else {
        return lang;
    }
}
//@ts-ignore
const string = new utils_LocalizedStrings(globals, {});
string.setLanguage(checkLanguage());


;// CONCATENATED MODULE: ./src/builders/PictureBuilder.tsx












class PictureBuilder extends react.Component {
    constructor(props) {
        super(props);
        this.buttonDesign = src_native.getPref("enableDarkmode") === "true" ? "lilaDarkMode" : "lila";
        this.imageStyle = {
            width: "100%",
            borderRadius: misc_tools.typeIF(src_native.getPref("fitImageToCard"), misc_tools.typeIF(src_native.getPref("displayDownload"), misc_tools.typeIF(src_native.getPref("removeTitle"), "0.25rem 0.25rem 0rem 0rem", "0rem 0rem 0rem 0rem"), misc_tools.typeIF(src_native.getPref("removeTitle"), "0.25rem 0.25rem 0.25rem 0.25rem", "0rem 0rem 0.25rem 0.25rem")), ".25rem"),
        };
        /**
         * To generate an id that refresh every page reload, to avoid duplicte ids
         */
        this.getID = this.props.note.replace(/\s/g, "") + this.id();
        this.getNote = this.props.note.charAt(0).toUpperCase() + this.props.note.slice(1);
        this.images = this.randomizer(this.props.note);
        this.handleClick = (e) => {
            this.setState({ isContextOpen: true });
        };
        this.handleCancel = () => {
            this.setState({ isContextOpen: false });
        };
        this.state = {
            isContextOpen: false,
            isImageError: false,
        };
        this.searchedCard = react.createRef();
        this.cardName = react.createRef();
    }
    componentDidUpdate() {
        const { searchState } = this.props;
        misc_tools.ref(this.cardName, (ref) => {
            if (searchState != "") {
                const search = ref.textContent || ref.innerText;
                if (search.toLowerCase().indexOf(searchState) > -1) {
                    misc_tools.ref(this.searchedCard, (ref) => {
                        ref.style.display = "";
                    });
                }
                else {
                    misc_tools.ref(this.searchedCard, (ref) => {
                        ref.style.display = "none";
                    });
                }
            }
            else {
                misc_tools.ref(this.searchedCard, (ref) => {
                    ref.style.display = "";
                });
            }
        });
    }
    id() {
        const { note } = this.props;
        var id = note.length;
        return this.makeUUID(id);
    }
    makeUUID(length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    randomizer(image) {
        src_native.fs.mkDir("images");
        try {
            if (src_native.isAndroid || src_native.isWindows) {
                axios_default().get("https://cdn.dergoogler.com/others/hentai-web/images/" + image.replace(/\s/g, "").toLowerCase() + ".json")
                    .then((res) => {
                    try {
                        const data = res.data;
                        src_native.fs.writeFile("images/" + image.replace(/\s/g, "").toLowerCase() + ".json", JSON.stringify(data));
                    }
                    catch (error) {
                        misc_Logger.error(error);
                    }
                });
            }
            else {
                axios_default().get("https://cdn.dergoogler.com/others/hentai-web/images/" + image.replace(/\s/g, "").toLowerCase() + ".json")
                    .then((res) => {
                    try {
                        const data = res.data;
                        src_native.setPref(image.replace(/\s/g, "").toLowerCase() + ".json", JSON.stringify(data));
                    }
                    catch (error) {
                        misc_Logger.error(error);
                    }
                });
            }
            const data = src_native.isAndroid || src_native.isWindows
                ? src_native.fs.readFile("images/" + image.replace(/\s/g, "").toLowerCase() + ".json", {
                    parse: { use: true, mode: "json" },
                })
                : // @ts-ignore
                    JSON.parse(src_native.getPref(image.replace(/\s/g, "").toLowerCase() + ".json"));
            return data[Math.floor(Math.random() * data.length)];
        }
        catch (error) {
            return "error";
        }
    }
    render() {
        const { note, source, isNew } = this.props;
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (() => {
                if (this.state.isImageError && src_native.getPref("hideCardWithImageError") === "true") {
                    return;
                }
                else {
                    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("div", Object.assign({ ref: this.searchedCard }, { children: (0,jsx_runtime.jsx)(react_onsenui.Card, Object.assign({ style: { padding: "0px", borderRadius: "8px", border: "0px" } }, { children: (0,jsx_runtime.jsxs)(Card/* default */.Z, Object.assign({ style: {
                                        padding: "0px",
                                        margin: "0px",
                                        boxShadow: "none",
                                        backgroundColor: "transparent",
                                    } }, { children: [(0,jsx_runtime.jsx)(Card/* default.Header */.Z.Header, Object.assign({ style: { display: misc_tools.typeIF(src_native.getPref("removeTitle"), "none", "block") } }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ style: {
                                                    textAlign: "center",
                                                    display: "inline-flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                } }, { children: [(0,jsx_runtime.jsx)("h4", Object.assign({ style: {
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "left",
                                                            alignItems: "center",
                                                        }, ref: this.cardName }, { children: this.getNote }), void 0), (0,jsx_runtime.jsx)(react_onsenui.Button, Object.assign({ onClick: this.handleClick, style: {
                                                            textAlign: "center",
                                                            display: misc_tools.typeIF(src_native.getPref("displayDownload"), "flex", "none"),
                                                            justifyContent: "center",
                                                            borderRadius: "8px",
                                                        } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "more_horiz", size: "18", ignoreDarkmode: true }, void 0) }), void 0)] }), void 0) }), void 0), (0,jsx_runtime.jsx)(Card/* default.Body */.Z.Body, Object.assign({ style: {
                                                padding: misc_tools.typeIF(src_native.getPref("fitImageToCard"), "0px", ""),
                                                display: "flex",
                                                justifyContent: "center",
                                                flexDirection: "column",
                                            } }, { children: (0,jsx_runtime.jsx)("blockquote", Object.assign({ className: "blockquote mb-0" }, { children: (0,jsx_runtime.jsxs)("p", { children: [(() => {
                                                            if (this.state.isImageError) {
                                                                return ((0,jsx_runtime.jsxs)("span", { children: ["The ", (0,jsx_runtime.jsx)("strong", { children: this.getNote }, void 0), " image was not found"] }, void 0));
                                                            }
                                                            else {
                                                                return ((0,jsx_runtime.jsx)(components_Gesture, Object.assign({ event: "hold", callback: this.handleClick }, { children: (0,jsx_runtime.jsx)("img", { id: this.getID, src: this.images, alt: this.getNote, onDoubleClick: this.handleClick, onError: () => {
                                                                            this.setState({ isImageError: true });
                                                                        }, style: this.imageStyle }, void 0) }), void 0));
                                                            }
                                                        })(), (0,jsx_runtime.jsx)(builders_ListDialogBuilder, { options: {
                                                                onCancel: this.handleCancel,
                                                                isOpen: this.state.isContextOpen,
                                                                modifier: src_native.checkPlatformForBorderStyle,
                                                            }, data: [
                                                                {
                                                                    title: this.getNote + "'s options",
                                                                    content: [
                                                                        {
                                                                            text: string.viewImageInBrowser,
                                                                            type: "",
                                                                            icon: "open_in_browser",
                                                                            onClick: () => {
                                                                                src_native.open(source);
                                                                                this.handleCancel();
                                                                            },
                                                                        },
                                                                        {
                                                                            text: string.copyLink,
                                                                            type: "",
                                                                            icon: "copy",
                                                                            onClick: () => {
                                                                                src_native.copyClipborad(source);
                                                                                this.handleCancel();
                                                                            },
                                                                        },
                                                                        {
                                                                            text: string.viewImageSource,
                                                                            type: "",
                                                                            icon: "link",
                                                                            onClick: () => {
                                                                                src_native.open(`https://github.com/DerGoogler/cdn/blob/master/others/hentai-web/images/${note
                                                                                    .toLowerCase()
                                                                                    .replace(/ /g, "")}.json`);
                                                                                this.handleCancel();
                                                                            },
                                                                        },
                                                                        {
                                                                            text: string.download,
                                                                            type: "",
                                                                            icon: "download",
                                                                            onClick: () => {
                                                                                src_native.downloadPicture(source, this.getID, this.getID);
                                                                                this.handleCancel();
                                                                            },
                                                                        },
                                                                        {
                                                                            text: string.cancel,
                                                                            type: "",
                                                                            icon: "close",
                                                                            modifier: src_native.checkPlatformForBorderStyle,
                                                                            onClick: this.handleCancel,
                                                                        },
                                                                    ],
                                                                },
                                                            ] }, void 0)] }, void 0) }), void 0) }), void 0)] }), this.getID) }), void 0) }), void 0) }, void 0));
                }
            })() }, void 0));
    }
}
/* harmony default export */ const builders_PictureBuilder = (PictureBuilder);

;// CONCATENATED MODULE: ./src/components/AnimeTab.tsx



class AnimeTab extends react.Component {
    render() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, { children: (0,jsx_runtime.jsx)("section", { children: (0,jsx_runtime.jsx)("span", { children: this.props.content }, void 0) }, void 0) }, void 0));
    }
}
/* harmony default export */ const components_AnimeTab = (AnimeTab);

;// CONCATENATED MODULE: ./src/builders/TabbarBuilder.tsx



/**
 * Builds an Onsen UI Tabbbar in JSON format
 * @param sections
 * @returns {Object}
 */
function TabbbarBuilder(sections) {
    return sections.map((item) => {
        return {
            content: (0,jsx_runtime.jsx)(components_AnimeTab, { content: item.content }, item.label),
            tab: (0,jsx_runtime.jsx)(react_onsenui.Tab, { label: item.label }, item.label),
        };
    });
}
/* harmony default export */ const TabbarBuilder = (TabbbarBuilder);

;// CONCATENATED MODULE: ./src/builders/ToolbarBuilder.tsx






class ToolbarBuilder extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            icon: "fullscreen",
        };
    }
    render() {
        const { title, onBackButton, addToolbarButton, addToolbarButtonPosition, hasWindowsButtons } = this.props;
        return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)("div", Object.assign({ className: "left" }, { children: [onBackButton ? ((0,jsx_runtime.jsx)(react_onsenui.BackButton
                        // @ts-ignore
                        , { 
                            // @ts-ignore
                            onClick: onBackButton }, void 0)) : null, (() => {
                            if (addToolbarButtonPosition === "left") {
                                return addToolbarButton;
                            }
                            else {
                                return;
                            }
                        })()] }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "center drag--windows" }, { children: title }), void 0), (0,jsx_runtime.jsxs)("div", Object.assign({ className: "right" }, { children: [(() => {
                            if (addToolbarButtonPosition === "right") {
                                return addToolbarButton;
                            }
                            else {
                                return;
                            }
                        })(), (() => {
                            if (src_native.getPref("electron.enableFrame") === "false") {
                                if (hasWindowsButtons) {
                                    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, Object.assign({ modifier: "windowsNormal paddingFIX", style: {
                                                    display: misc_tools.typeIF(src_native.userAgentEqualWindows(true), "", "none"),
                                                }, onClick: () => {
                                                    window.Windows.minimize();
                                                } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "remove", size: "24", ignoreDarkmode: true }, void 0) }), void 0), (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, Object.assign({ modifier: "windowsNormal paddingFIX", disabled: misc_tools.typeIF(src_native.getPref("electron.enableFullscreen"), true, false), style: {
                                                    display: misc_tools.typeIF(src_native.userAgentEqualWindows(true), "", "none"),
                                                }, onClick: () => {
                                                    if (window.Windows.isMaximized()) {
                                                        window.Windows.unmaximize();
                                                        window.Windows.setWindowSize(Number(src_native.getPref("electron.windowSize.width")), Number(src_native.getPref("electron.windowSize.height")));
                                                        this.setState({ icon: "fullscreen" });
                                                    }
                                                    else {
                                                        window.Windows.maximize();
                                                        this.setState({ icon: "close_fullscreen" });
                                                    }
                                                } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: this.state.icon, size: "24", ignoreDarkmode: true }, void 0) }), void 0), (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, Object.assign({ modifier: "windowsClose paddingFIX", style: {
                                                    display: misc_tools.typeIF(src_native.userAgentEqualWindows(true), "", "none"),
                                                }, onClick: () => {
                                                    src_native.close();
                                                } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "close", size: "24", ignoreDarkmode: true }, void 0) }), void 0)] }, void 0));
                                }
                                else {
                                    return;
                                }
                            }
                            else {
                                return;
                            }
                        })()] }), void 0)] }, void 0));
    }
}
/* harmony default export */ const builders_ToolbarBuilder = (ToolbarBuilder);

;// CONCATENATED MODULE: ./src/builders/index.ts








;// CONCATENATED MODULE: ./src/components/ContentBody.tsx





/**
 * ContentBody is an optional component, to make the view better on desktop
 */
class ContentBody extends react.Component {
    constructor() {
        super(...arguments);
        this.stlye = {
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            minWidth: "200px",
            maxWidth: "580px",
            margin: "0px auto",
            padding: src_native.isWindows || lib/* isMobile */.tq ? "" : "45px",
        };
    }
    checkDevice(designWindows, designAndroid) {
        if (window.navigator.userAgent !== misc_config.options.userAgent) {
            return designWindows;
        }
        else {
            return designAndroid;
        }
    }
    render() {
        const { className } = this.props;
        return ((0,jsx_runtime.jsx)("div", Object.assign({ className: className === "markdownBody"
                ? src_native.getPref("enableDarkmode") === "true"
                    ? "markdown-body-dark"
                    : "markdown-body-light"
                : className, style: this.checkDevice({ padding: src_native.isWindows || lib/* isMobile */.tq ? "" : "16px" }, {}) }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ style: this.checkDevice(this.stlye, {}) }, { children: this.props.children }), void 0) }), void 0));
    }
}
/* harmony default export */ const components_ContentBody = (ContentBody);

;// CONCATENATED MODULE: ./src/components/AnimeContent.tsx








class AnimeContent extends react.Component {
    constructor(props) {
        super(props);
        /*
        public componentDidMount() {
          tools.ref(this.searchBar, (ref: SearchInput) => {
            ref.addEventListener('keydown', (event: KeyboardEvent) => {
              if (event.keyCode === 13) {
                console.log("Enter")
              }
            });
          })
        } */
        this.filter = (e) => {
            this.setState({ search: e.target.value.toLowerCase() });
        };
        this.triggerSearch = () => {
            const { currentSerachText, searchButtonDisabled, search } = this.state;
            this.setState({ search: currentSerachText });
        };
        this.render = () => {
            const { currentSerachText, searchButtonDisabled, search } = this.state;
            const listItems = this.props.data.map((item) => ((0,jsx_runtime.jsx)(builders_PictureBuilder, { searchState: search, source: item, note: item }, item.toString())));
            return ((0,jsx_runtime.jsx)(components_ContentBody, Object.assign({ className: "Anime-Content" }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ style: {
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        padding: "0px",
                        paddingBottom: "0px",
                        flexDirection: "column",
                    } }, { children: [(0,jsx_runtime.jsxs)("div", Object.assign({ style: {
                                textAlign: "center",
                                display: src_native.getPref("hideSearchbar") === "true" ? "none" : "inline-flex",
                                justifyContent: "center",
                                padding: "8px",
                                paddingBottom: "0px",
                            } }, { children: [(0,jsx_runtime.jsx)(react_onsenui.SearchInput
                                // @ts-ignore
                                , { 
                                    // @ts-ignore
                                    placeholder: `${string.search} ${this.props.name}`, ref: this.searchBar, style: {
                                        borderRadius: "8px",
                                        width: "100%",
                                        marginRight: "4px",
                                        backgroundColor: src_native.getPref("enableDarkmode") === "true" ? "#1F1F1F" : "transparent",
                                    }, onChange: this.filter }, void 0), (0,jsx_runtime.jsx)(react_onsenui.Button, Object.assign({ onClick: this.triggerSearch, style: {
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginLeft: "4px",
                                        borderRadius: "8px",
                                    } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "search", size: "24", ignoreDarkmode: true }, void 0) }), void 0)] }), void 0), (0,jsx_runtime.jsx)(react_onsenui.List, { children: listItems }, void 0)] }), void 0) }), void 0));
        };
        this.state = {
            search: "",
            currentSerachText: "",
            searchButtonDisabled: true,
        };
        this.searchBar = react.createRef();
    }
}
/* harmony default export */ const components_AnimeContent = (AnimeContent);

// EXTERNAL MODULE: ./node_modules/markdown-to-jsx/dist/index.modern.js
var index_modern = __webpack_require__(6243);
// EXTERNAL MODULE: ./node_modules/highlight.js/es/index.js
var es = __webpack_require__(637);
;// CONCATENATED MODULE: ./src/components/Video/index.tsx




class Video extends react.Component {
    render() {
        const { src, type, controls, noSupportText, style, poster } = this.props;
        const Style = {
            width: "100%",
            height: misc_tools.typeIF(lib/* isDesktop */.nI, "445px", "181.500px"),
            padding: "0px",
            margin: "0px",
        };
        if (type === "video/youtube") {
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("iframe", { className: "Video--Custom card", style: misc_tools.typeCheck(style, Style), src: `https://www.youtube.com/embed/${src.replace("https://www.youtube.com/watch?v=", "")}` }, void 0) }, void 0));
        }
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)("video", Object.assign({ className: "Video--Custom card", style: misc_tools.typeCheck(style, Style), controls: misc_tools.typeCheck(controls, true), poster: poster }, { children: [(0,jsx_runtime.jsx)("source", { src: src, type: misc_tools.typeCheck(type, "video/mp4") }, void 0), misc_tools.typeCheck(noSupportText, "Your browser does not support HTML video.")] }), void 0) }, void 0));
    }
}
/* harmony default export */ const components_Video = (Video);

;// CONCATENATED MODULE: ./src/components/Center/index.tsx


class Center extends react.Component {
    render() {
        const { children, style } = this.props;
        return ((0,jsx_runtime.jsx)("span", Object.assign({ style: style }, { children: (0,jsx_runtime.jsx)("span", Object.assign({ style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: children }), void 0) }), void 0));
    }
}
/* harmony default export */ const components_Center = (Center);

;// CONCATENATED MODULE: ./src/components/DiscordWidget/index.tsx



class DiscordWidget extends react.Component {
    render() {
        const { token, width, height, theme } = this.props;
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("iframe", { className: "DiscordWidget--Custom card", style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px",
                }, src: "https://discord.com/widget?id=" +
                    misc_tools.typeCheck(token, "753360232515764255") +
                    " &theme=" +
                    misc_tools.typeCheck(theme, "dark"), width: misc_tools.typeCheck(width, 350), height: misc_tools.typeCheck(height, 500), allowTransparency: true, frameBorder: "0", sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" }, void 0) }, void 0));
    }
}
/* harmony default export */ const components_DiscordWidget = (DiscordWidget);

;// CONCATENATED MODULE: ./src/components/Font/index.tsx


class Font extends react.Component {
    render() {
        const { color, children, style } = this.props;
        return ((0,jsx_runtime.jsx)("span", Object.assign({ style: style }, { children: (0,jsx_runtime.jsx)("span", Object.assign({ style: { color: color } }, { children: children }), void 0) }), void 0));
    }
}
/* harmony default export */ const components_Font = (Font);

;// CONCATENATED MODULE: ./src/components/HighlightMarkdown.tsx









// import "highlight.js/styles/atom-one-dark.css";
class HighlightedMarkdown extends react.Component {
    constructor(props) {
        super(props);
        this.rootRef = react.createRef();
    }
    componentDidMount() {
        misc_tools.ref(this.rootRef, (ref) => {
            ref.querySelectorAll("pre code").forEach((block) => {
                es/* default.highlightElement */.Z.highlightElement(block);
            });
        });
    }
    render() {
        return ((0,jsx_runtime.jsx)("div", Object.assign({ ref: this.rootRef }, { children: (0,jsx_runtime.jsx)(index_modern/* default */.Z, Object.assign({ options: {
                    overrides: {
                        video: {
                            component: components_Video,
                        },
                        center: {
                            component: components_Center,
                        },
                        font: {
                            component: components_Font,
                        },
                        discordwidget: {
                            component: components_DiscordWidget,
                        },
                    },
                } }, { children: this.props.children }), void 0) }), void 0));
    }
}


;// CONCATENATED MODULE: ./src/components/News.tsx









class News extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        // Use no slash at the start
        axios_default().get(window.location.href.replace(/(\?(.*?)=(.*)|\?)/gm, "") + "misc/news.yaml").then((res) => {
            this.setState({ data: js_yaml/* default.load */.ZP.load(res.data, { json: true }) });
        });
    }
    render() {
        /**
         * To load for every object an own AnimePicture from `data.ts`
         */
        const listItems = this.state.data.map((item) => ((0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ expandable: true }, { children: [item.title, (0,jsx_runtime.jsx)("div", Object.assign({ className: "expandable-content" }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: "markdown-body-" + misc_tools.typeIF(src_native.getPref("enableDarkmode"), "dark", "light") }, { children: (0,jsx_runtime.jsx)(HighlightedMarkdown, { children: item.msg }, void 0) }), void 0) }), void 0)] }), void 0)));
        return ((0,jsx_runtime.jsx)(components_ContentBody, { children: (0,jsx_runtime.jsx)(react_onsenui.List, { children: listItems }, void 0) }, void 0));
    }
}
/* harmony default export */ const components_News = (News);

;// CONCATENATED MODULE: ./src/dataPacks/images.ts
const images_images = {
    sfw: [
        "wallpaper",
        "mobilewallpaper",
        "sfwneko",
        "jahy",
        "slap",
        "lick",
        "pat",
        "punch",
        "kitsune",
        "hug",
        "kiss",
        "cry",
        "kemonomimi",
        "coffee",
        "holo",
        "kanna",
        "smug",
        "depression",
        "christmas",
        "legs",
        "trashgangartclub",
        "profilepicture",
    ],
    nsfw: [
        "ass",
        "bdsm",
        "cum",
        "creampie",
        "manga",
        "femdom",
        "hentai",
        "incest",
        "ero",
        "orgy",
        "elves",
        "panties",
        "cuckold",
        "blowjob",
        "boobjob",
        "foot",
        "pussy",
        "ahegao",
        "uniform",
        "gangbang",
        "hnt_gifs",
        "nsfwneko",
        "glasses",
        "tentacles",
        "thighs",
        "yuri",
        "zettairyouiki",
        "masturbation",
        "public",
        "nsfwmobilewallpaper",
        "nsfwchristmas",
    ],
};
/* harmony default export */ const dataPacks_images = (images_images);

;// CONCATENATED MODULE: ./src/views/MainActivity/index.tsx













class MainActivity extends react.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            if (src_native.isAndroid || src_native.isWindows) {
                misc_tools.ref("download-app", (e) => {
                    e.style.display = "none";
                    e.setAttribute("title", `Download the last ${package_namespaceObject.i8} Hentai Web version!`);
                });
                if (src_native.getPref("hideFAB") === "true") {
                    misc_tools.ref("fab-element", (element) => {
                        element.style.display = "none";
                    });
                }
            }
            misc_tools.ref("menu-click", (e) => {
                e.addEventListener("click", this.handleClick);
            });
            // Get changelog
            misc_tools.getMisc("changelog.yaml", (data) => {
                if (src_native.isAndroid || src_native.isWindows) {
                    if (data.version.toString() === src_native.version.get) {
                        console.log("Newst version installed");
                    }
                    else {
                        this.props.pushPage({
                            activity: ChangelogActvity,
                            key: "changelog",
                            changelog: {
                                version: data.version,
                                changes: data.changes,
                                package: {
                                    android: data.packages.android,
                                    windows: data.packages.windows,
                                },
                            },
                        });
                    }
                }
            });
        };
        this.handleClick = () => {
            this.setState({ isContextOpen: true });
        };
        this.handleCancel = () => {
            this.setState({ isContextOpen: false });
        };
        this.renderTabs = () => {
            if (src_native.getPref("disableNSFW") === "true" || src_native.isInstagram || src_native.isFacebook) {
                return TabbarBuilder([
                    {
                        label: "SFW",
                        content: (0,jsx_runtime.jsx)(components_AnimeContent, { name: "SFW", data: this.state.sfw }, void 0),
                    },
                    {
                        label: "NEWS",
                        content: (0,jsx_runtime.jsx)(components_News, {}, void 0),
                    },
                ]);
            }
            else {
                return TabbarBuilder([
                    {
                        label: "SFW",
                        content: (0,jsx_runtime.jsx)(components_AnimeContent, { name: "SFW", data: this.state.sfw }, void 0),
                    },
                    {
                        label: "NSFW",
                        content: (0,jsx_runtime.jsx)(components_AnimeContent, { name: "NSFW", data: this.state.nsfw }, void 0),
                    },
                    {
                        label: "NEWS",
                        content: (0,jsx_runtime.jsx)(components_News, {}, void 0),
                    },
                ]);
            }
        };
        this.render = () => {
            return ((0,jsx_runtime.jsxs)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: [(0,jsx_runtime.jsx)(react_onsenui.Tabbar, { swipeable: misc_tools.stringToBoolean(src_native.getPref("enableSwipeBetweenTabs")), position: src_native.getPref("enableBottomTabbar") === "true" ? "bottom" : "top", index: this.tabIndexChecker(), 
                        // @ts-ignore
                        onPreChange: (event) => {
                            event.preventDefault(); // For newer Onsen UI version
                            if (event.index != this.tabIndexChecker) {
                                src_native.setPref("tabIndex", event.index);
                            }
                        }, renderTabs: this.renderTabs }, void 0), (0,jsx_runtime.jsx)(builders_ListDialogBuilder, { options: {
                            onCancel: this.handleCancel,
                            isOpen: this.state.isContextOpen,
                            modifier: src_native.checkPlatformForBorderStyle,
                        }, data: [
                            {
                                title: "Menu",
                                content: [
                                    {
                                        text: string.settings,
                                        type: "",
                                        icon: "settings",
                                        onClick: () => {
                                            this.props.pushPage({
                                                activity: views_SettingsActivity,
                                                key: "settings",
                                            });
                                            this.handleCancel();
                                        },
                                    },
                                    {
                                        text: string.licenses,
                                        type: "",
                                        icon: "article",
                                        onClick: () => {
                                            this.props.pushPage({
                                                activity: views_TextFetchActivity,
                                                key: "licenses",
                                                textFetch: {
                                                    title: string.licenses,
                                                    url: "https://cdn.dergoogler.com/others/hentai-web/vendor.bundle.js.LICENSE.txt",
                                                },
                                            });
                                            this.handleCancel();
                                        },
                                    },
                                    {
                                        text: "Plugins",
                                        type: "",
                                        icon: "extension",
                                        style: {
                                            display: (src_native.getPref("enablePluginTestting") && src_native.getPref("enableCustomScriptLoading")) === "true"
                                                ? ""
                                                : "none",
                                        },
                                        onClick: () => {
                                            this.props.pushPage({
                                                activity: PluginsActvity,
                                                key: "plugins",
                                            });
                                            this.handleCancel();
                                        },
                                    },
                                    {
                                        text: "Playground",
                                        type: "",
                                        icon: "code",
                                        style: {
                                            display: src_native.isAndroid || src_native.isWindows
                                                ? "none"
                                                : (src_native.getPref("enablePluginTestting") && src_native.getPref("enableCustomScriptLoading")) ===
                                                    "true"
                                                    ? ""
                                                    : "none",
                                        },
                                        onClick: () => {
                                            const getPlayground = src_native.getPref("playground");
                                            this.props.pushPage({
                                                activity: views_EditorActivity,
                                                key: "plugin-play-ground",
                                                extras: {
                                                    pluginName: "playground",
                                                    fileName: "index.js",
                                                    value: getPlayground === "false"
                                                        ? 'initFile((plugin) => {\r\n  console.log("Hello, world!")\r\n});\r\n'
                                                        : getPlayground,
                                                },
                                            });
                                            this.handleCancel();
                                        },
                                    },
                                    {
                                        text: "Make HWPlugin",
                                        type: "",
                                        icon: "code",
                                        style: { display: src_native.isAndroid || src_native.isWindows ? "" : "none" },
                                        onClick: () => {
                                            src_native.open("https://docs.dergoogler.com/HWPlugin");
                                            this.handleCancel();
                                        },
                                    },
                                    {
                                        text: "Open app path",
                                        type: "",
                                        icon: "android",
                                        style: { display: src_native.isWindows ? "" : "none" },
                                        onClick: () => {
                                            window.Windows.openPath(window.Windows.appGetPath("userData"));
                                        },
                                    },
                                    {
                                        text: "Privacy Policy",
                                        type: "",
                                        icon: "policy",
                                        onClick: () => {
                                            src_native.open("https://hw.dergoogler.com/tos/privacy-policy");
                                        },
                                    },
                                    {
                                        text: "Terms & Conditions",
                                        type: "",
                                        icon: "gavel",
                                        onClick: () => {
                                            src_native.open("https://hw.dergoogler.com/tos/terms-conditions");
                                        },
                                    },
                                    {
                                        text: string.cancel,
                                        type: "",
                                        icon: "close",
                                        modifier: src_native.checkPlatformForBorderStyle,
                                        onClick: this.handleCancel,
                                    },
                                ],
                            },
                        ] }, void 0)] }), void 0));
        };
        this.state = {
            isContextOpen: false,
            sfw: dataPacks_images.sfw,
            nsfw: dataPacks_images.nsfw,
        };
    }
    renderToolbar() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: "Hentai Web", hasWindowsButtons: true, addToolbarButton: (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, Object.assign({ id: "menu-click", onClick: this.handleClick }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "menu", size: "24", ignoreDarkmode: true }, void 0) }), void 0) }, void 0), addToolbarButtonPosition: "left" }, void 0) }, void 0));
    }
    tabIndexChecker() {
        var get = src_native.getPref("tabIndex");
        if (get === undefined || get === null || get === "") {
            return 0;
        }
        else {
            if (src_native.getPref("saveLastUsedTab") === "true") {
                return Number(get);
            }
            else {
                return 0;
            }
        }
    }
}
/* harmony default export */ const views_MainActivity = (MainActivity);

;// CONCATENATED MODULE: ./src/views/LoginActivity/index.tsx







class LoginActivity extends react.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            if (this.state.username === src_native.getBuildMANUFACTURER && this.state.password === src_native.getMODEL) {
                src_native.setPref("loggedIn", "true");
                src_native.reload();
            }
            else {
                onsenui_default().notification.alert("Username or password incorrect!");
            }
        };
        this.handleUsernameChange = (e) => {
            this.setState({ username: e.target.value.toUpperCase() });
        };
        this.handlePasswordChange = (e) => {
            this.setState({ password: e.target.value.toUpperCase() });
        };
        this.state = { username: "", password: "" };
    }
    componentDidMount() {
        src_native.android.setStatusbarColor("#4a148c");
        src_native.userAgentEqualWindows(true)
            ? window.Windows.notification("Welcome to HW", "The app includes nsfw content.")
            : null;
    }
    renderToolbar() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, Object.assign({ modifier: "noshadow" }, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: string.signIn, hasWindowsButtons: true }, void 0) }), void 0));
    }
    render() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)("section", Object.assign({ className: "drag--windows", style: {
                    textAlign: "center",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4a148c",
                } }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ className: "noDrag--windows", style: {
                        backgroundColor: "white",
                        padding: "16px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),0 3px 1px -2px rgba(0, 0, 0, 0.2)",
                    } }, { children: [(0,jsx_runtime.jsx)("p", Object.assign({ style: {
                                fontSize: "xx-large",
                                fontVariant: "all-small-caps",
                            } }, { children: "Login" }), void 0), (0,jsx_runtime.jsx)("p", { children: (0,jsx_runtime.jsx)(react_onsenui.Input, { value: this.state.username, onChange: this.handleUsernameChange, modifier: "underbar", float: true, placeholder: src_native.isAndroid ? string.MANUFACTURER : src_native.isWindows ? "type" : "appCodeName" }, void 0) }, void 0), (0,jsx_runtime.jsx)("p", { children: (0,jsx_runtime.jsx)(react_onsenui.Input, { value: this.state.password, onChange: this.handlePasswordChange, modifier: "underbar", float: true, placeholder: src_native.isAndroid ? string.MODEL : "platform" }, void 0) }, void 0), (0,jsx_runtime.jsx)("p", { children: (0,jsx_runtime.jsx)(react_onsenui.Button, Object.assign({ onClick: this.handleClick }, { children: "sign-in" }), void 0) }, void 0), (0,jsx_runtime.jsx)("p", { children: (0,jsx_runtime.jsx)("a", Object.assign({ style: { textDecoration: "none" }, href: string.howToLoginLink }, { children: string.howToLogin }), void 0) }, void 0)] }), void 0) }), void 0) }), void 0));
    }
}
/* harmony default export */ const views_LoginActivity = (LoginActivity);

;// CONCATENATED MODULE: ./src/views/InitActivity/index.tsx








class InitActivity extends react.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            src_native.electron.discordRPC("Viewing images");
            let pas, customPlugins = null;
            if (src_native.isAndroid || src_native.isWindows) {
                if (src_native.fs.isFileExist("plugins.yaml")) {
                    pas = src_native.fs.readFile("plugins.yaml", { parse: { use: true, mode: "yaml" } });
                    customPlugins = pas.map((item) => misc_tools.PluginInitial(item));
                }
            }
            else {
                const getPlaygroundCode = src_native.getPref("playground");
                src_native.eval(getPlaygroundCode, {
                    plugin: {
                        name: "playground",
                    },
                });
            }
            window.addEventListener("load", this.windowLoadPush);
            if (src_native.isMobile) {
                window.addEventListener("contextmenu", this.removeContextMenuMobile);
            }
        };
        this.componentWillUnmount = () => {
            window.removeEventListener("load", this.windowLoadPush);
            if (src_native.isMobile) {
                window.removeEventListener("contextmenu", this.removeContextMenuMobile);
            }
        };
        this.removeContextMenuMobile = (e) => {
            e.preventDefault();
        };
        this.windowLoadPush = () => {
            if (typeof history.pushState === "function") {
                history.pushState("jibberish", "", null);
                window.onpopstate = () => {
                    history.pushState("newjibberish", "", null);
                    if (this.state.currentPage === "main") {
                        src_native.close();
                    }
                    else {
                        this.popPage();
                    }
                };
            }
            else {
                var ignoreHashChange = true;
                window.onhashchange = () => {
                    if (!ignoreHashChange) {
                        ignoreHashChange = true;
                        window.location.hash = Math.random().toString();
                    }
                    else {
                        ignoreHashChange = false;
                    }
                };
            }
        };
        this.pushPage = (props) => {
            const route = {
                component: props.activity,
                props: {
                    key: props.key,
                    extras: props.extras,
                    textFetch: props.textFetch,
                    pluginAbout: props.pluginAbout,
                    changelog: props.changelog,
                    popPage: () => this.popPage(),
                    pushPage: (...args) => this.pushPage.apply(null, args),
                },
            };
            let routeConfig = this.state.routeConfig;
            routeConfig = react_onsenui.RouterUtil.push({
                routeConfig,
                route,
            });
            this.setState({ routeConfig });
            this.setState({ currentPage: props.key });
        };
        this.popPage = (options = {}) => {
            let routeConfig = this.state.routeConfig;
            routeConfig = react_onsenui.RouterUtil.pop({
                routeConfig,
                options: Object.assign(Object.assign({}, options), { animationOptions: {
                        duration: 0.2,
                        timing: "ease-in",
                        animation: "fade-ios",
                    } }),
            });
            this.setState({ routeConfig });
            this.setState({ currentPage: "main" });
        };
        this.onPostPush = () => {
            const routeConfig = react_onsenui.RouterUtil.postPush(this.state.routeConfig);
            this.setState({ routeConfig });
        };
        this.onPostPop = () => {
            const routeConfig = react_onsenui.RouterUtil.postPop(this.state.routeConfig);
            this.setState({ routeConfig });
        };
        this.renderPage = (route) => {
            const props = route.props || {};
            return (0,jsx_runtime.jsx)(route.component, Object.assign({}, props), void 0);
        };
        const doLogin = () => {
            if (src_native.getPref("loggedIn") === "true" || src_native.isInstagram || src_native.isFacebook) {
                return views_MainActivity;
            }
            else {
                return views_LoginActivity;
            }
        };
        const routeConfig = react_onsenui.RouterUtil.init([
            {
                component: doLogin(),
                props: {
                    key: "main",
                    pushPage: (...args) => this.pushPage.apply(null, args),
                },
            },
        ]);
        this.state = {
            routeConfig,
            currentPage: "main",
        };
    }
    componentDidUpdate() {
        new src().styleInit();
    }
    renderToolbar() {
        return ((0,jsx_runtime.jsxs)(react_onsenui.Toolbar, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(react_onsenui.BackButton, {}, void 0) }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "center" }, { children: "Stateless Navigator" }), void 0)] }, void 0));
    }
    render() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, { children: (0,jsx_runtime.jsx)(react_onsenui.RouterNavigator, { swipeable: true, 
                // @ts-ignore
                swipePop: (options) => this.popPage(options), routeConfig: this.state.routeConfig, renderPage: this.renderPage, onPostPush: () => this.onPostPush(), onPostPop: () => this.onPostPop() }, void 0) }, void 0));
    }
}
/* harmony default export */ const views_InitActivity = (InitActivity);

;// CONCATENATED MODULE: ./src/views/ChangelogActvity/index.tsx







class ChangelogActivity extends react.Component {
    constructor() {
        super(...arguments);
        this.renderToolbar = () => {
            return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: "Changelog " + this.props.changelog.version, onBackButton: this.props.popPage, hasWindowsButtons: true, hasDarkMode: true }, void 0) }, void 0));
        };
        this.render = () => {
            return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(components_ContentBody, Object.assign({ className: "markdownBody" }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ style: {
                            padding: "16px",
                        } }, { children: [(0,jsx_runtime.jsx)(HighlightedMarkdown, { children: this.props.changelog.changes }, void 0), (0,jsx_runtime.jsx)(react_onsenui.Button, Object.assign({ style: { borderRadius: "8px" }, modifier: "large", onClick: () => {
                                    if (src_native.isAndroid) {
                                        src_native.open(this.props.changelog.package.android);
                                    }
                                    else if (src_native.isWindows) {
                                        src_native.open(this.props.changelog.package.windows);
                                    }
                                    else {
                                        console.log("");
                                    }
                                } }, { children: "Download" }), void 0)] }), void 0) }), void 0) }), void 0));
        };
    }
    componentDidMount() {
        console.log(this.props.changelog.package.android);
    }
}
/* harmony default export */ const ChangelogActvity = (ChangelogActivity);

;// CONCATENATED MODULE: ./src/views/plugin/PluginAboutActivity/index.tsx









class PluginAboutActivity extends react.Component {
    constructor() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super(...arguments);
        this.getPluginConfig = src_native.fs.readFile("plugins/" + this.props.pluginAbout.name + "/plugin.yaml", {
            parse: { use: true, mode: "yaml" },
        });
        this.author = (_b = (_a = this.getPluginConfig) === null || _a === void 0 ? void 0 : _a.package) === null || _b === void 0 ? void 0 : _b.author;
        this.version = (_d = (_c = this.getPluginConfig) === null || _c === void 0 ? void 0 : _c.package) === null || _d === void 0 ? void 0 : _d.version;
        this.language = (_f = (_e = this.getPluginConfig) === null || _e === void 0 ? void 0 : _e.package) === null || _f === void 0 ? void 0 : _f.language;
        this.description = (_h = (_g = this.getPluginConfig) === null || _g === void 0 ? void 0 : _g.package) === null || _h === void 0 ? void 0 : _h.description;
        this.renderToolbar = () => {
            return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: "About " + this.props.pluginAbout.name, onBackButton: this.props.popPage, hasWindowsButtons: true, hasDarkMode: true }, void 0) }, void 0));
        };
    }
    render() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(components_ContentBody, { children: (0,jsx_runtime.jsxs)(react_onsenui.List, { children: [(0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ tappable: true }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "account_circle", size: "24" }, void 0) }), void 0), (0,jsx_runtime.jsxs)("div", Object.assign({ className: "center" }, { children: ["Author: ", this.author === misc_tools.undefined ? "None" : this.author] }), void 0)] }), void 0), (0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ tappable: true }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "fact_check", size: "24" }, void 0) }), void 0), (0,jsx_runtime.jsxs)("div", Object.assign({ className: "center" }, { children: ["Version: ", this.version === misc_tools.undefined ? "None" : this.version] }), void 0)] }), void 0), (0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ tappable: true }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "language", size: "24" }, void 0) }), void 0), (0,jsx_runtime.jsxs)("div", Object.assign({ className: "center" }, { children: ["Language: ", this.language === misc_tools.undefined ? "None" : this.language] }), void 0)] }), void 0), (0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ expandable: true, tappable: true }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "description", size: "24" }, void 0) }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "center" }, { children: "Description" }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "expandable-content" }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: "markdown-body-" + misc_tools.typeIF(src_native.getPref("enableDarkmode"), "dark", "light") }, { children: (0,jsx_runtime.jsx)(HighlightedMarkdown, { children: this.description === misc_tools.undefined ? "None" : this.description }, void 0) }), void 0) }), void 0)] }), void 0)] }, void 0) }, void 0) }), this.props.pluginAbout.name + "-about"));
    }
}
/* harmony default export */ const plugin_PluginAboutActivity = (PluginAboutActivity);

;// CONCATENATED MODULE: ./src/dataPacks/settings.tsx





const settings = [
    {
        title: string.appearance,
        content: [
            {
                key: "enableDarkmode",
                type: "switch",
                icon: "dark_mode",
                text: string.enableDarkmode,
            },
            {
                key: "hideSearchbar",
                icon: "search",
                type: "switch",
                text: string.hideSearchbar,
            },
            {
                key: "enableBottomTabbar",
                icon: "table_chart",
                type: "switch",
                text: string.placeTabberOnBottom,
                helper: {
                    text: "This settings requires not app reload/start",
                },
            },
            {
                key: "language",
                icon: "language",
                type: "select",
                text: string.language,
                selectDefaultValue: "en",
                selectValue: settingsIndex,
                callback: (keepDefaultFuntion) => {
                    if (src_native.confirm("Do you change the language?")) {
                        src_native.reload();
                        keepDefaultFuntion;
                    }
                    else {
                        return;
                    }
                },
            },
        ],
    },
    {
        title: string.card,
        content: [
            {
                key: "fitImageToCard",
                type: "switch",
                icon: "fit_screen",
                text: string.fitImageToCard,
            },
            {
                key: "displayDownload",
                icon: "file_download",
                type: "switch",
                text: string.displayMoreButton,
            },
            {
                key: "removeTitle",
                icon: "title",
                type: "switch",
                text: string.removeTitle,
            },
            {
                key: "hideCardWithImageError",
                icon: "error",
                type: "switch",
                text: string.hideCardWithImageError,
            },
        ],
    },
    {
        title: string.security,
        content: [
            {
                key: "alwaysLogin",
                type: "switch",
                icon: "login",
                text: string.alwaysLogin,
                disabled: src_native.isInstagram || src_native.isFacebook,
            },
            {
                key: "enableCustomScriptLoading",
                icon: "description",
                type: "switch",
                disabled: src_native.isInstagram || src_native.isFacebook,
                text: "Custom Scripting",
            },
            {
                key: "useFingerPrintToLogin",
                icon: "fingerprint",
                text: string.useFingerPrintToLogin,
                type: "switch",
                style: {
                    display: src_native.isWindows || !src_native.android.isHardwareAvailable() ? "none" : "",
                },
                disabled: misc_tools.typeIF(src_native.android.hasBiometricEnrolled(), false, true),
            },
            {
                key: "erudaEnabled",
                icon: "logo_dev",
                text: string.erudaEnabled,
                type: "switch",
                style: {
                    display: src_native.isAndroid ? "" : "none",
                },
            },
        ],
    },
    {
        title: string.others,
        content: [
            {
                key: "enableSwipeBetweenTabs",
                icon: "swipe",
                type: "switch",
                text: string.enableSwipeBetweenTabs,
            },
            {
                key: "saveLastUsedTab",
                icon: "save",
                type: "switch",
                text: string.saveLastUsedTab,
            },
            {
                key: "enablePluginTestting",
                icon: "code",
                type: "switch",
                style: { display: src_native.isAndroid || src_native.isWindows ? "none" : "" },
                text: "Enable plugin testing",
                disabled: src_native.isInstagram || src_native.isFacebook,
            },
            {
                key: "disableNSFW",
                icon: "accessible_forward",
                type: "switch",
                text: string.disableNSFWcontent,
                disabled: src_native.isInstagram || src_native.isFacebook,
            },
        ],
    },
    {
        title: "Electron",
        className: "electron",
        style: { display: src_native.isWindows ? "" : "none" },
        content: [
            {
                key: "electron.screenSizeInUse",
                type: "select",
                icon: "aspect_ratio",
                text: string.electronWindowSize,
                selectDefaultValue: "<width>375</width><height>812</height>",
                callback: (e, key) => {
                    const keyWin = "electron.windowSize";
                    const regex = /<width>(.*?)<\/width><height>(.*?)<\/height>/gm;
                    const width = Number(e.target.value.replace(regex, "$1"));
                    const height = Number(e.target.value.replace(regex, "$2"));
                    onsenui_default().notification.confirm({
                        message: string.formatString(string.electronChangeWindowSizeDialogMessage, {
                            size: e.target.value.replace(regex, "$1x$2"),
                        }),
                        title: string.electronChangeWindowSizeDialogTitle,
                        buttonLabels: [string.yes, string.no],
                        animation: "default",
                        modifier: src_native.checkPlatformForBorderStyle,
                        primaryButtonIndex: 1,
                        cancelable: true,
                        callback: (index) => {
                            switch (index) {
                                case 0:
                                    window.Windows.setPref(keyWin + ".width", width);
                                    window.Windows.setPref(keyWin + ".height", height);
                                    window.Windows.setPref(key, e.target.value);
                                    window.Windows.setWindowSize(width, height);
                                    break;
                                default:
                                    e.target.value = window.Windows.getPref(key);
                                    break;
                            }
                        },
                    });
                },
                selectValue: [
                    {
                        text: "iPhone X",
                        value: "<width>375</width><height>812</height>",
                    },
                    {
                        text: "Surface Duo",
                        value: "<width>540</width><height>720</height>",
                    },
                    {
                        text: "Moto G4 / Galaxy S5",
                        value: "<width>360</width><height>640</height>",
                    },
                    {
                        text: "Pixel 2",
                        value: "<width>411</width><height>731</height>",
                    },
                    {
                        text: "Pixel 2 XL",
                        value: "<width>411</width><height>823</height>",
                    },
                    {
                        text: "Galaxy Fold",
                        value: "<width>280</width><height>653</height>",
                    },
                    {
                        text: "Nest Hub",
                        value: "<width>1024</width><height>600</height>",
                    },
                    {
                        text: "Nest Hub Max",
                        value: "<width>1280</width><height>800</height>",
                    },
                ],
            },
            {
                key: "electron.devTools",
                type: "switch",
                icon: "logo_dev",
                text: string.enableDevTools,
            },
            {
                key: "electron.alwaysOnTop",
                type: "switch",
                icon: "pan_tool",
                text: string.enableAlwaysOnTop,
                callback: (keepDefaultFuntion) => {
                    src_native.electron.notification("Restart", "Please restart the application");
                    keepDefaultFuntion;
                },
            },
            {
                key: "electron.hardDevice",
                icon: "desktop_windows",
                type: "select",
                text: string.hardDevice,
                selectDefaultValue: "C",
                selectValue: [
                    {
                        text: "A",
                        value: "A",
                    },
                    {
                        text: "B",
                        value: "B",
                    },
                    {
                        text: "C",
                        value: "C",
                    },
                    {
                        text: "D",
                        value: "D",
                    },
                    {
                        text: "E",
                        value: "E",
                    },
                    {
                        text: "F",
                        value: "F",
                    },
                    {
                        text: "G",
                        value: "G",
                    },
                    {
                        text: "H",
                        value: "H",
                    },
                    {
                        text: "I",
                        value: "I",
                    },
                    {
                        text: "J",
                        value: "J",
                    },
                    {
                        text: "K",
                        value: "K",
                    },
                    {
                        text: "L",
                        value: "L",
                    },
                    {
                        text: "M",
                        value: "M",
                    },
                    {
                        text: "N",
                        value: "N",
                    },
                    {
                        text: "O",
                        value: "O",
                    },
                    {
                        text: "P",
                        value: "P",
                    },
                    {
                        text: "Q",
                        value: "Q",
                    },
                    {
                        text: "R",
                        value: "R",
                    },
                    {
                        text: "S",
                        value: "S",
                    },
                    {
                        text: "T",
                        value: "T",
                    },
                    {
                        text: "U",
                        value: "U",
                    },
                    {
                        text: "V",
                        value: "V",
                    },
                    {
                        text: "W",
                        value: "W",
                    },
                    {
                        text: "X",
                        value: "X",
                    },
                    {
                        text: "Y",
                        value: "Y",
                    },
                    {
                        text: "Z",
                        value: "Z",
                    },
                ],
            },
            {
                key: "electron.disableDiscordRPC",
                type: "switch",
                icon: "discord",
                text: "Disable Discord RPC",
            },
            {
                key: "electron.rpcLogo",
                type: "select",
                icon: "discord",
                text: "Discord RPC Logo",
                selectDefaultValue: "hentaiweb__",
                selectValue: [
                    {
                        text: "Hentai Web",
                        value: "hentaiweb__",
                    },
                    {
                        text: "Bot Logo",
                        value: "bot_logo",
                    },
                    {
                        text: "Googler",
                        value: "googler",
                    },
                    {
                        text: "App Icon",
                        value: "ic_launcher",
                    },
                ],
            },
        ],
    },
    {
        title: "Android",
        className: "android",
        style: { display: src_native.isAndroid ? "" : "none" },
        content: [
            {
                key: "enableKeepScreenOn",
                type: "switch",
                icon: "visibility",
                text: string.enableKeepScreenOn,
            },
        ],
    },
];
/* harmony default export */ const dataPacks_settings = (settings);

;// CONCATENATED MODULE: ./src/views/SettingsActivity/index.tsx









class SettingsActivity extends react.Component {
    constructor() {
        super(...arguments);
        this.renderToolbar = () => {
            return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: string.settings, onBackButton: this.props.popPage, hasWindowsButtons: true, hasDarkMode: true }, void 0) }, void 0));
        };
    }
    render() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(components_ContentBody, { children: (0,jsx_runtime.jsx)(react_onsenui.List, { children: (0,jsx_runtime.jsx)(builders_ListViewBuilder, { isPlugin: false, pluginName: "", data: dataPacks_settings }, void 0) }, void 0) }, void 0) }), void 0));
    }
}
/* harmony default export */ const views_SettingsActivity = (SettingsActivity);

// EXTERNAL MODULE: ./node_modules/react-ace/lib/index.js
var react_ace_lib = __webpack_require__(8064);
// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/lib/es/index.js + 25 modules
var lib_es = __webpack_require__(5007);
;// CONCATENATED MODULE: ./src/views/EditorActivity/editorTheme.ts
const editorTheme = {
    inherit: true,
    base: "vs-dark",
    colors: {
        "activityBar.activeBorder": "#f78166",
        "activityBar.background": "#0d1117",
        "activityBar.border": "#30363d",
        "activityBar.foreground": "#c9d1d9",
        "activityBar.inactiveForeground": "#8b949e",
        "activityBarBadge.background": "#1f6feb",
        "activityBarBadge.foreground": "#f0f6fc",
        "badge.background": "#1f6feb",
        "badge.foreground": "#f0f6fc",
        "breadcrumb.activeSelectionForeground": "#8b949e",
        "breadcrumb.focusForeground": "#c9d1d9",
        "breadcrumb.foreground": "#8b949e",
        "breadcrumbPicker.background": "#161b22",
        "button.background": "#238636",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "#2ea043",
        "button.secondaryBackground": "#282e33",
        "button.secondaryForeground": "#c9d1d9",
        "button.secondaryHoverBackground": "#30363d",
        "checkbox.background": "#161b22",
        "checkbox.border": "#30363d",
        "debugToolBar.background": "#161b22",
        descriptionForeground: "#8b949e",
        "diffEditor.insertedTextBackground": "#2ea04326",
        "diffEditor.removedTextBackground": "#f8514926",
        "dropdown.background": "#161b22",
        "dropdown.border": "#30363d",
        "dropdown.foreground": "#c9d1d9",
        "dropdown.listBackground": "#161b22",
        "editor.background": "#0d1117",
        "editor.findMatchBackground": "#9e6a03",
        "editor.findMatchHighlightBackground": "#f2cc6080",
        "editor.focusedStackFrameHighlightBackground": "#2ea04366",
        "editor.foldBackground": "#6e76811a",
        "editor.foreground": "#c9d1d9",
        "editor.inactiveSelectionBackground": "#58a6ff12",
        "editor.lineHighlightBackground": "#6e76811a",
        "editor.linkedEditingBackground": "#58a6ff12",
        "editor.selectionBackground": "#58a6ff33",
        "editor.selectionHighlightBackground": "#3fb95040",
        "editor.stackFrameHighlightBackground": "#bb800966",
        "editor.wordHighlightBackground": "#6e768180",
        "editor.wordHighlightBorder": "#6e768199",
        "editor.wordHighlightStrongBackground": "#6e76814d",
        "editor.wordHighlightStrongBorder": "#6e768199",
        "editorBracketMatch.background": "#3fb95040",
        "editorBracketMatch.border": "#3fb95099",
        "editorCursor.foreground": "#58a6ff",
        "editorGroup.border": "#30363d",
        "editorGroupHeader.tabsBackground": "#010409",
        "editorGroupHeader.tabsBorder": "#30363d",
        "editorGutter.addedBackground": "#2ea04366",
        "editorGutter.deletedBackground": "#f8514966",
        "editorGutter.modifiedBackground": "#bb800966",
        "editorIndentGuide.activeBackground": "#30363d",
        "editorIndentGuide.background": "#21262d",
        "editorLineNumber.activeForeground": "#c9d1d9",
        "editorLineNumber.foreground": "#8b949e",
        "editorOverviewRuler.border": "#010409",
        "editorWhitespace.foreground": "#484f58",
        "editorWidget.background": "#161b22",
        errorForeground: "#f85149",
        focusBorder: "#1f6feb",
        foreground: "#c9d1d9",
        "gitDecoration.addedResourceForeground": "#3fb950",
        "gitDecoration.conflictingResourceForeground": "#db6d28",
        "gitDecoration.deletedResourceForeground": "#f85149",
        "gitDecoration.ignoredResourceForeground": "#484f58",
        "gitDecoration.modifiedResourceForeground": "#d29922",
        "gitDecoration.submoduleResourceForeground": "#8b949e",
        "gitDecoration.untrackedResourceForeground": "#3fb950",
        "input.background": "#0d1117",
        "input.border": "#30363d",
        "input.foreground": "#c9d1d9",
        "input.placeholderForeground": "#484f58",
        "list.activeSelectionBackground": "#6e768166",
        "list.activeSelectionForeground": "#c9d1d9",
        "list.focusBackground": "#388bfd26",
        "list.focusForeground": "#c9d1d9",
        "list.highlightForeground": "#58a6ff",
        "list.hoverBackground": "#6e76811a",
        "list.hoverForeground": "#c9d1d9",
        "list.inactiveFocusBackground": "#388bfd26",
        "list.inactiveSelectionBackground": "#6e768166",
        "list.inactiveSelectionForeground": "#c9d1d9",
        "notificationCenterHeader.background": "#161b22",
        "notificationCenterHeader.foreground": "#8b949e",
        "notifications.background": "#161b22",
        "notifications.border": "#30363d",
        "notifications.foreground": "#c9d1d9",
        "notificationsErrorIcon.foreground": "#f85149",
        "notificationsInfoIcon.foreground": "#58a6ff",
        "notificationsWarningIcon.foreground": "#d29922",
        "panel.background": "#010409",
        "panel.border": "#30363d",
        "panelInput.border": "#30363d",
        "panelTitle.activeBorder": "#f78166",
        "panelTitle.activeForeground": "#c9d1d9",
        "panelTitle.inactiveForeground": "#8b949e",
        "peekViewEditor.background": "#6e76811a",
        "peekViewEditor.matchHighlightBackground": "#bb800966",
        "peekViewResult.background": "#0d1117",
        "peekViewResult.matchHighlightBackground": "#bb800966",
        "pickerGroup.border": "#30363d",
        "pickerGroup.foreground": "#8b949e",
        "progressBar.background": "#1f6feb",
        "quickInput.background": "#161b22",
        "quickInput.foreground": "#c9d1d9",
        "scrollbar.shadow": "#484f5833",
        "scrollbarSlider.activeBackground": "#6e768187",
        "scrollbarSlider.background": "#6e768133",
        "scrollbarSlider.hoverBackground": "#6e768145",
        "settings.headerForeground": "#8b949e",
        "settings.modifiedItemIndicator": "#bb800966",
        "sideBar.background": "#010409",
        "sideBar.border": "#30363d",
        "sideBar.foreground": "#c9d1d9",
        "sideBarSectionHeader.background": "#010409",
        "sideBarSectionHeader.border": "#30363d",
        "sideBarSectionHeader.foreground": "#c9d1d9",
        "sideBarTitle.foreground": "#c9d1d9",
        "statusBar.background": "#0d1117",
        "statusBar.border": "#30363d",
        "statusBar.debuggingBackground": "#da3633",
        "statusBar.debuggingForeground": "#f0f6fc",
        "statusBar.foreground": "#8b949e",
        "statusBar.noFolderBackground": "#0d1117",
        "statusBarItem.prominentBackground": "#161b22",
        "tab.activeBackground": "#0d1117",
        "tab.activeBorder": "#0d1117",
        "tab.activeBorderTop": "#f78166",
        "tab.activeForeground": "#c9d1d9",
        "tab.border": "#30363d",
        "tab.hoverBackground": "#0d1117",
        "tab.inactiveBackground": "#010409",
        "tab.inactiveForeground": "#8b949e",
        "tab.unfocusedActiveBorder": "#0d1117",
        "tab.unfocusedActiveBorderTop": "#30363d",
        "tab.unfocusedHoverBackground": "#6e76811a",
        "terminal.ansiBlack": "#484f58",
        "terminal.ansiBlue": "#58a6ff",
        "terminal.ansiBrightBlack": "#6e7681",
        "terminal.ansiBrightBlue": "#79c0ff",
        "terminal.ansiBrightCyan": "#56d4dd",
        "terminal.ansiBrightGreen": "#56d364",
        "terminal.ansiBrightMagenta": "#d2a8ff",
        "terminal.ansiBrightRed": "#ffa198",
        "terminal.ansiBrightWhite": "#f0f6fc",
        "terminal.ansiBrightYellow": "#e3b341",
        "terminal.ansiCyan": "#39c5cf",
        "terminal.ansiGreen": "#3fb950",
        "terminal.ansiMagenta": "#bc8cff",
        "terminal.ansiRed": "#ff7b72",
        "terminal.ansiWhite": "#b1bac4",
        "terminal.ansiYellow": "#d29922",
        "terminal.foreground": "#8b949e",
        "textBlockQuote.background": "#010409",
        "textBlockQuote.border": "#30363d",
        "textCodeBlock.background": "#6e768166",
        "textLink.activeForeground": "#58a6ff",
        "textLink.foreground": "#58a6ff",
        "textPreformat.foreground": "#8b949e",
        "textSeparator.foreground": "#21262d",
        "titleBar.activeBackground": "#0d1117",
        "titleBar.activeForeground": "#8b949e",
        "titleBar.border": "#30363d",
        "titleBar.inactiveBackground": "#010409",
        "titleBar.inactiveForeground": "#8b949e",
        "tree.indentGuidesStroke": "#21262d",
    },
    rules: [
        {
            foreground: "#8B949E",
            token: "comment",
        },
        {
            foreground: "#8B949E",
            token: "punctuation.definition.comment",
        },
        {
            foreground: "#8B949E",
            token: "string.comment",
        },
        {
            foreground: "#79C0FF",
            token: "constant",
        },
        {
            foreground: "#79C0FF",
            token: "entity.name.constant",
        },
        {
            foreground: "#79C0FF",
            token: "variable.other.constant",
        },
        {
            foreground: "#79C0FF",
            token: "variable.language",
        },
        {
            foreground: "#79C0FF",
            token: "entity",
        },
        {
            foreground: "#FFA657",
            token: "entity.name",
        },
        {
            foreground: "#FFA657",
            token: "meta.export.default",
        },
        {
            foreground: "#FFA657",
            token: "meta.definition.variable",
        },
        {
            foreground: "#C9D1D9",
            token: "variable.parameter.function",
        },
        {
            foreground: "#C9D1D9",
            token: "meta.jsx.children",
        },
        {
            foreground: "#C9D1D9",
            token: "meta.block",
        },
        {
            foreground: "#C9D1D9",
            token: "meta.tag.attributes",
        },
        {
            foreground: "#C9D1D9",
            token: "entity.name.constant",
        },
        {
            foreground: "#C9D1D9",
            token: "meta.object.member",
        },
        {
            foreground: "#C9D1D9",
            token: "meta.embedded.expression",
        },
        {
            foreground: "#D2A8FF",
            token: "entity.name.function",
        },
        {
            foreground: "#7EE787",
            token: "entity.name.tag",
        },
        {
            foreground: "#7EE787",
            token: "support.class.component",
        },
        {
            foreground: "#FF7B72",
            token: "keyword",
        },
        {
            foreground: "#FF7B72",
            token: "storage",
        },
        {
            foreground: "#FF7B72",
            token: "storage.type",
        },
        {
            foreground: "#C9D1D9",
            token: "storage.modifier.package",
        },
        {
            foreground: "#C9D1D9",
            token: "storage.modifier.import",
        },
        {
            foreground: "#C9D1D9",
            token: "storage.type.java",
        },
        {
            foreground: "#A5D6FF",
            token: "string",
        },
        {
            foreground: "#A5D6FF",
            token: "punctuation.definition.string",
        },
        {
            foreground: "#A5D6FF",
            token: "string punctuation.section.embedded source",
        },
        {
            foreground: "#79C0FF",
            token: "support",
        },
        {
            foreground: "#79C0FF",
            token: "meta.property-name",
        },
        {
            foreground: "#FFA657",
            token: "variable",
        },
        {
            foreground: "#C9D1D9",
            token: "variable.other",
        },
        {
            foreground: "#FFA198",
            fontStyle: "italic",
            token: "invalid.broken",
        },
        {
            foreground: "#FFA198",
            fontStyle: "italic",
            token: "invalid.deprecated",
        },
        {
            foreground: "#FFA198",
            fontStyle: "italic",
            token: "invalid.illegal",
        },
        {
            foreground: "#FFA198",
            fontStyle: "italic",
            token: "invalid.unimplemented",
        },
        {
            foreground: "#F0F6FC",
            background: "#FF7B72",
            fontStyle: "italic underline",
            token: "carriage-return",
        },
        {
            foreground: "#FFA198",
            token: "message.error",
        },
        {
            foreground: "#C9D1D9",
            token: "string source",
        },
        {
            foreground: "#79C0FF",
            token: "string variable",
        },
        {
            foreground: "#A5D6FF",
            token: "source.regexp",
        },
        {
            foreground: "#A5D6FF",
            token: "string.regexp",
        },
        {
            foreground: "#A5D6FF",
            token: "string.regexp.character-class",
        },
        {
            foreground: "#A5D6FF",
            token: "string.regexp constant.character.escape",
        },
        {
            foreground: "#A5D6FF",
            token: "string.regexp source.ruby.embedded",
        },
        {
            foreground: "#A5D6FF",
            token: "string.regexp string.regexp.arbitrary-repitition",
        },
        {
            foreground: "#7EE787",
            fontStyle: "bold",
            token: "string.regexp constant.character.escape",
        },
        {
            foreground: "#79C0FF",
            token: "support.constant",
        },
        {
            foreground: "#79C0FF",
            token: "support.variable",
        },
        {
            foreground: "#79C0FF",
            token: "meta.module-reference",
        },
        {
            foreground: "#FFA657",
            token: "punctuation.definition.list.begin.markdown",
        },
        {
            foreground: "#79C0FF",
            fontStyle: "bold",
            token: "markup.heading",
        },
        {
            foreground: "#79C0FF",
            fontStyle: "bold",
            token: "markup.heading entity.name",
        },
        {
            foreground: "#7EE787",
            token: "markup.quote",
        },
        {
            foreground: "#C9D1D9",
            fontStyle: "italic",
            token: "markup.italic",
        },
        {
            foreground: "#C9D1D9",
            fontStyle: "bold",
            token: "markup.bold",
        },
        {
            foreground: "#79C0FF",
            token: "markup.raw",
        },
        {
            foreground: "#FFA198",
            background: "#490202",
            token: "markup.deleted",
        },
        {
            foreground: "#FFA198",
            background: "#490202",
            token: "meta.diff.header.from-file",
        },
        {
            foreground: "#FFA198",
            background: "#490202",
            token: "punctuation.definition.deleted",
        },
        {
            foreground: "#7EE787",
            background: "#04260F",
            token: "markup.inserted",
        },
        {
            foreground: "#7EE787",
            background: "#04260F",
            token: "meta.diff.header.to-file",
        },
        {
            foreground: "#7EE787",
            background: "#04260F",
            token: "punctuation.definition.inserted",
        },
        {
            foreground: "#FFA657",
            background: "#5A1E02",
            token: "markup.changed",
        },
        {
            foreground: "#FFA657",
            background: "#5A1E02",
            token: "punctuation.definition.changed",
        },
        {
            foreground: "#161B22",
            background: "#79C0FF",
            token: "markup.ignored",
        },
        {
            foreground: "#161B22",
            background: "#79C0FF",
            token: "markup.untracked",
        },
        {
            foreground: "#D2A8FF",
            fontStyle: "bold",
            token: "meta.diff.range",
        },
        {
            foreground: "#79C0FF",
            token: "meta.diff.header",
        },
        {
            foreground: "#79C0FF",
            fontStyle: "bold",
            token: "meta.separator",
        },
        {
            foreground: "#79C0FF",
            token: "meta.output",
        },
        {
            foreground: "#8B949E",
            token: "brackethighlighter.tag",
        },
        {
            foreground: "#8B949E",
            token: "brackethighlighter.curly",
        },
        {
            foreground: "#8B949E",
            token: "brackethighlighter.round",
        },
        {
            foreground: "#8B949E",
            token: "brackethighlighter.square",
        },
        {
            foreground: "#8B949E",
            token: "brackethighlighter.angle",
        },
        {
            foreground: "#8B949E",
            token: "brackethighlighter.quote",
        },
        {
            foreground: "#FFA198",
            token: "brackethighlighter.unmatched",
        },
        {
            foreground: "#A5D6FF",
            fontStyle: "underline",
            token: "constant.other.reference.link",
        },
        {
            foreground: "#A5D6FF",
            fontStyle: "underline",
            token: "string.other.link",
        },
        {
            foreground: "#6796E6",
            token: "token.info-token",
        },
        {
            foreground: "#CD9731",
            token: "token.warn-token",
        },
        {
            foreground: "#F44747",
            token: "token.error-token",
        },
        {
            foreground: "#B267E6",
            token: "token.debug-token",
        },
        {
            token: "",
            foreground: "#c9d1d9",
        },
    ],
    encodedTokensColors: [],
};
/* harmony default export */ const EditorActivity_editorTheme = (editorTheme);

;// CONCATENATED MODULE: ./src/views/EditorActivity/index.tsx











class EditorActivity extends react.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            misc_tools.getMisc("editor.d.ts", (data) => {
                this.setState({ types: data });
            }, { json: true });
        };
        this.renderToolbar = () => {
            return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: "Editor", onBackButton: this.props.popPage, hasWindowsButtons: true, addToolbarButton: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(() => {
                                if (src_native.isWindows || src_native.isAndroid) {
                                    return;
                                }
                                else {
                                    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, Object.assign({ id: "menu-click", onClick: () => {
                                                const getPlaygroundCode = src_native.getPref("playground");
                                                src_native.eval(getPlaygroundCode, {
                                                    plugin: {
                                                        name: "playground",
                                                    },
                                                });
                                            } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "code", size: "24", ignoreDarkmode: true }, void 0) }), void 0) }, void 0));
                                }
                            })(), (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, Object.assign({ id: "menu-click", onClick: this.save }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "save", size: "24", ignoreDarkmode: true }, void 0) }), void 0)] }, void 0), addToolbarButtonPosition: "right" }, void 0) }, void 0));
        };
        this.openFile = () => {
            onsenui_default().notification.prompt("Notification").then((input) => {
                const f = input;
            });
        };
        this.save = () => {
            const { pluginName, fileName } = this.props.extras;
            const confirm_ = confirm("Are you sure to save this file? Untested files can crash the app.");
            if (confirm_) {
                if (src_native.isAndroid || src_native.isWindows) {
                    src_native.fs.writeFile(`plugins/${pluginName}/${fileName}`, this.state.data);
                }
                else {
                    src_native.setPref("playground", this.state.data);
                }
            }
        };
        this.createDependencyProposals = (monaco, range) => {
            // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
            // here you could do a server side lookup
            return [
                {
                    label: "native",
                    kind: monaco.languages.CompletionItemKind.Function,
                    documentation: "",
                    insertText: "native",
                    range: range,
                },
                {
                    label: "ignore",
                    kind: monaco.languages.CompletionItemKind.Function,
                    documentation: "",
                    insertText: "// @ts-ignore",
                    range: range,
                },
            ];
        };
        this.editorDidMount = (editor, monaco) => {
            const { types } = this.state;
            monaco.editor.defineTheme("editorTheme", EditorActivity_editorTheme);
            monaco.editor.setTheme("editorTheme");
            monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                noSemanticValidation: false,
                noSyntaxValidation: false,
                noSuggestionDiagnostics: false,
            });
            // compiler options
            monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                // @ts-ignore
                target: monaco.languages.typescript.ScriptTarget.ES6,
                allowNonTsExtensions: true,
            });
            const libUri = "ts:filename/editor.d.ts";
            monaco.languages.typescript.javascriptDefaults.addExtraLib(types, libUri);
            // When resolving definitions and references, the editor will try to use created models.
            // Creating a model for the library allows "peek definition/references" commands to work with the library.
            if (monaco.editor.getModels().length === 0) {
                monaco.editor.createModel(types, "typescript", monaco.Uri.parse(libUri));
            }
            monaco.languages.registerCompletionItemProvider("javascript", {
                provideCompletionItems: (model, position) => {
                    const word = model.getWordUntilPosition(position);
                    const range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn,
                    };
                    return {
                        suggestions: this.createDependencyProposals(monaco, range),
                    };
                },
            });
            editor.focus();
        };
        this.onChange = (newValue, e) => {
            this.setState({
                data: newValue,
            });
        };
        this.state = {
            isContextOpen: false,
            data: this.props.extras.value,
            types: "",
        };
    }
    onAndroidEditorLoad(editor) {
        editor.completers.push({
            getCompletions: function (editor, session, pos, prefix, callback) {
                var completions = [];
                // we can use session and pos here to decide what we are going to show
                ["native", "__dirname", "HWPlugin", "ons", "tools", 'require("")', "document"].forEach(function (w) {
                    completions.push({
                        value: w,
                        meta: "HWPlugin State",
                    });
                });
                callback(null, completions);
            },
        });
        editor.getSession().getAnnotations();
    }
    render() {
        const { data } = this.state;
        if (src_native.isWindows || src_native.isDesktop) {
            return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(lib_es/* default */.ZP, { height: "100%", defaultLanguage: "javascript", defaultValue: data, options: {
                        selectOnLineNumbers: true,
                        minimap: {
                            enabled: false,
                        },
                    }, onChange: this.onChange, onMount: this.editorDidMount }, void 0) }), void 0));
        }
        else {
            return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(react_ace_lib/* default */.ZP, { placeholder: "Write code ...", mode: "javascript", theme: "nord_dark", name: "blah2", onLoad: this.onAndroidEditorLoad, onChange: this.onChange, fontSize: 14, width: "100%", height: "100%", maxLines: Infinity, showPrintMargin: true, showGutter: true, highlightActiveLine: true, value: data, setOptions: {
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        cursorStyle: "smooth",
                        spellcheck: false,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                    } }, void 0) }), void 0));
        }
    }
}
/* harmony default export */ const views_EditorActivity = (EditorActivity);

;// CONCATENATED MODULE: ./src/views/ForbiddenActivity/index.tsx






class ForbiddenActivity extends react.Component {
    renderToolbar() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: "Forbidden", hasWindowsButtons: false }, void 0) }, void 0));
    }
    render() {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(components_ContentBody, { children: src_native.isIframe
                    ? "Embedding in iFrame are not allowed"
                    : src_native.isElectron
                        ? "This app does not support Electron"
                        : src_native.isEdge
                            ? "There are no support for Edge"
                            : src_native.isIE
                                ? "IE is deprecated"
                                : src_native.isMIUI
                                    ? "We don't allow MIUI devices/systems"
                                    : src_native.isSamsungBrowser
                                        ? "We don't allow the Samsung Browser"
                                        : src_native.isSmartTV
                                            ? "SmartTV are not optimized for this usage"
                                            : null }, void 0) }), void 0));
    }
}
/* harmony default export */ const views_ForbiddenActivity = (ForbiddenActivity);

;// CONCATENATED MODULE: ./src/views/TextFetchActivity/index.tsx








class TextFetchActivity extends react.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            const { textFetch } = this.props;
            axios_default().get(textFetch.url).then((res) => {
                const data = res.data;
                this.setState({ data: data });
            });
        };
        this.renderToolbar = () => {
            const { textFetch, popPage } = this.props;
            return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: textFetch.title, onBackButton: popPage, hasWindowsButtons: true }, void 0) }, void 0));
        };
        this.state = { data: "" };
    }
    render() {
        const { data } = this.state;
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsx)(components_ContentBody, Object.assign({ className: "markdownBody" }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ style: {
                        padding: "16px",
                    } }, { children: (0,jsx_runtime.jsx)(HighlightedMarkdown, { children: data }, void 0) }), void 0) }), void 0) }), void 0));
    }
}
/* harmony default export */ const views_TextFetchActivity = (TextFetchActivity);

;// CONCATENATED MODULE: ./src/views/plugin/PluginsActvity/index.tsx










class PluginsActivity extends react.Component {
    constructor() {
        super(...arguments);
        this.scriptLosding = src_native.getPref("enableCustomScriptLoading") === "true";
        this.renderToolbar = () => {
            return ((0,jsx_runtime.jsx)(react_onsenui.Toolbar, { children: (0,jsx_runtime.jsx)(builders_ToolbarBuilder, { title: "Plugins", onBackButton: this.props.popPage, hasWindowsButtons: true, hasDarkMode: true }, void 0) }, void 0));
        };
    }
    render() {
        let pas, customPlugins = null;
        if (src_native.isAndroid || src_native.isWindows) {
            if (this.scriptLosding) {
                if (src_native.fs.isFileExist("plugins.yaml")) {
                    if (src_native.isAndroid || src_native.isWindows) {
                        pas = src_native.fs.readFile("/plugins.yaml", {
                            parse: { use: true, mode: "yaml" },
                        });
                    }
                    else {
                        pas = ["playground"];
                    }
                    customPlugins = pas.map((item) => ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (() => {
                            if (this.scriptLosding) {
                                if (src_native.getPref("Plugin.Settings." + item + ".name") === item) {
                                    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { padding: "8px" } }, void 0), (0,jsx_runtime.jsxs)(react_onsenui.ListHeader, { children: [item, " Plugin"] }, void 0), (0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ tappable: true, modifier: "chevron", onClick: () => {
                                                    this.props.pushPage({
                                                        activity: plugin_PluginAboutActivity,
                                                        key: item + "-plugin-about",
                                                        pluginAbout: {
                                                            name: item,
                                                        },
                                                    });
                                                } }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "account_circle", size: "24" }, void 0) }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "center" }, { children: "Developer" }), void 0)] }), void 0), (() => {
                                                var _a;
                                                const getConfig = src_native.fs.readFile(`plugins/${item}/plugin.yaml`, {
                                                    parse: { use: true, mode: "yaml" },
                                                });
                                                if ((_a = getConfig.options) === null || _a === void 0 ? void 0 : _a.allowEditor) {
                                                    return ((0,jsx_runtime.jsxs)(react_onsenui.ListItem, Object.assign({ tappable: true, modifier: "chevron", onClick: () => {
                                                            this.props.pushPage({
                                                                activity: views_EditorActivity,
                                                                key: item + "-plugin-about",
                                                                extras: {
                                                                    pluginName: item,
                                                                    fileName: getConfig.run,
                                                                    value: src_native.fs.readFile(`plugins/${item}/${getConfig.run}`),
                                                                },
                                                            });
                                                        } }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "logo_dev", size: "24" }, void 0) }), void 0), (0,jsx_runtime.jsx)("div", Object.assign({ className: "center" }, { children: "Editor" }), void 0)] }), void 0));
                                                }
                                                else {
                                                    return;
                                                }
                                            })(), (0,jsx_runtime.jsx)(builders_ListViewBuilder, { isPlugin: true, pluginName: item, data: JSON.parse(src_native.getPref("Plugin.Settings." + item + ".settings")) }, void 0)] }, void 0));
                                }
                                else {
                                    return;
                                }
                            }
                            else {
                                return;
                            }
                        })() }, void 0)));
                }
            }
        }
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, Object.assign({ modifier: src_native.checkPlatformForBorderStyle, renderToolbar: this.renderToolbar }, { children: (0,jsx_runtime.jsxs)(components_ContentBody, { children: [(0,jsx_runtime.jsx)(react_onsenui.List, { children: customPlugins }, void 0), (0,jsx_runtime.jsx)("div", { style: { padding: "8px" } }, void 0)] }, void 0) }), void 0));
    }
}
/* harmony default export */ const PluginsActvity = (PluginsActivity);

;// CONCATENATED MODULE: ./src/views/index.ts












// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/mode-javascript.js
var mode_javascript = __webpack_require__(6395);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ext-language_tools.js
var ext_language_tools = __webpack_require__(2679);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/theme-nord_dark.js
var theme_nord_dark = __webpack_require__(2827);
// EXTERNAL MODULE: ./node_modules/onsenui/package.json
var onsenui_package = __webpack_require__(5032);
// EXTERNAL MODULE: ./node_modules/react-onsenui/package.json
var react_onsenui_package = __webpack_require__(2509);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/package.json
var react_bootstrap_package = __webpack_require__(8680);
// EXTERNAL MODULE: ./node_modules/react/package.json
var react_package = __webpack_require__(7102);
;// CONCATENATED MODULE: ./src/components/AppRoot.ts





/**
 * Provides information about the app and frameworks
 * @extends HTMLElement
 */
class AppRoot extends HTMLElement {
    constructor() {
        super();
        this.initConfigStats([
            { key: "version", value: package_namespaceObject.i8 },
            { key: "onsenui-version", value: onsenui_package/* version */.i8 },
            { key: "react-onsenui-version", value: react_onsenui_package/* version */.i8 },
            { key: "react-version", value: react_package/* version */.i8 },
            { key: "react-bootstrap-version", value: react_bootstrap_package/* version */.i8 },
        ]);
    }
    initConfigStats(data) {
        return data.map((element) => {
            return this.setAttribute(element.key, element.value);
        });
    }
    connectedCallback() {
        // Element wurde ins DOM eingehängt
    }
    disconnectedCallback() {
        // Element wurde entfernt
    }
    adoptedCallback() {
        // Element ist in ein anderes Dokument umgezogen
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // Elementparameter wurden geändert
        // Achtung attributeChangedCallback wird vor connectedCallback aufgerufen
    }
}
/* harmony default export */ const components_AppRoot = (AppRoot);

;// CONCATENATED MODULE: ./src/index.tsx





















class Bootloader {
    constructor() {
        this.mountNode = document.querySelector("app-root");
    }
    loadConsole() {
        if (src_native.getPref("erudaEnabled") === "true") {
            eruda_default().init();
            eruda_default().add((eruda_dom_default()));
        }
    }
    loadActivity(node) {
        react_dom.render((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: node }, void 0), this.mountNode);
    }
    electronInit() {
        src_native.electron.addEventListener("devtools-opened", () => {
            console.log("DevTools opened");
        });
    }
    /**
     * Loads styles dynamically
     */
    styleInit() {
        jss_esm/* default.setup */.ZP.setup((0,jss_preset_default_esm/* default */.Z)());
        if (src_native.getPref("enableDarkmode") === "true") {
            src_native.android.setStatusbarColor("#ff1f1f1f");
            jss_esm/* default.createStyleSheet */.ZP.createStyleSheet(dark).attach();
        }
        else {
            src_native.android.setStatusbarColor("#ff4a148c");
            jss_esm/* default.createStyleSheet */.ZP.createStyleSheet(light).attach();
        }
    }
    androidSettingsinit() {
        if (src_native.getPref("enableKeepScreenOn") === "true") {
            src_native.android.keepScreenOn();
        }
    }
    makeExamplePlugin() {
        src_native.fs.writeFile("plugins/example/plugin.yaml", "run: index.js");
        src_native.fs.writeFile("plugins/example/index.js", "console.log('Example Plugin')");
        src_native.fs.writeFile("plugins/example/note.txt", "THIS IS AN EXAMPLE PLUGIN AND CANNOT OVERRIDED");
    }
    folderInit() {
        if (!src_native.fs.isFileExist("plugins.yaml")) {
            src_native.fs.writeFile("plugins.yaml", "- example");
        }
    }
    init() {
        onsenui_default().platform.select("android");
        this.styleInit();
        if (src_native.isIframe ||
            src_native.isElectron ||
            src_native.isEmbedded ||
            src_native.isIE ||
            src_native.isEdge ||
            src_native.isMIUI ||
            src_native.isSamsungBrowser) {
            this.loadActivity((0,jsx_runtime.jsx)(views_ForbiddenActivity, {}, void 0));
        }
        else {
            this.folderInit();
            this.makeExamplePlugin();
            this.loadConsole();
            this.electronInit();
            this.androidSettingsinit();
            if (src_native.isInstagram || src_native.isFacebook) {
                src_native.setPref("disableNSFW", "true");
            }
            customElements.define("app-root", components_AppRoot);
            this.loadActivity((0,jsx_runtime.jsx)(views_InitActivity, {}, void 0));
        }
    }
}
new Bootloader().init();
/* harmony default export */ const src = (Bootloader);


/***/ }),

/***/ 2480:
/***/ (() => {

/* (ignored) */

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
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(1692)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});