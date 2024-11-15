exports.id = 4479;
exports.ids = [4479];
exports.modules = {

/***/ 98904:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLocaleData = getLocaleData;
exports.addLocaleData = addLocaleData;
// For all locales added
// their relative time formatter messages will be stored here.
var localesData = {};

function getLocaleData(locale) {
  return localesData[locale];
}

function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error('[javascript-time-ago] No locale data passed.');
  } // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.


  localesData[localeData.locale] = localeData;
}
//# sourceMappingURL=LocaleDataStore.js.map

/***/ }),

/***/ 12902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = isStyleObject;
exports.default = void 0;

var _relativeTimeFormat = _interopRequireDefault(__webpack_require__(22986));

var _cache = _interopRequireDefault(__webpack_require__(45793));

var _locale = _interopRequireDefault(__webpack_require__(91659));

var _getStep3 = _interopRequireDefault(__webpack_require__(46266));

var _getStepDenominator = _interopRequireDefault(__webpack_require__(95602));

var _getTimeToNextUpdate = _interopRequireDefault(__webpack_require__(79576));

var _LocaleDataStore = __webpack_require__(98904);

var _roundMinute = _interopRequireDefault(__webpack_require__(62024));

var _getStyleByName = _interopRequireDefault(__webpack_require__(11100));

var _round = __webpack_require__(22535);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Valid time units.
var UNITS = (/* unused pure expression or super */ null && (['now', // The rest are the same as in `Intl.RelativeTimeFormat`.
'second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']));

var TimeAgo =
/*#__PURE__*/
function () {
  /**
   * @param {(string|string[])} locales=[] - Preferred locales (or locale).
   * @param {boolean} [polyfill] — Pass `false` to use native `Intl.RelativeTimeFormat` and `Intl.PluralRules` instead of the polyfills.
   */
  function TimeAgo() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        polyfill = _ref.polyfill;

    _classCallCheck(this, TimeAgo);

    // Convert `locales` to an array.
    if (typeof locales === 'string') {
      locales = [locales];
    } // Choose the most appropriate locale
    // from the list of `locales` added by the user.
    // For example, new TimeAgo("en-US") -> "en".


    this.locale = (0, _locale.default)(locales.concat(TimeAgo.getDefaultLocale()), _LocaleDataStore.getLocaleData);

    if (typeof Intl !== 'undefined') {
      // Use `Intl.NumberFormat` for formatting numbers (when available).
      if (Intl.NumberFormat) {
        this.numberFormat = new Intl.NumberFormat(this.locale);
      }
    } // Some people have requested the ability to use native
    // `Intl.RelativeTimeFormat` and `Intl.PluralRules`
    // instead of the polyfills.
    // https://github.com/catamphetamine/javascript-time-ago/issues/21


    if (polyfill === false) {
      this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
      this.IntlPluralRules = Intl.PluralRules;
    } else {
      this.IntlRelativeTimeFormat = _relativeTimeFormat.default;
      this.IntlPluralRules = _relativeTimeFormat.default.PluralRules;
    } // Cache `Intl.RelativeTimeFormat` instance.


    this.relativeTimeFormatCache = new _cache.default(); // Cache `Intl.PluralRules` instance.

    this.pluralRulesCache = new _cache.default();
  }
  /**
   * Formats relative date/time.
   *
   * @param {number} [options.now] - Sets the current date timestamp.
   *
   * @param  {boolean} [options.future] — Tells how to format value `0`:
   *         as "future" (`true`) or "past" (`false`).
   *         Is `false` by default, but should have been `true` actually,
   *         in order to correspond to `Intl.RelativeTimeFormat`
   *         that uses `future` formatting for `0` unless `-0` is passed.
   *
   * @param {string} [options.round] — Rounding method. Overrides the style's one.
   *
   * @param {boolean} [options.getTimeToNextUpdate] — Pass `true` to return `[formattedDate, timeToNextUpdate]` instead of just `formattedDate`.
   *
   * @return {string} The formatted relative date/time. If no eligible `step` is found, then an empty string is returned.
   */


  _createClass(TimeAgo, [{
    key: "format",
    value: function format(input, style, options) {
      if (!options) {
        if (style && !isStyle(style)) {
          options = style;
          style = undefined;
        } else {
          options = {};
        }
      }

      if (!style) {
        style = _roundMinute.default;
      }

      if (typeof style === 'string') {
        style = (0, _getStyleByName.default)(style);
      }

      var timestamp = getTimestamp(input); // Get locale messages for this type of labels.
      // "flavour" is a legacy name for "labels".

      var _this$getLabels = this.getLabels(style.flavour || style.labels),
          labels = _this$getLabels.labels,
          labelsType = _this$getLabels.labelsType;

      var now; // Can pass a custom `now`, e.g. for testing purposes.
      //
      // Legacy way was passing `now` in `style`.
      // That way is deprecated.

      if (style.now !== undefined) {
        now = style.now;
      } // The new way is passing `now` option to `.format()`.


      if (now === undefined && options.now !== undefined) {
        now = options.now;
      }

      if (now === undefined) {
        now = Date.now();
      } // how much time has passed (in seconds)


      var secondsPassed = (now - timestamp) / 1000; // in seconds

      var future = options.future || secondsPassed < 0;
      var nowLabel = getNowLabel(labels, (0, _LocaleDataStore.getLocaleData)(this.locale).now, (0, _LocaleDataStore.getLocaleData)(this.locale).long, future); // `custom` – A function of `{ elapsed, time, date, now, locale }`.
      //
      // Looks like `custom` function is deprecated and will be removed
      // in the next major version.
      //
      // If this function returns a value, then the `.format()` call will return that value.
      // Otherwise the relative date/time is formatted as usual.
      // This feature is currently not used anywhere and is here
      // just for providing the ultimate customization point
      // in case anyone would ever need that. Prefer using
      // `steps[step].format(value, locale)` instead.
      //

      if (style.custom) {
        var custom = style.custom({
          now: now,
          date: new Date(timestamp),
          time: timestamp,
          elapsed: secondsPassed,
          locale: this.locale
        });

        if (custom !== undefined) {
          // Won't return `timeToNextUpdate` here
          // because `custom()` seems deprecated.
          return custom;
        }
      } // Get the list of available time interval units.


      var units = getTimeIntervalMeasurementUnits( // Controlling `style.steps` through `style.units` seems to be deprecated:
      // create a new custom `style` instead.
      style.units, labels, nowLabel); // // If no available time unit is suitable, just output an empty string.
      // if (units.length === 0) {
      // 	console.error(`None of the "${units.join(', ')}" time units have been found in "${labelsType}" labels for "${this.locale}" locale.`)
      // 	return ''
      // }

      var round = options.round || style.round; // Choose the appropriate time measurement unit
      // and get the corresponding rounded time amount.

      var _getStep = (0, _getStep3.default)( // "gradation" is a legacy name for "steps".
      // For historical reasons, "approximate" steps are used by default.
      // In the next major version, there'll be no default for `steps`.
      style.gradation || style.steps || _roundMinute.default.steps, secondsPassed, {
        now: now,
        units: units,
        round: round,
        future: future,
        getNextStep: true
      }),
          _getStep2 = _slicedToArray(_getStep, 3),
          prevStep = _getStep2[0],
          step = _getStep2[1],
          nextStep = _getStep2[2];

      var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
        labels: labels,
        labelsType: labelsType,
        nowLabel: nowLabel,
        now: now,
        future: future,
        round: round
      }) || '';

      if (options.getTimeToNextUpdate) {
        var timeToNextUpdate = (0, _getTimeToNextUpdate.default)(timestamp, step, {
          nextStep: nextStep,
          prevStep: prevStep,
          now: now,
          future: future,
          round: round
        });
        return [formattedDate, timeToNextUpdate];
      }

      return formattedDate;
    }
  }, {
    key: "formatDateForStep",
    value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
      var _this = this;

      var labels = _ref2.labels,
          labelsType = _ref2.labelsType,
          nowLabel = _ref2.nowLabel,
          now = _ref2.now,
          future = _ref2.future,
          round = _ref2.round;

      // If no step matches, then output an empty string.
      if (!step) {
        return;
      }

      if (step.format) {
        return step.format(timestamp, this.locale, {
          formatAs: function formatAs(unit, value) {
            // Mimicks `Intl.RelativeTimeFormat.format()`.
            return _this.formatValue(value, unit, {
              labels: labels,
              future: future
            });
          },
          now: now,
          future: future
        });
      } // "unit" is now called "formatAs".


      var unit = step.unit || step.formatAs;

      if (!unit) {
        throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
      } // `Intl.RelativeTimeFormat` doesn't operate in "now" units.
      // Therefore, threat "now" as a special case.


      if (unit === 'now') {
        return nowLabel;
      } // Amount in units.


      var amount = Math.abs(secondsPassed) / (0, _getStepDenominator.default)(step); // Apply granularity to the time amount
      // (and fallback to the previous step
      //  if the first level of granularity
      //  isn't met by this amount)
      //
      // `granularity` — (advanced) Time interval value "granularity".
      // For example, it could be set to `5` for minutes to allow only 5-minute increments
      // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
      // Perhaps this feature will be removed because there seem to be no use cases
      // of it in the real world.
      //

      if (step.granularity) {
        // Recalculate the amount of seconds passed based on granularity
        amount = (0, _round.getRoundFunction)(round)(amount / step.granularity) * step.granularity;
      }

      var valueForFormatting = -1 * Math.sign(secondsPassed) * (0, _round.getRoundFunction)(round)(amount); // By default, this library formats a `0` in "past" mode,
      // unless `future: true` option is passed.
      // This is different to `relative-time-format`'s behavior
      // which formats a `0` in "future" mode by default, unless it's a `-0`.
      // So, convert `0` to `-0` if `future: true` option wasn't passed.
      // `=== 0` matches both `0` and `-0`.

      if (valueForFormatting === 0) {
        if (future) {
          valueForFormatting = 0;
        } else {
          valueForFormatting = -0;
        }
      }

      switch (labelsType) {
        case 'long':
        case 'short':
        case 'narrow':
          // Format the amount using `Intl.RelativeTimeFormat`.
          return this.getFormatter(labelsType).format(valueForFormatting, unit);

        default:
          // Format the amount.
          // (mimicks `Intl.RelativeTimeFormat` behavior for other time label styles)
          return this.formatValue(valueForFormatting, unit, {
            labels: labels,
            future: future
          });
      }
    }
    /**
     * Mimicks what `Intl.RelativeTimeFormat` does for additional locale styles.
     * @param  {number} value
     * @param  {string} unit
     * @param  {object} options.labels — Relative time labels.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default, but should have been `true` actually.
     * @return {string}
     */

  }, {
    key: "formatValue",
    value: function formatValue(value, unit, _ref3) {
      var labels = _ref3.labels,
          future = _ref3.future;
      return this.getFormattingRule(labels, unit, value, {
        future: future
      }).replace('{0}', this.formatNumber(Math.abs(value)));
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {object} formattingRules — Relative time labels for different units.
     * @param {string} unit - Time interval measurement unit.
     * @param {number} value - Time interval value.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default.
     * @return {string}
     * @example
     * // Returns "{0} days ago"
     * getFormattingRule(en.long, "day", -2, 'en')
     */

  }, {
    key: "getFormattingRule",
    value: function getFormattingRule(formattingRules, unit, value, _ref4) {
      var future = _ref4.future;
      // Passing the language is required in order to
      // be able to correctly classify the `value` as a number.
      var locale = this.locale;
      formattingRules = formattingRules[unit]; // Check for a special "compacted" rules case:
      // if formatting rules are the same for "past" and "future",
      // and also for all possible `value`s, then those rules are
      // stored as a single string.

      if (typeof formattingRules === 'string') {
        return formattingRules;
      } // Choose either "past" or "future" based on time `value` sign.
      // If "past" is same as "future" then they're stored as "other".
      // If there's only "other" then it's being collapsed.


      var pastOrFuture = value === 0 ? future ? 'future' : 'past' : value < 0 ? 'past' : 'future';
      var quantifierRules = formattingRules[pastOrFuture] || formattingRules; // Bundle size optimization technique.

      if (typeof quantifierRules === 'string') {
        return quantifierRules;
      } // Quantify `value`.


      var quantifier = this.getPluralRules().select(Math.abs(value)); // "other" rule is supposed to always be present.
      // If only "other" rule is present then "rules" is not an object and is a string.

      return quantifierRules[quantifier] || quantifierRules.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */

  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */

  }, {
    key: "getFormatter",
    value: function getFormatter(labelsType) {
      // `Intl.RelativeTimeFormat` instance creation is (hypothetically) assumed
      // a lengthy operation so the instances are cached and reused.
      return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
        style: labelsType
      }));
    }
    /**
     * Returns an `Intl.PluralRules` instance.
     * @return {object} `Intl.PluralRules` instance
     */

  }, {
    key: "getPluralRules",
    value: function getPluralRules() {
      // `Intl.PluralRules` instance creation is (hypothetically) assumed
      // a lengthy operation so the instances are cached and reused.
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
    /**
     * Gets localized labels for this type of labels.
     *
     * @param {(string|string[])} labelsType - Relative date/time labels type.
     *                                     If it's an array then all label types are tried
     *                                     until a suitable one is found.
     *
     * @returns {Object} Returns an object of shape { labelsType, labels }
     */

  }, {
    key: "getLabels",
    value: function getLabels() {
      var labelsType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      // Convert `labels` to an array.
      if (typeof labelsType === 'string') {
        labelsType = [labelsType];
      } // Supports legacy "tiny" and "mini-time" label styles.


      labelsType = labelsType.map(function (labelsType) {
        switch (labelsType) {
          case 'tiny':
          case 'mini-time':
            return 'mini';

          default:
            return labelsType;
        }
      }); // "long" labels type is the default one.
      // (it's always present for all languages)

      labelsType = labelsType.concat('long'); // Find a suitable labels type.

      var localeData = (0, _LocaleDataStore.getLocaleData)(this.locale);

      for (var _iterator = labelsType, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray) {
          if (_i2 >= _iterator.length) break;
          _ref5 = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done) break;
          _ref5 = _i2.value;
        }

        var _labelsType = _ref5;

        if (localeData[_labelsType]) {
          return {
            labelsType: _labelsType,
            labels: localeData[_labelsType]
          };
        }
      }
    }
  }]);

  return TimeAgo;
}();
/**
 * Default locale global variable.
 */


