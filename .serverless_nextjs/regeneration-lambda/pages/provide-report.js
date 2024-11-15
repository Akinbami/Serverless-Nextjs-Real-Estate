/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 45329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ provide_report; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(87428);
// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(7879);
;// CONCATENATED MODULE: ./redux/actions/main.js

const setFirstname = firstname => ({
  type: t.SET_FIRST_NAME,
  payload: firstname
});
const setLastname = lastname => ({
  type: t.SET_LAST_NAME,
  payload: lastname
});
const setEmail = email => ({
  type: t.SET_EMAIL,
  payload: email
});
const setPassword = password => ({
  type: t.SET_PASSWORD,
  payload: password
});
const setPhone = phone => ({
  type: t.SET_PHONE,
  payload: phone
});
const setJob = job => ({
  type: t.SET_JOB,
  payload: job
});
const setRoomType = room_type => ({
  type: t.SET_ROOM_TYPE,
  payload: room_type
});
const setRoomTypeYear = room_type_year => ({
  type: t.SET_ROOM_TYPE_YEAR,
  payload: room_type_year
});
const setMatric = matric => ({
  type: t.SET_MATRIC,
  payload: matric
});
const setPicture = file => ({
  type: t.SET_PICTURE,
  payload: file
});
const setHealthCondition = status => ({
  type: types/* SET_HEALTH_CONDITION */.dT,
  payload: status
});
const setReport = report => ({
  type: types/* SET_REPORT */.jt,
  payload: report
});
const setSelectRoommate = status => ({
  type: types/* SET_SELECT_ROOMMATE */.iJ,
  payload: status
});
const setRoommateName = name => ({
  type: types/* SET_ROOMMATE_NAME */.uz,
  payload: name
});
const setGender = gender => ({
  type: t.SET_GENDER,
  payload: gender
});
const setDOB = dob => ({
  type: t.SET_DOB,
  payload: dob
});
const setAddress = address => ({
  type: t.SET_ADDRESS,
  payload: address
});
const setGuarantorName = name => ({
  type: t.SET_GUARANTOR_NAME,
  payload: name
});
const setGuarantorPhone = phone => ({
  type: t.SET_GUARANTOR_PHONE,
  payload: phone
});
const setGuarantorAddress = address => ({
  type: t.SET_GUARANTOR_ADDRESS,
  payload: address
});
const setPaid = status => ({
  type: t.SET_PAID,
  payload: status
});
const setAmountPaid = amount => ({
  type: t.SET_AMOUNT_PAID,
  payload: amount
});
const setPaymentReference = ref => ({
  type: t.SET_PAYMENT_REFERENCE,
  payload: ref
});
const setSigned = signature => ({
  type: t.SET_SIGNED,
  payload: signature
});
const setUser = user => ({
  type: t.SET_USER,
  payload: user
});
const setRoom = room => ({
  type: t.SET_ROOM,
  payload: room
});
const resetState = data => ({
  type: t.RESET,
  payload: data
});
;// CONCATENATED MODULE: ./pages/provide-report.js












