exports.id = 5874;
exports.ids = [5874];
exports.modules = {

/***/ 88210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65988);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var number_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31955);
/* harmony import */ var number_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(number_formatter__WEBPACK_IMPORTED_MODULE_4__);







const ProfileCard = props => {
  const user = props.user;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "jsx-1433680387" + " " + "mx-auto mb-5 px-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-1433680387" + " " + "registration-card-inner mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1433680387" + " " + "confirm-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-header-right",
              children: "Your details"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              href: "/complete-details",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-1433680387" + " " + "confirm-header-left",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "jsx-1433680387" + " " + "pe-1",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/edit-icon.png",
                    alt: "edit icon",
                    className: "jsx-1433680387"
                  })
                }), "Edit"]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
            className: "jsx-1433680387" + " " + "mt-0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Your name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right text-capitalize",
              children: [user.profile.firstname, " ", user.profile.lastname]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Matric Number"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.matric
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Gender"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.gender
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Date of Birth"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.dob
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Phone Number"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.phone
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Email Address"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.email
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Contact Address"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: [user.profile.address, "."]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1433680387" + " " + "confirm-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-header-right",
              children: "Parent/Guardian"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              href: "/complete-details",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-1433680387" + " " + "confirm-header-left",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "jsx-1433680387" + " " + "pe-1",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/edit-icon.png",
                    alt: "edit icon",
                    className: "jsx-1433680387"
                  })
                }), "edit"]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
            className: "jsx-1433680387" + " " + "mt-0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Name"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.guarantor.name
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Phone Number"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.guarantor.phone
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Address"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.guarantor.address
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1433680387" + " " + "confirm-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-header-right",
              children: "Room Information"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              href: "/provide-report",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-1433680387" + " " + "confirm-header-left",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "jsx-1433680387" + " " + "pe-1",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/edit-icon.png",
                    alt: "edit icon",
                    className: "jsx-1433680387"
                  })
                }), "edit"]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
            className: "jsx-1433680387" + " " + "mt-0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Room Type"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.room_type
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Duration"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.room_type_year
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Any Health Condition?"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.health_condition ? "YES" : "NO"
            })]
          }), user.profile.health_condition ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Health Condition"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.report
            })]
          }) : "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Want to Select Your Roommate?"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.select_roommate ? "YES" : "NO"
            })]
          }), user.profile.select_roommate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-1433680387" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-left",
              children: "Roommate Name"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1433680387" + " " + "confirm-text-right",
              children: user.profile.roommate_name
            })]
          }) : ""]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1433680387" + " " + "d-flex justify-content-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-1433680387" + " " + "confirm-header-right text-dark",
            children: "Room number"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "jsx-1433680387" + " " + "confirm-header-right",
            children: ["\u20A6", number_formatter__WEBPACK_IMPORTED_MODULE_4___default()("#,##0.####", parseInt(user.profile.current_room)), "/year"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1433680387" + " " + "d-flex justify-content-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-1433680387" + " " + "confirm-header-right text-dark",
            children: "Payment Plan"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "jsx-1433680387" + " " + "confirm-header-right",
            children: ["\u20A6", user.profile.current_payment_plan]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-1433680387" + " " + "mb-3 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "jsx-1433680387" + " " + "btn btn-primary btn-lg btn-download mt-4 px-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "img/download-icon.png",
              alt: "download icon",
              className: "jsx-1433680387"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
              className: "jsx-1433680387" + " " + "px-3",
              children: "Download receipt"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-1433680387" + " " + "mb-3 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "jsx-1433680387" + " " + "btn btn-primary btn-lg btn-register mt-4 px-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "img/Money.png",
              alt: "download icon",
              className: "jsx-1433680387"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
              className: "jsx-1433680387" + " " + "px-3",
              children: "Renew Rent"
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: "1433680387",
      children: [".ticket-link{-webkit-text-decoration:none;text-decoration:none;}"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProfileCard);

/***/ }),

/***/ 11163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(72441)


/***/ })

};
;