exports.default = TimeAgo;
var defaultLocale = 'en';
/**
 * Gets default locale.
 * @return  {string} locale
 */

TimeAgo.getDefaultLocale = function () {
  return defaultLocale;
};
/**
 * Sets default locale.
 * @param  {string} locale
 */


TimeAgo.setDefaultLocale = function (locale) {
  return defaultLocale = locale;
};
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */


TimeAgo.addDefaultLocale = function (localeData) {
  if (defaultLocaleHasBeenSpecified) {
    throw new Error('[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.');
  }

  defaultLocaleHasBeenSpecified = true;
  TimeAgo.setDefaultLocale(localeData.locale);
  TimeAgo.addLocale(localeData);
};

var defaultLocaleHasBeenSpecified;
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */

TimeAgo.addLocale = function (localeData) {
  (0, _LocaleDataStore.addLocaleData)(localeData);

  _relativeTimeFormat.default.addLocale(localeData);
};
/**
 * (legacy alias)
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 * @deprecated
 */


TimeAgo.locale = TimeAgo.addLocale;
/**
 * Adds custom labels to locale data.
 * @param {string} locale
 * @param {string} name
 * @param {object} labels
 */

TimeAgo.addLabels = function (locale, name, labels) {
  var localeData = (0, _LocaleDataStore.getLocaleData)(locale);

  if (!localeData) {
    (0, _LocaleDataStore.addLocaleData)({
      locale: locale
    });
    localeData = (0, _LocaleDataStore.getLocaleData)(locale); // throw new Error(`[javascript-time-ago] No data for locale "${locale}"`)
  }

  localeData[name] = labels;
}; // Normalizes `.format()` `time` argument.


function getTimestamp(input) {
  if (input.constructor === Date || isMockedDate(input)) {
    return input.getTime();
  }

  if (typeof input === 'number') {
    return input;
  } // For some weird reason istanbul doesn't see this `throw` covered.

  /* istanbul ignore next */


  throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
} // During testing via some testing libraries `Date`s aren't actually `Date`s.
// https://github.com/catamphetamine/javascript-time-ago/issues/22


function isMockedDate(object) {
  return _typeof(object) === 'object' && typeof object.getTime === 'function';
} // Get available time interval measurement units.


function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
  // Get all time interval measurement units that're available
  // in locale data for a given time labels style.
  var units = Object.keys(labels); // `now` unit is handled separately and is shipped in its own `now.json` file.
  // `now.json` isn't present for all locales, so it could be substituted with
  // ".second.current".
  // Add `now` unit if it's available in locale data.

  if (nowLabel) {
    units.push('now');
  } // If only a specific set of available time measurement units can be used
  // then only those units are allowed (if they're present in locale data).


  if (allowedUnits) {
    units = allowedUnits.filter(function (unit) {
      return unit === 'now' || units.indexOf(unit) >= 0;
    });
  }

  return units;
}

function getNowLabel(labels, nowLabels, longLabels, future) {
  var nowLabel = labels.now || nowLabels && nowLabels.now; // Specific "now" message form extended locale data (if present).

  if (nowLabel) {
    // Bundle size optimization technique.
    if (typeof nowLabel === 'string') {
      return nowLabel;
    } // Not handling `value === 0` as `localeData.now.current` here
    // because it wouldn't make sense: "now" is a moment,
    // so one can't possibly differentiate between a
    // "previous" moment, a "current" moment and a "next moment".
    // It can only be differentiated between "past" and "future".


    if (future) {
      return nowLabel.future;
    } else {
      return nowLabel.past;
    }
  } // Use ".second.current" as "now" message.


  if (longLabels && longLabels.second && longLabels.second.current) {
    return longLabels.second.current;
  }
}

var OBJECT_CONSTRUCTOR = {}.constructor;

function isObject(object) {
  return _typeof(object) !== undefined && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}

function isStyle(variable) {
  return typeof variable === 'string' || isStyleObject(variable);
}

function isStyleObject(object) {
  return isObject(object) && (Array.isArray(object.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(object.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(object.flavour) || typeof object.flavour === 'string' || Array.isArray(object.labels) || typeof object.labels === 'string' || // `units` property is deprecated.
  Array.isArray(object.units) || // `custom` property is deprecated.
  typeof object.custom === 'function');
}
//# sourceMappingURL=TimeAgo.js.map

/***/ }),

