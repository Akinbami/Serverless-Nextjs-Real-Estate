/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 55405:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_confirm; }
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
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-paystack/dist/index.js
var dist = __webpack_require__(35950);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/number-formatter/lib/format.js
var format = __webpack_require__(31955);
var format_default = /*#__PURE__*/__webpack_require__.n(format);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
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
  type: types/* SET_PAID */.AB,
  payload: status
});
const setAmountPaid = amount => ({
  type: types/* SET_AMOUNT_PAID */.Xx,
  payload: amount
});
const setPaymentReference = ref => ({
  type: types/* SET_PAYMENT_REFERENCE */.WB,
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
  type: types/* SET_ROOM */.wq,
  payload: room
});
const resetState = data => ({
  type: t.RESET,
  payload: data
});
;// CONCATENATED MODULE: ./pages/confirm.js















function Confirm(props) {
  const router = (0,next_router.useRouter)();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react.useState)(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react.useState)(false);
  const {
    0: paidState,
    1: setPaidState
  } = (0,react.useState)(false);
  const {
    0: reference,
    1: setReference
  } = (0,react.useState)(false);
  const {
    0: acceptTerms,
    1: setAcceptTerms
  } = (0,react.useState)(false);
  const {
    0: load,
    1: setLoad
  } = (0,react.useState)(false); // setErrorMessage(error.message)
  // const APPLICATION_API = "http://127.0.0.1:5559";

  const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";
  const {
    firstname,
    gender,
    lastname,
    email,
    phone,
    dob,
    address,
    password,
    room_type,
    room_type_year,
    matric,
    picture,
    health_condition,
    report,
    select_roommate,
    roommate_name,
    guarantor_name,
    guarantor_phone,
    guarantor_address,
    user
  } = props.userInfo;
  const {
    setPaid,
    setAmountPaid,
    setPaymentReference,
    setRoom
  } = props;
  console.log("user info ", props.userInfo);
  (0,react.useEffect)(() => {
    // check if user is logged in
    if (!user) {
      next_router.default.push("/");
    } else {
      setLoad(true);
    } // Always do navigations after the first render

  }, []);
  const room_type_price = room_type == "1 Man" ? 850000 : room_type == "2 Man" ? 750000 : 140000;
  const total = (parseInt(room_type_price) + 60000) * parseInt(room_type_year) * 100;
  console.log("room_type", room_type, room_type_price, room_type_year);
  const config = {
    reference: new Date().getTime(),
    email: email,
    amount: total,
    publicKey: 'pk_test_b6dbfad5464db9cd4d7b26eea552fc537fa0a83d'
  };
  const initializePayment = (0,dist/* usePaystackPayment */.NL)(config); // you can call this function anything

  const onSuccess = data => {
    // Implementation for whatever you want to do with reference and after success call.
    setPaidState(true);
    setReference(data.reference);
  }; // you can call this function anything


  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    console.log(APPLICATION_API); //   create application

    const req_data = {
      room_type,
      room_type_year,
      health_condition,
      report,
      select_roommate,
      roommate_name,
      paid: true,
      payment_reference: reference,
      amount: total
    };
    axios_default().post(APPLICATION_API + `/users/${props.userInfo.user._id}/application`, req_data, {// receive two parameter endpoint url ,form data 
    }).then(res => {
      // then print response status
      console.log("application response", res);
      setIsLoading(false);

      if (res.data.error) {
        setIsLoading(false);
        setErrorMessage(res.data.message);
      } else {
        setIsLoading(false);
        setPaid(true);
        setAmountPaid(total / 100);
        setPaymentReference(reference);
        setRoom(res.data.data.room);
        router.push("/payment-confirmed");
      }
    }).catch(err => {
      console.log("error", err);
      setIsLoading(false);
    });
  };

  console.log("terms", acceptTerms);
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: load ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
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
                    className: "four primary-color"
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "five no-color"
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "progress-bar progress-bar-warning",
                    style: {
                      width: "87%"
                    }
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "p-2 bd-highlight progress-start-text",
              children: "80%"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "registration-banner",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "registration-banner-content",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "banner-header mx-auto",
            children: "Confirm your information"
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "banner-text mx-auto",
            children: "Verify that the information you entered is correct before you proceed to payment"
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "registration-card mx-auto mb-5 px-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "registration-card-inner mx-auto",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "confirm-section",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-header-right",
                children: "Your details"
              }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                href: "/complete-details",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  className: "confirm-header-left",
                  children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "pe-1",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/edit-icon.png",
                      alt: "edit icon"
                    })
                  }), "Edit"]
                })
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("hr", {
              className: "mt-0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Your name"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "confirm-text-right text-capitalize",
                children: [firstname || user.profile.firstname, " ", lastname || user.profile.lastname]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Matric Number"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: matric
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Gender"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: gender || user.profile.gender
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Date of Birth"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: dob || user.profile.dob
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Phone Number"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: phone || user.profile.phone
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Email Address"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: email
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Contact Address"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "confirm-text-right",
                children: [address || user.profile.address, "."]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "confirm-section",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-header-right",
                children: "Parent/Guardian"
              }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                href: "/complete-details",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  className: "confirm-header-left",
                  children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "pe-1",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/edit-icon.png",
                      alt: "edit icon"
                    })
                  }), "edit"]
                })
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("hr", {
              className: "mt-0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Name"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: guarantor_name || user.profile.guarantor.name
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Phone Number"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: guarantor_phone || user.profile.guarantor.phone
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Address"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: guarantor_address || user.profile.guarantor.address
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "confirm-section",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-header-right",
                children: "Room Information"
              }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                href: "/provide-report",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  className: "confirm-header-left",
                  children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "pe-1",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/img/edit-icon.png",
                      alt: "edit icon"
                    })
                  }), "edit"]
                })
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("hr", {
              className: "mt-0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Room Type"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: room_type
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Duration"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: room_type_year
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Any Health Condition?"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: health_condition ? "YES" : "NO"
              })]
            }), health_condition ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Health Condition"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: report
              })]
            }) : "", /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Want to Select Your Roommate?"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: select_roommate ? "YES" : "NO"
              })]
            }), select_roommate ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-left",
                children: "Roommate Name"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "confirm-text-right",
                children: roommate_name
              })]
            }) : ""]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex justify-content-between",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "confirm-header-right text-dark",
              children: "License Fee"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "confirm-header-right",
              children: ["\u20A6", format_default()("#,##0.####", parseInt(room_type_price)), "/year"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex justify-content-between",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "confirm-header-right text-dark",
              children: "Caution Fee"
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "confirm-header-right",
              children: "\u20A660,000/year"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "text-center mt-4",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "confirm-total-header mb-0",
              children: "TOTAL COST"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "confirm-total-text",
              children: ["\u20A6", format_default()("#,##0.####", parseInt(room_type_price) + 60000), /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "confirm-header-left",
                children: "/year"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "form-check",
            children: [/*#__PURE__*/jsx_runtime.jsx("input", {
              className: "form-check-input",
              type: "checkbox",
              onChange: e => setAcceptTerms(e.target.checked),
              id: "terms"
            }), /*#__PURE__*/jsx_runtime.jsx("label", {
              className: "form-check-label confirm-terms-text",
              htmlFor: "flexCheckDefault",
              children: "I agree that the information provided is accurate and agree to the terms and conditions of  The Pod Living"
            })]
          }), errorMessage ? /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-danger",
            children: errorMessage
          }) : "", !acceptTerms ? /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "mb-3 text-center",
            children: /*#__PURE__*/jsx_runtime.jsx("button", {
              className: "btn btn-primary btn-lg btn-register mt-4 px-0",
              disabled: true,
              children: "Proceed to Payment"
            })
          }) : /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "mb-3 text-center",
            children: paidState ? /*#__PURE__*/jsx_runtime.jsx("button", {
              className: "btn btn-primary btn-lg btn-register mt-4 px-0",
              onClick: handleSubmit,
              children: "Payment Made, Continue"
            }) : isLoading ? /*#__PURE__*/jsx_runtime.jsx("button", {
              className: "btn btn-primary btn-lg btn-register mt-4 px-0",
              disabled: true,
              children: "Processing..."
            }) : /*#__PURE__*/jsx_runtime.jsx("button", {
              className: "btn btn-primary btn-lg btn-register mt-4 px-0",
              onClick: () => {
                initializePayment(onSuccess, onClose);
              },
              children: "Proceed to Payment"
            })
          })]
        })
      })]
    }) : ""
  });
}

const mapStateToProps = state => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  setPaid: setPaid,
  setAmountPaid: setAmountPaid,
  setPaymentReference: setPaymentReference,
  setRoom: setRoom
};
/* harmony default export */ var pages_confirm = ((0,lib.connect)(mapStateToProps, mapDispatchToProps)(Confirm));

/***/ }),

/***/ 56920:
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

      const compMod = __webpack_require__(55405)

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
        page: "/confirm",
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,9008,573,6255,5075,9781,6431,7472,1955,6388,9794,1428,2739,422,5284], function() { return __webpack_require__(56920); })
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
/******/ 			8161: 1
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
/******/ 			__webpack_require__.e(5075);
/******/ 			__webpack_require__.e(9781);
/******/ 			__webpack_require__.e(6431);
/******/ 			__webpack_require__.e(7472);
/******/ 			__webpack_require__.e(1955);
/******/ 			__webpack_require__.e(6388);
/******/ 			__webpack_require__.e(9794);
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