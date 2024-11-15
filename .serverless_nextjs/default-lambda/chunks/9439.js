exports.id = 9439;
exports.ids = [9439];
exports.modules = {

/***/ 9439:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var parser = __webpack_require__(76489);
var universalCookie = _interopDefault(__webpack_require__(76741));
var React = __webpack_require__(67294);

var SET_COOKIE_HEADER = 'Set-Cookie';
var Cookie = /** @class */ (function () {
    function Cookie(ctxOrCookie) {
        this.isServer = typeof window === 'undefined';
        if (this.isServer) {
            if (typeof ctxOrCookie === 'string') {
                this.cookie = new universalCookie(ctxOrCookie);
            }
            else if (ctxOrCookie && typeof ctxOrCookie.req !== 'undefined') {
                this.ctx = ctxOrCookie;
                this.cookie = new universalCookie(this.ctx.req.headers.cookie);
            }
            else {
                this.cookie = new universalCookie();
            }
        }
        else {
            var cookieString = void 0;
            if (typeof ctxOrCookie === 'string') {
                cookieString = ctxOrCookie;
            }
            this.cookie = new universalCookie(cookieString);
        }
    }
    /**
     * Returns true if the cookie value exists.
     *
     * @param name The name of the cookie.
     * @returns True if it exists, false otherwise.
     */
    Cookie.prototype.has = function (name) {
        return typeof this.get(name) !== 'undefined';
    };
    /**
     * Get value of cookie.
     *
     * @param name The name of the cookie.
     * @param options `CookieGetOptions` used in `universal-cookie`.
     * @returns The cookie value or null if not found.
     */
    Cookie.prototype.get = function (name, options) {
        return this.cookie.get(name, options);
    };
    /**
     * Get all cookies.
     *
     * @param options `CookieGetOptions` used in `universal-cookie`.
     */
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Cookie.prototype.getAll = function (options) {
        return this.cookie.getAll(options);
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    /**
     * Set a cookie.
     *
     * @param name The name of the cookie.
     * @param value The value of the cookie.
     * @param options `CookieSetOptions` used in `universal-cookie`.
     */
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Cookie.prototype.set = function (name, value, options) {
        // if the expires is number, then convert to Date.
        if (options && typeof options.expires === 'number') {
            options.expires = new Date(new Date() * 1 + options.expires * 864e+5);
        }
        if (this.isServer && this.ctx) {
            var cookies = this.ctx.res.getHeader(SET_COOKIE_HEADER) || [];
            this.cookie.set(name, value, options);
            cookies.push(parser.serialize(name, value, options));
            this.ctx.res.setHeader(SET_COOKIE_HEADER, cookies);
        }
        else {
            this.cookie.set(name, value, options);
        }
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    /**
     * Remove a cookie by name.
     *
     * @param name The name of the cookie.
     * @param options `CookieSetOptions` used in `universal-cookie`.
     */
    Cookie.prototype.remove = function (name, options) {
        if (!this.has(name)) {
            return;
        }
        var opt = Object.assign({
            expires: new Date(),
            path: '/',
        }, options || {});
        if (this.isServer && this.ctx) {
            this.ctx.res.setHeader(SET_COOKIE_HEADER, parser.serialize(name, '', opt));
        }
        else {
            this.cookie.remove(name, opt);
        }
    };
    return Cookie;
}());

function useCookie(ctxOrCookie) {
    return new Cookie(ctxOrCookie);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function withCookie(ComposedComponent) {
    var _this = this;
    var name = ComposedComponent.displayName || ComposedComponent.name;
    var WithCookieWrapper = /** @class */ (function (_super) {
        __extends(WithCookieWrapper, _super);
        function WithCookieWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithCookieWrapper.prototype.render = function () {
            var cookie = new Cookie();
            return (React.createElement(ComposedComponent, __assign({ cookie: cookie }, this.props)));
        };
        WithCookieWrapper.displayName = "withCookie(" + name + ")";
        return WithCookieWrapper;
    }(React.Component));
    if (ComposedComponent.getInitialProps) {
        WithCookieWrapper.getInitialProps = function (ctx) { return __awaiter(_this, void 0, void 0, function () {
            var initialProps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx.cookie = new Cookie(ctx);
                        return [4 /*yield*/, ComposedComponent.getInitialProps(ctx)];
                    case 1:
                        initialProps = _a.sent();
                        if (ctx.cookie) {
                            delete ctx.cookie;
                        }
                        return [2 /*return*/, initialProps];
                }
            });
        }); };
    }
    return WithCookieWrapper;
}

__webpack_unused_export__ = Cookie;
__webpack_unused_export__ = useCookie;
__webpack_unused_export__ = withCookie;


/***/ }),