function ProvideReport(props) {
  const {
    0: healthConditionState,
    1: setHealthConditionState
  } = (0,react.useState)(false);
  const {
    0: reportState,
    1: setReportState
  } = (0,react.useState)("");
  const {
    0: selectRoommateState,
    1: setSelectRoommateState
  } = (0,react.useState)(false);
  const {
    0: roommateNameState,
    1: setRoommateNameState
  } = (0,react.useState)("");
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react.useState)(null);
  const {
    setHealthCondition,
    setReport,
    setSelectRoommate,
    setRoommateName
  } = props;
  console.log("user info ", props.userInfo);

  const handleSubmit = e => {
    e.preventDefault();
    setHealthCondition(healthConditionState);
    setReport(reportState);
    setSelectRoommate(selectRoommateState);
    setRoommateName(roommateNameState);
    router.default.push("/confirm");
  };

  console.log("healthConditionState, ", healthConditionState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx("header", {
      className: "landing-header mx-auto bg-transparent py-2",
      children: /*#__PURE__*/jsx_runtime.jsx("ul", {
        className: "nav justify-content-center",
        children: /*#__PURE__*/jsx_runtime.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: "landing-logo",
              children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                src: "/img/logo.png",
                alt: "Picture of the author",
                width: "102px",
                height: "50px"
              })
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "progress-container",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex bd-highlight text-center",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-2  bd-highlight progress-start-text",
            children: "Start"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "register-progress",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "progress",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "zero primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "one primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "two primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "three primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "four no-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "five no-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "progress-bar progress-bar-warning",
                  style: {
                    width: "62.5%"
                  }
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-2 bd-highlight progress-start-text",
            children: "60%"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "registration-banner",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "registration-banner-content",
        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
          className: "banner-header mx-auto",
          children: "Other Information"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "banner-text mx-auto",
          children: "Enter the requested information below for a better experience"
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "registration-card mx-auto mb-5 px-2",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "registration-card-inner mx-auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "mb-3",
            children: [/*#__PURE__*/jsx_runtime.jsx("label", {
              for: "healthcondition",
              className: "form-label login-form-label",
              children: /*#__PURE__*/jsx_runtime.jsx("b", {
                children: "Are you living with any health condition that needs special attention?"
              })
            }), /*#__PURE__*/jsx_runtime.jsx("input", {
              type: "radio",
              className: "btn-check",
              name: "report-outlined",
              id: "success-report-outlined",
              autocomplete: "off",
              onChange: e => setHealthConditionState(!healthConditionState)
            }), /*#__PURE__*/jsx_runtime.jsx("label", {
              className: `btn btn-danger btn-health ${healthConditionState ? "" : "btn-health-false"}`,
              for: "success-report-outlined",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "d-flex justify-content-around",
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-0 text-dark pe-4",
                  children: "Yes"
                }), healthConditionState ? /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "eclipse-box mb-0",
                  children: /*#__PURE__*/jsx_runtime.jsx("img", {
                    src: "/img/eclipse.png",
                    width: "15",
                    alt: "eclipse"
                  })
                }) : /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "eclipse-box mb-0",
                  children: /*#__PURE__*/jsx_runtime.jsx("img", {
                    src: "/img/eclipse-light.png",
                    width: "15",
                    alt: "eclipse"
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime.jsx("input", {
              type: "radio",
              className: "btn-check",
              name: "report-outlined",
              id: "danger-report-outlined",
              autocomplete: "off",
              onChange: e => setHealthConditionState(!healthConditionState)
            }), /*#__PURE__*/jsx_runtime.jsx("label", {
              className: `btn btn-danger btn-health ${healthConditionState ? "btn-health-false" : ""}`,
              for: "danger-report-outlined",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "d-flex justify-content-around",
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-0 text-dark pe-4",
                  children: "No"
                }), !healthConditionState ? /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "eclipse-box mb-0",
                  children: /*#__PURE__*/jsx_runtime.jsx("img", {
                    src: "/img/eclipse.png",
                    width: "15",
                    alt: "eclipse"
                  })
                }) : /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "eclipse-box mb-0",
                  children: /*#__PURE__*/jsx_runtime.jsx("img", {
                    src: "/img/eclipse-light.png",
                    width: "15",
                    alt: "eclipse"
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "mb-3",
            children: [/*#__PURE__*/jsx_runtime.jsx("label", {
              for: "report",
              className: "form-label login-form-label",
              children: /*#__PURE__*/jsx_runtime.jsx("b", {
                children: "Provide report"
              })
            }), /*#__PURE__*/jsx_runtime.jsx("textarea", {
              className: "form-control",
              id: "report",
              rows: "4",
              onChange: e => setReportState(e.target.value)
            })]
          }), props.userInfo.room_type == "2 Man" ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
                for: "healthcondition",
                className: "form-label login-form-label",
                children: [/*#__PURE__*/jsx_runtime.jsx("b", {
                  children: "Want to select your own roommate?"
                }), /*#__PURE__*/jsx_runtime.jsx("br", {}), "(only available for 2 and 3 man room)"]
              }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("input", {
                type: "radio",
                className: "btn-check",
                name: "select-roommate-outlined",
                id: "success-select-roommate-outlined",
                autocomplete: "off",
                onChange: e => setSelectRoommateState(!selectRoommateState)
              }), /*#__PURE__*/jsx_runtime.jsx("label", {
                className: `btn btn-danger btn-health ${selectRoommateState ? "" : "btn-health-false"}`,
                for: "success-select-roommate-outlined",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "d-flex justify-content-around",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "mb-0 text-dark pe-4",
                    children: "Yes"
                  }), selectRoommateState ? /*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "eclipse-box mb-0",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/eclipse.png",
                      width: "15",
                      alt: "eclipse"
                    })
                  }) : /*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "eclipse-box mb-0",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/eclipse-light.png",
                      width: "15",
                      alt: "eclipse"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime.jsx("input", {
                type: "radio",
                className: "btn-check",
                name: "select-roommate-outlined",
                id: "danger-select-roommate-outlined",
                autocomplete: "off",
                onChange: e => setSelectRoommateState(!selectRoommateState)
              }), /*#__PURE__*/jsx_runtime.jsx("label", {
                className: `btn btn-danger btn-health ${selectRoommateState ? "btn-health-false" : ""}`,
                for: "danger-select-roommate-outlined",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "d-flex justify-content-around",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "mb-0 text-dark pe-4",
                    children: "No"
                  }), !selectRoommateState ? /*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "eclipse-box mb-0",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/eclipse.png",
                      width: "15",
                      alt: "eclipse"
                    })
                  }) : /*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "eclipse-box mb-0",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/eclipse-light.png",
                      width: "15",
                      alt: "eclipse"
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                for: "addname",
                className: "form-label login-form-label",
                children: /*#__PURE__*/jsx_runtime.jsx("b", {
                  children: "Add Name"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("input", {
                type: "text",
                className: "form-control form-control-lg",
                id: "addname",
                "aria-describedby": "addnameHelp",
                onChange: e => setRoommateNameState(e.target.value)
              })]
            })]
          }) : "", errorMessage ? /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-danger",
            children: errorMessage
          }) : "", /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "mb-3 text-center",
            children: /*#__PURE__*/jsx_runtime.jsx("button", {
              type: "submit",
              className: "btn btn-primary btn-lg btn-register mt-4",
              children: "Continue"
            })
          })]
        })
      })
    })]
  });
}

