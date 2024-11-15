/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 87637:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65988);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9008);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87428);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21331);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var number_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31955);
/* harmony import */ var number_formatter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(number_formatter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21727);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45408);
/* harmony import */ var _components_Sidbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85789);












 // import ApplicationsTable from '../../components/ApplicationsTable';


javascript_time_ago__WEBPACK_IMPORTED_MODULE_10___default().addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_11__);
const timeAgo = new (javascript_time_ago__WEBPACK_IMPORTED_MODULE_10___default())('en-US'); // const APPLICATION_API = "http://127.0.0.1:5559";

const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function OccupantDetails(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const {
    0: successMessage,
    1: setSuccessMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const {
    0: firstnameState,
    1: setFirstnameState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: lastnameState,
    1: setLastnameState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: dobState,
    1: setDOBState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: genderState,
    1: setGenderState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: phoneState,
    1: setPhoneState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: addressState,
    1: setAddressState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: guarantorNameState,
    1: setGuarantorNameState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: guarantorPhoneState,
    1: setGuarantorPhoneState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: guarantorAddressState,
    1: setGuarantorAddressState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: deleteModal,
    1: setDeleteModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: editModal,
    1: setEditModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: roomEditModal,
    1: setRoomEditModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);

  const toggleDelete = () => setDeleteModal(!deleteModal);

  const toggleEdit = () => setEditModal(!editModal);

  const toggleRoomEdit = () => setRoomEditModal(!roomEditModal);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const application = props.application.data;
  const user = props.user;
  const token = props.token;

  const handleDelete = e => {
    e.preventDefault();
    setIsLoading(true);
    fetch(APPLICATION_API + `/applications/${application._id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "authorization": 'Bearer ' + token
      },
      body: JSON.stringify({})
    }).then(response => response.json()).then(data => {
      console.log(data);
      setIsLoading(false);

      if (data.error) {
        setIsLoading(false);
        setErrorMessage(data.message);
      } else {
        setSuccessMessage(data.message);
        router.push("/admin/dashboard"); // setIsLoading(false)
      }
    }).catch(error => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    if (firstnameState && firstnameState == guarantorNameState || lastnameState && lastnameState == guarantorNameState) {
      setGuarantorNameState(firstnameState || lastnameState);
    } else if (phoneState && phoneState == guarantorPhoneState) {
      setGuarantorPhoneState(phoneState);
    } else {
      console.log("continue");
      const req_data = {
        "firstname": firstnameState || user.profile.firstname,
        "lastname": lastnameState || user.profile.lastname,
        "gender": genderState || user.profile.gender,
        "dob": dobState || user.profile.dob,
        "phone": phoneState || user.profile.phone,
        "address": addressState || user.profile.address,
        "guarantor": {
          "name": guarantorNameState || user.profile.guarantor.name,
          "phone": guarantorPhoneState || user.profile.guarantor.phone,
          "address": guarantorAddressState || user.profile.guarantor.address
        }
      }; // save to backend

      console.log("req data :", req_data); // let BACKEND_API;
      // if(user.profile){
      //     BACKEND_API = APPLICATION_API+ `/profiles/${user._id}`
      // }else{
      //     BACKEND_API = APPLICATION_API+ `/users/${user._id}/profile`
      // }

      fetch(APPLICATION_API + `/users/${user._id}/profile`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "authorization": 'Bearer ' + token
        },
        body: JSON.stringify(req_data)
      }).then(response => response.json()).then(data => {
        console.log(data);
        setIsLoading(false);

        if (data.error) {
          setIsLoading(false);
          setErrorMessage(data.message);
        } else {
          // setUser(data.data)
          setIsLoading(false);
          router.reload(window.location.pathname); // router.push(`/admin/occupants/${user.profile._id}`)
        }
      }).catch(error => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
    }
  };

  const handleEditRoom = e => {
    e.preventDefault();
    setIsLoading(true);
    console.log("continue");
    const req_data = {
      "room_number": e.target.room_number.value || application.room.number,
      "roommate_name": e.target.roommate_name ? e.target.roommate_name.value : application.roommate_name
    }; // save to backend

    console.log("req data :", req_data);
    fetch(APPLICATION_API + `/applications/${application._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "authorization": 'Bearer ' + token
      },
      body: JSON.stringify(req_data)
    }).then(response => response.json()).then(data => {
      console.log(data);
      setIsLoading(false);

      if (data.error) {
        setIsLoading(false);
        setErrorMessage(data.message);
      } else {
        // setUser(data.data)
        setIsLoading(false);
        router.reload(window.location.pathname); // router.push(`/admin/occupants/${user.profile._id}`)
      }
    }).catch(error => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_head__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        href: "/css/sidebar.css",
        rel: "stylesheet",
        className: "jsx-4262498705"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-4262498705" + " " + "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-4262498705" + " " + "col-md-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidbar__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-4262498705" + " " + "col-md-10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-4262498705" + " " + "admin-dashboard-content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-4262498705" + " " + "d-flex justify-content-between",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "jsx-4262498705" + " " + "admin-dashboard-content-header text-capitalize",
              children: [user.profile.firstname, " ", user.profile.lastname]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4262498705" + " " + "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "jsx-4262498705" + " " + "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4262498705" + " " + "admin-dashboard-details-card",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "mb-5",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "admin-dashboard-details-header mb-0",
                    children: "Personal details"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "jsx-4262498705" + " " + "mt-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Your name"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right text-capitalize",
                      children: [user.profile.firstname, " ", user.profile.lastname]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Matric Number"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.matric
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Gender"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.gender
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Date of Birth"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.dob
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Phone Number"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.phone
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Email Address"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.email
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Contact Address"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: [user.profile.address, "."]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "mb-5",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "admin-dashboard-details-header mb-0",
                    children: "Parent/Guardian"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "jsx-4262498705" + " " + "mt-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Name"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.guarantor ? user.profile.guarantor.name : ""
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Phone Number"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.guarantor ? user.profile.guarantor.phone : ""
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Address"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.guarantor ? user.profile.guarantor.address : ""
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "mb-5",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "admin-dashboard-details-header mb-0",
                    children: "Room Information"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "jsx-4262498705" + " " + "mt-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Room Type"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: [application.room_type, " Room"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Duration"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: [application.room_type_year, " Year(s)"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Any Health Condition?"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: application.health_condition ? "YES" : "NO"
                    })]
                  }), application.health_condition ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Health Condition"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: application.report
                    })]
                  }) : "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Want to Select Your Roommate?"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: application.select_roommate ? "YES" : "NO"
                    })]
                  }), application.select_roommate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Roommate Name"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right text-capitalized",
                      children: application.roommate_name
                    })]
                  }) : ""]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "jsx-4262498705" + " " + "col-md-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4262498705" + " " + "admin-dashboard-details-card mb-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-4262498705" + " " + "admin-dashboard-details-header text-muted mb-4",
                  children: "Account Timeline"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "d-flex justify-content-start mb-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "mb-0 pt-3",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      src: "/img/timeline-success.png",
                      width: "30",
                      alt: "timeline",
                      className: "jsx-4262498705"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "ps-2",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-time",
                      children: "May 30 - 12:06pm"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-text",
                      children: "Email Confirmed"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-action",
                      children: "Resend verification"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "d-flex justify-content-start mb-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "mb-0 pt-3",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      src: "/img/timeline-success.png",
                      width: "30",
                      alt: "timeline",
                      className: "jsx-4262498705"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "ps-2",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-time",
                      children: "May 30 - 12:06pm"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-text",
                      children: "Payment Received"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-action",
                      children: "Download receipt"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "d-flex justify-content-start mb-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "mb-0 pt-3",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      src: "/img/timeline-success.png",
                      width: "30",
                      alt: "timeline",
                      className: "jsx-4262498705"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "ps-2",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-time",
                      children: "May 30 - 12:06pm"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-text",
                      children: "Agreement Signed"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-action",
                      children: "Download Agreement"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "d-flex justify-content-start mb-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-4262498705" + " " + "mb-0 pt-1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      src: "/img/timeline-success.png",
                      width: "30",
                      alt: "timeline",
                      className: "jsx-4262498705"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "ps-2",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-time",
                      children: "May 30 - 12:06pm"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "timeline-text",
                      children: "Room asigned"
                    })]
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-4262498705" + " " + "admin-dashboard-details-card",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-4262498705" + " " + "mb-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "admin-dashboard-details-header mb-0",
                      children: "Apartment Information"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      onClick: toggleRoomEdit,
                      className: "jsx-4262498705" + " " + "confirm-header-left room-edit",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "jsx-4262498705" + " " + "pe-1",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                          src: "/img/edit-icon.png",
                          alt: "edit icon",
                          className: "jsx-4262498705"
                        })
                      }), "Edit"]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__/* .Modal */ .u_, {
                    isOpen: roomEditModal,
                    toggle: toggleRoomEdit,
                    centered: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "jsx-4262498705" + " " + "modal-dialog m-0",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-4262498705" + " " + "modal-content p-2",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                          onSubmit: handleEditRoom,
                          className: "jsx-4262498705",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-4262498705" + " " + "mb-3",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                              for: "room_number",
                              className: "jsx-4262498705" + " " + "form-label login-form-label",
                              children: "Room Number"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                              type: "text",
                              id: "room_number",
                              name: "room_number",
                              defaultValue: application.room.number,
                              "aria-describedby": "roomNumberHelp",
                              className: "jsx-4262498705" + " " + "form-control"
                            })]
                          }), application.select_roommate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-4262498705" + " " + "mb-3",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                              for: "roommate_name",
                              className: "jsx-4262498705" + " " + "form-label login-form-label",
                              children: "Roommate Name"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                              type: "text",
                              id: "roommate_name",
                              name: "roommate_name",
                              defaultValue: application.roommate_name,
                              "aria-describedby": "roomNumberHelp",
                              className: "jsx-4262498705" + " " + "form-control"
                            })]
                          }) : "", errorMessage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "jsx-4262498705" + " " + "text-danger",
                            children: errorMessage
                          }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-4262498705" + " " + "mb-3 text-center",
                            children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                              type: "submit",
                              disabled: true,
                              className: "jsx-4262498705" + " " + "btn btn-primary btn-lg btn-register mt-4",
                              children: "Loading..."
                            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                              type: "submit",
                              className: "jsx-4262498705" + " " + "btn btn-primary btn-lg btn-register mt-4",
                              children: "Save"
                            })
                          })]
                        })
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "jsx-4262498705" + " " + "mt-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Apartment Information"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right text-capitalize",
                      children: application.room ? application.room.number : ""
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Room type"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: application.room ? application.room.type : ""
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Rent"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: application.room ? "₦" + number_formatter__WEBPACK_IMPORTED_MODULE_8___default()("#,##0.####", parseInt(application.amount / 100) + " per session") : ""
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "d-flex justify-content-between  mb-1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-left",
                      children: "Address"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "jsx-4262498705" + " " + "confirm-text-right",
                      children: user.profile.address
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4262498705" + " " + "action-buttons mx-auto gap-2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                  type: "button",
                  onClick: toggleEdit,
                  className: "jsx-4262498705" + " " + "btn btn-danger btn-register",
                  children: "Edit"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__/* .Modal */ .u_, {
                  isOpen: editModal,
                  toggle: toggleEdit,
                  centered: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-4262498705" + " " + "modal-dialog m-0",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "jsx-4262498705" + " " + "modal-content p-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit,
                        className: "jsx-4262498705",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "firstname",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "First Name"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "firstname",
                            defaultValue: user.profile.firstname,
                            "aria-describedby": "firstnameHelp",
                            onChange: e => setFirstnameState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "lastname",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Last Name"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "lastname",
                            defaultValue: user.profile.lastname,
                            "aria-describedby": "lastnameHelp",
                            onChange: e => setLastnameState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "gender",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Gender"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            "aria-label": "Default select example",
                            defaultValue: user.profile.gender,
                            onChange: e => setGenderState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-select",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              selected: true,
                              className: "jsx-4262498705",
                              children: "--select--"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "Male",
                              className: "jsx-4262498705",
                              children: "Male"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                              value: "Female",
                              className: "jsx-4262498705",
                              children: "Female"
                            })]
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "dob",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Date of Birth"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "date",
                            id: "dob",
                            "aria-describedby": "dobHelp",
                            defaultValue: user.profile.dob,
                            onChange: e => setDOBState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "phone",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Phone Number"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "phone",
                            "aria-describedby": "phoneHelp",
                            defaultValue: user.profile.phone,
                            onChange: e => setPhoneState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "address",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Residential Address"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            id: "address",
                            rows: "4",
                            defaultValue: user.profile.address,
                            onChange: e => setAddressState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                          className: "jsx-4262498705" + " " + "guarantor-header pt-5",
                          children: "Parent/Guarantor Details"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "name",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Name"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "name",
                            "aria-describedby": "nameHelp",
                            defaultValue: user.profile.guarantor ? user.profile.guarantor.name : "",
                            onChange: e => setGuarantorNameState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          }), firstnameState && firstnameState == guarantorNameState || lastnameState && lastnameState == guarantorNameState ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: "jsx-4262498705" + " " + "text-danger",
                            children: "you cant use the same Name with your guardian"
                          }) : ""]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "guarantor_phone",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Phone Number"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "tel",
                            id: "guarantor_phone",
                            "aria-describedby": "guarantor_phoneHelp",
                            defaultValue: user.profile.guarantor ? user.profile.guarantor.phone : "",
                            onChange: e => setGuarantorPhoneState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          }), phoneState && phoneState == guarantorPhoneState ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: "jsx-4262498705" + " " + "text-danger",
                            children: "you cant use the same phone number with your guardian"
                          }) : ""]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "address",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Address"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            id: "address",
                            rows: "4",
                            defaultValue: user.profile.guarantor ? user.profile.guarantor.address : "",
                            onChange: e => setGuarantorAddressState(e.target.value),
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                          className: "jsx-4262498705" + " " + "text-danger",
                          children: errorMessage
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                          className: "jsx-4262498705" + " " + "mb-3 text-center",
                          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            disabled: true,
                            className: "jsx-4262498705" + " " + "btn btn-primary btn-lg btn-register mt-4",
                            children: "Loading..."
                          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "jsx-4262498705" + " " + "btn btn-primary btn-lg btn-register mt-4",
                            children: "Save"
                          })
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                  type: "button",
                  onClick: toggleDelete,
                  className: "jsx-4262498705" + " " + "btn btn-danger btn-register ms-2",
                  children: "Delete"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__/* .Modal */ .u_, {
                  isOpen: deleteModal,
                  toggle: toggleDelete,
                  centered: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-4262498705" + " " + "modal-dialog m-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "jsx-4262498705" + " " + "modal-content",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4262498705" + " " + "modal-header",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                          id: "exampleModalLabel",
                          className: "jsx-4262498705" + " " + "modal-title",
                          children: ["Are you sure you want to delete Occupant ", user.profile.firstname, " ", user.profile.lastname]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                          type: "button",
                          onClick: toggleDelete,
                          className: "jsx-4262498705" + " " + "btn-close"
                        })]
                      }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-4262498705" + " " + "d-flex justify-content-center my-3",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                          role: "status",
                          className: "jsx-4262498705" + " " + "spinner-border",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "jsx-4262498705" + " " + "visually-hidden",
                            children: "Loading..."
                          })
                        })
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4262498705" + " " + "text-center my-3",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                          type: "button",
                          onClick: toggleDelete,
                          className: "jsx-4262498705" + " " + "btn btn-warning m-2",
                          children: "Cancel"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                          type: "button",
                          onClick: handleDelete,
                          className: "jsx-4262498705" + " " + "btn btn-danger m-2",
                          children: "Delete"
                        })]
                      })]
                    })
                  })
                })]
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: "4262498705",
      children: [".modal-header.jsx-4262498705{background:#EEEEEE;border-radius:5px 5px 0px 0px;}", ".modal-title.jsx-4262498705{font-family:Objektiv Mk2;font-style:normal;font-weight:bold;font-size:1rem;line-height:30px;color:#585858;}"]
    })]
  });
}

