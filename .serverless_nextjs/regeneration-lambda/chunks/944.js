exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 5769:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = makeAsyncScript;

var _react = __webpack_require__(67294);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(8679));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function

var idCount = 0;

function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    var AsyncScriptLoader =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(AsyncScriptLoader, _Component);

      function AsyncScriptLoader(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }

      var _proto = AsyncScriptLoader.prototype;

      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }

        return this.__scriptLoaderID;
      };

      _proto.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };

      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };

      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];

        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }

        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }

        delete window[options.callbackName];
      };

      _proto.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
            globalName = _options.globalName,
            callbackName = _options.callbackName,
            scriptId = _options.scriptId; // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = {
            loaded: true,
            observers: {}
          };
        } // check if script loading already


        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then "finish"

          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          } // if still loading then callback to observer queue


          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };

          return;
        }
        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */


        var observers = {};

        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };

        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };
        var script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;

        for (var attribute in options.attributes) {
          script.setAttribute(attribute, options.attributes[attribute]);
        }

        if (scriptId) {
          script.id = scriptId;
        }

        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;

            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };

        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }

        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }

              observer(mapEntry);
              return true;
            });
          }
        };

        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };

        document.body.appendChild(script);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;

        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");

          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        } // Clean the observer entry


        var mapEntry = SCRIPT_MAP[scriptURL];

        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];

          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };

      _proto.render = function render() {
        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps

        var _this$props = this.props,
            asyncScriptOnLoad = _this$props.asyncScriptOnLoad,
            forwardedRef = _this$props.forwardedRef,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars


        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }

        childProps.ref = forwardedRef;
        return (0, _react.createElement)(WrappedComponent, childProps);
      };

      return AsyncScriptLoader;
    }(_react.Component); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.


    var ForwardedComponent = (0, _react.forwardRef)(function (props, ref) {
      return (0, _react.createElement)(AsyncScriptLoader, _extends({}, props, {
        forwardedRef: ref
      }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: _propTypes["default"].func
    };
    return (0, _hoistNonReactStatics["default"])(ForwardedComponent, WrappedComponent);
  };
}

/***/ }),

/***/ 40944:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.ZP = void 0;

var _recaptchaWrapper = _interopRequireDefault(__webpack_require__(12994));

var _recaptcha = _interopRequireDefault(__webpack_require__(56116));

__webpack_unused_export__ = _recaptcha["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _recaptchaWrapper["default"];
exports.ZP = _default;

/***/ }),

/***/ 12994:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _recaptcha = _interopRequireDefault(__webpack_require__(56116));

var _reactAsyncScript = _interopRequireDefault(__webpack_require__(5769));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var callbackName = "onloadcallback";
var globalName = "grecaptcha";

function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}

function getURL() {
  var dynamicOptions = getOptions();
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit";
}

var _default = (0, _reactAsyncScript["default"])(getURL, {
  callbackName: callbackName,
  globalName: globalName
})(_recaptcha["default"]);

exports.default = _default;

/***/ }),

/***/ 56116:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ReCAPTCHA =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReCAPTCHA, _React$Component);

  function ReCAPTCHA() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.handleExpired = _this.handleExpired.bind(_assertThisInitialized(_this));
    _this.handleErrored = _this.handleErrored.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ReCAPTCHA.prototype;

  _proto.getValue = function getValue() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this.props.grecaptcha.getResponse(this._widgetId);
    }

    return null;
  };

  _proto.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }

    return null;
  };

  _proto.execute = function execute() {
    var grecaptcha = this.props.grecaptcha;

    if (grecaptcha && this._widgetId !== undefined) {
      return grecaptcha.execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };

  _proto.executeAsync = function executeAsync() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.executionResolve = resolve;
      _this2.executionReject = reject;

      _this2.execute();
    });
  };

  _proto.reset = function reset() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      this.props.grecaptcha.reset(this._widgetId);
    }
  };

  _proto.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  };

  _proto.handleErrored = function handleErrored() {
    if (this.props.onErrored) {
      this.props.onErrored();
    }

    if (this.executionReject) {
      this.executionReject();
      delete this.executionResolve;
      delete this.executionReject;
    }
  };

  _proto.handleChange = function handleChange(token) {
    if (this.props.onChange) {
      this.props.onChange(token);
    }

    if (this.executionResolve) {
      this.executionResolve(token);
      delete this.executionReject;
      delete this.executionResolve;
    }
  };

  _proto.explicitRender = function explicitRender() {
    if (this.props.grecaptcha && this.props.grecaptcha.render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = this.props.grecaptcha.render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge
      });
      this.captcha.appendChild(wrapper);
    }

    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this._widgetId !== undefined) {
      this.delayOfCaptchaIframeRemoving();
      this.reset();
    }
  };

  _proto.delayOfCaptchaIframeRemoving = function delayOfCaptchaIframeRemoving() {
    var temporaryNode = document.createElement("div");
    document.body.appendChild(temporaryNode);
    temporaryNode.style.display = "none"; // move of the recaptcha to a temporary node

    while (this.captcha.firstChild) {
      temporaryNode.appendChild(this.captcha.firstChild);
    } // delete the temporary node after reset will be done


    setTimeout(function () {
      document.body.removeChild(temporaryNode);
    }, 5000);
  };

  _proto.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };

  _proto.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.

    /* eslint-disable no-unused-vars */
    var _this$props = this.props,
        sitekey = _this$props.sitekey,
        onChange = _this$props.onChange,
        theme = _this$props.theme,
        type = _this$props.type,
        tabindex = _this$props.tabindex,
        onExpired = _this$props.onExpired,
        onErrored = _this$props.onErrored,
        size = _this$props.size,
        stoken = _this$props.stoken,
        grecaptcha = _this$props.grecaptcha,
        badge = _this$props.badge,
        hl = _this$props.hl,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]);
    /* eslint-enable no-unused-vars */


    return _react["default"].createElement("div", _extends({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };

  return ReCAPTCHA;
}(_react["default"].Component);

exports.default = ReCAPTCHA;
ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  grecaptcha: _propTypes["default"].object,
  theme: _propTypes["default"].oneOf(["dark", "light"]),
  type: _propTypes["default"].oneOf(["image", "audio"]),
  tabindex: _propTypes["default"].number,
  onExpired: _propTypes["default"].func,
  onErrored: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["compact", "normal", "invisible"]),
  stoken: _propTypes["default"].string,
  hl: _propTypes["default"].string,
  badge: _propTypes["default"].oneOf(["bottomright", "bottomleft", "inline"])
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ }),

/***/ 67294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(72408);
} else {}


/***/ })

};
;