/***/ 45793:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A basic in-memory cache.
 *
 * import Cache from 'javascript-time-ago/Cache'
 * const cache = new Cache()
 * const object = cache.get('key1', 'key2', ...) || cache.put('key1', 'key2', ..., createObject())
 */
var Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _classCallCheck(this, Cache);

    _defineProperty(this, "cache", {});
  }

  _createClass(Cache, [{
    key: "get",
    value: function get() {
      var cache = this.cache;

      for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }

      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];

        if (_typeof(cache) !== 'object') {
          return;
        }

        cache = cache[key];
      }

      return cache;
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      var value = keys.pop();
      var lastKey = keys.pop();
      var cache = this.cache;

      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var key = keys[_i2];

        if (_typeof(cache[key]) !== 'object') {
          cache[key] = {};
        }

        cache = cache[key];
      }

      return cache[lastKey] = value;
    }
  }]);

  return Cache;
}();

exports.default = Cache;
//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 91659:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = chooseLocale;
exports.intlDateTimeFormatSupportedLocale = intlDateTimeFormatSupportedLocale;
exports.intlDateTimeFormatSupported = intlDateTimeFormatSupported;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Chooses the most appropriate locale
 * (one of the registered ones)
 * based on the list of preferred `locales` supplied by the user.
 *
 * @param {string[]} locales - the list of preferable locales (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)).
 * @param {Function} isLocaleDataAvailable - tests if a locale is available.
 *
 * @returns {string} The most suitable locale.
 *
 * @example
 * // Returns 'en'
 * chooseLocale(['en-US'], undefined, (locale) => locale === 'ru' || locale === 'en')
 */
function chooseLocale(locales, isLocaleDataAvailable) {
  // This is not an intelligent algorithm,
  // but it will do for this library's case.
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var locale = _ref;

    if (isLocaleDataAvailable(locale)) {
      return locale;
    }

    var parts = locale.split('-');

    while (parts.length > 1) {
      parts.pop();
      locale = parts.join('-');

      if (isLocaleDataAvailable(locale)) {
        return locale;
      }
    }
  }

  throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(', ')));
}
/**
 * Whether can use `Intl.DateTimeFormat` for these `locales`.
 * Returns the first suitable one.
 * @param  {(string|string[])} locales
 * @return {?string} The first locale that can be used.
 */


function intlDateTimeFormatSupportedLocale(locales) {
  /* istanbul ignore else */
  if (intlDateTimeFormatSupported()) {
    return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
  }
}
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */


function intlDateTimeFormatSupported() {
  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".

  /* istanbul ignore next */
  var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof(Intl)) === 'object';
  return isIntlAvailable && typeof Intl.DateTimeFormat === 'function';
}
//# sourceMappingURL=locale.js.map

/***/ }),

/***/ 22535:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRoundFunction = getRoundFunction;
exports.getDiffRatioToNextRoundedNumber = getDiffRatioToNextRoundedNumber;

function getRoundFunction(round) {
  switch (round) {
    case 'floor':
      return Math.floor;

    default:
      return Math.round;
  }
} // For non-negative numbers.


function getDiffRatioToNextRoundedNumber(round) {
  switch (round) {
    case 'floor':
      // Math.floor(x) = x
      // Math.floor(x + 1) = x + 1
      return 1;

    default:
      // Math.round(x) = x
      // Math.round(x + 0.5) = x + 1
      return 0.5;
  }
}
//# sourceMappingURL=round.js.map

/***/ }),

/***/ 6531:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _units = __webpack_require__(69227);

// "factor" is a legacy property.
// Developers shouldn't need to use it in their custom steps.
// "threshold" is a legacy name of "min".
// Developers should use "min" property name instead of "threshold".
// "threshold_for_idOrUnit: value" is a legacy way of specifying "min: { id: value }".
// Developers should use "min" property instead of "threshold".
// just now
// 1 minute ago
// 2 minutes ago
// 5 minutes ago
// 10 minutes ago
// 15 minutes ago
// 20 minutes ago
// …
// 50 minutes ago
// an hour ago
// 2 hours ago
// …
// 20 hours ago
// a day ago
// 2 days ago
// 5 days ago
// a week ago
// 2 weeks ago
// 3 weeks ago
// a month ago
// 2 months ago
// 4 months ago
// a year ago
// 2 years ago
// …
var _default = [{
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "now" labels are used for formatting the output.
  unit: 'now'
}, {
  // When the language doesn't support `now` unit,
  // the first step is ignored, and it uses this `second` unit.
  threshold: 1,
  // `threshold_for_now` should be the same as `threshold` on minutes.
  threshold_for_now: 45.5,
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "second" labels are used for formatting the output.
  unit: 'second'
}, {
  // `threshold` should be the same as `threshold_for_now` on seconds.
  threshold: 45.5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: _units.minute,
  // "minute" labels are used for formatting the output.
  unit: 'minute'
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * _units.minute,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: _units.minute,
  // "minute" labels are used for formatting the output.
  unit: 'minute'
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * _units.minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * _units.hour,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: 'half-hour'
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * _units.minute,
  threshold_for_minute: 52.5 * _units.minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: _units.hour,
  // "hour" labels are used for formatting the output.
  unit: 'hour'
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * _units.day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: _units.day,
  // "day" labels are used for formatting the output.
  unit: 'day'
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * _units.day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: _units.week,
  // "week" labels are used for formatting the output.
  unit: 'week'
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * _units.week,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: _units.month,
  // "month" labels are used for formatting the output.
  unit: 'month'
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * _units.month,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: _units.year,
  // "year" labels are used for formatting the output.
  unit: 'year'
}];
exports.default = _default;
//# sourceMappingURL=approximate.js.map

/***/ }),

/***/ 46266:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getStep;

var _getStepDenominator = _interopRequireDefault(__webpack_require__(95602));

var _getStepMinTime = _interopRequireDefault(__webpack_require__(94005));

var _round = __webpack_require__(22535);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Finds an appropriate `step` of `steps` for the time interval (in seconds).
 *
 * @param {Object[]} steps - Time formatting steps.
 *
 * @param {number} secondsPassed - Time interval (in seconds).
 *                                 `< 0` for past dates and `> 0` for future dates.
 *
 * @param {number} options.now - Current timestamp.
 *
 * @param {boolean} [options.future] - Whether the date should be formatted as a future one
 *                                     instead of a past one.
 *
 * @param {string} [options.round] - (undocumented) Rounding mechanism.
 *
 * @param {string[]} [options.units] - A list of allowed time units.
 *                                     (Example: ['second', 'minute', 'hour', …])
 *
 * @param {boolean} [options.getNextStep] - Pass true to return `[step, nextStep]` instead of just `step`.
 *
 * @return {Object|Object[]} [step] — Either a `step` or `[prevStep, step, nextStep]`.
 */
function getStep(steps, secondsPassed, _ref) {
  var now = _ref.now,
      future = _ref.future,
      round = _ref.round,
      units = _ref.units,
      getNextStep = _ref.getNextStep;
  // Ignore steps having not-supported time units in `formatAs`.
  steps = filterStepsByUnits(steps, units);

  var step = _getStep(steps, secondsPassed, {
    now: now,
    future: future,
    round: round
  });

  if (getNextStep) {
    if (step) {
      var prevStep = steps[steps.indexOf(step) - 1];
      var nextStep = steps[steps.indexOf(step) + 1];
      return [prevStep, step, nextStep];
    }

    return [undefined, undefined, steps[0]];
  }

  return step;
}

function _getStep(steps, secondsPassed, _ref2) {
  var now = _ref2.now,
      future = _ref2.future,
      round = _ref2.round;

  // If no steps fit the conditions then return nothing.
  if (steps.length === 0) {
    return;
  } // Find the most appropriate step.


  var i = getStepIndex(steps, secondsPassed, {
    now: now,
    future: future || secondsPassed < 0,
    round: round
  }); // If no step is applicable the return nothing.

  if (i === -1) {
    return;
  }

  var step = steps[i]; // Apply granularity to the time amount
  // (and fall back to the previous step
  //  if the first level of granularity
  //  isn't met by this amount)

  if (step.granularity) {
    // Recalculate the amount of seconds passed based on `granularity`.
    var secondsPassedGranular = (0, _round.getRoundFunction)(round)(Math.abs(secondsPassed) / (0, _getStepDenominator.default)(step) / step.granularity) * step.granularity; // If the granularity for this step is too high,
    // then fall back to the previous step.
    // (if there is any previous step)

    if (secondsPassedGranular === 0 && i > 0) {
      return steps[i - 1];
    }
  }

  return step;
}
/**
 * Iterates through steps until it finds the maximum one satisfying the `minTime` threshold.
 * @param  {Object} steps - Steps.
 * @param  {number} secondsPassed - How much seconds have passed since the date till `now`.
 * @param  {number} options.now - Current timestamp.
 * @param  {boolean} options.future - Whether the time interval should be formatted as a future one.
 * @param  {number} [i] - Gradation step currently being tested.
 * @return {number} Gradation step index.
 */


function getStepIndex(steps, secondsPassed, options) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minTime = (0, _getStepMinTime.default)(steps[i], _objectSpread({
    prevStep: steps[i - 1],
    timestamp: options.now - secondsPassed * 1000
  }, options)); // If `minTime` isn't defined or deduceable for this step, then stop.

  if (minTime === undefined) {
    return i - 1;
  } // If the `minTime` threshold for moving from previous step
  // to this step is too high then return the previous step.


  if (Math.abs(secondsPassed) < minTime) {
    return i - 1;
  } // If it's the last step then return it.


  if (i === steps.length - 1) {
    return i;
  } // Move to the next step.


  return getStepIndex(steps, secondsPassed, options, i + 1);
}
/**
 * Leaves only allowed steps.
 * @param  {Object[]} steps
 * @param  {string[]} units - Allowed time units.
 * @return {Object[]}
 */


