"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Composant de modal personnalisée.
 * @param {Object} props - Les props du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte ou non.
 * @param {string} [props.message="Hello modal"] - Le message à afficher dans la modal.
 * @param {function} props.onOk - La fonction à appeler lorsque l'utilisateur clique sur le bouton "OK".
 * @param {function} props.onClose - La fonction à appeler lorsque l'utilisateur ferme la modal.
 * @param {string} [props.textColor="#000"] - Couleur du texte par défaut.
 * @param {string} [props.modalBackground="#fff"] - Fond de la modale par défaut.
 * @returns {JSX.Element|null} Le composant Modal.
 */
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? "Hello modal" : _ref$message,
    onOk = _ref.onOk,
    onClose = _ref.onClose,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? "#000" : _ref$textColor,
    _ref$modalBackground = _ref.modalBackground,
    modalBackground = _ref$modalBackground === void 0 ? "#fff" : _ref$modalBackground;
  if (!isOpen) {
    return null;
  }

  /**
   * Gère le clic sur le bouton "OK".
   * Appelle d'abord la fonction onOk, puis onClose.
   * @returns {void}
   */
  var handleOkButtonClick = function handleOkButtonClick() {
    onOk();
    onClose();
  };
  var modalStyle = {
    color: textColor,
    backgroundColor: modalBackground
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content",
    style: modalStyle
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, "X"), /*#__PURE__*/_react["default"].createElement("p", null, message), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleOkButtonClick
  }, "OK")))));
};
var _default = exports["default"] = Modal;
