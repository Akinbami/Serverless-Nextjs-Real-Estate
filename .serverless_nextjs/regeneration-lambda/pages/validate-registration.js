/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 99152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ validate_registration; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(87428);
// EXTERNAL MODULE: ./components/RegistrationHeader.js
var RegistrationHeader = __webpack_require__(23365);
// EXTERNAL MODULE: ./node_modules/react-google-recaptcha/lib/index.js
var lib = __webpack_require__(40944);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
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
  type: types/* SET_EMAIL */.eh,
  payload: email
});
const setPassword = password => ({
  type: types/* SET_PASSWORD */.cg,
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
  type: types/* SET_MATRIC */.$y,
  payload: matric
});
const setPicture = file => ({
  type: t.SET_PICTURE,
  payload: file
});
const setHealthCondition = status => ({
  type: t.SET_HEALTH_CONDITION,
  payload: status
});
const setReport = report => ({
  type: t.SET_REPORT,
  payload: report
});
const setSelectRoommate = status => ({
  type: t.SET_SELECT_ROOMMATE,
  payload: status
});
const setRoommateName = name => ({
  type: t.SET_ROOMMATE_NAME,
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
  type: types/* SET_USER */.QE,
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
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(15553);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./pages/validate-registration.js












 // const APPLICATION_API = "http://127.0.0.1:5559";

const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function ValidateRegistration(props) {
  const {
    0: activateButton,
    1: setActivateButton
  } = (0,react.useState)(null);
  const {
    0: email,
    1: setEmailState
  } = (0,react.useState)(null);
  const {
    0: password,
    1: setPasswordState
  } = (0,react.useState)(null);
  const {
    0: matric,
    1: setMatricState
  } = (0,react.useState)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react.useState)(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react.useState)(null);
  const {
    0: invalidPassword,
    1: setInvalidPassword
  } = (0,react.useState)(false);
  const {
    setEmail,
    setPassword,
    setMatric,
    setUser
  } = props;
  const {
    room_type,
    room_type_year
  } = props.userInfo;
  (0,react.useEffect)(() => {
    // check if user is logged in
    if (!room_type || !room_type_year) {
      router.default.push("/");
    } // Always do navigations after the first render

  }, []); // const router = useRouter;

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password, matric, APPLICATION_API);

    if (!email || !password || !matric) {
      setErrorMessage("Please complete form and try again.");
      setIsLoading(false);
    } else {
      setEmail(email);
      setPassword(password);
      setMatric(matric);
      const req_data = {
        "email": email,
        "password": password,
        "matric": matric
      }; // save to backend

      fetch(APPLICATION_API + "/users", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_data)
      }).then(response => response.json()).then(data => {
        console.log(data);
        setIsLoading(false);

        if (data.error) {
          setIsLoading(false);
          setErrorMessage(data.message);
        } else {
          console.log(data);

          if (data.message == "user already exist") {
            setIsLoading(false);
            setErrorMessage(data.message);
          } else {
            setUser(data.data);
            router.default.push("/complete-details");
            setIsLoading(false);
          }
        }
      }).catch(error => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
    }
  };

  const recaptchaRef = /*#__PURE__*/(0,react.createRef)();

  const onReCAPTCHAChange = captchaCode => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }

    setActivateButton(true); // Reset the reCAPTCHA so that it can be executed again if user 
    // submits another email.

    recaptchaRef.current.reset();
  };

  const validatePassword = e => {
    e.preventDefault();

    if (e.target.value != password) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx(RegistrationHeader/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "login-section",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-md-8",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "login-form-card text-center",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "login-form-card-inner mx-auto",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "register-header",
                children: "Start The POD lifestyle"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "login-instruction py-3 mx-auto",
                children: "Please set up your portal account below"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "text-left",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mb-3",
                    children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                      for: "email",
                      className: "form-label registration-form-label",
                      children: "Email Address"
                    }), /*#__PURE__*/jsx_runtime.jsx("input", {
                      type: "email",
                      className: "form-control form-control-lg",
                      id: "email",
                      "aria-describedby": "usernameHelp",
                      placeholder: "peter.ade@gmail.com",
                      onChange: e => setEmailState(e.target.value),
                      required: true
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mb-3",
                    children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                      for: "exampleInputPassword1",
                      className: "form-label registration-form-label",
                      children: "Create Password"
                    }), /*#__PURE__*/jsx_runtime.jsx("input", {
                      type: "password",
                      className: "form-control form-control-lg",
                      id: "exampleInputPassword1",
                      placeholder: "**************",
                      onChange: e => setPasswordState(e.target.value),
                      required: true
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mb-3",
                    children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                      for: "exampleInputPassword2",
                      className: "form-label registration-form-label",
                      children: "Confirm Password"
                    }), /*#__PURE__*/jsx_runtime.jsx("input", {
                      type: "password",
                      className: "form-control form-control-lg",
                      id: "exampleInputPassword2",
                      placeholder: "**************",
                      onChange: validatePassword,
                      required: true
                    }), invalidPassword ? /*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "invalid-password-message text-danger",
                      children: "invalid password"
                    }) : ""]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mb-3",
                    children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                      for: "matric",
                      className: "form-label registration-form-label",
                      children: "School Matric Number"
                    }), /*#__PURE__*/jsx_runtime.jsx("input", {
                      type: "text",
                      className: "form-control form-control-lg",
                      id: "matric",
                      "aria-describedby": "usernameHelp",
                      placeholder: "",
                      onChange: e => setMatricState(e.target.value),
                      required: true
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx(lib/* default */.ZP, {
                    ref: recaptchaRef,
                    sitekey: "6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8",
                    onChange: onReCAPTCHAChange
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "d-flex justify-content-between",
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "mb-3 form-check",
                      children: [/*#__PURE__*/jsx_runtime.jsx("input", {
                        type: "checkbox",
                        className: "form-check-input",
                        id: "exampleCheck1"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
                        className: "form-check-label login-instruction",
                        for: "exampleCheck1",
                        children: ["I have read and accept the ", /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "navbar-text-action-link",
                          children: "Terms of Use "
                        }), "&", /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "https://www.thepodliving.com/privacy-policy",
                          target: "_blank",
                          className: "navbar-text-action-link",
                          children: "Privacy Policy"
                        }), " "]
                      })]
                    })
                  })]
                }), errorMessage ? /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "text-danger",
                  children: errorMessage
                }) : "", !activateButton ? /*#__PURE__*/jsx_runtime.jsx("button", {
                  className: "btn btn-light btn-lg btn-deactivate w-100 mt-4",
                  disabled: true,
                  children: "Continue"
                }) : isLoading ? /*#__PURE__*/jsx_runtime.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary btn-lg btn-register w-100 mt-4",
                  disabled: true,
                  children: "Loading..."
                }) : /*#__PURE__*/jsx_runtime.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary btn-lg btn-register w-100 mt-4",
                  children: "Create an account"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "login-instruction-4 text-left",
                  children: "To confirm your room, you will need your credit/debit card or be able to make a direct bank account transfer for your allocation advance payment. "
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "apply-room-card ps-2",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-start",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "mb-0",
                children: /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/Bed.png",
                  width: "50",
                  alt: "bedroom icon"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "apply-room-text",
                children: "Manage accomodation"
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "text-center pt-4",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "login-instruction-2",
              children: "Rooms available"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "col-4",
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/cutlery.png",
                  width: "70",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "login-instruction-3",
                  children: "One-man"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "col-4",
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/parking.png",
                  width: "70",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "login-instruction-3",
                  children: "Two-man"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "col-4",
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  className: "room-deactivated",
                  src: "/img/parking-2.png",
                  width: "70",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "login-instruction-3",
                  children: "Four-man"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "register-requirements-header pt-3",
              children: "Required Registration Documents"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "register-requirements-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "pe-1",
                children: /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/req-icon.png",
                  width: "15",
                  alt: "requirement icon"
                })
              }), "School Matric Number"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "register-requirements-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "pe-1",
                children: /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/req-icon.png",
                  width: "15",
                  alt: "requirement icon"
                })
              }), "Passport Photograph"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "register-requirements-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "pe-1",
                children: /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/req-icon.png",
                  width: "15",
                  alt: "requirement icon"
                })
              }), "Signed Agreement"]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Footer/* default */.Z, {})]
  });
}

const mapStateToProps = state => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  setEmail: setEmail,
  setPassword: setPassword,
  setMatric: setMatric,
  setUser: setUser
};
/* harmony default export */ var validate_registration = ((0,react_redux_lib.connect)(mapStateToProps, mapDispatchToProps)(ValidateRegistration));

/***/ }),

/***/ 71016:
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

      const compMod = __webpack_require__(99152)

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
        page: "/validate-registration",
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,9008,5745,1073,5855,6071,1163,5075,6529,944,1428,2739,422,5284,5553,3365], function() { return __webpack_require__(71016); })
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
/******/ 			7845: 1
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
/******/ 			__webpack_require__.e(944);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
/******/ 			__webpack_require__.e(5553);
/******/ 			__webpack_require__.e(3365);
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