function filterStepsByUnits(steps, units) {
  return steps.filter(function (_ref3) {
    var unit = _ref3.unit,
        formatAs = _ref3.formatAs;
    // "unit" is now called "formatAs".
    unit = unit || formatAs; // If this step has a `unit` defined
    // then this `unit` must be in the list of allowed `units`.

    if (unit) {
      return units.indexOf(unit) >= 0;
    } // A step is not required to specify a `unit`:
    // alternatively, it could specify `format()`.
    // (see "twitter" style for an example)


    return true;
  });
}
//# sourceMappingURL=getStep.js.map

/***/ }),

/***/ 95602:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getStepDenominator;

var _units = __webpack_require__(69227);

function getStepDenominator(step) {
  // `factor` is a legacy property.
  if (step.factor !== undefined) {
    return step.factor;
  } // "unit" is now called "formatAs".


  return (0, _units.getSecondsInUnit)(step.unit || step.formatAs) || 1;
}
//# sourceMappingURL=getStepDenominator.js.map

/***/ }),

/***/ 94005:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getStepMinTime;

var _units = __webpack_require__(69227);

var _round = __webpack_require__(22535);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getStepMinTime(step, _ref) {
  var prevStep = _ref.prevStep,
      timestamp = _ref.timestamp,
      now = _ref.now,
      future = _ref.future,
      round = _ref.round;
  var minTime; // "threshold_for_xxx" is a legacy property.

  if (prevStep) {
    if (prevStep.id || prevStep.unit) {
      minTime = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
  }

  if (minTime === undefined) {
    // "threshold" is a legacy property.
    if (step.threshold !== undefined) {
      // "threshold" is a legacy name for "minTime".
      minTime = step.threshold; // "threshold" function is deprecated.

      if (typeof minTime === 'function') {
        minTime = minTime(now, future);
      }
    }
  }

  if (minTime === undefined) {
    minTime = step.minTime;
  } // A deprecated way of specifying a different threshold
  // depending on the previous step's unit.


  if (_typeof(minTime) === 'object') {
    if (prevStep && prevStep.id && minTime[prevStep.id] !== undefined) {
      minTime = minTime[prevStep.id];
    } else {
      minTime = minTime.default;
    }
  }

  if (typeof minTime === 'function') {
    minTime = minTime(timestamp, {
      future: future,
      getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
        return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
          round: round
        });
      }
    });
  } // Evaluate the `test()` function.
  // `test()` function is deprecated.


  if (minTime === undefined) {
    if (step.test) {
      if (step.test(timestamp, {
        now: now,
        future: future
      })) {
        // `0` threshold always passes.
        minTime = 0;
      } else {
        // `MAX_SAFE_INTEGER` threshold won't ever pass in real life.
        minTime = 9007199254740991; // Number.MAX_SAFE_INTEGER
      }
    }
  }

  if (minTime === undefined) {
    if (prevStep) {
      if (step.formatAs && prevStep.formatAs) {
        minTime = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
          round: round
        });
      }
    } else {
      // The first step's `minTime` is `0` by default.
      minTime = 0;
    }
  } // Warn if no `minTime` was defined or could be deduced.


  if (minTime === undefined) {
    console.warn('[javascript-time-ago] A step should specify `minTime`:\n' + JSON.stringify(step, null, 2));
  }

  return minTime;
}

function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
  var round = _ref2.round;
  var toUnitAmount = (0, _units.getSecondsInUnit)(toUnit); // if (!fromUnit) {
  // 	return toUnitAmount;
  // }
  // if (!fromUnit) {
  // 	fromUnit = getPreviousUnitFor(toUnit)
  // }

  var fromUnitAmount;

  if (fromUnit === 'now') {
    fromUnitAmount = (0, _units.getSecondsInUnit)(toUnit);
  } else {
    fromUnitAmount = (0, _units.getSecondsInUnit)(fromUnit);
  }

  if (toUnitAmount !== undefined && fromUnitAmount !== undefined) {
    return toUnitAmount - fromUnitAmount * (1 - (0, _round.getDiffRatioToNextRoundedNumber)(round));
  }
}
//# sourceMappingURL=getStepMinTime.js.map

/***/ }),

/***/ 79576:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getTimeToNextUpdate;
exports.getStepChangesAt = getStepChangesAt;
exports.getTimeToStepChange = getTimeToStepChange;
exports.INFINITY = void 0;

var _getTimeToNextUpdateForUnit2 = _interopRequireDefault(__webpack_require__(98773));

var _getStepMinTime = _interopRequireDefault(__webpack_require__(94005));

var _round = __webpack_require__(22535);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A thousand years is practically a metaphor for "infinity".
var YEAR = 365 * 24 * 60 * 60 * 1000;
var INFINITY = 1000 * YEAR;
/**
 * Gets the time to next update for a date and a step.
 * @param  {number} date — The date passed to `.format()`, converted to a timestamp.
 * @param  {object} step
 * @param  {object} [options.previousStep]
 * @param  {object} [options.nextStep]
 * @param  {number} options.now
 * @param  {boolean} options.future
 * @param  {string} [options.round] - (undocumented) Rounding mechanism.
 * @return {number} [timeToNextUpdate]
 */

exports.INFINITY = INFINITY;

function getTimeToNextUpdate(date, step, _ref) {
  var prevStep = _ref.prevStep,
      nextStep = _ref.nextStep,
      now = _ref.now,
      future = _ref.future,
      round = _ref.round;
  var timestamp = date.getTime ? date.getTime() : date;

  var getTimeToNextUpdateForUnit = function getTimeToNextUpdateForUnit(unit) {
    return (0, _getTimeToNextUpdateForUnit2.default)(unit, timestamp, {
      now: now,
      round: round
    });
  }; // For future dates, steps move from the last one to the first one,
  // while for past dates, steps move from the first one to the last one,
  // due to the fact that time flows in one direction,
  // and future dates' interval naturally becomes smaller
  // while past dates' interval naturally grows larger.
  //
  // For future dates, it's the transition
  // from the current step to the previous step,
  // therefore check the `minTime` of the current step.
  //
  // For past dates, it's the transition
  // from the current step to the next step,
  // therefore check the `minTime` of the next step.
  //


  var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
    future: future,
    now: now,
    round: round,
    prevStep: future ? prevStep : step // isFirstStep: future && isFirstStep

  });

  if (timeToStepChange === undefined) {
    // Can't reliably determine "time to next update"
    // if not all of the steps provide `minTime`.
    return;
  }

  var timeToNextUpdate;

  if (step) {
    if (step.getTimeToNextUpdate) {
      timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
        getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit,
        getRoundFunction: _round.getRoundFunction,
        now: now,
        future: future,
        round: round
      });
    }

    if (timeToNextUpdate === undefined) {
      // "unit" is now called "formatAs".
      var unit = step.unit || step.formatAs;

      if (unit) {
        // For some units, like "now", there's no defined amount of seconds in them.
        // In such cases, `getTimeToNextUpdateForUnit()` returns `undefined`,
        // and the next step's `minTime` could be used to calculate the update interval:
        // it will just assume that the label never changes for this step.
        timeToNextUpdate = getTimeToNextUpdateForUnit(unit);
      }
    }
  }

  if (timeToNextUpdate === undefined) {
    return timeToStepChange;
  }

  return Math.min(timeToNextUpdate, timeToStepChange);
}

function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
  var now = _ref2.now,
      future = _ref2.future,
      round = _ref2.round,
      prevStep = _ref2.prevStep;
  // The first step's `minTime` is `0` by default.
  // It doesn't "change" steps at zero point
  // but it does change the wording when switching
  // from "future" to "past": "in ..." -> "... ago".
  // Therefore, the label should be updated at zero-point too.
  var minTime = (0, _getStepMinTime.default)(currentOrNextStep, {
    timestamp: timestamp,
    now: now,
    future: future,
    round: round,
    prevStep: prevStep
  });

  if (minTime === undefined) {
    return;
  }

  if (future) {
    // The step changes to the previous step
    // as soon as `timestamp - now` becomes
    // less than the `minTime` of the current step:
    // `timestamp - now === minTime - 1`
    // => `now === timestamp - minTime + 1`.
    return timestamp - minTime * 1000 + 1;
  } else {
    // The step changes to the next step
    // as soon as `now - timestamp` becomes
    // equal to `minTime` of the next step:
    // `now - timestamp === minTime`
    // => `now === timestamp + minTime`.
    // This is a special case when double-update could be skipped.
    if (minTime === 0 && timestamp === now) {
      return INFINITY;
    }

    return timestamp + minTime * 1000;
  }
}

function getTimeToStepChange(step, timestamp, _ref3) {
  var now = _ref3.now,
      future = _ref3.future,
      round = _ref3.round,
      prevStep = _ref3.prevStep;

  if (step) {
    var stepChangesAt = getStepChangesAt(step, timestamp, {
      now: now,
      future: future,
      round: round,
      prevStep: prevStep
    });

    if (stepChangesAt === undefined) {
      return;
    }

    return stepChangesAt - now;
  } else {
    if (future) {
      // No step.
      // Update right after zero point, when it changes from "future" to "past".
      return timestamp - now + 1;
    } else {
      // The last step doesn't ever change when `date` is in the past.
      return INFINITY;
    }
  }
}
//# sourceMappingURL=getTimeToNextUpdate.js.map