/***/ 19131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var cookie = _interopRequireWildcard(__webpack_require__(76489));

var _utils = __webpack_require__(70336);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var Cookies =
/** @class */
function () {
  function Cookies(cookies, options) {
    var _this = this;

    this.changeListeners = [];
    this.HAS_DOCUMENT_COOKIE = false;
    this.cookies = (0, _utils.parseCookies)(cookies, options);
    new Promise(function () {
      _this.HAS_DOCUMENT_COOKIE = (0, _utils.hasDocumentCookie)();
    })["catch"](function () {});
  }

  Cookies.prototype._updateBrowserValues = function (parseOptions) {
    if (!this.HAS_DOCUMENT_COOKIE) {
      return;
    }

    this.cookies = cookie.parse(document.cookie, parseOptions);
  };

  Cookies.prototype._emitChange = function (params) {
    for (var i = 0; i < this.changeListeners.length; ++i) {
      this.changeListeners[i](params);
    }
  };

  Cookies.prototype.get = function (name, options, parseOptions) {
    if (options === void 0) {
      options = {};
    }

    this._updateBrowserValues(parseOptions);

    return (0, _utils.readCookie)(this.cookies[name], options);
  };

  Cookies.prototype.getAll = function (options, parseOptions) {
    if (options === void 0) {
      options = {};
    }

    this._updateBrowserValues(parseOptions);

    var result = {};

    for (var name_1 in this.cookies) {
      result[name_1] = (0, _utils.readCookie)(this.cookies[name_1], options);
    }

    return result;
  };

  Cookies.prototype.set = function (name, value, options) {
    var _a;

    if (_typeof(value) === 'object') {
      value = JSON.stringify(value);
    }

    this.cookies = __assign(__assign({}, this.cookies), (_a = {}, _a[name] = value, _a));

    if (this.HAS_DOCUMENT_COOKIE) {
      document.cookie = cookie.serialize(name, value, options);
    }

    this._emitChange({
      name: name,
      value: value,
      options: options
    });
  };

  Cookies.prototype.remove = function (name, options) {
    var finalOptions = options = __assign(__assign({}, options), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0
    });

    this.cookies = __assign({}, this.cookies);
    delete this.cookies[name];

    if (this.HAS_DOCUMENT_COOKIE) {
      document.cookie = cookie.serialize(name, '', finalOptions);
    }

    this._emitChange({
      name: name,
      value: undefined,
      options: options
    });
  };

  Cookies.prototype.addChangeListener = function (callback) {
    this.changeListeners.push(callback);
  };

  Cookies.prototype.removeChangeListener = function (callback) {
    var idx = this.changeListeners.indexOf(callback);

    if (idx >= 0) {
      this.changeListeners.splice(idx, 1);
    }
  };

  return Cookies;
}();

var _default = Cookies;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ 76741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Cookies = _interopRequireDefault(__webpack_require__(19131));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Cookies["default"];
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ 70336:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasDocumentCookie = hasDocumentCookie;
exports.cleanCookies = cleanCookies;
exports.parseCookies = parseCookies;
exports.isParsingCookie = isParsingCookie;
exports.readCookie = readCookie;

var cookie = _interopRequireWildcard(__webpack_require__(76489));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function hasDocumentCookie() {
  // Can we get/set cookies on document.cookie?
  return (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && typeof document.cookie === 'string';
}

function cleanCookies() {
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
}

function parseCookies(cookies, options) {
  if (typeof cookies === 'string') {
    return cookie.parse(cookies, options);
  } else if (_typeof(cookies) === 'object' && cookies !== null) {
    return cookies;
  } else {
    return {};
  }
}

function isParsingCookie(value, doNotParse) {
  if (typeof doNotParse === 'undefined') {
    // We guess if the cookie start with { or [, it has been serialized
    doNotParse = !value || value[0] !== '{' && value[0] !== '[' && value[0] !== '"';
  }

  return !doNotParse;
}

function readCookie(value, options) {
  if (options === void 0) {
    options = {};
  }

  var cleanValue = cleanupCookieValue(value);

  if (isParsingCookie(cleanValue, options.doNotParse)) {
    try {
      return JSON.parse(cleanValue);
    } catch (e) {// At least we tried
    }
  } // Ignore clean value if we failed the deserialization
  // It is not relevant anymore to trim those values


  return value;
}

function cleanupCookieValue(value) {
  // express prepend j: before serializing a cookie
  if (value && value[0] === 'j' && value[1] === ':') {
    return value.substr(2);
  }

  return value;
}

/***/ })

};
;