const mapStateToProps = state => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  setHealthCondition: setHealthCondition,
  setReport: setReport,
  setSelectRoommate: setSelectRoommate,
  setRoommateName: setRoommateName
};
/* harmony default export */ var provide_report = ((0,lib.connect)(mapStateToProps, mapDispatchToProps)(ProvideReport));

/***/ }),

/***/ 7777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

      const compMod = __webpack_require__(45329)

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
        page: "/provide-report",
        buildId: "h_UmUIGlEjDMrPgHkXuTN",
        escapedBuildId: "h_UmUIGlEjDMrPgHkXuTN",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"a5e7c3aec068b71e60dcfed050baaf02",previewModeSigningKey:"6a7ad9631f7c129e555fe9b0f37ab59a4623166ad9fc6efc10ba8e1e887551f8",previewModeEncryptionKey:"129bf860fcb72505aad63cd86e143d7e4580c51efa47c27b2f434ce2ff98316e"}
      })
      
    

/***/ }),

/***/ 25675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(26255)


/***/ }),

/***/ 41664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(16071)


/***/ }),

/***/ 67294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(72408);
} else {}


/***/ }),

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

"use strict";
module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,9008,573,6255,1163,5075,6431,1428,2739,422,5284], function() { return __webpack_require__(7777); })
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
/******/ 			4594: 1
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
/******/ 			__webpack_require__.e(573);
/******/ 			__webpack_require__.e(6255);
/******/ 			__webpack_require__.e(1163);
/******/ 			__webpack_require__.e(5075);
/******/ 			__webpack_require__.e(6431);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
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