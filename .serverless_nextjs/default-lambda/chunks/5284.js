exports.id = 5284;
exports.ids = [5284];
exports.modules = {

/***/ 75284:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65988);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);








const Header = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx("header", {
      className: "jsx-78552201" + " " + "landing-header mx-auto bg-transparent py-2",
      children: /*#__PURE__*/_jsx("nav", {
        className: "jsx-78552201" + " " + "navbar navbar-expand-lg navbar-light",
        children: /*#__PURE__*/_jsxs("div", {
          className: "jsx-78552201" + " " + "container-fluid",
          children: [/*#__PURE__*/_jsx(Link, {
            href: "/",
            children: /*#__PURE__*/_jsx("a", {
              className: "jsx-78552201" + " " + "landing-logo",
              children: /*#__PURE__*/_jsx(Image, {
                src: "/img/logo.png",
                alt: "Picture of the author",
                width: "123.4262924194336px7.7",
                height: "60px"
              })
            })
          }), /*#__PURE__*/_jsx("button", {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarText",
            "aria-controls": "navbarText",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            onClick: toggleNavbar,
            className: "jsx-78552201" + " " + "navbar-toggler",
            children: /*#__PURE__*/_jsx("span", {
              className: "jsx-78552201" + " " + "navbar-toggler-icon"
            })
          }), /*#__PURE__*/_jsxs(Collapse, {
            isOpen: !collapsed,
            navbar: true,
            children: [/*#__PURE__*/_jsxs("ul", {
              className: "jsx-78552201" + " " + "nav landing-ul mx-auto col-md-9 mb-2 justify-content-center mb-md-0",
              children: [/*#__PURE__*/_jsx("li", {
                className: "jsx-78552201",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "jsx-78552201" + " " + "nav-link px-2 header-links",
                    children: "Home"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                className: "jsx-78552201",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/about",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "jsx-78552201" + " " + "nav-link px-2 header-links",
                    children: "ABOUT"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                className: "jsx-78552201",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/pau",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "jsx-78552201" + " " + "nav-link px-2 header-links",
                    children: "PAU"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                className: "jsx-78552201",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/faqs",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "jsx-78552201" + " " + "nav-link px-2 header-links",
                    children: "FAQs"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                className: "jsx-78552201",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/contact",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "jsx-78552201" + " " + "nav-link px-2 header-links",
                    children: "CONTACT"
                  })
                })
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "jsx-78552201" + " " + "col-md-3 text-end",
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/login",
                children: /*#__PURE__*/_jsx("a", {
                  className: "jsx-78552201" + " " + "header-links",
                  children: "LOGIN"
                })
              }), /*#__PURE__*/_jsx(Link, {
                href: "/register",
                children: /*#__PURE__*/_jsx("a", {
                  type: "button",
                  className: "jsx-78552201" + " " + "btn btn-primary btn-register",
                  children: "REGISTER"
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsx(_JSXStyle, {
      id: "78552201",
      children: [".logo-link{width:10%;margin-right:2rem;}"]
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Header)));

/***/ })

};
;