/***/ }),

/***/ 98773:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getTimeToNextUpdateForUnit;

var _units = __webpack_require__(69227);

var _round = __webpack_require__(22535);

/**
 * Gets the time to next update for a step with a time unit defined.
 * @param  {string} unit
 * @param  {number} date — The date passed to `.format()`, converted to a timestamp.
 * @param  {number} options.now
 * @param  {string} [options.round] — (undocumented) Rounding mechanism.
 * @return {number} [timeToNextUpdate]
 */
function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
  var now = _ref.now,
      round = _ref.round;

  // For some units, like "now", there's no defined amount of seconds in them.
  if (!(0, _units.getSecondsInUnit)(unit)) {
    // If there's no amount of seconds defined for this unit
    // then the update interval can't be determined reliably.
    return;
  }

  var unitDenominator = (0, _units.getSecondsInUnit)(unit) * 1000;
  var future = timestamp > now;
  var preciseAmount = Math.abs(timestamp - now);
  var roundedAmount = (0, _round.getRoundFunction)(round)(preciseAmount / unitDenominator) * unitDenominator;

  if (future) {
    if (roundedAmount > 0) {
      // Amount decreases with time.
      return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round, unitDenominator);
    } else {
      // Refresh right after the zero point,
      // when "future" changes to "past".
      return preciseAmount - roundedAmount + 1;
    }
  } // Amount increases with time.


  return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round, unitDenominator);
}

function getDiffToNextRoundedNumber(round, unitDenominator) {
  return (0, _round.getDiffRatioToNextRoundedNumber)(round) * unitDenominator;
}

function getDiffToPreviousRoundedNumber(round, unitDenominator) {
  return (1 - (0, _round.getDiffRatioToNextRoundedNumber)(round)) * unitDenominator + 1;
}
//# sourceMappingURL=getTimeToNextUpdateForUnit.js.map

/***/ }),

/***/ 88597:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDate = getDate;

// Looks like this one's deprecated.
// /**
//  * Returns a step corresponding to the unit.
//  * @param  {Object[]} steps
//  * @param  {string} unit
//  * @return {?Object}
//  */
// export function getStepForUnit(steps, unit) {
// 	for (const step of steps) {
// 		if (step.unit === unit) {
// 			return step
// 		}
// 	}
// }
// Looks like this one won't be used in the next major version.

/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 29602:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "approximate", ({
  enumerable: true,
  get: function get() {
    return _approximate.default;
  }
}));
Object.defineProperty(exports, "convenient", ({
  enumerable: true,
  get: function get() {
    return _approximate.default;
  }
}));
Object.defineProperty(exports, "round", ({
  enumerable: true,
  get: function get() {
    return _round.default;
  }
}));
Object.defineProperty(exports, "canonical", ({
  enumerable: true,
  get: function get() {
    return _round.default;
  }
}));
Object.defineProperty(exports, "minute", ({
  enumerable: true,
  get: function get() {
    return _units.minute;
  }
}));
Object.defineProperty(exports, "hour", ({
  enumerable: true,
  get: function get() {
    return _units.hour;
  }
}));
Object.defineProperty(exports, "day", ({
  enumerable: true,
  get: function get() {
    return _units.day;
  }
}));
Object.defineProperty(exports, "week", ({
  enumerable: true,
  get: function get() {
    return _units.week;
  }
}));
Object.defineProperty(exports, "month", ({
  enumerable: true,
  get: function get() {
    return _units.month;
  }
}));
Object.defineProperty(exports, "year", ({
  enumerable: true,
  get: function get() {
    return _units.year;
  }
}));
Object.defineProperty(exports, "getDate", ({
  enumerable: true,
  get: function get() {
    return _helpers.getDate;
  }
}));

var _approximate = _interopRequireDefault(__webpack_require__(6531));

var _round = _interopRequireDefault(__webpack_require__(16672));

var _units = __webpack_require__(69227);

var _helpers = __webpack_require__(88597);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 24314:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = _default;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This function is only used for backwards compatibility
// with legacy code that uses the older versions of this library.
function _default(step_) {
  var step = _objectSpread({}, step_);

  if (step.minTime !== undefined) {
    if (_typeof(step.minTime) === 'object') {
      var _arr = Object.keys(step.minTime);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (key === 'default') {
          step.threshold = step.minTime.default;
        } else {
          step["threshold_for_".concat(key)] = step.minTime[key];
        }
      }
    } else {
      step.threshold = step.minTime;
    }

    delete step.minTime;
  }

  if (step.formatAs) {
    step.unit = step.formatAs;
    delete step.formatAs;
  }

  return step;
}
//# sourceMappingURL=renameLegacyProperties.js.map

/***/ }),

/***/ 16672:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
var _default = [{
  formatAs: 'now'
}, {
  formatAs: 'second'
}, {
  formatAs: 'minute'
}, {
  formatAs: 'hour'
}, {
  formatAs: 'day'
}, {
  formatAs: 'week'
}, {
  formatAs: 'month'
}, {
  formatAs: 'year'
}];
exports.default = _default;
//# sourceMappingURL=round.js.map

/***/ }),

/***/ 69227:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSecondsInUnit = getSecondsInUnit;
exports.year = exports.month = exports.week = exports.day = exports.hour = exports.minute = void 0;
var minute = 60; // in seconds

exports.minute = minute;
var hour = 60 * minute; // in seconds

exports.hour = hour;
var day = 24 * hour; // in seconds

exports.day = day;
var week = 7 * day; // in seconds
// https://www.quora.com/What-is-the-average-number-of-days-in-a-month

exports.week = week;
var month = 30.44 * day; // in seconds
// "400 years have 146097 days (taking into account leap year rules)"

exports.month = month;
var year = 146097 / 400 * day; // in seconds

exports.year = year;

function getSecondsInUnit(unit) {
  switch (unit) {
    case 'second':
      return 1;

    case 'minute':
      return minute;

    case 'hour':
      return hour;

    case 'day':
      return day;

    case 'week':
      return week;

    case 'month':
      return month;

    case 'year':
      return year;
  }
} // export function getPreviousUnitFor(unit) {
// 	switch (unit) {
// 		case 'second':
// 			return 'now'
// 		case 'minute':
// 			return 'second'
// 		case 'hour':
// 			return 'minute'
// 		case 'day':
// 			return 'hour'
// 		case 'week':
// 			return 'day'
// 		case 'month':
// 			return 'week'
// 		case 'year':
// 			return 'month'
// 	}
// }
//# sourceMappingURL=units.js.map

/***/ }),

/***/ 65098:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _approximate = _interopRequireDefault(__webpack_require__(6531));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// "gradation" is a legacy name for "steps".
// It's here just for legacy compatibility.
// Use "steps" name instead.
// "flavour" is a legacy name for "labels".
// It's here just for legacy compatibility.
// Use "labels" name instead.
// "units" is a legacy property.
// It's here just for legacy compatibility.
// Developers shouldn't need to use it in their custom styles.
var _default = {
  gradation: _approximate.default,
  flavour: 'long',
  units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};
exports.default = _default;
//# sourceMappingURL=approximate.js.map

/***/ }),

/***/ 9730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _approximate = _interopRequireDefault(__webpack_require__(6531));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// "gradation" is a legacy name for "steps".
// It's here just for legacy compatibility.
// Use "steps" name instead.
// "flavour" is a legacy name for "labels".
// It's here just for legacy compatibility.
// Use "labels" name instead.
// "units" is a legacy property.
// It's here just for legacy compatibility.
// Developers shouldn't need to use it in their custom styles.
// Similar to the default style but with "ago" omitted.
//
// just now
// 5 minutes
// 10 minutes
// 15 minutes
// 20 minutes
// an hour
// 2 hours
// …
// 20 hours
// 1 day
// 2 days
// a week
// 2 weeks
// 3 weeks
// a month
// 2 months
// 3 months
// 4 months
// a year
// 2 years
//
var _default = {
  gradation: _approximate.default,
  flavour: 'long-time',
  units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};
exports.default = _default;
//# sourceMappingURL=approximateTime.js.map

/***/ }),

/***/ 11100:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getStyleByName;

var _round = _interopRequireDefault(__webpack_require__(61921));

var _roundMinute = _interopRequireDefault(__webpack_require__(62024));

var _approximate = _interopRequireDefault(__webpack_require__(65098));

var _approximateTime = _interopRequireDefault(__webpack_require__(9730));

var _twitter = _interopRequireDefault(__webpack_require__(91881));

var _twitterNow = _interopRequireDefault(__webpack_require__(93000));

var _twitterMinute = _interopRequireDefault(__webpack_require__(26484));

var _twitterMinuteNow = _interopRequireDefault(__webpack_require__(42844));

var _twitterFirstMinute = _interopRequireDefault(__webpack_require__(72145));

var _mini = _interopRequireDefault(__webpack_require__(29569));

var _miniNow = _interopRequireDefault(__webpack_require__(17247));

var _miniMinute = _interopRequireDefault(__webpack_require__(88064));

