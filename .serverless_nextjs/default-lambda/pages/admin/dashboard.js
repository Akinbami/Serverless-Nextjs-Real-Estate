/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 10966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dashboard; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(87428);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/javascript-time-ago/index.commonjs.js
var index_commonjs = __webpack_require__(21331);
var index_commonjs_default = /*#__PURE__*/__webpack_require__.n(index_commonjs);
// EXTERNAL MODULE: ./node_modules/javascript-time-ago/locale/en.json
var en = __webpack_require__(21727);
// EXTERNAL MODULE: ./components/Sidbar.js
var Sidbar = __webpack_require__(85789);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(9669);
;// CONCATENATED MODULE: ./components/AuthenticationComponent.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // const jwt = require('jsonwebtoken');

const RequireAuthentication = WrappedComponent => {
  const APPLICATION_API = "http://127.0.0.1:5559"; // const APPLICATION_API = "https://the-pod-living-backend-dev1.azurewebsites.net";    

  return class extends React.Component {
    static async getInitialProps(ctx) {
      var _ctx$req$headers$cook, _isAuthenticated;

      let isAuthenticated;
      console.log("ctx headers ");
      const token = (_ctx$req$headers$cook = ctx.req.headers.cookie) === null || _ctx$req$headers$cook === void 0 ? void 0 : _ctx$req$headers$cook.replace('token=', '');

      try {
        // isAuthenticated = jwt.verify(token, process.env.JWT_KEY);
        const verification_response = await axios.post(APPLICATION_API + "/auth/verify-token", {
          token
        });
        isAuthenticated = verification_response.authenticated;
      } catch (e) {
        console.log(e);
      } // Use !isAuthenticated for error cases


      if ((_isAuthenticated = isAuthenticated) !== null && _isAuthenticated !== void 0 && _isAuthenticated.user) {
        return WrappedComponent.getInitialProps(ctx);
      } else {
        ctx.res.redirect('/');
      }
    }

    render() {
      return /*#__PURE__*/_jsx(WrappedComponent, _objectSpread({}, this.props));
    }

  };
};

/* harmony default export */ var AuthenticationComponent = ((/* unused pure expression or super */ null && (RequireAuthentication)));
// EXTERNAL MODULE: ./node_modules/next-cookie/dist/next-cookie.js
var next_cookie = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/swr/dist/index.js
var dist = __webpack_require__(13199);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./components/TicketCard.js
var TicketCard = __webpack_require__(17534);
;// CONCATENATED MODULE: ./components/RoomsTickets.js







 // const APPLICATION_API = "http://127.0.0.1:5559";

const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const RoomsTickets = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react.useState)(true);

  const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + props.token
    }
  }).then(res => res.json());

  const {
    data,
    error
  } = dist_default()(APPLICATION_API + `/admins/tickets?limit=${5}`, fetcher);
  console.log("this is the component data", data);
  if (error) return /*#__PURE__*/jsx_runtime.jsx("p", {
    className: "support-done-header",
    children: "Failed to load ticket"
  });
  if (!data || !data.data) return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "d-flex justify-content-center",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "spinner-border",
      role: "status",
      children: /*#__PURE__*/jsx_runtime.jsx("span", {
        className: "visually-hidden",
        children: "Loading..."
      })
    })
  });
  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: data.data.docs.map((ticket, index) => {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "recent-transactions-card",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex justify-content-start",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "mb-0",
            children: /*#__PURE__*/jsx_runtime.jsx("img", {
              src: "/img/user-pic.png",
              width: "50",
              alt: "user profile"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "recent-transaction-card-text px-2 mb-0 text-dark",
            children: ticket.description
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "tickets-card-footer",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex justify-content-between",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "mb-0",
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "/img/open-door.png",
                width: "15",
                alt: "open door"
              }), /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "px-1",
                children: ticket.category
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "mb-0",
              children: "Average time to resolve: 2 days"
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "mb-0",
              children: !ticket.resolved ? /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "badge rounded-pill bg-success px-3",
                children: "In Progress"
              }) : /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "badge rounded-pill bg-success px-3",
                children: "Resolved"
              })
            })]
          })
        })]
      });
    })
  });
};

/* harmony default export */ var components_RoomsTickets = (RoomsTickets);
// EXTERNAL MODULE: ./node_modules/number-formatter/lib/format.js
var format = __webpack_require__(31955);
var format_default = /*#__PURE__*/__webpack_require__.n(format);
;// CONCATENATED MODULE: ./components/RecentTransactions.js











index_commonjs_default().addLocale(en);
const timeAgo = new (index_commonjs_default())('en-US'); // const APPLICATION_API = "http://127.0.0.1:5559";

