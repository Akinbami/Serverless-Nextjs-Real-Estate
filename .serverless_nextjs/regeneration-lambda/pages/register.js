/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 39029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15553);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87428);
/* harmony import */ var _components_RegistrationHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23365);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37424);
/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11163);













function Register(props) {
  const {
    0: room,
    1: setRoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
  const {
    0: year,
    1: setYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null); // const router = useRouter;

  const {
    setRoomType,
    setRoomTypeYear
  } = props;

  const handleSubmit = e => {
    e.preventDefault();

    if (!room || !year) {
      setErrorMessage("Please select Room Type and year.");
    } else {
      console.log(room, year);
      setRoomType(room);
      setRoomTypeYear(year);
      next_router__WEBPACK_IMPORTED_MODULE_9__.default.push("/validate-registration");
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegistrationHeader__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "login-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-8",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "login-form-card text-center px-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "login-form-card-inner mx-auto",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "register-header",
                children: "Start The POD lifestyle"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "login-instruction w-50 py-3 mx-auto",
                children: "Welcome to The POD Living, please select your preferred room type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "radio",
                    className: "btn-check ",
                    name: "options",
                    id: "option1",
                    value: "200000",
                    autocomplete: "off",
                    onChange: e => setRoom(e.target.value)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "btn btn-light btn-room-type mx-auto py-2",
                    for: "option1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "container",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "d-flex justify-content-start",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/bed-icon-light.png",
                            width: "30",
                            alt: "bed icon"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "room-type-text p-2",
                            children: "1-man room"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "d-flex justify-content-end",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "room-type-price pe-2 pt-2",
                            children: "\u20A6200,000"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select room-select-year",
                            "aria-label": "Default select example",
                            onChange: e => setYear(e.target.value),
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              selected: true,
                              children: "/yr"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "1",
                              children: "1"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "2",
                              children: "2"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "3",
                              children: "3"
                            })]
                          })]
                        })]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "radio",
                    className: "btn-check ",
                    name: "options",
                    id: "option2",
                    value: "160000",
                    autocomplete: "off",
                    onChange: e => setRoom(e.target.value)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "btn btn-light btn-room-type mx-auto py-2",
                    for: "option2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "container",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "d-flex justify-content-start",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/bed-icon-light.png",
                            width: "30",
                            alt: "bed icon"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "room-type-text p-2",
                            children: "2-man room"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "d-flex justify-content-end",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "room-type-price pe-2 pt-2",
                            children: "\u20A6160,000"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select room-select-year",
                            "aria-label": "Default select example",
                            onChange: e => setYear(e.target.value),
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              selected: true,
                              children: "/yr"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "1",
                              children: "1"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "2",
                              children: "2"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "3",
                              children: "3"
                            })]
                          })]
                        })]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "radio",
                    className: "btn-check ",
                    name: "options",
                    id: "option3",
                    value: "140000",
                    autocomplete: "off",
                    onChange: e => setRoom(e.target.value)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "btn btn-light btn-room-type mx-auto py-2",
                    for: "option3",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "container",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "d-flex justify-content-start",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/bed-icon-light.png",
                            width: "30",
                            alt: "bed icon"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "room-type-text p-2",
                            children: "4-man room"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "d-flex justify-content-end",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "room-type-price pe-2 pt-2",
                            children: "\u20A6140,000"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select room-select-year",
                            "aria-label": "Default select example",
                            onChange: e => setYear(e.target.value),
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              selected: true,
                              children: "/yr"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "1",
                              children: "1"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "2",
                              children: "2"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "3",
                              children: "3"
                            })]
                          })]
                        })]
                      })
                    })
                  })]
                }), errorMessage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "text-danger",
                  children: errorMessage
                }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary btn-lg btn-register mt-4",
                  children: "Continue"
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "apply-room-card ps-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "d-flex justify-content-start",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/Bed.png",
                  width: "50",
                  alt: "bedroom icon"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "apply-room-text",
                children: "Manage accomodation"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center pt-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "login-instruction",
              children: "Rooms available"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/cutlery.png",
                  width: "70",
                  alt: ""
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "login-instruction",
                  children: "One-man"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/parking.png",
                  width: "70",
                  alt: ""
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "login-instruction",
                  children: "Two-man"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/parking-2.png",
                  width: "70",
                  alt: ""
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "login-instruction",
                  children: "Four-man"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "register-requirements-header pt-3",
              children: "Required Registration Documents"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "register-requirements-text",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "pe-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/req-icon.png",
                  width: "15",
                  alt: "requirement icon"
                })
              }), "School Matric Number"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "register-requirements-text",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "pe-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/req-icon.png",
                  width: "15",
                  alt: "requirement icon"
                })
              }), "Passport Photograph"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "register-requirements-text",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "pe-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/img/req-icon.png",
                  width: "15",
                  alt: "requirement icon"
                })
              }), "Signed Agreement"]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})]
  });
}

const mapStateToProps = state => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  setRoomType: _redux_actions_main__WEBPACK_IMPORTED_MODULE_10__/* .setRoomType */ .l2,
  setRoomTypeYear: _redux_actions_main__WEBPACK_IMPORTED_MODULE_10__/* .setRoomTypeYear */ .NP
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, mapDispatchToProps)(Register));

/***/ }),

/***/ 72946:
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

      const compMod = __webpack_require__(39029)

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
        page: "/register",
        buildId: "h_UmUIGlEjDMrPgHkXuTN",
        escapedBuildId: "h_UmUIGlEjDMrPgHkXuTN",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"a5e7c3aec068b71e60dcfed050baaf02",previewModeSigningKey:"6a7ad9631f7c129e555fe9b0f37ab59a4623166ad9fc6efc10ba8e1e887551f8",previewModeEncryptionKey:"129bf860fcb72505aad63cd86e143d7e4580c51efa47c27b2f434ce2ff98316e"}
      })
      
    

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,9008,5745,1073,5855,6071,1163,5075,6529,1428,2739,422,5284,5553,3365,55], function() { return __webpack_require__(72946); })
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
/******/ 			495: 1
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
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(9008);
/******/ 			__webpack_require__.e(5745);
/******/ 			__webpack_require__.e(1073);
/******/ 			__webpack_require__.e(5855);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(1163);
/******/ 			__webpack_require__.e(5075);
/******/ 			__webpack_require__.e(6529);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
/******/ 			__webpack_require__.e(5553);
/******/ 			__webpack_require__.e(3365);
/******/ 			__webpack_require__.e(55);
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