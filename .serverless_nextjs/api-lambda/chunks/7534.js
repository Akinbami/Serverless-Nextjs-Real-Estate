exports.id = 7534;
exports.ids = [7534];
exports.modules = {

/***/ 17534:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65988);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);








const TicketCard = props => {
  const ticket = props.ticket;
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "jsx-1433680387" + " " + "support-ticket-card",
      children: /*#__PURE__*/_jsx(Link, {
        href: `/support/${ticket._id}`,
        children: /*#__PURE__*/_jsxs("a", {
          className: "jsx-1433680387" + " " + "ticket-link",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "jsx-1433680387" + " " + "d-flex align-items-center mb-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "jsx-1433680387" + " " + "flex-shrink-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/ticket-card-image.png",
                alt: "",
                className: "jsx-1433680387"
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "jsx-1433680387" + " " + "flex-grow-1 ms-3",
              children: /*#__PURE__*/_jsx("p", {
                className: "jsx-1433680387" + " " + "support-ticket-card-title",
                children: ticket.description
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/_jsxs("p", {
              className: "jsx-1433680387" + " " + "support-ticket-card-text",
              children: [/*#__PURE__*/_jsx("img", {
                src: "/img/open-door.png",
                width: "15%",
                alt: "",
                className: "jsx-1433680387"
              }), /*#__PURE__*/_jsxs("span", {
                className: "jsx-1433680387" + " " + "px-2",
                children: [ticket.category, " Work"]
              })]
            }), /*#__PURE__*/_jsx("p", {
              className: "jsx-1433680387" + " " + "support-ticket-card-text",
              children: "Average time to resolve: 2 days"
            }), /*#__PURE__*/_jsx("p", {
              className: "jsx-1433680387" + " " + "support-ticket-card-text",
              children: !ticket.resolved ? /*#__PURE__*/_jsx("span", {
                className: "jsx-1433680387" + " " + "badge rounded-pill bg-success px-3",
                children: "In Progress"
              }) : /*#__PURE__*/_jsx("span", {
                className: "jsx-1433680387" + " " + "badge rounded-pill bg-success px-3",
                children: "Resolved"
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsx(_JSXStyle, {
      id: "1433680387",
      children: [".ticket-link{-webkit-text-decoration:none;text-decoration:none;}"]
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TicketCard)));

/***/ })

};
;