const RecentTransactions_APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const RecentTransactions = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react.useState)(true);

  const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + props.token
    }
  }).then(res => res.json());

  const {
    data,
    error
  } = dist_default()(RecentTransactions_APPLICATION_API + `/applications?limit=${5}`, fetcher); // console.log("this is the component data", data)

  if (error) return /*#__PURE__*/jsx_runtime.jsx("p", {
    className: "support-done-header",
    children: "Failed to load ticket"
  });
  if (!data || !data.data) return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "d-flex justify-content-center",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "spinner-border",
      role: "status",
      children: /*#__PURE__*/jsx_runtime.jsx("span", {
        className: "visually-hidden",
        children: "Loading..."
      })
    })
  });
  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: data.data.docs.map((application, index) => {
      return /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "recent-transactions-card",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-9",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-start",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "mb-0",
                children: /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/user-pic.png",
                  width: "50",
                  alt: "user profile"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "recent-transaction-card-text px-2 mb-0",
                children: [application.firstname && application.lastname ? `${application.firstname} ${application.lastname}` : application.user ? application.user.email : "User", " ", /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "text-dark",
                  children: "just paid"
                }), " \u20A6", format_default()("#,##0.####", parseInt(application.amount / 100)), " ", /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "text-dark",
                  children: "for a"
                }), " ", application.room_type, " Room"]
              })]
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-3",
            children: /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "recent-transaction-time mb-0",
              children: timeAgo.format(Date.parse(application.createdAt))
            })
          })]
        })
      }, index);
    })
  });
};

/* harmony default export */ var components_RecentTransactions = (RecentTransactions);
;// CONCATENATED MODULE: ./components/StatisticsBoard.js











index_commonjs_default().addLocale(en);
const StatisticsBoard_timeAgo = new (index_commonjs_default())('en-US'); // const APPLICATION_API = "http://127.0.0.1:5559";

const StatisticsBoard_APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const StatisticsBoard = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react.useState)(true);

  const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + props.token
    }
  }).then(res => res.json());

  const {
    data,
    error
  } = dist_default()(StatisticsBoard_APPLICATION_API + `/statistics`, fetcher); // console.log("this is the component data", data)

  if (error) return /*#__PURE__*/jsx_runtime.jsx("p", {
    className: "support-done-header",
    children: "Failed to load statistics"
  }); // if (!data || !data.data) return (
  //     <div className="d-flex justify-content-center">
  //         <div className="spinner-border" role="status">
  //             <span className="visually-hidden">Loading...</span>
  //         </div>
  //     </div>
  // )

  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "row mb-5",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "col-md-4",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "admin-dashboard-stats",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "admin-dashboard-stats-value",
            children: !data || !data.data ? /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "spinner-border",
                role: "status",
                children: /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              })
            }) : data.data.rooms
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "admin-dashboard-stats-desc",
            children: "Available Rooms"
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "col-md-4",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "admin-dashboard-stats",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "admin-dashboard-stats-value",
            children: !data || !data.data ? /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "spinner-border",
                role: "status",
                children: /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              })
            }) : data.data.applications
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "admin-dashboard-stats-desc",
            children: "Occupants"
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "col-md-4",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "admin-dashboard-stats",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "admin-dashboard-stats-value",
            children: !data || !data.data ? /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "spinner-border",
                role: "status",
                children: /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              })
            }) : data.data.tickets
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "admin-dashboard-stats-desc",
            children: "Open Tickets"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_StatisticsBoard = (StatisticsBoard);
;// CONCATENATED MODULE: ./pages/admin/dashboard.js










 // import cookieCutter from 'cookie-cutter';







index_commonjs_default().addLocale(en);
const dashboard_timeAgo = new (index_commonjs_default())('en-US'); // const APPLICATION_API = "http://127.0.0.1:5559";

const dashboard_APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev"; // const token = cookieCutter.get('pod-token')