var _miniMinuteNow = _interopRequireDefault(__webpack_require__(80171));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `approximate` style is deprecated.
// `approximateTime` style is deprecated.
function getStyleByName(style) {
  switch (style) {
    // "default" style name is deprecated.
    case 'default':
    case 'round':
      return _round.default;

    case 'round-minute':
      return _roundMinute.default;

    case 'approximate':
      return _approximate.default;
    // "time" style name is deprecated.

    case 'time':
    case 'approximate-time':
      return _approximateTime.default;

    case 'mini':
      return _mini.default;

    case 'mini-now':
      return _miniNow.default;

    case 'mini-minute':
      return _miniMinute.default;

    case 'mini-minute-now':
      return _miniMinuteNow.default;

    case 'twitter':
      return _twitter.default;

    case 'twitter-now':
      return _twitterNow.default;

    case 'twitter-minute':
      return _twitterMinute.default;

    case 'twitter-minute-now':
      return _twitterMinuteNow.default;

    case 'twitter-first-minute':
      return _twitterFirstMinute.default;

    default:
      // For historical reasons, the default style is "approximate".
      return _approximate.default;
  }
}
//# sourceMappingURL=getStyleByName.js.map

/***/ }),

/***/ 29569:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = {
  steps: [{
    formatAs: 'second'
  }, {
    formatAs: 'minute'
  }, {
    formatAs: 'hour'
  }, {
    formatAs: 'day'
  }, {
    formatAs: 'month'
  }, {
    formatAs: 'year'
  }],
  labels: [// "mini" labels are only defined for a few languages.
  'mini', // "short-time" labels are only defined for a few languages.
  'short-time', // "narrow" and "short" labels are defined for all languages.
  // "narrow" labels can sometimes be weird (like "+5d."),
  // but "short" labels have the " ago" part, so "narrow" seem
  // more appropriate.
  // "short" labels would have been more appropriate if they
  // didn't have the " ago" part, hence the "short-time" above.
  'narrow', // Since "narrow" labels are always present, "short" element
  // of this array can be removed.
  'short']
};
exports.default = _default;
//# sourceMappingURL=mini.js.map

/***/ }),

/***/ 88064:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _mini = _interopRequireDefault(__webpack_require__(29569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _mini.default, {
  // Skip "seconds".
  steps: _mini.default.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
});

exports.default = _default;
//# sourceMappingURL=miniMinute.js.map

/***/ }),

/***/ 80171:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _miniMinute = _interopRequireDefault(__webpack_require__(88064));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _miniMinute.default, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(_miniMinute.default.steps)
});

exports.default = _default;
//# sourceMappingURL=miniMinuteNow.js.map

/***/ }),

/***/ 17247:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _mini = _interopRequireDefault(__webpack_require__(29569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _mini.default, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(_mini.default.steps)
});

exports.default = _default;
//# sourceMappingURL=miniNow.js.map

/***/ }),

/***/ 44491:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = _default;

var _renameLegacyProperties = _interopRequireDefault(__webpack_require__(24314));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This function is only used for backwards compatibility
// with legacy code that uses the older versions of this library.
function _default(style_) {
  var style = _objectSpread({}, style_);

  if (style.steps) {
    style.gradation = style.steps.map(_renameLegacyProperties.default);
    delete style.steps;
  }

  if (style.labels) {
    style.flavour = style.labels;
    delete style.labels;
  }

  return style;
}
//# sourceMappingURL=renameLegacyProperties.js.map

/***/ }),

/***/ 61921:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _round = _interopRequireDefault(__webpack_require__(16672));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// 3 weeks ago
// 4 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
//
var _default = {
  steps: _round.default,
  labels: 'long'
};
exports.default = _default;
//# sourceMappingURL=round.js.map

/***/ }),

/***/ 62024:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _round = _interopRequireDefault(__webpack_require__(61921));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// just now
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// 3 weeks ago
// 4 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
//
var _default = _objectSpread({}, _round.default, {
  // Skip "seconds".
  steps: _round.default.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
});

exports.default = _default;
//# sourceMappingURL=roundMinute.js.map

/***/ }),

/***/ 91881:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _steps = __webpack_require__(29602);

var _locale = __webpack_require__(91659);

var _renameLegacyProperties = _interopRequireDefault(__webpack_require__(44491));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For compatibility with the old versions of this library.
// Twitter-style relative date/time formatting.
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
//
// Seconds, minutes or hours are shown for shorter intervals,
// and longer intervals are formatted using full date format.
var steps = [{
  formatAs: 'second'
}, {
  formatAs: 'minute'
}, {
  formatAs: 'hour'
}]; // A cache for `Intl.DateTimeFormat` formatters
// for various locales (is a global variable).

var formatters = {}; // Starting from day intervals, output month and day.

var monthAndDay = {
  minTime: function minTime(timestamp, _ref) {
    var future = _ref.future,
        getMinTimeForUnit = _ref.getMinTimeForUnit;
    // Returns `23.5 * 60 * 60` when `round` is "round",
    // and `24 * 60 * 60` when `round` is "floor".
    return getMinTimeForUnit('day');
  },
  format: function format(value, locale) {
    /* istanbul ignore else */
    if (!formatters[locale]) {
      formatters[locale] = {};
    }
    /* istanbul ignore else */


    if (!formatters[locale].dayMonth) {
      // "Apr 11" (MMMd)
      formatters[locale].dayMonth = new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric'
      });
    } // Output month and day.


    return formatters[locale].dayMonth.format((0, _steps.getDate)(value));
  }
}; // If the `date` happened/happens outside of current year,
// then output day, month and year.
// The interval should be such that the `date` lies outside of the current year.

var yearMonthAndDay = {
  minTime: function minTime(timestamp, _ref2) {
    var future = _ref2.future;

    if (future) {
      // January 1, 00:00, of the `date`'s year is right after
      // the maximum `now` for formatting a future date:
      // When `now` is before that date, the `date` is formatted as "day/month/year" (this step),
      // When `now` is equal to or after that date, the `date` is formatted as "day/month" (another step).
      // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
      // The date is right after the maximum `now` for formatting a future date,
      // so subtract 1 millisecond from it.
      var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1; // Return `minTime` (in seconds).

      return (timestamp - maxFittingNow) / 1000;
    } else {
      // January 1, 00:00, of the year following the `date`'s year
      // is the minimum `now` for formatting a past date:
      // When `now` is before that date, the `date` is formatted as "day/month" (another step),
      // When `now` is equal to or after that date, the `date` is formatted as "day/month/year" (this step).
      // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
      var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime(); // Return `minTime` (in seconds).

      return (minFittingNow - timestamp) / 1000;
    }
  },
  format: function format(value, locale) {
    /* istanbul ignore if */
    if (!formatters[locale]) {
      formatters[locale] = {};
    }
    /* istanbul ignore else */


    if (!formatters[locale].dayMonthYear) {
      // "Apr 11, 2017" (yMMMd)
      formatters[locale].dayMonthYear = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } // Output day, month and year.


    return formatters[locale].dayMonthYear.format((0, _steps.getDate)(value));
  }
}; // If `Intl.DateTimeFormat` is supported,
// then longer time intervals will be formatted as dates.

/* istanbul ignore else */

if ((0, _locale.intlDateTimeFormatSupported)()) {
  steps.push(monthAndDay, yearMonthAndDay);
} // Otherwise, if `Intl.DateTimeFormat` is not supported,
// which could be the case when using Internet Explorer,
// then simply mimick "round" steps.
else {
    steps.push({
      formatAs: 'day'
    }, {
      formatAs: 'week'
    }, {
      formatAs: 'month'
    }, {
      formatAs: 'year'
    });
  }

var _default = {
  steps: steps,
  labels: [// "mini" labels are only defined for a few languages.
  'mini', // "short-time" labels are only defined for a few languages.
  'short-time', // "narrow" and "short" labels are defined for all languages.
  // "narrow" labels can sometimes be weird (like "+5d."),
  // but "short" labels have the " ago" part, so "narrow" seem
  // more appropriate.
  // "short" labels would have been more appropriate if they
  // didn't have the " ago" part, hence the "short-time" above.
  'narrow', // Since "narrow" labels are always present, "short" element
  // of this array can be removed.
  'short']
};
exports.default = _default;
//# sourceMappingURL=twitter.js.map

/***/ }),

/***/ 72145:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _units = __webpack_require__(69227);

var _twitter = _interopRequireDefault(__webpack_require__(91881));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _twitter.default, {
  // Skip "seconds".
  steps: _twitter.default.steps.filter(function (step) {
    return step.formatAs !== 'second';
  }) // Start showing `1m` from the first minute.
  .map(function (step) {
    return step.formatAs === 'minute' ? _objectSpread({}, step, {
      minTime: _units.minute
    }) : step;
  })
});

exports.default = _default;
//# sourceMappingURL=twitterFirstMinute.js.map

/***/ }),

/***/ 26484:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _twitter = _interopRequireDefault(__webpack_require__(91881));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _twitter.default, {
  // Skip "seconds".
  steps: _twitter.default.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
});

exports.default = _default;
//# sourceMappingURL=twitterMinute.js.map

/***/ }),

/***/ 42844:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _twitterMinute = _interopRequireDefault(__webpack_require__(26484));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _twitterMinute.default, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(_twitterMinute.default.steps)
});

exports.default = _default;
//# sourceMappingURL=twitterMinuteNow.js.map

/***/ }),

/***/ 93000:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _twitter = _interopRequireDefault(__webpack_require__(91881));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _twitter.default, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(_twitter.default.steps)
});

exports.default = _default;
//# sourceMappingURL=twitterNow.js.map