async function getServerSideProps(ctx) {
  const {
    req,
    res,
    query
  } = ctx;
  const {
    cookies
  } = req;
  const token = cookies["pod-token"];
  const api_res = await fetch(APPLICATION_API + `/applications/${query.id}`, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + token
    }
  }); // Call an external API endpoint to get posts

  const data = await api_res.json();
  console.log("application", data);
  let user;

  if (data.error) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/login'
      }
    };
  } else {
    // getting user profile
    console.log(data.data);
    const user_response = await fetch(APPLICATION_API + `/users/${data.data.user._id}`, {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + token
      }
    });
    user = await user_response.json();
  } // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time


  return {
    props: {
      application: data,
      user: user.data,
      token
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (OccupantDetails);

/***/ }),

/***/ 3546:
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

      const compMod = __webpack_require__(87637)

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
        page: "/admin/occupants/[id]",
        buildId: "h_UmUIGlEjDMrPgHkXuTN",
        escapedBuildId: "h_UmUIGlEjDMrPgHkXuTN",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"a5e7c3aec068b71e60dcfed050baaf02",previewModeSigningKey:"6a7ad9631f7c129e555fe9b0f37ab59a4623166ad9fc6efc10ba8e1e887551f8",previewModeEncryptionKey:"129bf860fcb72505aad63cd86e143d7e4580c51efa47c27b2f434ce2ff98316e"}
      })
      
    

/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(57947)


/***/ }),

/***/ 11163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(72441)


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,7424,5745,1073,5855,6071,9781,4479,3966,1955,5408,1428,2739,422,5284,5789], function() { return __webpack_require__(3546); })
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
/******/ 			5237: 1
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
/******/ 					installChunk(require("../../../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(5745);
/******/ 			__webpack_require__.e(1073);
/******/ 			__webpack_require__.e(5855);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(9781);
/******/ 			__webpack_require__.e(4479);
/******/ 			__webpack_require__.e(3966);
/******/ 			__webpack_require__.e(1955);
/******/ 			__webpack_require__.e(5408);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
/******/ 			__webpack_require__.e(5789);
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