exports.id = 8035;
exports.ids = [8035];
exports.modules = {

/***/ 8035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_ProfileHeader; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(65988);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/reactstrap/lib/index.js
var lib = __webpack_require__(45408);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/swr/dist/index.js
var dist = __webpack_require__(13199);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
;// CONCATENATED MODULE: ./components/Notification.js







 // const APPLICATION_API = "http://127.0.0.1:5559";

const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const Notification = props => {
  const ticket = props.ticket;

  const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + props.token
    }
  }).then(res => res.json());

  const {
    data,
    error
  } = dist_default()(APPLICATION_API + `/notifications?open=${false}`, fetcher);
  console.log("notification data: ", data);
  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
      className: "nav-link px-1 profile-header-links profile-notification",
      children: [/*#__PURE__*/jsx_runtime.jsx(index_esm/* FaBell */.Z3q, {
        size: "2em"
      }), data && data.data ? /*#__PURE__*/jsx_runtime.jsx("span", {
        className: "badge",
        children: data.data.length
      }) : ""]
    })
  });
};

/* harmony default export */ var components_Notification = (Notification);
;// CONCATENATED MODULE: ./components/ProfileHeader.js











const ProfileHeader = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react.useState)(true);
  const {
    0: tooltipOpen,
    1: setTooltipOpen
  } = (0,react.useState)(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const router = (0,next_router.useRouter)();

  const logout = () => {
    fetch("/api/logout", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log("response data", data);
      router.push("/login");
    }).catch(error => {
      setIsLoading(false);
      console.log(error); // setPhoneError("Failed")
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx("header", {
      className: "jsx-3346566826" + " " + "landing-header mx-auto bg-transparent py-2",
      children: /*#__PURE__*/jsx_runtime.jsx("nav", {
        className: "jsx-3346566826" + " " + "navbar navbar-expand-lg navbar-light",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "jsx-3346566826" + " " + "container-fluid",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: "jsx-3346566826" + " " + "landing-logo",
              children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                src: "/img/logo.png",
                alt: "Picture of the author",
                width: "123.4262924194336px7.7",
                height: "60px"
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("button", {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarText",
            "aria-controls": "navbarText",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            onClick: toggleNavbar,
            className: "jsx-3346566826" + " " + "navbar-toggler",
            children: /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "jsx-3346566826" + " " + "navbar-toggler-icon"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(lib/* Collapse */.UO, {
            isOpen: !collapsed,
            navbar: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
              className: "jsx-3346566826" + " " + "nav profile-ul ms-auto col-md-12 mb-2 justify-content-end mb-md-0",
              children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                className: "jsx-3346566826",
                children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: "/dashboard",
                  children: /*#__PURE__*/jsx_runtime.jsx("a", {
                    className: "jsx-3346566826" + " " + `nav-link px-1 profile-header-links ${router.pathname == "/dashboard" ? "profile-header-active" : ""}`,
                    children: "Dashboard"
                  })
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "jsx-3346566826",
                children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: "/roommates",
                  children: /*#__PURE__*/jsx_runtime.jsx("a", {
                    className: "jsx-3346566826" + " " + `nav-link px-1 profile-header-links ${router.pathname == "/roommates" ? "profile-header-active" : ""}`,
                    children: "Roommates"
                  })
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "jsx-3346566826",
                children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: "/support",
                  children: /*#__PURE__*/jsx_runtime.jsx("a", {
                    className: "jsx-3346566826" + " " + `nav-link px-1 profile-header-links ${router.pathname == "/support" ? "profile-header-active" : ""}`,
                    children: "Support"
                  })
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "jsx-3346566826",
                children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime.jsx(components_Notification, {
                    token: props.token
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                className: "jsx-3346566826",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  href: "#",
                  id: "account-dropdown",
                  className: "jsx-3346566826" + " " + "profile-account-dropdown px-2",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "jsx-3346566826" + " " + "d-flex justify-content-between",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "jsx-3346566826" + " " + "py-2 mb-0",
                      children: /*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/img/profile_pic.png",
                        alt: "",
                        className: "jsx-3346566826"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                      className: "jsx-3346566826" + " " + "p-2 mb-0",
                      children: [props.user.profile.firstname, " ", props.user.profile.lastname.slice(0, 1), "."]
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "jsx-3346566826" + " " + "py-2 mb-0",
                      children: /*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/img/CaretDown.png",
                        alt: "",
                        className: "jsx-3346566826"
                      })
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(lib/* Tooltip */.u, {
                  placement: "top",
                  isOpen: tooltipOpen,
                  autohide: false,
                  target: "account-dropdown",
                  toggle: toggle,
                  placement: "bottom",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
                    className: "jsx-3346566826" + " " + "account-dropdown-list p-0",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                      className: "jsx-3346566826",
                      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                        href: "/profile",
                        children: /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "jsx-3346566826" + " " + "dropdown-item",
                          children: "Profile"
                        })
                      }), " "]
                    }), /*#__PURE__*/jsx_runtime.jsx("li", {
                      className: "jsx-3346566826",
                      children: /*#__PURE__*/jsx_runtime.jsx("a", {
                        href: "#",
                        onClick: logout,
                        className: "jsx-3346566826" + " " + "dropdown-item",
                        children: "Logout"
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(style.default, {
      id: "3346566826",
      children: [".logo-link{width:10%;margin-right:2rem;}", ".tooltip-inner{padding:0px;}"]
    })]
  });
};

/* harmony default export */ var components_ProfileHeader = (ProfileHeader);

/***/ })

};
;