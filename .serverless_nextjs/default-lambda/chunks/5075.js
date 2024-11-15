exports.id = 5075;
exports.ids = [5075,7424];
exports.modules = {

/***/ 37424:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

exports.__esModule = true;

var _Provider = _interopRequireDefault(__webpack_require__(57456));

exports.Provider = _Provider["default"];

var _connectAdvanced = _interopRequireDefault(__webpack_require__(56702));

exports.connectAdvanced = _connectAdvanced["default"];

var _Context = __webpack_require__(35120);

exports.ReactReduxContext = _Context.ReactReduxContext;

var _connect = _interopRequireDefault(__webpack_require__(69478));

exports.connect = _connect["default"];

var _useDispatch = __webpack_require__(85158);

exports.useDispatch = _useDispatch.useDispatch;
exports.createDispatchHook = _useDispatch.createDispatchHook;

var _useSelector = __webpack_require__(81033);

exports.useSelector = _useSelector.useSelector;
exports.createSelectorHook = _useSelector.createSelectorHook;

var _useStore = __webpack_require__(69269);

exports.useStore = _useStore.useStore;
exports.createStoreHook = _useStore.createStoreHook;

var _batch = __webpack_require__(67852);

var _reactBatchedUpdates = __webpack_require__(92581);

exports.batch = _reactBatchedUpdates.unstable_batchedUpdates;

var _shallowEqual = _interopRequireDefault(__webpack_require__(68761));

exports.shallowEqual = _shallowEqual["default"];
(0, _batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);

/***/ })

};
;