/***/ }),

/***/ 21331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(12902).default
exports.default = __webpack_require__(12902).default

var locale = __webpack_require__(91659)

exports.intlDateTimeFormatSupported = locale.intlDateTimeFormatSupported
exports.intlDateTimeFormatSupportedLocale = locale.intlDateTimeFormatSupportedLocale

/***/ }),

/***/ 21727:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale":"en","long":{"year":{"previous":"last year","current":"this year","next":"next year","past":{"one":"{0} year ago","other":"{0} years ago"},"future":{"one":"in {0} year","other":"in {0} years"}},"quarter":{"previous":"last quarter","current":"this quarter","next":"next quarter","past":{"one":"{0} quarter ago","other":"{0} quarters ago"},"future":{"one":"in {0} quarter","other":"in {0} quarters"}},"month":{"previous":"last month","current":"this month","next":"next month","past":{"one":"{0} month ago","other":"{0} months ago"},"future":{"one":"in {0} month","other":"in {0} months"}},"week":{"previous":"last week","current":"this week","next":"next week","past":{"one":"{0} week ago","other":"{0} weeks ago"},"future":{"one":"in {0} week","other":"in {0} weeks"}},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":{"one":"{0} hour ago","other":"{0} hours ago"},"future":{"one":"in {0} hour","other":"in {0} hours"}},"minute":{"current":"this minute","past":{"one":"{0} minute ago","other":"{0} minutes ago"},"future":{"one":"in {0} minute","other":"in {0} minutes"}},"second":{"current":"now","past":{"one":"{0} second ago","other":"{0} seconds ago"},"future":{"one":"in {0} second","other":"in {0} seconds"}}},"short":{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."}},"narrow":{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."}},"now":{"now":{"current":"now","future":"in a moment","past":"just now"}},"mini":{"year":"{0}yr","month":"{0}mo","week":"{0}wk","day":"{0}d","hour":"{0}h","minute":"{0}m","second":"{0}s","now":"now"},"short-time":{"year":"{0} yr.","month":"{0} mo.","week":"{0} wk.","day":{"one":"{0} day","other":"{0} days"},"hour":"{0} hr.","minute":"{0} min.","second":"{0} sec."},"long-time":{"year":{"one":"{0} year","other":"{0} years"},"month":{"one":"{0} month","other":"{0} months"},"week":{"one":"{0} week","other":"{0} weeks"},"day":{"one":"{0} day","other":"{0} days"},"hour":{"one":"{0} hour","other":"{0} hours"},"minute":{"one":"{0} minute","other":"{0} minutes"},"second":{"one":"{0} second","other":"{0} seconds"}}}');

/***/ }),

/***/ 23603:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDefaultLocale = getDefaultLocale;
exports.setDefaultLocale = setDefaultLocale;
exports.getLocaleData = getLocaleData;
exports.addLocaleData = addLocaleData;
exports.resolveLocale = resolveLocale;
// Fallback locale.
// (when not a single one of the supplied "preferred" locales is available)
var defaultLocale = 'en'; // For all locales added
// their relative time formatter messages will be stored here.

var localesData = {}; // According to the spec BCP 47 language tags are case-insensitive.
// https://tools.ietf.org/html/rfc5646

var lowercaseLocaleLookup = {};

function getDefaultLocale() {
  return defaultLocale;
}

function setDefaultLocale(locale) {
  defaultLocale = locale;
}
/**
 * Gets locale data previously added by `addLocaleData()`.
 * @return  {object} [localeData]
 */


function getLocaleData(locale) {
  return localesData[locale];
}
/**
 * Adds locale data.
 * Is called by `RelativeTimeFormat.addLocale(...)`.
 * @param  {object} localeData
 */


function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error('No locale data passed');
  } // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.


  localesData[localeData.locale] = localeData;
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
/**
 * Returns a locale for which locale data has been added
 * via `RelativeTimeFormat.addLocale(...)`.
 * @param  {string} locale
 * @return {string} [locale]
 */


function resolveLocale(locale) {
  if (localesData[locale]) {
    return locale;
  }

  if (lowercaseLocaleLookup[locale.toLowerCase()]) {
    return lowercaseLocaleLookup[locale.toLowerCase()];
  }
}
//# sourceMappingURL=LocaleDataStore.js.map

/***/ }),

/***/ 30541:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
// (this file was autogenerated by `generate-locales`)
// "plural rules" functions are not stored in locale JSON files because they're not strings.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.
var $ = {
  af: function classify(n) {
    return n == 1 ? 'one' : 'other';
  },
  am: function classify(n) {
    return n >= 0 && n <= 1 ? 'one' : 'other';
  },
  ar: function classify(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  },
  ast: function classify(n) {
    var s = String(n).split('.'),
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : 'other';
  },
  be: function classify(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
  },
  br: function classify(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
  },
  bs: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  },
  cs: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  },
  cy: function classify(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
  },
  da: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
  },
  dsb: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  },
  dz: function classify(n) {
    return 'other';
  },
  fil: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  },
  fr: function classify(n) {
    return n >= 0 && n < 2 ? 'one' : 'other';
  },
  ga: function classify(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
  },
  gd: function classify(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
  },
  he: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
  },
  is: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n,
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
  },
  ksh: function classify(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
  },
  lt: function classify(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
  },
  lv: function classify(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  },
  mk: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
  },
  mt: function classify(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 ? 'one' : n == 0 || n100 >= 2 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
  },
  pa: function classify(n) {
    return n == 0 || n == 1 ? 'one' : 'other';
  },
  pl: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
  },
  pt: function classify(n) {
    var s = String(n).split('.'),
        i = s[0];
    return i == 0 || i == 1 ? 'one' : 'other';
  },
  ro: function classify(n) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? 'few' : 'other';
  },
  ru: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  },
  se: function classify(n) {
    return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
  },
  si: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '';
    return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
  },
  sl: function classify(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i100 = i.slice(-2);
    return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
  }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.ca = $.ast;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.es = $.af;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.fr;
$.ia = $.ast;
$.id = $.dz;
$.it = $.ast;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.am;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.or = $.af;
$.ps = $.af;
$["pt-PT"] = $.ast;
$.sah = $.dz;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.yi = $.ast;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;
var _default = $;
exports.default = _default;
//# sourceMappingURL=PluralRuleFunctions.js.map

/***/ }),

/***/ 78238:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _PluralRuleFunctions = _interopRequireDefault(__webpack_require__(30541));

var _getPluralRulesLocale = _interopRequireDefault(__webpack_require__(27463));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * `Intl.PluralRules` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
 */
var PluralRules =
/*#__PURE__*/
function () {
  function PluralRules(locale, options) {
    _classCallCheck(this, PluralRules);

    var locales = PluralRules.supportedLocalesOf(locale);

    if (locales.length === 0) {
      throw new RangeError("Unsupported locale: " + locale);
    }

    if (options && options.type !== "cardinal") {
      throw new RangeError("Only \"cardinal\" \"type\" is supported");
    }

    this.$ = _PluralRuleFunctions.default[(0, _getPluralRulesLocale.default)(locales[0])];
  }

  _createClass(PluralRules, [{
    key: "select",
    value: function select(number) {
      return this.$(number);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(locales) {
      if (typeof locales === "string") {
        locales = [locales];
      }

      return locales.filter(function (locale) {
        return _PluralRuleFunctions.default[(0, _getPluralRulesLocale.default)(locale)];
      });
    }
  }]);

  return PluralRules;
}();

exports.default = PluralRules;
//# sourceMappingURL=PluralRules.js.map

/***/ }),

/***/ 69745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.default = __webpack_unused_export__ = void 0;

var _LocaleDataStore = __webpack_require__(23603);

var _resolveLocale = _interopRequireDefault(__webpack_require__(61320));

var _PluralRules = _interopRequireDefault(__webpack_require__(78238));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Importing `PluralRule` polyfill from a separate package
// results in a bundle that is larger by 1kB for some reason.
// import PluralRules from 'intl-plural-rules-polyfill/cardinal'
// Valid time units.
var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"]; // Valid values for the `numeric` option.

__webpack_unused_export__ = UNITS;
var NUMERIC_VALUES = ["auto", "always"]; // Valid values for the `style` option.

var STYLE_VALUES = ["long", "short", "narrow"]; // Valid values for the `localeMatcher` option.

var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */

