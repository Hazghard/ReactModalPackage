"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleReactModal = void 0;
exports.useModalShow = useModalShow;
var _react = _interopRequireWildcard(require("react"));
require("./dialogTest.css");
var _io = require("react-icons/io5");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useModalShow() {
  var timeOut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var openModal = function openModal() {
    setIsOpen(true);
    if (timeOut > 0) {
      setTimeout(function () {
        closeModal();
      }, timeOut);
    }
  };
  var closeModal = function closeModal() {
    setIsOpen(false);
  };
  console.log("isOpen state from component", isOpen);
  return [isOpen, setIsOpen, openModal, closeModal];
}
var SimpleReactModal = exports.SimpleReactModal = function SimpleReactModal(_ref) {
  var title = _ref.title,
    content = _ref.content,
    style = _ref.style,
    type = _ref.type,
    _ref$timeOut = _ref.timeOut,
    timeOut = _ref$timeOut === void 0 ? 0 : _ref$timeOut,
    _ref$debugMode = _ref.debugMode,
    debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode,
    isOpen = _ref.isOpen,
    openModal = _ref.openModal,
    closeModal = _ref.closeModal;
  var modalRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalContainer"
  }, debugMode && !isOpen && /*#__PURE__*/_react["default"].createElement("button", {
    id: "show",
    onClick: openModal,
    className: "modal--ShowBtn"
  }, "Show"), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalDialogWrapper"
  }, /*#__PURE__*/_react["default"].createElement("dialog", {
    ref: modalRef,
    onClose: closeModal,
    style: style,
    className: "modalDialog " + type
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalDialog--CloseBtnContainer"
  }, /*#__PURE__*/_react["default"].createElement(_io.IoClose, {
    onClick: closeModal,
    className: "modalDialog--CloseBtn"
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modalDialog--Title"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "modalDialog--Content"
  }, content))));
};