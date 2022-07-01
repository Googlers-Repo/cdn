"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bota64 = void 0;
var core_1 = require("./core");
/**
 * Custom encoding
 */
var Bota64 = /** @class */ (function () {
    function Bota64(options) {
        this.withBase64 = options === null || options === void 0 ? void 0 : options.withBase64;
    }
    /**
     * @param {*} content Any text
     * @returns {string} An encoded string
     */
    Bota64.prototype.encode = function (content) {
        if (this.withBase64) {
            return window.btoa(unescape(encodeURIComponent((0, core_1._encode)(content))));
        }
        else {
            return unescape(encodeURIComponent((0, core_1._encode)(content)));
        }
    };
    /**
     * @param {*} content Any text
     * @returns {string} An decoded string
     */
    Bota64.prototype.decode = function (content) {
        if (this.withBase64) {
            return decodeURIComponent(escape(window.atob((0, core_1._decode)(content))));
        }
        else {
            return decodeURIComponent(escape((0, core_1._decode)(content)));
        }
    };
    return Bota64;
}());
exports.Bota64 = Bota64;