var RelativeTimeFormat =
/*#__PURE__*/
function () {
  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.numeric="always"] - (Version >= 2) One of: "always", "auto".
   * @param {string} [options.localeMatcher="lookup"] - One of: "lookup", "best fit". Currently only "lookup" is supported.
   */
  function RelativeTimeFormat() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, RelativeTimeFormat);

    _defineProperty(this, "numeric", "always");

    _defineProperty(this, "style", "long");

    _defineProperty(this, "localeMatcher", "lookup");

    var numeric = options.numeric,
        style = options.style,
        localeMatcher = options.localeMatcher; // Set `numeric` option.

    if (numeric !== undefined) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError("Invalid \"numeric\" option: ".concat(numeric));
      }

      this.numeric = numeric;
    } // Set `style` option.


    if (style !== undefined) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError("Invalid \"style\" option: ".concat(style));
      }

      this.style = style;
    } // Set `localeMatcher` option.


    if (localeMatcher !== undefined) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
      }

      this.localeMatcher = localeMatcher;
    } // Set `locale`.
    // Convert `locales` to an array.


    if (typeof locales === 'string') {
      locales = [locales];
    } // Add default locale.


    locales.push((0, _LocaleDataStore.getDefaultLocale)()); // Choose the most appropriate locale.

    this.locale = RelativeTimeFormat.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0];

    if (!this.locale) {
      throw new Error("No supported locale was found");
    } // Construct an `Intl.PluralRules` instance (polyfill).


    if (_PluralRules.default.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new _PluralRules.default(this.locale);
    } else {
      console.warn("\"".concat(this.locale, "\" locale is not supported"));
    } // Use `Intl.NumberFormat` for formatting numbers (when available).


    if (typeof Intl !== 'undefined' && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale);
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
    } else {
      this.numberingSystem = 'latn';
    }

    this.locale = (0, _resolveLocale.default)(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  /**
   * Formats time `number` in `units` (either in past or in future).
   * @param {number} number - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */


  _createClass(RelativeTimeFormat, [{
    key: "format",
    value: function format() {
      var _parseFormatArgs = parseFormatArgs(arguments),
          _parseFormatArgs2 = _slicedToArray(_parseFormatArgs, 2),
          number = _parseFormatArgs2[0],
          unit = _parseFormatArgs2[1];

      return this.getRule(number, unit).replace('{0}', this.formatNumber(Math.abs(number)));
    }
    /**
     * Formats time `number` in `units` (either in past or in future).
     * @param {number} number - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Version 1.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "day", value: "100" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     * //
     * // Version 2.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "integer", value: "100", unit: "day" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     */

  }, {
    key: "formatToParts",
    value: function formatToParts() {
      var _parseFormatArgs3 = parseFormatArgs(arguments),
          _parseFormatArgs4 = _slicedToArray(_parseFormatArgs3, 2),
          number = _parseFormatArgs4[0],
          unit = _parseFormatArgs4[1];

      var rule = this.getRule(number, unit);
      var valueIndex = rule.indexOf("{0}"); // "yesterday"/"today"/"tomorrow".

      if (valueIndex < 0) {
        return [{
          type: "literal",
          value: rule
        }];
      }

      var parts = [];

      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }

      parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function (part) {
        return _objectSpread({}, part, {
          unit: unit
        });
      }));

      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }

      return parts;
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */

  }, {
    key: "getRule",
    value: function getRule(value, unit) {
      // Get locale-specific time interval formatting rules
      // of a given `style` for the given value of measurement `unit`.
      //
      // E.g.:
      //
      // ```json
      // {
      //  "past": {
      //    "one": "a second ago",
      //    "other": "{0} seconds ago"
      //  },
      //  "future": {
      //    "one": "in a second",
      //    "other": "in {0} seconds"
      //  }
      // }
      // ```
      //
      var unitMessages = (0, _LocaleDataStore.getLocaleData)(this.locale)[this.style][unit]; // Special case for "yesterday"/"today"/"tomorrow".

      if (this.numeric === "auto") {
        // "yesterday", "the day before yesterday", etc.
        if (value === -2 || value === -1) {
          var message = unitMessages["previous".concat(value === -1 ? '' : '-' + Math.abs(value))];

          if (message) {
            return message;
          }
        } // "tomorrow", "the day after tomorrow", etc.
        else if (value === 1 || value === 2) {
            var _message = unitMessages["next".concat(value === 1 ? '' : '-' + Math.abs(value))];

            if (_message) {
              return _message;
            }
          } // "today"
          else if (value === 0) {
              if (unitMessages.current) {
                return unitMessages.current;
              }
            }
      } // Choose either "past" or "future" based on time `value` sign.
      // If there's only "other" then it's being collapsed.
      // (the resulting bundle size optimization technique)


      var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"]; // Bundle size optimization technique.

      if (typeof pluralizedMessages === "string") {
        return pluralizedMessages;
      } // Quantify `value`.
      // There seems to be no such locale in CLDR
      // for which "plural rules" function is missing.


      var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || 'other'; // "other" rule is supposed to be always present.
      // If only "other" rule is present then "rules" is not an object and is a string.

      return pluralizedMessages[quantifier] || pluralizedMessages.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */

  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */

  }, {
    key: "formatNumberToParts",
    value: function formatNumberToParts(number) {
      // `Intl.NumberFormat.formatToParts()` is not present, for example,
      // in Node.js 8.x while `Intl.NumberFormat` itself is present.
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
        type: "integer",
        value: this.formatNumber(number)
      }];
    }
    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */

  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]);

  return RelativeTimeFormat;
}();
/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'es-PY']
 * var options = { localeMatcher: 'lookup' }
 * // Returns ["id", "es-PY"]
 * Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
 */


exports.default = RelativeTimeFormat;

RelativeTimeFormat.supportedLocalesOf = function (locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales];
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument');
  }

  return locales.filter(function (locale) {
    return (0, _resolveLocale.default)(locale, options);
  });
};
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */


RelativeTimeFormat.addLocale = _LocaleDataStore.addLocaleData;
/**
 * Sets default locale.
 * @param  {string} locale
 */

RelativeTimeFormat.setDefaultLocale = _LocaleDataStore.setDefaultLocale;
/**
 * Gets default locale.
 * @return  {string} locale
 */

RelativeTimeFormat.getDefaultLocale = _LocaleDataStore.getDefaultLocale;
/**
 * Export `Intl.PluralRules` just in case it's used somewhere else.
 */

RelativeTimeFormat.PluralRules = _PluralRules.default; // The specification allows units to be in plural form.
// Convert plural to singular.
// Example: "seconds" -> "second".

var UNIT_ERROR = 'Invalid "unit" argument';

function parseUnit(unit) {
  if (_typeof(unit) === 'symbol') {
    throw new TypeError(UNIT_ERROR);
  }

  if (typeof unit !== 'string') {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }

  if (unit[unit.length - 1] === 's') {
    unit = unit.slice(0, unit.length - 1);
  }

  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }

  return unit;
} // Converts `value` to a `Number`.
// The specification allows value to be a non-number.
// For example, "-0" is supposed to be treated as `-0`.
// Also checks if `value` is a finite number.


var NUMBER_ERROR = 'Invalid "number" argument';

function parseNumber(value) {
  value = Number(value);

  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
  }

  return value;
}
/**
 * Tells `0` from `-0`.
 * https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
 * @param  {number} number
 * @return {Boolean}
 * @example
 * isNegativeZero(0); // false
 * isNegativeZero(-0); // true
 */


function isNegativeZero(number) {
  return 1 / number === -Infinity;
}

function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number);
}

function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError("\"unit\" argument is required");
  }

  return [parseNumber(args[0]), parseUnit(args[1])];
}
//# sourceMappingURL=RelativeTimeFormat.js.map

/***/ }),

/***/ 27463:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getPluralRulesLocale;

/**
 * Returns a `locale` for which a function exists in `./PluralRuleFunctions.js`.
 * @param  {string} locale
 * @return {string}
 * @example
 * getPluralRulesLocale("ru-RU-Cyrl") // Returns "ru".
 */
function getPluralRulesLocale(locale) {
  // "pt" language is the only one having different pluralization rules
  // for the one ("pt") (Portuguese) locale and the other ("pt-PT") (European Portuguese).
  // http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
  // (see the entries for "pt" and "pt_PT" there)
  if (locale === 'pt-PT') {
    return locale;
  }

  return getLanguageFromLanguageTag(locale);
}
/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */


var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;

function getLanguageFromLanguageTag(languageTag) {
  var match = languageTag.match(LANGUAGE_REG_EXP);

  if (!match) {
    throw new TypeError("Invalid locale: ".concat(languageTag));
  }

  return match[1];
}
//# sourceMappingURL=getPluralRulesLocale.js.map

/***/ }),

/***/ 61320:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = resolveLocale;
exports.resolveLocaleLookup = resolveLocaleLookup;

var _LocaleDataStore = __webpack_require__(23603);

/**
 * Resolves a locale to a supported one (if any).
 * @param  {string} locale
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocale("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocale("xx-Latn")
 */
function resolveLocale(locale) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeMatcher = options.localeMatcher || 'lookup';

  switch (localeMatcher) {
    case 'lookup':
      return resolveLocaleLookup(locale);
    // "best fit" locale matching is not supported.
    // https://github.com/catamphetamine/relative-time-format/issues/2

    case 'best fit':
      // return resolveLocaleBestFit(locale)
      return resolveLocaleLookup(locale);

    default:
      throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
  }
}
/**
 * Resolves a locale to a supported one (if any).
 * Starts from the most specific locale and gradually
 * falls back to less specific ones.
 * This is a basic implementation of the "lookup" algorithm.
 * https://tools.ietf.org/html/rfc4647#section-3.4
 * @param  {string} locale
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocaleLookup("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocaleLookup("xx-Latn")
 */


function resolveLocaleLookup(locale) {
  var resolvedLocale = (0, _LocaleDataStore.resolveLocale)(locale);

  if (resolvedLocale) {
    return resolvedLocale;
  } // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.


  var parts = locale.split('-');

  while (locale.length > 1) {
    parts.pop();
    locale = parts.join('-');

    var _resolvedLocale = (0, _LocaleDataStore.resolveLocale)(locale);

    if (_resolvedLocale) {
      return _resolvedLocale;
    }
  }
}
//# sourceMappingURL=resolveLocale.js.map

/***/ }),

/***/ 22986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(69745).default
exports.default = __webpack_require__(69745).default

/***/ })

};
;