function Dashboard(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react.useState)(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react.useState)(null);
  const {
    0: loggedInUser,
    1: setLoggedInUser
  } = (0,react.useState)(null);
  const router = (0,next_router.useRouter)();
  (0,react.useEffect)(() => {
    // check if user is logged in
    const user = JSON.parse(localStorage.getItem("pod-user"));

    if (user.role != 1) {
      router.push("/admin/login");
    }

    setLoggedInUser(user); // Always do navigations after the first render
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: !loggedInUser ? "" : /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime.jsx(head.default, {
        children: /*#__PURE__*/jsx_runtime.jsx("link", {
          href: "/css/sidebar.css",
          rel: "stylesheet"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-md-2",
          children: /*#__PURE__*/jsx_runtime.jsx(Sidbar/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "admin-dashboard-content",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "admin-dashboard-content-header",
              children: "Dashboard"
            }), /*#__PURE__*/jsx_runtime.jsx(components_StatisticsBoard, {
              token: props.token
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "admin-dashboard-recent-transactions",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex justify-content-between",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "recent-transaction-header",
                      children: "Recent Transaction"
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "recent-transaction-view-all",
                      children: "View all"
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx(components_RecentTransactions, {
                    token: props.token
                  })]
                })
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "admin-dashboard-recent-transactions",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex justify-content-between",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "recent-transaction-header",
                      children: "Available Rooms Tickets"
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "recent-transaction-view-all",
                      children: "View all"
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx(components_RoomsTickets, {
                    token: props.token
                  })]
                })
              })]
            })]
          })
        })]
      })]
    })
  });
}

async function getServerSideProps(ctx) {
  const {
    req,
    res
  } = ctx;
  const {
    cookies
  } = req;
  const token = cookies["pod-token"];
  console.log("this is the token from dashboard: ", token);
  const api_res = await fetch(dashboard_APPLICATION_API + `/auth/verify-token`, {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token
    })
  });
  const data = await api_res.json();
  console.log("auth response", data);

  if (data.error || !data.authenticated) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/login'
      }
    };
  } // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time


  return {
    props: {
      user: data,
      token
    }
  };
}
/* harmony default export */ var dashboard = (Dashboard);

/***/ }),

/***/ 49220:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.production.local","contents":"# Add the public site key here\nNEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8\n# Add the secret key here\nRECAPTCHA_SECRET_KEY=6LclehYbAAAAAPzK1VyaCqDac5aZgvwyeTgkKWeb\n\nBACKEND_API=127.0.0.1:5559\n"},{"path":".env.local","contents":"# Add the public site key here\nNEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8\n# Add the secret key here\nRECAPTCHA_SECRET_KEY=6LclehYbAAAAAPzK1VyaCqDac5aZgvwyeTgkKWeb\n\nBACKEND_API=127.0.0.1:5559"},{"path":".env","contents":"# Add the public site key here\nNEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8\n# Add the secret key here\nRECAPTCHA_SECRET_KEY=6LclehYbAAAAAPzK1VyaCqDac5aZgvwyeTgkKWeb\n\nBACKEND_API=127.0.0.1:5559\n\nAWS_ACCESS_KEY_ID=AKIAQHWIICMX6QYTCN53\nAWS_SECRET_ACCESS_KEY=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"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(48609)

      const appMod = __webpack_require__(40083)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(10966)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(70900),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/admin/dashboard",
        buildId: "h_UmUIGlEjDMrPgHkXuTN",
        escapedBuildId: "h_UmUIGlEjDMrPgHkXuTN",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"a5e7c3aec068b71e60dcfed050baaf02",previewModeSigningKey:"6a7ad9631f7c129e555fe9b0f37ab59a4623166ad9fc6efc10ba8e1e887551f8",previewModeEncryptionKey:"129bf860fcb72505aad63cd86e143d7e4580c51efa47c27b2f434ce2ff98316e"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ (function(module) {

module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ (function(module) {

module.exports = require("net");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 33867:
/***/ (function(module) {

module.exports = require("tty");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,7424,1073,5855,6071,9781,6431,4479,3966,7472,3199,6489,9439,9651,9669,5707,1428,2739,422,5284,5789,7534], function() { return __webpack_require__(49220); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=Calistoga&display=swap","content":"@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0vtw.woff) format('woff')}@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0fvMwB49dJfuWv.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0fvcwB49dJfuWv.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0fs8wB49dJfg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			9189: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(7158);
/******/ 			__webpack_require__.e(5087);
/******/ 			__webpack_require__.e(8259);
/******/ 			__webpack_require__.e(7485);
/******/ 			__webpack_require__.e(7424);
/******/ 			__webpack_require__.e(1073);
/******/ 			__webpack_require__.e(5855);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(9781);
/******/ 			__webpack_require__.e(6431);
/******/ 			__webpack_require__.e(4479);
/******/ 			__webpack_require__.e(3966);
/******/ 			__webpack_require__.e(7472);
/******/ 			__webpack_require__.e(3199);
/******/ 			__webpack_require__.e(6489);
/******/ 			__webpack_require__.e(9439);
/******/ 			__webpack_require__.e(9651);
/******/ 			__webpack_require__.e(9669);
/******/ 			__webpack_require__.e(5707);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
/******/ 			__webpack_require__.e(5789);
/******/ 			__webpack_require__.e(7534);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;